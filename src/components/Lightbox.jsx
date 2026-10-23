import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { lockScroll, unlockScroll } from '../lib/scrollLock'
import { photoSrc } from '../lib/photoSrc'
import './Lightbox.css'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
// Horizontal distance (px) a touch must travel to count as a swipe.
const SWIPE_MIN = 40

export default function Lightbox({ photos = [], index, onClose, onNavigate }) {
  const isOpen = index !== null && index !== undefined
  const lightboxRef = useRef(null)
  const triggerRef = useRef(null)
  const touchRef = useRef(null)

  // Once per opening: lock the page and take focus, then hand both back on close.
  // The dialog itself takes focus, so no control looks selected while browsing.
  useEffect(() => {
    if (!isOpen) return

    triggerRef.current = document.activeElement
    lockScroll()
    lightboxRef.current?.focus()

    return () => {
      unlockScroll()
      triggerRef.current?.focus?.()
    }
  }, [isOpen])

  // Fetch the neighbouring photos so moving between them is instant.
  useEffect(() => {
    if (!isOpen) return
    ;[photos[index - 1], photos[index + 1]].forEach((photo) => {
      if (photo?.src) new Image().src = photoSrc(photo.src)
    })
  }, [isOpen, index, photos])

  useEffect(() => {
    if (!isOpen) return

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
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, index, photos.length, onClose, onNavigate])

  if (!isOpen) return null

  const photo = photos[index]

  // Swipe left for the next photo, right for the previous one. Mostly
  // vertical or multi-finger gestures (scrolling, pinch zoom) are ignored.
  function handleTouchStart(e) {
    const touch = e.touches[0]
    touchRef.current = e.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null
  }

  function handleTouchEnd(e) {
    const start = touchRef.current
    touchRef.current = null
    if (!start) return
    const touch = e.changedTouches[0]
    const dx = touch.clientX - start.x
    const dy = touch.clientY - start.y
    if (Math.abs(dx) < SWIPE_MIN || Math.abs(dx) < Math.abs(dy)) return
    e.preventDefault() // no click afterwards
    if (dx < 0 && index < photos.length - 1) onNavigate(index + 1)
    if (dx > 0 && index > 0) onNavigate(index - 1)
  }
  // With a known size, the photo's box is drawn at once and shows the
  // (already cached) wall thumbnail until the full image arrives.
  const placeholder = photo.width && photo.height
    ? {
        '--ratio': photo.width / photo.height,
        backgroundImage: photo.thumb ? `url(${photoSrc(photo.thumb)})` : undefined,
      }
    : undefined

  return createPortal(
    <div
      ref={lightboxRef}
      tabIndex={-1}
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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {photo.src
          ? <img
              key={photo.src}
              src={photoSrc(photo.src)}
              alt={photo.alt || photo.label || ''}
              className={placeholder ? 'lightbox__photo--sized' : undefined}
              style={placeholder}
            />
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
        <button type="button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  )
}
