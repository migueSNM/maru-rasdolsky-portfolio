import BackgroundScene from './components/BackgroundScene'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useActiveSection } from './hooks/useActiveSection'

const SECTIONS = ['hero', 'work', 'about', 'experience', 'contact']

export default function App() {
  const active = useActiveSection(SECTIONS)

  return (
    <>
      <BackgroundScene active={active} />
      <Nav />
      <main>
        <Hero />
        <div className="bg-gap" />
        <Work />
        <div className="bg-gap" />
        <About />
        <div className="bg-gap" />
        <Experience />
        <div className="bg-gap" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
