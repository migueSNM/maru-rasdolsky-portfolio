import './MultiPhotoStrip.css'

export default function MultiPhotoStrip({ height = '70vh', gap = '2px', photos = [] }) {
  return (
    <div className="multi-photo-strip" style={{ height, gap }}>
      {photos.map((photo, i) => (
        <div key={i} className="multi-photo-strip__item">
          {photo.src
            ? <img src={photo.src} alt={photo.alt || photo.label || ''} />
            : <span className="multi-photo-strip__label">{photo.label}</span>
          }
        </div>
      ))}
    </div>
  )
}
