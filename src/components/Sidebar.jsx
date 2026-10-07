import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Sidebar.css'

const NAV_ITEMS = [
  { label: 'Gastronomía', to: '/gastronomia' },
  { label: 'Foto fija', to: '/foto-fija' },
  { label: 'Avant premiere', to: '/avant-premiere' },
  { label: 'Foto de prensa', to: '/foto-de-prensa' },
  { label: 'Shows en vivo', to: '/shows-en-vivo' },
  { label: 'Proyectos personales', to: '/proyectos-personales' },
  { label: 'Muestras', to: '/muestras' },
  { label: 'Radio', to: '/radio' },
  { label: 'Teatro', to: '/teatro' },
  { label: 'Publicaciones', to: '/publicaciones' },
  { label: 'Comunicación y redes', to: '/comunicacion-y-redes' },
  { label: 'Indumentaria', to: '/indumentaria' },
]

const INFO_ITEMS = [
  { label: 'Biografía', to: '/biografia' },
]

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <aside className={`sidebar${mobileOpen ? ' sidebar--expanded' : ''}`}>
      <div className="sidebar__top">
        <NavLink to="/" end className="sidebar__brand-link">
          <span className="sidebar__brand">
            <span>Maru</span> <span>Rasdolsky</span>
          </span>
        </NavLink>
        <button
          type="button"
          className="sidebar__toggle"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="sidebar__toggle-bar" />
          <span className="sidebar__toggle-bar" />
          <span className="sidebar__toggle-bar" />
        </button>
      </div>

      <nav className="sidebar__nav">
        {[NAV_ITEMS, INFO_ITEMS].map((items, i) => (
          <ul key={i} className="sidebar__list">
            {items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `sidebar__link${isActive ? ' sidebar__link--active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </nav>

      <div className="sidebar__contact">
        <p className="label">Contacto</p>
        <a href="mailto:marurasdolsky@gmail.com" className="sidebar__email">
          marurasdolsky@gmail.com
        </a>
        <p className="sidebar__meta">CABA, Buenos Aires, Argentina</p>
        <a
          href="https://www.instagram.com/marurasdolsky/"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar__social"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
            <rect width="24" height="24" fill="currentColor" />
            <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" fill="none" stroke="var(--white)" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" fill="none" stroke="var(--white)" strokeWidth="1.5" />
            <circle cx="15.6" cy="8.4" r="0.9" fill="var(--white)" />
          </svg>
        </a>
        <p className="sidebar__copyright">© {new Date().getFullYear()} Mariana Rasdolsky</p>
      </div>
    </aside>
  )
}
