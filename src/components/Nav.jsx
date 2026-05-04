import { useEffect, useState } from 'react'
import './Nav.css'

const links = [
  { label: 'Trabajo',     href: '#work'       },
  { label: 'Sobre mí',    href: '#about'       },
  { label: 'Experiencia', href: '#experience'  },
  { label: 'Contacto',    href: '#contact'     },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLink = () => setMenuOpen(false)

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-first">Mariana</span>
          <span className="nav__logo-last">Rasdolsky</span>
        </a>

        <ul className="nav__links">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="nav__link">{label}</a>
            </li>
          ))}
        </ul>

        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav__mobile-menu">
          {links.map(({ label, href }) => (
            <a key={href} href={href} className="nav__mobile-link" onClick={handleLink}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
