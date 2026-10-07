import { professionalExperience, academicExperience } from '../data/experience'
import './SectionPage.css'
import './Biografia.css'

const CV = [
  { title: 'Trayectoria', entries: professionalExperience },
  { title: 'Formación', entries: academicExperience },
]

export default function Biografia() {
  return (
    <div className="biografia">
      <header className="section-page__header">
        <h1 className="label">Biografía</h1>
      </header>

      <div className="biografia__grid">
        <img
          className="biografia__portrait"
          src="/photos/bio.jpg"
          alt="Retrato de Mariana Rasdolsky"
          width="2400"
          height="1591"
        />
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

        {CV.map((block) => (
          <section key={block.title} className="biografia__cv" aria-labelledby={`cv-${block.title}`}>
            <h2 id={`cv-${block.title}`} className="label">{block.title}</h2>
            <ol className="biografia__list">
              {block.entries.map((entry) => (
                <li key={entry.id} className="biografia__entry">
                  <span className="biografia__year">{entry.tag}</span>
                  <div>
                    <p className="biografia__role">{entry.title}</p>
                    <p className="biografia__place">{entry.subtitle}</p>
                    {entry.description && <p className="biografia__note">{entry.description}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
