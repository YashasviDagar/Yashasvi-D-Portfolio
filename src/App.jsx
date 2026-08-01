import Navbar from './components/Navbar/Navbar'
import Cursor from './components/Cursor/Cursor'
import PrintProgress from './components/PrintProgress/PrintProgress'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div id="top" className="relative pt-12 pb-8">
      <Cursor />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Work />
      <Education />
      <Contact />
      <Footer />
      <PrintProgress />
    </div>
  )
}

export default App
