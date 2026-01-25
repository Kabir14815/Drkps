import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Stats from './components/Stats'
import Doctors from './components/Doctors'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <Services />
                <About />
                <Stats />
                <Doctors />
                <Testimonials />
                <FAQ />
                <Contact />
              </main>
              <Footer />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
