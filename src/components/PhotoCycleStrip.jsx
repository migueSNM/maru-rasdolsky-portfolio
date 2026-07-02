import { useState, useEffect } from 'react'
import './PhotoCycleStrip.css'

function CycleSlot({ label, photos = [], interval = 3500, startOffset = 0, height }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    let intervalId
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCurrent(i => (i + 1) % photos.length)
      }, interval)
    }, startOffset)
    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [photos.length, interval, startOffset])

  return (
    <div className="cycle-slot">
      {photos.length > 0
        ? photos.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={label || ''}
              className={`cycle-slot__photo${i === current ? ' cycle-slot__photo--active' : ''}`}
            />
          ))
        : <span className="cycle-slot__placeholder">{label}</span>
      }
      {label && (
        <div className="cycle-slot__overlay">
          <span className="cycle-slot__label">{label}</span>
        </div>
      )}
    </div>
  )
}

export default function PhotoCycleStrip({ height = '60vh', gap = '2px', interval = 3500, slots = [] }) {
  return (
    <div className="photo-cycle-strip" style={{ height, gap }}>
      {slots.map((slot, i) => (
        <CycleSlot
          key={i}
          {...slot}
          interval={interval}
          startOffset={i * 700}
          height={height}
        />
      ))}
    </div>
  )
}
