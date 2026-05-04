import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const ref = useReveal(0.1)

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">04 — Contact</p>

        <div className="contact__layout">
          <div className="contact__main">
            <h2 className="contact__heading reveal d1">
              Let's work<br /><em>together.</em>
            </h2>
            <a
              href="mailto:contact@marianarasdolsky.com"
              className="contact__email reveal d2"
            >
              contact@marianarasdolsky.com
            </a>
          </div>

          <div className="contact__info reveal d3">
            <div className="contact__info-group">
              <p className="contact__info-label">Location</p>
              <p className="contact__info-value">Buenos Aires, Argentina</p>
            </div>
            <div className="contact__info-group">
              <p className="contact__info-label">Availability</p>
              <p className="contact__info-value">Open to commissions &amp; collaborations</p>
            </div>
            <div className="contact__info-group">
              <p className="contact__info-label">Follow</p>
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
