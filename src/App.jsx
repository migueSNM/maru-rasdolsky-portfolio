import Nav from './components/Nav'
import PhotoStrip from './components/PhotoStrip'
import Statement from './components/Statement'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        {/* Hero image — replace src when photo is ready */}
        <PhotoStrip height="82vh" label="Foto principal" />

        <Statement />

        {/* Photo between Statement and Bio */}
        <PhotoStrip height="36vh" label="Serie Silencio" />

        <About />

        {/* Photo between Bio and Portfolio */}
        <PhotoStrip height="36vh" label="Serie Ciudad" />

        <Work />

        {/* Photo between Portfolio and Experience */}
        <PhotoStrip height="36vh" label="Serie Retratos" />

        <Experience />

        <Contact />
      </main>
      <Footer />
    </>
  )
}
