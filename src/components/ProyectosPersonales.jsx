import { Link } from 'react-router-dom'
import Masonry from './Masonry'
import { personalProjects } from '../data/personalProjects'
import { photoSrc } from '../lib/photoSrc'
import './SectionPage.css'
import './PhotoGrid.css'
import './ProyectosPersonales.css'

// One tile per project: its first real photo, or a placeholder until it has one.
const covers = personalProjects.map((project) => {
  const photo = project.gallery.find((p) => p.src) || project.gallery[0] || {}
  return { ...photo, project }
})

export default function ProyectosPersonales() {
  return (
    <div className="section-page">
      <header className="section-page__header">
        <h1 className="label">Proyectos personales</h1>
        <p className="section-page__description">
          Series y proyectos personales desarrollados de forma independiente.
        </p>
      </header>

      <Masonry
        items={covers}
        renderItem={(cover, index, ratio) => (
          <Link
            key={cover.project.slug}
            to={`/proyectos-personales/${cover.project.slug}`}
            className="project-tile"
          >
            <span className="project-tile__image" style={{ aspectRatio: `1 / ${ratio}` }}>
              {cover.src
                ? <img
                    src={photoSrc(cover.src)}
                    alt={cover.alt || ''}
                    width={cover.width}
                    height={cover.height}
                    loading="lazy"
                    decoding="async"
                  />
                : <span className="photo-grid__label">{cover.label}</span>
              }
            </span>
            <span className="project-tile__title">{cover.project.title}</span>
            <span className="project-tile__brief">{cover.project.brief}</span>
          </Link>
        )}
      />
    </div>
  )
}
