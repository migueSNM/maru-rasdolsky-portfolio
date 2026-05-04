import './PhotoStrip.css'

export default function PhotoStrip({ height = '70vh', label, src, alt }) {
  return (
    <div className="photo-strip" style={{ height }}>
      {src
        ? <img src={src} alt={alt || label || ''} />
        : <span className="photo-strip__label">{label}</span>
      }
    </div>
  )
}
