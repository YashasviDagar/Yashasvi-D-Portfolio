import Navbar from './components/Navbar/Navbar'
import Cursor from './components/Cursor/Cursor'
import Starfield from './components/Starfield/Starfield'
import Hero from './components/Hero/Hero'
import Stack from './components/Stack/Stack'
import EarlierWork from './components/EarlierWork/EarlierWork'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div id="top" className="relative pt-14">
      <Cursor />
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <EarlierWork />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
