import PhotoStrip from "./PhotoStrip";
import MultiPhotoStrip from "./MultiPhotoStrip";
import PhotoCycleStrip from "./PhotoCycleStrip";
import "./Work.css";

const commercialCategories = [
  {
    id: "musica",
    number: "01",
    title: "Música",
    description:
      "Fotografía de bandas, artistas y sesiones en vivo. Retratos de músicos y coberturas de shows.",
    photoDisplay: {
      type: "cycle",
      height: "60vh",
      interval: 3500,
      slots: [
        { label: "Música 1", photos: [] },
        { label: "Música 2", photos: [] },
        { label: "Música 3", photos: [] },
      ],
    },
  },
  {
    id: "cine",
    number: "02",
    title: "Cine",
    description:
      "Fotografía de producción, making-of y retratos de elenco. Trabajo detrás de cámara en rodajes de largometrajes y cortometrajes.",
    photoDisplay: {
      type: "strip",
      height: "70vh",
      label: "Cine",
    },
  },
  {
    id: "gastronomia",
    number: "03",
    title: "Gastronomía",
    description:
      "Fotografía gastronómica para restaurantes, chefs y marcas de alimentos. Énfasis en la textura, la luz natural y el producto.",
    photoDisplay: {
      type: "multi",
      height: "50vh",
      gap: "2px",
      photos: [
        { label: "Gastronomía 1" },
        { label: "Gastronomía 2" },
        { label: "Gastronomía 3" },
      ],
    },
  },
  {
    id: "moda",
    number: "04",
    title: "Moda y Vestuario",
    description:
      "Editoriales de moda, lookbooks y campañas para marcas de indumentaria. Colaboraciones con diseñadores emergentes.",
    photoDisplay: {
      type: "multi",
      height: "68vh",
      gap: "2px",
      photos: [
        { label: "Moda 1" },
        { label: "Moda 2" },
      ],
    },
  },
  {
    id: "retratos-com",
    number: "05",
    title: "Retratos",
    description:
      "Sesiones de retrato por encargo. Personas, artistas y profesionales en estudio y locaciones.",
    photoDisplay: {
      type: "cycle",
      height: "62vh",
      interval: 4000,
      slots: [
        { label: "Retrato 1", photos: [] },
        { label: "Retrato 2", photos: [] },
      ],
    },
  },
];

const series = [
  {
    id: "silencio",
    title: "Silencio",
    number: "01",
    year: "2024",
    medium: "Analógica, 35mm",
    description:
      "Una exploración de los espacios intermedios: aquello que ocurre entre un sonido y el siguiente, entre una presencia y su ausencia.",
    notes: "Impresión en gelatina de plata · Edición de 5",
    photoDisplay: {
      type: "strip",
      height: "65vh",
      label: "Serie Silencio",
    },
  },
  {
    id: "ciudad",
    title: "Ciudad",
    number: "02",
    year: "2023",
    medium: "Digital y analógica",
    description:
      "Fragmentos de Buenos Aires captados durante la noche. La ciudad como escenario de tránsitos anónimos y arquitecturas que cambian de significado con la oscuridad.",
    notes: "Impresión pigmentada · Edición de 5",
    photoDisplay: {
      type: "multi",
      height: "52vh",
      gap: "2px",
      photos: [
        { label: "Ciudad 1" },
        { label: "Ciudad 2" },
        { label: "Ciudad 3" },
        { label: "Ciudad 4" },
      ],
    },
  },
  {
    id: "retratos-serie",
    title: "Retratos",
    number: "03",
    year: "2023 – 2024",
    medium: "Analógica, formato medio",
    description:
      "Retratos construidos en colaboración con las personas fotografiadas. La cámara como excusa para detenerse, mirarse y ser mirado.",
    notes: "Impresión en gelatina de plata · Edición de 3",
    photoDisplay: {
      type: "cycle",
      height: "58vh",
      interval: 3500,
      slots: [
        {
          label: "Retratos 1",
          photos: [
            "photos/retratos_por_videollamada/01.jpg",
            "photos/retratos_por_videollamada/02.jpg",
            "photos/retratos_por_videollamada/03.jpg",
            "photos/retratos_por_videollamada/04.jpg",
            "photos/retratos_por_videollamada/05.jpg",
          ],
        },
        {
          label: "Retrato 2",
          photos: [
            "photos/retratos_por_videollamada/06.jpg",
            "photos/retratos_por_videollamada/07.jpg",
            "photos/retratos_por_videollamada/08.jpg",
            "photos/retratos_por_videollamada/09.jpg",
            "photos/retratos_por_videollamada/10.jpg",
          ],
        },
        {
          label: "Retrato 3",
          photos: [
            "photos/retratos_por_videollamada/11.jpg",
            "photos/retratos_por_videollamada/12.jpg",
            "photos/retratos_por_videollamada/13.jpg",
            "photos/retratos_por_videollamada/14.jpg",
            "photos/retratos_por_videollamada/15.jpg",
          ],
        },
      ],
    },
  },
];

function WorkPhotos({ display }) {
  if (!display) return null;
  const { type, ...props } = display;
  switch (type) {
    case "strip":
      return <PhotoStrip {...props} />;
    case "multi":
      return <MultiPhotoStrip {...props} />;
    case "cycle":
      return <PhotoCycleStrip {...props} />;
    default:
      return null;
  }
}

function WorkEntry({ serie }) {
  return (
    <article className="work-entry">
      <div className="work-entry__info">
        <p className="label">{serie.number}</p>
        <div className="work-entry__details">
          <p className="work-entry__title">
            {serie.title} <span className="arrow">→</span> {serie.number}
          </p>
          {(serie.year || serie.medium) && (
            <p className="work-entry__meta">
              {[serie.year, serie.medium].filter(Boolean).join(" · ")}
            </p>
          )}
          <p className="work-entry__desc">{serie.description}</p>
          {serie.notes && <p className="work-entry__notes">{serie.notes}</p>}
        </div>
      </div>
      <WorkPhotos display={serie.photoDisplay} />
      <hr />
    </article>
  );
}

export default function Work() {
  return (
    <div id="work" className="work-wrap">
      <div className="section col2" style={{ paddingBottom: "1.5rem" }}>
        <p className="label">Trabajo</p>
        <p className="work__subtitle">
          Fotografía comercial para música, cine, gastronomía, moda y retrato.
        </p>
      </div>
      <hr />
      <div className="work-entries">
        {commercialCategories.map((cat) => (
          <WorkEntry key={cat.id} serie={cat} />
        ))}
      </div>

      <div className="section col2" style={{ paddingBottom: "1.5rem", paddingTop: "5rem" }}>
        <p className="label">Series</p>
        <p className="work__subtitle">
          Proyectos personales.
        </p>
      </div>
      <hr />
      <div className="work-entries">
        {series.map((s) => (
          <WorkEntry key={s.id} serie={s} />
        ))}
      </div>
    </div>
  );
}
