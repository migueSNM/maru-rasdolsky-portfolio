import { useState } from 'react'
import Lightbox from './Lightbox'
import { photoSrc } from '../lib/photoSrc'
import './PhotoGrid.css'

// Editorial rhythm: a pair, a triple, then a single photo with room around it.
const ROW_PATTERN = [2, 3, 1]
const ROW_NAMES = { 1: 'feature', 2: 'pair', 3: 'triple' }

// Groups photos into rows without reordering them, so the page and the
// lightbox always follow the same sequence. A photo with `layout: "feature"`
// or `layout: "wide"` always gets a row of its own.
function buildRows(photos) {
  const rows = []
  let current = []
  let step = 0

  function closeRow() {
    if (current.length) rows.push(current)
    current = []
  }

  photos.forEach((photo, index) => {
    const item = { photo, index }

    if (photo.layout === 'feature' || photo.layout === 'wide') {
      closeRow()
      rows.push([item])
      step = 0
      return
    }

    current.push(item)
    if (current.length === ROW_PATTERN[step % ROW_PATTERN.length]) {
      closeRow()
      step++
    }
  })
  closeRow()

  // Avoid ending on two lone photos in a row: join them into a pair.
  const last = rows[rows.length - 1]
  const prev = rows[rows.length - 2]
  if (last?.length === 1 && prev?.length === 1 && !last[0].photo.layout && !prev[0].photo.layout) {
    rows.splice(-2, 2, [...prev, ...last])
  }

  return rows
}

export default function PhotoGrid({ photos = [], variant }) {
  const [openIndex, setOpenIndex] = useState(null)
  const isMosaic = variant === 'mosaic'

  function renderTile(photo, index) {
    return (
      <button
        key={index}
        type="button"
        className="photo-grid__tile"
        onClick={() => setOpenIndex(index)}
        aria-label={photo.label || photo.alt || `Foto ${index + 1}`}
      >
        {photo.src
          ? <img src={photoSrc(photo.src)} alt={photo.alt || photo.label || ''} loading="lazy" decoding="async" />
          : <span className="photo-grid__label">{photo.label}</span>
        }
      </button>
    )
  }

  function renderRows() {
    let featureCount = 0

    return buildRows(photos).map((row) => {
      const isWide = row.length === 1 && row[0].photo.layout === 'wide'
      let className = `photo-row photo-row--${isWide ? 'wide' : ROW_NAMES[row.length]}`
      if (row.length === 1 && !isWide) {
        className += featureCount++ % 2 ? ' photo-row--right' : ' photo-row--left'
      }

      return (
        <div key={row[0].index} className={className}>
          {row.map(({ photo, index }) => renderTile(photo, index))}
        </div>
      )
    })
  }

  return (
    <>
      <div className={`photo-grid${isMosaic ? ' photo-grid--mosaic' : ''}`}>
        {isMosaic ? renderRows() : photos.map((photo, i) => renderTile(photo, i))}
      </div>

      <Lightbox
        photos={photos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  )
}
