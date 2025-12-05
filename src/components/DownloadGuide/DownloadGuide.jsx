import { useState } from 'react'
import './DownloadGuide.css'

const DownloadGuide = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setEmail('')
        }, 3000)
    }

    return (
        <section className="download-section">
            <div className="container">
                <div className="download-content">
                    <div className="download-text">
                        <h2>Download Free — The Employee Financial Well-being Guide</h2>
                        <p>A comprehensive guide to help your team achieve financial wellness. Learn proven strategies for budgeting, saving, and building wealth.</p>
                        <ul className="guide-features">
                            <li>✓ 50+ pages of expert advice</li>
                            <li>✓ Practical worksheets and templates</li>
                            <li>✓ Case studies from leading companies</li>
                            <li>✓ Actionable steps for immediate impact</li>
                        </ul>
                        <form className="download-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn-primary">
                                {submitted ? '✓ Sent!' : 'Download Guide'}
                            </button>
                        </form>
                    </div>
                    <div className="download-visual">
                        <div className="guide-preview">
                            <div className="guide-cover">
                                <h3>Financial Well-being Guide</h3>
                                <p>For Modern Workplaces</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloadGuide
