import { useState } from 'react'
import Lightbox from './Lightbox'
import { photoSrc } from '../lib/photoSrc'
import './PhotoGrid.css'

const MOSAIC_PATTERN = ['tall', 'regular', 'regular', 'wide', 'small', 'blank']

function buildMosaicItems(photos) {
  const items = []
  let photoIndex = 0
  let step = 0
  while (photoIndex < photos.length) {
    const size = MOSAIC_PATTERN[step % MOSAIC_PATTERN.length]
    step++
    if (size === 'blank') {
      items.push({ type: 'blank', key: `blank-${step}` })
    } else {
      items.push({ type: 'photo', size, photo: photos[photoIndex], index: photoIndex })
      photoIndex++
    }
  }
  return items
}

export default function PhotoGrid({ photos = [], variant }) {
  const [openIndex, setOpenIndex] = useState(null)
  const isMosaic = variant === 'mosaic'
  const mosaicItems = isMosaic ? buildMosaicItems(photos) : null

  return (
    <>
      <div className={`photo-grid${isMosaic ? ' photo-grid--mosaic' : ''}`}>
        {isMosaic
          ? mosaicItems.map((item) =>
              item.type === 'blank'
                ? <div key={item.key} className="photo-grid__tile photo-grid__tile--blank" aria-hidden="true" />
                : (
                  <button
                    key={item.index}
                    type="button"
                    className={`photo-grid__tile photo-grid__tile--${item.size}`}
                    onClick={() => setOpenIndex(item.index)}
                    aria-label={item.photo.label || item.photo.alt || `Foto ${item.index + 1}`}
                  >
                    {item.photo.src
                      ? <img src={photoSrc(item.photo.src)} alt={item.photo.alt || item.photo.label || ''} />
                      : <span className="photo-grid__label">{item.photo.label}</span>
                    }
                  </button>
                )
            )
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
