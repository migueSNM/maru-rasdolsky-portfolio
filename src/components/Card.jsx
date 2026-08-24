import './Card.css'
import { photoSrc } from '../lib/photoSrc'

export default function Card({ tag, title, subtitle, brief, gallery, onOpen }) {
  const photo = gallery?.[0]

  return (
    <article className="card">
      <button type="button" className="card__trigger" onClick={onOpen} aria-label={title}>
        <div className="card__photo">
          {photo?.src
            ? <img src={photoSrc(photo.src)} alt={photo.alt || photo.label || ''} />
            : <span className="card__photo-label">{photo?.label}</span>
          }
        </div>
        <div className="card__body">
          {tag && <p className="card__tag label">{tag}</p>}
          <p className="card__title">{title}</p>
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
          <p className="card__brief">{brief}</p>
        </div>
      </button>
    </article>
  )
}
