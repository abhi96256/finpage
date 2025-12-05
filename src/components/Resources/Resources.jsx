import { useState } from 'react'
import './Resources.css'

const Resources = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubscribed(true)
        setTimeout(() => {
            setSubscribed(false)
            setEmail('')
        }, 3000)
    }

    const resources = [
        { type: '📖 Guide', title: 'The Complete Guide to Budget Creation', description: 'Learn how to create a budget that actually works for your lifestyle and goals.' },
        { type: '🧮 Calculator', title: 'Emergency Fund Calculator', description: 'Calculate exactly how much you should have saved for emergencies based on your situation.' },
        { type: '🎥 Video', title: 'Investing 101 Masterclass', description: 'A complete video series on investment basics, from stocks to mutual funds to retirement accounts.' },
        { type: '📝 Template', title: 'Monthly Budget Spreadsheet', description: 'Our most popular template - track income, expenses, and savings goals all in one place.' },
        { type: '🎧 Podcast', title: 'Financial Wellness Podcast', description: 'Weekly episodes featuring expert interviews, success stories, and actionable advice.' },
        { type: '📊 Assessment', title: 'Financial Health Check', description: 'Take our 5-minute assessment to understand your current financial wellness score.' }
    ]

    return (
        <section className="resources" id="resources">
            <div className="container">
                <div className="section-header">
                    <h2><span className="gradient-text">Resources</span> & Tools</h2>
                    <p>Free financial wellness resources to help you get started</p>
                </div>
                <div className="resources-grid">
                    {resources.map((resource, index) => (
                        <div key={index} className="resource-card">
                            <div className="resource-type">{resource.type}</div>
                            <h3>{resource.title}</h3>
                            <p>{resource.description}</p>
                            <button className="btn-service">Download Free →</button>
                        </div>
                    ))}
                </div>
                <div className="newsletter-signup">
                    <h3>Get Weekly Financial Wellness Tips</h3>
                    <p>Join 50,000+ professionals receiving our newsletter</p>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn-primary">
                            {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Resources
