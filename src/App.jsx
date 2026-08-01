import Navbar from './components/Navbar/Navbar'
import Cursor from './components/Cursor/Cursor'
import PrintProgress from './components/PrintProgress/PrintProgress'
import Hero from './components/Hero/Hero'
import Now from './components/Now/Now'
import Stack from './components/Stack/Stack'
import EarlierWork from './components/EarlierWork/EarlierWork'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div id="top" className="relative pt-12 pb-8">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Now />
        <EarlierWork />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
      <PrintProgress />
    </div>
  )
}

export default App
