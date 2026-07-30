import { useParams, Navigate } from 'react-router-dom'
import { personalProjects } from '../data/personalProjects'
import PhotoGrid from './PhotoGrid'
import './SectionPage.css'

export default function ProyectoDetalle() {
  const { slug } = useParams()
  const project = personalProjects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/proyectos-personales" replace />

  return (
    <div className="section-page">
      <div className="section" style={{ paddingBottom: '1.5rem' }}>
        <p className="label">
          Proyectos personales <span className="arrow">→</span> {project.title}
        </p>
        <p className="section-page__description">{project.description}</p>
      </div>
      <hr />
      <PhotoGrid photos={project.gallery} />
    </div>
  )
}
