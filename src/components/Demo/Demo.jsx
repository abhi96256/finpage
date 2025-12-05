import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Demo.css'

const Demo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        company: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Demo booking submitted:', formData)
        // Add your demo booking logic here
    }

    return (
        <div className="demo-page">
            {/* Left Side - Hero Section */}
            <div className="demo-hero">
                <div className="demo-hero-overlay"></div>
                <div className="demo-hero-content">
                    <Link to="/" className="demo-back-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Finsage</span>
                    </Link>

                    <div className="demo-hero-text">
                        <h1>
                            Join <span className="demo-highlight">Thousands</span> of Businesses that Trust Finsage to Transform their Team's Financial Wellness
                        </h1>

                        <div className="demo-features-list">
                            <div className="demo-feature-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Personalized Financial Coaching</span>
                            </div>
                            <div className="demo-feature-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Employee Wellness Programs</span>
                            </div>
                            <div className="demo-feature-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Comprehensive Financial Tools</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Demo Booking Form */}
            <div className="demo-form-wrapper">
                <div className="demo-form-container">
                    {/* Logo */}
                    <div className="demo-logo">
                        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="#10b981" />
                            <path d="M20 12V28M14 18H26" stroke="white" strokeWidth="3" strokeLinecap="round" />
                            <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1.5" opacity="0.3" />
                        </svg>
                        <span className="demo-logo-text">FINSAGE</span>
                    </div>

                    {/* Welcome Text */}
                    <div className="demo-welcome">
                        <p className="demo-welcome-text">Welcome to <span className="demo-brand-name">Finsage</span></p>
                        <h2 className="demo-title">Book a Demo</h2>
                        <p className="demo-description">
                            Discover how Finsage can transform your team's financial wellness
                        </p>
                    </div>

                    {/* Demo Booking Form */}
                    <form className="demo-form" onSubmit={handleSubmit}>
                        <div className="demo-form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                required
                                className="demo-form-input"
                            />
                        </div>

                        <div className="demo-form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@company.com"
                                required
                                className="demo-form-input"
                            />
                        </div>

                        <div className="demo-form-group">
                            <label htmlFor="mobile">Mobile Number *</label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="+1 (555) 123-4567"
                                required
                                className="demo-form-input"
                            />
                        </div>

                        <div className="demo-form-group">
                            <label htmlFor="company">Company *</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Your company name"
                                required
                                className="demo-form-input"
                            />
                        </div>

                        <div className="demo-form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your team's needs and what you'd like to see in the demo..."
                                rows="4"
                                required
                                className="demo-form-input demo-form-textarea"
                            ></textarea>
                        </div>

                        <button type="submit" className="demo-submit-btn">
                            Book Demo
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Demo
