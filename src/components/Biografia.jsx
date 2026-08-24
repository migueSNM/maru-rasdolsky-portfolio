import Experience from './Experience'
import ProjectTiles from './ProjectTiles'
import './Biografia.css'

export default function Biografia() {
  return (
    <div className="biografia">
      <div className="section">
        <p className="label" style={{ marginBottom: '1.5rem' }}>Biografía</p>
        <div className="biografia__layout">
          <div className="biografia__photo">
            <div className="biografia__photo-placeholder">
              <img src="/photos/bio.jpg" alt="Retrato" />
            </div>
          </div>
          <div className="biografia__text">
            <p>
              Mariana Rasdolsky es fotógrafa. Vive y trabaja en Buenos Aires,
              donde desarrolla una práctica fotográfica independiente.
            </p>
            <p>
              Su trabajo abarca la fotografía comercial y editorial, así como
              proyectos personales de carácter documental y conceptual.
            </p>
          </div>
        </div>
      </div>
      <ProjectTiles />
    </div>
  )
}
