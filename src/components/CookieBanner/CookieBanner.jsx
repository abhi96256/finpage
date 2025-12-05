import { useState, useEffect } from 'react'
import './CookieBanner.css'

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent')
        if (!consent) {
            setIsVisible(true)
        }
    }, [])

    const handleConsent = (action) => {
        localStorage.setItem('cookieConsent', action)
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="cookie-banner">
            <div className="cookie-content">
                <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
                <div className="cookie-buttons">
                    <button className="btn-secondary" onClick={() => handleConsent('decline')}>Decline</button>
                    <button className="btn-primary" onClick={() => handleConsent('accept')}>Accept All</button>
                </div>
            </div>
        </div>
    )
}

export default CookieBanner
