import { useState } from 'react'
import Masonry from './Masonry'
import Lightbox from './Lightbox'
import { photoSrc } from '../lib/photoSrc'
import './PhotoGrid.css'

export default function PhotoGrid({ photos = [] }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <Masonry
        items={photos}
        renderItem={(photo, index, ratio) => (
          <button
            key={index}
            type="button"
            className="photo-grid__tile"
            style={{ aspectRatio: `1 / ${ratio}` }}
            onClick={() => setOpenIndex(index)}
            aria-label={photo.label || photo.alt || `Foto ${index + 1}`}
          >
            {photo.src
              ? <img
                  src={photoSrc(photo.src)}
                  alt={photo.alt || photo.label || ''}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                />
              : <span className="photo-grid__label">{photo.label}</span>
            }
          </button>
        )}
      />

      <Lightbox
        photos={photos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  )
}
