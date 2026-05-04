import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Mariana Rasdolsky. Todos los derechos reservados.
        </p>
        <p className="footer__made">
          Buenos Aires, Argentina
        </p>
      </div>
    </footer>
  )
}
