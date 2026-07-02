import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__link nav__link--underline">Mariana Rasdolsky</a>
        <span className="nav__sep">→</span>
        <span className="nav__label">portafolio 2026</span>
        <span className="nav__sep">→</span>
        <a href="#contact" className="nav__link nav__link--underline">contacto</a>
      </div>
    </nav>
  )
}
