import './Experience.css'

const professional = [
  {
    period: '2020 — Presente',
    role: 'Fotógrafa independiente',
    place: 'Buenos Aires, AR',
    notes: 'Comisiones editoriales, de retrato y comerciales para clientes del ámbito cultural, la moda y las artes.',
  },
  {
    period: '2023',
    role: 'Exposición — "Cuerpos en Tránsito"',
    place: 'Centro Cultural Recoleta, Buenos Aires',
    notes: 'Serie Retratos, 12 copias. Exposición colectiva.',
  },
  {
    period: '2019 — 2020',
    role: 'Asistente de fotografía',
    place: 'Estudio Colectivo, Buenos Aires',
    notes: 'Asistencia a fotógrafos senior en campañas publicitarias y editoriales; gestión de laboratorio analógico.',
  },
  {
    period: '2018 — 2019',
    role: 'Fotógrafa editorial',
    place: 'Revista Anfibia, Buenos Aires',
    notes: 'Narrativa visual para periodismo de largo aliento y coberturas culturales.',
  },
]

const academic = [
  {
    period: '2014 — 2018',
    role: 'Licenciatura en Fotografía',
    place: 'Universidad de Buenos Aires (UBA)',
    notes: 'Tesis: el uso del grano como medio expresivo en la fotografía analógica contemporánea.',
  },
  {
    period: '2023',
    role: 'Taller: Retrato e identidad',
    place: 'ICI Instituto de Cooperación',
    notes: 'Seis semanas explorando la identidad construida en el retrato fotográfico.',
  },
  {
    period: '2022',
    role: 'Seminario: Fotografía documental',
    place: 'FOLA — Fototeca Latinoamericana',
    notes: 'Con Jorge Piccini — el testigo, la memoria y la ética de la representación.',
  },
  {
    period: '2021',
    role: 'Masterclass: Archivo y memoria',
    place: 'Centro de Arte y Fotografía',
    notes: 'Prácticas de archivo y las dimensiones políticas de la memoria fotográfica.',
  },
]

function ExpEntry({ entry }) {
  return (
    <div className="exp-entry">
      <p className="exp-entry__period">{entry.period}</p>
      <p className="exp-entry__role">{entry.role}</p>
      <p className="exp-entry__place">{entry.place}</p>
      <p className="exp-entry__notes">{entry.notes}</p>
    </div>
  )
}

export default function Experience() {
  return (
    <div id="experience" className="exp-wrap">
      {/* Professional */}
      <div className="section col2" style={{ paddingBottom: '0' }}>
        <p className="label">Experiencia</p>
        <div className="exp-list">
          {professional.map((e, i) => <ExpEntry key={i} entry={e} />)}
        </div>
      </div>
      <hr />

      {/* Academic */}
      <div className="section col2" style={{ paddingBottom: '0' }}>
        <p className="label">Formación</p>
        <div className="exp-list">
          {academic.map((e, i) => <ExpEntry key={i} entry={e} />)}
        </div>
      </div>
      <hr />
    </div>
  )
}
