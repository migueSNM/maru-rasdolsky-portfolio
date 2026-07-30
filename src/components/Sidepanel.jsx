import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { lockScroll, unlockScroll } from '../lib/scrollLock'
import './Sidepanel.css'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Sidepanel({ isOpen, item, onClose }) {
  const panelRef = useRef(null)
  const closeBtnRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    triggerRef.current = document.activeElement
    lockScroll()
    closeBtnRef.current?.focus()

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusable = panelRef.current.querySelectorAll(FOCUSABLE)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      unlockScroll()
      triggerRef.current?.focus?.()
    }
  }, [isOpen, onClose])

  if (!item) return null

  return createPortal(
    <div className={`sidepanel-root${isOpen ? ' sidepanel-root--open' : ''}`}>
      <div className="sidepanel__backdrop" onClick={onClose} />
      <aside
        ref={panelRef}
        className="sidepanel"
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
      >
        <button type="button" ref={closeBtnRef} className="sidepanel__close label" onClick={onClose}>
          Cerrar <span className="arrow">→</span>
        </button>

        <div className="sidepanel__content">
          {item.tag && <p className="label">{item.tag}</p>}
          <h2 className="sidepanel__title">{item.title}</h2>
          {item.subtitle && <p className="sidepanel__subtitle">{item.subtitle}</p>}

          {item.meta?.length > 0 && (
            <table className="sidepanel__facts">
              <tbody>
                {item.meta.map((row) => (
                  <tr key={row.label}>
                    <td className="sidepanel__fact-label">{row.label}</td>
                    <td className="sidepanel__fact-value">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <p className="sidepanel__description">{item.description}</p>

          {item.gallery?.length > 0 && (
            <div className="sidepanel__gallery">
              {item.gallery.map((photo, i) => (
                <div
                  key={i}
                  className={`sidepanel__gallery-item${photo.src ? '' : ' sidepanel__gallery-item--placeholder'}`}
                >
                  {photo.src
                    ? <img src={photo.src} alt={photo.alt || photo.label || ''} />
                    : <span className="sidepanel__gallery-label">{photo.label}</span>
                  }
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </div>,
    document.body
  )
}
