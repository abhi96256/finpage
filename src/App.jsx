import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CookieBanner from './components/CookieBanner/CookieBanner'
import Home from './pages/Home'
import OurImpactPage from './pages/OurImpactPage'
import OurWhyPage from './pages/OurWhyPage'
import ContactPage from './pages/ContactPage'
import Sign from './components/Signin/Sign'
import Demo from './components/Demo/Demo'
import EmergencyFund from './pages/Tools/EmergencyFund'
import FinancialHealthCheck from './pages/Tools/FinancialHealthCheck'
import TaxCalculator from './pages/Tools/TaxCalculator'
import './App.css'

function AppContent() {
  const location = useLocation()
  const hideNavbarFooter = location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/book-demo'

  return (
    <div className="App">
      {!hideNavbarFooter && <CookieBanner />}
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-impact" element={<OurImpactPage />} />
        <Route path="/our-why" element={<OurWhyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/book-demo" element={<Demo />} />
        <Route path="/tools/emergency-fund" element={<EmergencyFund />} />
        <Route path="/tools/financial-health-check" element={<FinancialHealthCheck />} />
        <Route path="/tools/tax-calculator" element={<TaxCalculator />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
