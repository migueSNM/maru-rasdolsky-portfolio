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
      <PhotoGrid key={slug} photos={data.gallery} />
    </div>
  )
}
