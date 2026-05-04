import './Contact.css'

export default function Contact() {
  return (
    <div id="contact" className="contact-wrap">
      <div className="section col2">
        <p className="label">Contacto</p>
        <div className="contact__content">
          <a href="mailto:contacto@marianarasdolsky.com" className="contact__email">
            contacto@marianarasdolsky.com
          </a>

          <div className="contact__rows">
            <div className="contact__row">
              <span className="contact__row-label">Ubicación</span>
              <span>Buenos Aires, Argentina</span>
            </div>
            <div className="contact__row">
              <span className="contact__row-label">Disponibilidad</span>
              <span>Disponible para comisiones y colaboraciones</span>
            </div>
            <div className="contact__row">
              <span className="contact__row-label">Redes</span>
              <span>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social"
                >
                  Instagram
                </a>
                {' · '}
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social"
                >
                  Behance
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
