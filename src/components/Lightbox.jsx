import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { lockScroll, unlockScroll } from '../lib/scrollLock'
import { photoSrc } from '../lib/photoSrc'
import './Lightbox.css'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Lightbox({ photos = [], index, onClose, onNavigate }) {
  const isOpen = index !== null && index !== undefined
  const lightboxRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    triggerRef.current = document.activeElement
    lockScroll()

    function goNext() {
      if (index < photos.length - 1) onNavigate(index + 1)
    }
    function goPrev() {
      if (index > 0) onNavigate(index - 1)
    }

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'ArrowRight') {
        goNext()
        return
      }
      if (e.key === 'ArrowLeft') {
        goPrev()
        return
      }
      if (e.key !== 'Tab' || !lightboxRef.current) return
      const focusable = lightboxRef.current.querySelectorAll(FOCUSABLE)
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
  }, [isOpen, index, photos.length, onClose, onNavigate])

  if (!isOpen) return null

  const photo = photos[index]

  return createPortal(
    <div
      ref={lightboxRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={photo.label || photo.alt || ''}
    >
      <button
        type="button"
        className="lightbox__image"
        onClick={() => (index < photos.length - 1 ? onNavigate(index + 1) : onClose())}
        aria-label={index < photos.length - 1 ? 'Foto siguiente' : 'Cerrar'}
      >
        {photo.src
          ? <img src={photoSrc(photo.src)} alt={photo.alt || photo.label || ''} />
          : <span className="lightbox__label">{photo.label}</span>
        }
      </button>

      <div className="lightbox__controls">
        <p>
          <button
            type="button"
            onClick={() => onNavigate(index - 1)}
            disabled={index === 0}
          >
            Anterior
          </button>
          <span aria-hidden="true"> / </span>
          <button
            type="button"
            onClick={() => onNavigate(index + 1)}
            disabled={index === photos.length - 1}
          >
            Siguiente
          </button>
          <span className="lightbox__count">{index + 1} / {photos.length}</span>
        </p>
        <button type="button" onClick={onClose} autoFocus>
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  )
}
