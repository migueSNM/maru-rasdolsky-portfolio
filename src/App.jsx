import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Biografia from './components/Biografia'
import SectionPage from './components/SectionPage'
import ProyectosPersonales from './components/ProyectosPersonales'
import ProyectoDetalle from './components/ProyectoDetalle'
import { sections } from './data/sections'

const sectionSlugs = Object.keys(sections)

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/proyectos-personales" element={<ProyectosPersonales />} />
        <Route path="/proyectos-personales/:slug" element={<ProyectoDetalle />} />
        {sectionSlugs.map((slug) => (
          <Route key={slug} path={`/${slug}`} element={<SectionPage />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
