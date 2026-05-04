import { useReveal } from '../hooks/useReveal'
import './Experience.css'

const professional = [
  {
    role: 'Freelance Photographer',
    place: 'Independent Practice',
    location: 'Buenos Aires, AR',
    period: '2020 — Present',
    notes: 'Editorial, portrait, and commercial commissions for clients across the arts, fashion, and cultural sectors.',
  },
  {
    role: 'Photography Assistant',
    place: 'Estudio Colectivo',
    location: 'Buenos Aires, AR',
    period: '2019 — 2020',
    notes: 'Assisted senior photographers on advertising and editorial campaigns; managed analog lab processes.',
  },
  {
    role: 'Editorial Photographer',
    place: 'Revista Anfibia',
    location: 'Buenos Aires, AR',
    period: '2018 — 2019',
    notes: 'Visual storytelling for long-form journalism and cultural features.',
  },
  {
    role: 'Gallery Exhibition',
    place: 'Centro Cultural Recoleta',
    location: 'Buenos Aires, AR',
    period: '2023',
    notes: 'Group exhibition — "Cuerpos en Tránsito". Series Retratos, 12 prints.',
  },
]

const academic = [
  {
    title: 'BFA — Photography',
    institution: 'Universidad de Buenos Aires (UBA)',
    period: '2014 — 2018',
    notes: 'Focus on documentary practice and darkroom processes. Thesis on the use of grain as expressive medium.',
  },
  {
    title: 'Seminar: Documentary Photography',
    institution: 'FOLA — Fototeca Latinoamericana',
    period: '2022',
    notes: 'Intensive with Jorge Piccini — witness, memory, and the ethics of representation.',
  },
  {
    title: 'Workshop: Retrato e Identidad',
    institution: 'ICI Instituto de Cooperación',
    period: '2023',
    notes: 'Six-week workshop exploring constructed identity in photographic portraiture.',
  },
  {
    title: 'Masterclass: Archivo y Memoria',
    institution: 'Centro de Arte y Fotografía',
    period: '2021',
    notes: 'Archival practices and the political dimensions of photographic memory.',
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
        <p className="section-label reveal">03 — Experience</p>

        <h2 className="exp__heading reveal d1">Background</h2>

        <div className="exp__columns">
          <div className="exp__col">
            <h3 className="exp__col-title reveal d2">Professional</h3>
            <div className="exp__list">
              {professional.map((e, i) => (
                <Entry key={i} entry={e} type="professional" />
              ))}
            </div>
          </div>

          <div className="exp__divider" />

          <div className="exp__col">
            <h3 className="exp__col-title reveal d3">Academic</h3>
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
