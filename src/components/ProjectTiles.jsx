import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from './Sidebar'
import { sections } from '../data/sections'
import { personalProjects } from '../data/personalProjects'
import { photoSrc } from '../lib/photoSrc'
import './ProjectTiles.css'

export default function ProjectTiles() {
  const personalProjectsCover = personalProjects
    .map((project) => project.coverImage || project.gallery.find((photo) => photo.src)?.src)
    .find(Boolean)

  return (
    <section className="project-tiles" aria-labelledby="project-tiles-title">
      <div className="section project-tiles__header">
        <p id="project-tiles-title" className="label">Proyectos</p>
      </div>

      <div className="project-tiles__grid">
        {NAV_ITEMS.map((item) => {
          const slug = item.to.slice(1)
          const section = sections[slug]
          const galleryCover = section?.gallery?.find((photo) => photo.src)?.src
          const imageSrc = slug === 'proyectos-personales'
            ? personalProjectsCover
            : section?.coverImage || galleryCover

          return (
            <NavLink key={item.to} to={item.to} className="project-tile">
              {imageSrc ? <img src={photoSrc(imageSrc)} alt="" /> : <span className="project-tile__placeholder" aria-hidden="true" />}
              <span className="project-tile__shade" aria-hidden="true" />
              <span className="project-tile__title">{item.label}</span>
              {/* <span className="project-tile__action" aria-hidden="true">Ver proyecto <span>↗</span></span> */}
            </NavLink>
          )
        })}
      </div>
    </section>
  )
}
