import { useState, useEffect, useRef } from 'react'
import './Masonry.css'

const MIN_COLUMN_W = 200
const MAX_COLUMNS = 5
const GAP = 10
// Tile heights (as height / width) for portrait and unknown-size photos.
// Most of the photos share one shape, so giving tiles a mix of heights —
// from square to 2:3 — keeps the columns from lining up into rigid rows.
// The tile crops gently; the viewer always shows the whole photo.
const TILE_RATIOS = [1.5, 1.25, 1.44, 1.33, 1.5, 1.2, 1]

// Stable small hash, so a photo keeps the same tile shape between visits.
function hash(text) {
  let h = 0
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) | 0
  return Math.abs(h)
}

export function tileRatio(photo) {
  const natural = photo.width && photo.height ? photo.height / photo.width : null
  // Landscape photos keep their own shape.
  if (natural && natural < 1) return natural
  const ratio = TILE_RATIOS[hash(photo.src || photo.label || '') % TILE_RATIOS.length]
  return natural ? Math.min(ratio, natural) : ratio
}

// Each item drops into the currently shortest column, so the wall reads
// left to right and top to bottom in roughly the order it was given.
function buildColumns(items, count) {
  const columns = Array.from({ length: count }, () => ({ height: 0, entries: [] }))
  items.forEach((item, index) => {
    const ratio = tileRatio(item)
    const shortest = columns.reduce((a, b) => (b.height < a.height ? b : a))
    shortest.entries.push({ item, index, ratio })
    shortest.height += ratio
  })
  return columns
}

function useColumnCount(ref) {
  const [count, setCount] = useState(MAX_COLUMNS)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      const fit = Math.floor((entry.contentRect.width + GAP) / (MIN_COLUMN_W + GAP))
      setCount(Math.max(2, Math.min(MAX_COLUMNS, fit)))
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return count
}

// renderItem(item, index, ratio) must return a keyed element sized by `ratio`
// (height / width), e.g. via `style={{ aspectRatio: \`1 / ${ratio}\` }}`.
export default function Masonry({ items, renderItem }) {
  const ref = useRef(null)
  const count = useColumnCount(ref)

  return (
    <div ref={ref} className="masonry">
      {buildColumns(items, count).map((column, c) => (
        <div key={c} className="masonry__column">
          {column.entries.map(({ item, index, ratio }) => renderItem(item, index, ratio))}
        </div>
      ))}
    </div>
  )
}
