import { useReveal } from '../hooks/useReveal'
import './Experience.css'

const professional = [
  {
    role: 'Fotógrafa independiente',
    place: 'Práctica independiente',
    location: 'Buenos Aires, AR',
    period: '2020 — Presente',
    notes: 'Comisiones editoriales, de retrato y comerciales para clientes del ámbito cultural, la moda y las artes.',
  },
  {
    role: 'Asistente de fotografía',
    place: 'Estudio Colectivo',
    location: 'Buenos Aires, AR',
    period: '2019 — 2020',
    notes: 'Asistencia a fotógrafos senior en campañas publicitarias y editoriales; gestión de procesos de laboratorio analógico.',
  },
  {
    role: 'Fotógrafa editorial',
    place: 'Revista Anfibia',
    location: 'Buenos Aires, AR',
    period: '2018 — 2019',
    notes: 'Narrativa visual para periodismo de largo aliento y coberturas culturales.',
  },
  {
    role: 'Exposición colectiva',
    place: 'Centro Cultural Recoleta',
    location: 'Buenos Aires, AR',
    period: '2023',
    notes: '"Cuerpos en Tránsito". Serie Retratos, 12 copias.',
  },
]

const academic = [
  {
    title: 'Licenciatura en Fotografía',
    institution: 'Universidad de Buenos Aires (UBA)',
    period: '2014 — 2018',
    notes: 'Enfoque en práctica documental y procesos de cuarto oscuro. Tesis sobre el uso del grano como medio expresivo.',
  },
  {
    title: 'Seminario: Fotografía documental',
    institution: 'FOLA — Fototeca Latinoamericana',
    period: '2022',
    notes: 'Intensivo con Jorge Piccini — el testigo, la memoria y la ética de la representación.',
  },
  {
    title: 'Taller: Retrato e identidad',
    institution: 'ICI Instituto de Cooperación',
    period: '2023',
    notes: 'Taller de seis semanas explorando la identidad construida en el retrato fotográfico.',
  },
  {
    title: 'Masterclass: Archivo y memoria',
    institution: 'Centro de Arte y Fotografía',
    period: '2021',
    notes: 'Prácticas de archivo y las dimensiones políticas de la memoria fotográfica.',
  },
]

function Entry({ entry, type }) {
  return (
    <div className="exp__entry reveal">
      <div className="exp__entry-header">
        <span className="exp__period">{entry.period}</span>
        <div className="exp__dot-line" />
      </div>
      <div className="exp__entry-body">
        <h3 className="exp__role">{type === 'professional' ? entry.role : entry.title}</h3>
        <p className="exp__place">
          {type === 'professional' ? entry.place : entry.institution}
          {entry.location && <span className="exp__location"> — {entry.location}</span>}
        </p>
        <p className="exp__notes">{entry.notes}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  const ref = useReveal(0.06)

  return (
    <section className="exp section" id="experience" ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">03 — Experiencia</p>

        <h2 className="exp__heading reveal">Trayectoria</h2>

        <div className="exp__columns">
          <div className="exp__col">
            <h3 className="exp__col-title reveal">Profesional</h3>
            <div className="exp__list">
              {professional.map((e, i) => (
                <Entry key={i} entry={e} type="professional" />
              ))}
            </div>
          </div>

          <div className="exp__divider" />

          <div className="exp__col">
            <h3 className="exp__col-title reveal">Académica</h3>
            <div className="exp__list">
              {academic.map((e, i) => (
                <Entry key={i} entry={e} type="academic" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
