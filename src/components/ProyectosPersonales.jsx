import { useNavigate } from 'react-router-dom'
import Card from './Card'
import { personalProjects } from '../data/personalProjects'
import './SectionPage.css'

export default function ProyectosPersonales() {
  const navigate = useNavigate()

  return (
    <div className="section-page">
      <div className="section col2" style={{ paddingBottom: '1.5rem' }}>
        <p className="label">Proyectos personales</p>
        <p className="section-page__description">
          Series y proyectos personales desarrollados de forma independiente.
        </p>
      </div>
      <hr />
      <div className="card-grid card-grid--pair">
        {personalProjects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            brief={project.brief}
            gallery={project.gallery}
            onOpen={() => navigate(`/proyectos-personales/${project.slug}`)}
          />
        ))}
      </div>
    </div>
  )
}
