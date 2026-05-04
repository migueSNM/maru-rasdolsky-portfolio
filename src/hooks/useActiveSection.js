import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    // rootMargin shrinks the detection window to the center strip of the viewport,
    // so the active section changes only when it's clearly dominant on screen.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-38% 0px -38% 0px', threshold: 0 }
    )

    const els = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, []) // sectionIds is a stable array literal

  return active
}
