import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const ref = useReveal(0.1)

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">04 — Contacto</p>

        <div className="contact__layout">
          <div className="contact__main">
            <h2 className="contact__heading reveal">
              Trabajemos<br /><em>juntos.</em>
            </h2>
            <a
              href="mailto:contacto@marianarasdolsky.com"
              className="contact__email reveal"
            >
              contacto@marianarasdolsky.com
            </a>
          </div>

          <div className="contact__info reveal">
            <div className="contact__info-group">
              <p className="contact__info-label">Ubicación</p>
              <p className="contact__info-value">Buenos Aires, Argentina</p>
            </div>
            <div className="contact__info-group">
              <p className="contact__info-label">Disponibilidad</p>
              <p className="contact__info-value">Disponible para comisiones y colaboraciones</p>
            </div>
            <div className="contact__info-group">
              <p className="contact__info-label">Seguir</p>
              <div className="contact__socials">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  Instagram
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
