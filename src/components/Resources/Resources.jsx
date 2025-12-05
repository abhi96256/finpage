import { useState } from 'react'
import { Link } from 'react-router-dom'
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
        {
            type: '🧮 Calculator',
            title: 'Emergency Fund Calculator',
            description: 'Calculate exactly how much you should have saved for emergencies based on your situation.',
            buttonText: 'Try Tool →',
            link: '/tools/emergency-fund',
            isExternal: false
        },
        {
            type: '🧮 Calculator',
            title: 'Tax Calculator',
            description: 'Calculate income tax based on current tax slabs and understand your tax liability.',
            buttonText: 'Try Tool →',
            link: '/tools/tax-calculator',
            isExternal: false
        },
        {
            type: '📊 Assessment',
            title: 'Financial Health Check',
            description: 'Take our 5-minute assessment to understand your current financial wellness score.',
            buttonText: 'Start Assessment →',
            link: '/tools/financial-health-check',
            isExternal: false
        }
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
                            {resource.isExternal ? (
                                <button className="btn-service">{resource.buttonText}</button>
                            ) : (
                                <Link to={resource.link} className="btn-service">{resource.buttonText}</Link>
                            )}
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
