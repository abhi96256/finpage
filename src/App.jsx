import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CookieBanner from './components/CookieBanner/CookieBanner'
import Home from './pages/Home'
import OurImpactPage from './pages/OurImpactPage'
import OurWhyPage from './pages/OurWhyPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <CookieBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-impact" element={<OurImpactPage />} />
          <Route path="/our-why" element={<OurWhyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
