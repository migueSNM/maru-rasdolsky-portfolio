import { useState } from 'react'
import { Link } from 'react-router-dom'
import Masonry from './Masonry'
import { sections } from '../data/sections'
import { personalProjects } from '../data/personalProjects'
import { photoSrc } from '../lib/photoSrc'
import './Home.css'

// How many photos each section or project may contribute, so no single
// section dominates the wall once others have photos too.
const PER_SECTION = 6
const MAX_PHOTOS = 40

// Real photos grouped by the page they belong to.
function collectGroups() {
  const fromSections = Object.values(sections).map((section) =>
    section.gallery
      .filter((photo) => photo.src)
      .map((photo) => ({ ...photo, to: `/${section.slug}`, section: section.navLabel }))
  )
  const fromProjects = personalProjects.map((project) =>
    project.gallery
      .filter((photo) => photo.src)
      .map((photo) => ({
        ...photo,
        to: `/proyectos-personales/${project.slug}`,
        section: `Proyectos personales — ${project.title}`,
      }))
  )
  return [...fromSections, ...fromProjects].filter((group) => group.length)
}

function shuffle(items) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// A random handful from each group, dealt out in turns so neighbouring
// photos tend to come from different sections.
function pickPhotos() {
  const hands = shuffle(collectGroups()).map((group) => shuffle(group).slice(0, PER_SECTION))
  const picked = []
  for (let round = 0; round < PER_SECTION; round++) {
    hands.forEach((hand) => {
      if (hand[round]) picked.push(hand[round])
    })
  }
  return picked.slice(0, MAX_PHOTOS)
}

export default function Home() {
  // Shuffled once per visit to the home page.
  const [photos] = useState(pickPhotos)

  return (
    <div className="home">
      <Masonry
        items={photos}
        renderItem={(photo, index, ratio) => (
          <Link
            key={index}
            to={photo.to}
            className="home__tile"
            style={{ aspectRatio: `1 / ${ratio}` }}
            aria-label={photo.section}
          >
            <img
              src={photoSrc(photo.src)}
              alt={photo.alt || ''}
              width={photo.width}
              height={photo.height}
              loading={index < 10 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <span className="home__caption" aria-hidden="true">{photo.section}</span>
          </Link>
        )}
      />
    </div>
  )
}
