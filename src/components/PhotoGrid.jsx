import { useState } from 'react'
import Lightbox from './Lightbox'
import { photoSrc } from '../lib/photoSrc'
import './PhotoGrid.css'

const FLOW_PATTERN = [
  'large', 'regular', 'tall', 'small', 'regular', 'tall', 'regular', 'wide',
  'small', 'tall', 'large', 'regular', 'regular', 'small', 'tall', 'regular',
  'large', 'tall', 'small', 'regular', 'tall', 'regular', 'large', 'small',
]

export default function PhotoGrid({ photos = [], variant }) {
  const [openIndex, setOpenIndex] = useState(null)
  const isMosaic = variant === 'mosaic'

  function renderTile(photo, index, className = '') {
    const flowClass = isMosaic ? `photo-grid__tile--${photo.layout || FLOW_PATTERN[index % FLOW_PATTERN.length]}` : ''

    return (
      <button
        key={index}
        type="button"
        className={`photo-grid__tile${flowClass ? ` ${flowClass}` : ''}${className ? ` ${className}` : ''}`}
        onClick={() => setOpenIndex(index)}
        aria-label={photo.label || photo.alt || `Foto ${index + 1}`}
      >
        {photo.src
          ? <img src={photoSrc(photo.src)} alt={photo.alt || photo.label || ''} />
          : <span className="photo-grid__label">{photo.label}</span>
        }
      </button>
    )
  }

  return (
    <>
      <div className={`photo-grid${isMosaic ? ' photo-grid--mosaic' : ''}`}>
        {isMosaic
          ? photos.map((photo, index) => renderTile(photo, index))
          : photos.map((photo, i) => (
              <button
                key={i}
                type="button"
                className="photo-grid__tile"
                onClick={() => setOpenIndex(i)}
                aria-label={photo.label || photo.alt || `Foto ${i + 1}`}
              >
                {photo.src
                  ? <img src={photoSrc(photo.src)} alt={photo.alt || photo.label || ''} />
                  : <span className="photo-grid__label">{photo.label}</span>
                }
              </button>
            ))
        }
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
