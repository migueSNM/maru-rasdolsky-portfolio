import Nav from './components/Nav'
import PhotoStrip from './components/PhotoStrip'
import Statement from './components/Statement'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MultiPhotoStrip from './components/MultiPhotoStrip'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        {/* Hero image — replace src when photo is ready */}
        <PhotoStrip height="82vh" label="Foto principal" src='photos/linea_directa/08.jpg' />

        <Statement />

        {/* Photo between Statement and Bio */}
        <PhotoStrip height="36vh" label="Serie Silencio" />
        <MultiPhotoStrip gap='20px' height='70vh' photos={[
          { src: 'photos/chacra/07.jpg', alt: 'Foto 1' },
          { src: 'photos/chacra/13.jpg', alt: 'Foto 2' },
          { src: 'photos/chacra/14.jpg', alt: 'Foto 3' },
          { src: 'photos/chacra/29.jpg', alt: 'Foto 3' },
          { src: 'photos/chacra/34.jpg', alt: 'Foto 3' },
          { src: 'photos/chacra/38.jpg', alt: 'Foto 3' },
        ]}/>

        <About />

        <Work />

        <Experience />

        <Contact />
      </main>
      <Footer />
    </>
  )
}
