import { useReveal } from '../hooks/useReveal'
import './Work.css'

const works = [
  {
    id: 1,
    title: 'Untitled I',
    series: 'Silencio',
    year: '2024',
    medium: 'Analog, 35mm',
    size: 'wide',
  },
  {
    id: 2,
    title: 'Untitled II',
    series: 'Silencio',
    year: '2024',
    medium: 'Analog, 35mm',
    size: 'tall',
  },
  {
    id: 3,
    title: 'Nocturna',
    series: 'Ciudad',
    year: '2023',
    medium: 'Digital',
    size: 'tall',
  },
  {
    id: 4,
    title: 'Identidad I',
    series: 'Retratos',
    year: '2023',
    medium: 'Analog, medium format',
    size: 'wide',
  },
  {
    id: 5,
    title: 'Después',
    series: 'Retratos',
    year: '2023',
    medium: 'Analog, 35mm',
    size: 'square',
  },
  {
    id: 6,
    title: 'Luz Tenue',
    series: 'Silencio',
    year: '2024',
    medium: 'Digital',
    size: 'tall',
  },
  {
    id: 7,
    title: 'Fragmento Urbano',
    series: 'Ciudad',
    year: '2024',
    medium: 'Analog, 35mm',
    size: 'wide',
  },
  {
    id: 8,
    title: 'Soledad',
    series: 'Retratos',
    year: '2023',
    medium: 'Digital',
    size: 'square',
  },
]

function PhotoPlaceholder({ work, index }) {
  return (
    <article className={`work-item work-item--${work.size} reveal d${(index % 6) + 1}`}>
      <div className="work-item__frame">
        <div className="work-item__photo">
          <div className="work-item__inner">
            <span className="work-item__num">0{work.id}</span>
          </div>
          <div className="work-item__overlay">
            <p className="work-item__overlay-series">{work.series}</p>
            <p className="work-item__overlay-medium">{work.medium}</p>
          </div>
        </div>
        <footer className="work-item__footer">
          <span className="work-item__title">{work.title}</span>
          <span className="work-item__year">{work.year}</span>
        </footer>
      </div>
    </article>
  )
}

export default function Work() {
  const ref = useReveal(0.08)

  return (
    <section className="work section" id="work" ref={ref}>
      <div className="section-inner">
        <header className="work__header reveal">
          <p className="section-label">01 — Selected Works</p>
          <div className="work__header-row">
            <h2 className="work__title">Portfolio</h2>
            <p className="work__subtitle">
              A selection of series spanning portraiture,<br />
              urban landscape, and documentary work.
            </p>
          </div>
        </header>

        <div className="work__grid">
          {works.map((work, i) => (
            <PhotoPlaceholder key={work.id} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
