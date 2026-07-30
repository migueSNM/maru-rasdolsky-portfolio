import { useState } from 'react'
import Lightbox from './Lightbox'
import './PhotoGrid.css'

export default function PhotoGrid({ photos = [] }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, i) => (
          <button
            key={i}
            type="button"
            className="photo-grid__tile"
            onClick={() => setOpenIndex(i)}
            aria-label={photo.label || photo.alt || `Foto ${i + 1}`}
          >
            {photo.src
              ? <img src={photo.src} alt={photo.alt || photo.label || ''} />
              : <span className="photo-grid__label">{photo.label}</span>
            }
          </button>
        ))}
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
