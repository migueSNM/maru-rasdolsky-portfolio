import './Contact.css'

export default function Contact() {
  return (
    <div id="contact" className="contact-wrap">
      <div className="section col2">
        <p className="label">Contacto</p>
        <div className="contact__content">
          <a href="mailto:marurasdolsky@gmail.com" className="contact__email">
            marurasdolsky@gmail.com
          </a>

          <div className="contact__rows">
            <div className="contact__row">
              <span className="contact__row-label">Ubicación</span>
              <span>CABA, Buenos Aires, Argentina</span>
            </div>
            <div className="contact__row">
              <span className="contact__row-label">Redes</span>
              <span>
                <a
                  href="https://www.instagram.com/marurasdolsky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social"
                >
                  Instagram
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
