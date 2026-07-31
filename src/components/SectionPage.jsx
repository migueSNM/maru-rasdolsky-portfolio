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
      <div className="section col2" style={{ paddingBottom: '1.5rem' }}>
        <p className="label">{data.navLabel}</p>
        <p className="section-page__description">{data.description}</p>
      </div>
      <PhotoGrid photos={data.gallery} />
    </div>
  )
}
