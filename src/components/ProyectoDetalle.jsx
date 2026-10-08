import { useParams, Navigate, Link } from 'react-router-dom'
import { personalProjects } from '../data/personalProjects'
import PhotoGrid from './PhotoGrid'
import './SectionPage.css'

export default function ProyectoDetalle() {
  const { slug } = useParams()
  const project = personalProjects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/proyectos-personales" replace />

  return (
    <div className="section-page">
      <header className="section-page__header">
        <h1 className="label">
          <Link to="/proyectos-personales" className="section-page__back">Proyectos personales</Link>
          <span className="arrow">→</span> {project.title}
        </h1>
        <p className="section-page__description">{project.description}</p>
      </header>
      <PhotoGrid key={slug} photos={project.gallery} />
    </div>
  )
}
