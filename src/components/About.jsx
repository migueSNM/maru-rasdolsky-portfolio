import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About() {
  const ref = useReveal(0.1)

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">02 — Sobre mí</p>

        <div className="about__layout">
          <div className="about__text-col">
            <h2 className="about__statement reveal">
              La luz no es solo<br />
              iluminación — es <em>lenguaje.</em>
            </h2>

            <div className="about__bio reveal">
              <p>
                Mariana Rasdolsky es una fotógrafa radicada en Buenos Aires cuya
                práctica abarca el retrato, el documental urbano y las series
                conceptuales. Formada en bellas artes con especialidad en fotografía,
                se acerca a cada imagen como una negociación entre presencia y
                ausencia — lo que se muestra y lo que se retiene.
              </p>
              <p>
                Su trabajo ha sido exhibido en galerías de Argentina y publicado en
                medios editoriales independientes. Trabaja principalmente con procesos
                analógicos junto con la captura digital, combinando ambos dentro de
                una misma serie para crear contrastes texturales y temporales.
              </p>
              <p>
                Comisiones, colaboraciones y consultas editoriales son bienvenidas.
              </p>
            </div>

            <div className="about__facts reveal">
              <div className="about__fact">
                <span className="about__fact-label">Basada en</span>
                <span className="about__fact-value">Buenos Aires, Argentina</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Práctica</span>
                <span className="about__fact-value">Retratos · Documental · Conceptual</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Medio</span>
                <span className="about__fact-value">Analógica 35mm · Formato medio · Digital</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Idiomas</span>
                <span className="about__fact-value">Español · Inglés</span>
              </div>
            </div>
          </div>

          <div className="about__photo-col reveal">
            <div className="about__portrait">
              <div className="about__portrait-placeholder">
                <span className="about__portrait-label">Retrato</span>
              </div>
              <p className="about__photo-caption">Mariana Rasdolsky, Buenos Aires — 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
