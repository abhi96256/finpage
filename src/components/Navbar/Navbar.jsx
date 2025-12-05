import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const timeoutRef = useRef(null)

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsResourcesOpen(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsResourcesOpen(false)
        }, 300)
    }

    const scrollToSection = (sectionId) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsResourcesOpen(false)

        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                const element = document.getElementById(sectionId)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 100)
        } else {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
        setIsMobileMenuOpen(false)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-content">
                    <Link to="/" className="logo">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="#10b981" />
                            <path d="M20 12V28M14 18H26" stroke="white" strokeWidth="3" strokeLinecap="round" />
                            <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1.5" opacity="0.3" />
                        </svg>
                        <span className="logo-text">FINSAGE</span>
                    </Link>

                    <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link to="/our-impact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Our Impact</Link>

                        <div
                            className="nav-dropdown"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="nav-link dropdown-trigger">
                                Resources
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            {isResourcesOpen && (
                                <div className="dropdown-menu">
                                    <a onClick={() => scrollToSection('resources')} className="dropdown-item">Tools</a>
                                    <a onClick={() => scrollToSection('about')} className="dropdown-item">About Us</a>
                                    <a onClick={() => scrollToSection('individuals')} className="dropdown-item">Our Services</a>
                                    <a onClick={() => scrollToSection('resources')} className="dropdown-item">Videos</a>
                                </div>
                            )}
                        </div>

                        <Link to="/our-why" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Our Why</Link>
                        <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                    </div>

                    <div className="nav-actions">
                        <Link to="/signin" className="btn-sign-in">Sign In</Link>
                        <Link to="/book-demo" className="btn-book-demo">Book a Demo</Link>
                    </div>

                    <button
                        className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
