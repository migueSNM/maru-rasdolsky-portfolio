import './Work.css'

const series = [
  {
    id: 'silencio',
    title: 'Silencio',
    number: '01',
    year: '2024',
    medium: 'Analógica, 35mm',
    description:
      'Una exploración de los espacios intermedios: aquello que ocurre entre un sonido y el siguiente, entre una presencia y su ausencia.',
    notes: 'Impresión en gelatina de plata · Edición de 5',
  },
  {
    id: 'ciudad',
    title: 'Ciudad',
    number: '02',
    year: '2023',
    medium: 'Digital y analógica',
    description:
      'Fragmentos de Buenos Aires captados durante la noche. La ciudad como escenario de tránsitos anónimos y arquitecturas que cambian de significado con la oscuridad.',
    notes: 'Impresión pigmentada · Edición de 5',
  },
  {
    id: 'retratos',
    title: 'Retratos',
    number: '03',
    year: '2023 – 2024',
    medium: 'Analógica, formato medio',
    description:
      'Retratos construidos en colaboración con las personas fotografiadas. La cámara como excusa para detenerse, mirarse y ser mirado.',
    notes: 'Impresión en gelatina de plata · Edición de 3',
  },
]

function WorkEntry({ serie }) {
  return (
    <div className="work-entry">
      <div className="work-entry__inner">
        {/* Left: info */}
        <div className="work-entry__info">
          <p className="work-entry__title">
            {serie.title}
            <span className="arrow">→</span>
            {serie.number}
          </p>
          <p className="work-entry__meta">{serie.year} · {serie.medium}</p>
          <p className="work-entry__desc">{serie.description}</p>
          <p className="work-entry__notes">{serie.notes}</p>
        </div>

        {/* Center: main image */}
        <div className="work-entry__main-img">
          <div className="work-entry__placeholder">
            <span className="work-entry__placeholder-label">Foto</span>
          </div>
        </div>

        {/* Right: secondary image + caption */}
        <div className="work-entry__secondary">
          <div className="work-entry__placeholder work-entry__placeholder--sm">
            <span className="work-entry__placeholder-label">Foto</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default function Work() {
  return (
    <div id="work" className="work-wrap">
      <div className="section col2" style={{ paddingBottom: '1.5rem' }}>
        <p className="label">Portafolio</p>
        <p className="work__subtitle">
          Una selección de series que abarca retrato, paisaje urbano y fotografía documental.
        </p>
      </div>
      <hr />
      <div className="work-entries">
        {series.map(s => <WorkEntry key={s.id} serie={s} />)}
      </div>
    </div>
  )
}
