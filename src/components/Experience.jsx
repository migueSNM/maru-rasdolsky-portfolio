import { useState } from 'react'
import Card from './Card'
import Sidepanel from './Sidepanel'
import { professionalExperience, academicExperience } from '../data/experience'
import './Experience.css'

export default function Experience() {
  const [activeItem, setActiveItem] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  function openItem(item) {
    setActiveItem(item)
    setIsOpen(true)
  }

  function closeItem() {
    setIsOpen(false)
  }

  return (
    <div id="experience" className="exp-wrap">
      {/* Professional */}
      <div className="section" style={{ paddingBottom: '1.5rem' }}>
        <p className="label">Experiencia</p>
      </div>
      <div className="card-grid card-grid--pair">
        {professionalExperience.map((entry) => (
          <Card
            key={entry.id}
            tag={entry.tag}
            title={entry.title}
            subtitle={entry.subtitle}
            brief={entry.brief}
            gallery={entry.gallery}
            onOpen={() => openItem(entry)}
          />
        ))}
      </div>
      <hr />

      {/* Academic */}
      <div className="section" style={{ paddingBottom: '1.5rem', paddingTop: '3.5rem' }}>
        <p className="label">Formación</p>
      </div>
      <div className="card-grid card-grid--pair">
        {academicExperience.map((entry) => (
          <Card
            key={entry.id}
            tag={entry.tag}
            title={entry.title}
            subtitle={entry.subtitle}
            brief={entry.brief}
            gallery={entry.gallery}
            onOpen={() => openItem(entry)}
          />
        ))}
      </div>
      <hr />

      <Sidepanel isOpen={isOpen} item={activeItem} onClose={closeItem} />
    </div>
  )
}
