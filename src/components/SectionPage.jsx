import { useLocation, Navigate } from 'react-router-dom'
import { sections } from '../data/sections'
import PhotoGrid from './PhotoGrid'
import './SectionPage.css'

export default function SectionPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '')
  const data = sections[slug]

  if (!data) return <Navigate to="/" replace />

  return (
    <div className="section-page">
      <header className="section-page__header">
        <h1 className="label">{data.navLabel}</h1>
        <p className="section-page__description">{data.description}</p>
      </header>
      {data.groups
        ? data.groups.map((group) => (
            <section key={`${slug}-${group.title}`} className="section-page__group">
              <h2 className="label section-page__group-title">
                {group.title}
                {group.credit && <span className="section-page__credit"> — {group.credit}</span>}
              </h2>
              <PhotoGrid photos={group.gallery} />
            </section>
          ))
        : <PhotoGrid key={slug} photos={data.gallery} />
      }
    </div>
  )
}
