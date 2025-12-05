import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sign.css'

const Sign = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login submitted:', formData)
        // Add your login logic here
    }

    return (
        <div className="signin-page">
            {/* Left Side - Hero Section */}
            <div className="signin-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <Link to="/" className="back-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Finsage</span>
                    </Link>

                    <div className="hero-text">
                        <h1>
                            Join <span className="highlight">Thousands</span> of Professionals that Trust Finsage to Transform their Financial Wellness
                        </h1>

                        <div className="features-list">
                            <div className="feature-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Personalized Financial Coaching</span>
                            </div>
                            <div className="feature-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Employee Wellness Programs</span>
                            </div>
                            <div className="feature-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Comprehensive Financial Tools</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Sign In Form */}
            <div className="signin-form-wrapper">
                <div className="signin-form-container">
                    {/* Logo */}
                    <div className="signin-logo">
                        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="#10b981" />
                            <path d="M20 12V28M14 18H26" stroke="white" strokeWidth="3" strokeLinecap="round" />
                            <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1.5" opacity="0.3" />
                        </svg>
                        <span className="logo-text">FINSAGE</span>
                    </div>

                    {/* Welcome Text */}
                    <div className="signin-welcome">
                        <p className="welcome-text">Welcome to <span className="brand-name">Finsage</span></p>
                        <h2 className="signin-title">Get started with email</h2>
                    </div>

                    {/* Sign In Form */}
                    <form className="signin-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your corporate email"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                    className="form-input"
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="forgot-password">
                            <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="continue-btn">
                            Continue
                        </button>

                        <div className="signup-link">
                            <span>Don't have an account? </span>
                            <Link to="/signup" className="signup-link-text">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sign
