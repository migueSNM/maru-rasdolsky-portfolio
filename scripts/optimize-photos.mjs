// Turns a folder of original photos into web-sized copies plus small
// thumbnails for the masonry walls, and prints gallery entries for
// src/data/*.js.
//
//   npm run photos -- <input-dir> <output-dir>
//   npm run photos -- <dir> <dir> --thumbs-only   (keep the photos, add thumbnails)
//
// <output-dir> should live under public/, e.g. public/photos/teatro.
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const FULL_SIZE = 2000
const THUMB_WIDTH = 800
const PUBLIC_DIR = path.resolve('public')

const args = process.argv.slice(2)
const thumbsOnly = args.includes('--thumbs-only')
const [input, output] = args.filter((arg) => !arg.startsWith('--'))

if (!input || !output) {
  console.error('Usage: npm run photos -- <input-dir> <output-dir> [--thumbs-only]')
  process.exit(1)
}

// "12 2.JPG" -> "12-2"
function slug(file) {
  return path
    .parse(file)
    .name.toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function publicPath(file) {
  return path.relative(PUBLIC_DIR, path.resolve(file)).split(path.sep).join('/')
}

const files = (await readdir(input))
  .filter((file) => !file.startsWith('.') && /\.(jpe?g|png)$/i.test(file))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

await mkdir(path.join(output, 'thumbs'), { recursive: true })

const entries = []
for (const file of files) {
  const source = path.join(input, file)
  const name = slug(file)
  const thumb = path.join(output, 'thumbs', `${name}.webp`)

  await sharp(source).rotate().resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: 75 }).toFile(thumb)

  let src = source
  let size
  if (thumbsOnly) {
    size = await sharp(source).rotate().toBuffer({ resolveWithObject: true }).then((r) => r.info)
  } else {
    src = path.join(output, `${name}.webp`)
    size = await sharp(source).rotate()
      .resize({ width: FULL_SIZE, height: FULL_SIZE, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 }).toFile(src)
  }

  entries.push({ src: publicPath(src), thumb: publicPath(thumb), width: size.width, height: size.height })
  console.error(`✓ ${file}`)
}

console.log(JSON.stringify(entries, null, 2))
