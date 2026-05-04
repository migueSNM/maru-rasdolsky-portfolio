import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About() {
  const ref = useReveal(0.1)

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">02 — About</p>

        <div className="about__layout">
          <div className="about__text-col">
            <h2 className="about__statement reveal d1">
              Light is not<br />
              just illumination —<br />
              it is <em>language.</em>
            </h2>

            <div className="about__bio reveal d2">
              <p>
                Mariana Rasdolsky is a Buenos Aires-based photographer whose practice
                spans portraiture, urban documentary, and conceptual series. Trained
                in fine arts photography, she approaches each image as a negotiation
                between presence and absence — what is shown, and what is withheld.
              </p>
              <p>
                Her work has been exhibited in galleries across Argentina and featured
                in independent editorial publications. She works primarily with analog
                processes alongside digital capture, often combining both within the
                same series to create textural and temporal contrasts.
              </p>
              <p>
                Commissions, collaborations, and editorial inquiries are welcome.
              </p>
            </div>

            <div className="about__facts reveal d3">
              <div className="about__fact">
                <span className="about__fact-label">Based in</span>
                <span className="about__fact-value">Buenos Aires, Argentina</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Practice</span>
                <span className="about__fact-value">Portraiture · Documentary · Conceptual</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Medium</span>
                <span className="about__fact-value">Analog 35mm · Medium Format · Digital</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Languages</span>
                <span className="about__fact-value">Spanish · English</span>
              </div>
            </div>
          </div>

          <div className="about__photo-col reveal d2">
            <div className="about__portrait">
              <div className="about__portrait-placeholder">
                <span className="about__portrait-label">Portrait</span>
              </div>
              <p className="about__photo-caption">Mariana Rasdolsky, Buenos Aires — 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
