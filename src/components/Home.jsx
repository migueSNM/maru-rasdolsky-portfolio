import PhotoStrip from './PhotoStrip'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <PhotoStrip height="70vh" label="Foto principal" />
      <div className="section">
        <p className="home__intro">
          Mariana Rasdolsky es fotógrafa. Su trabajo abarca la gastronomía, el cine,
          la música y los proyectos personales.
        </p>
      </div>
    </div>
  )
}
