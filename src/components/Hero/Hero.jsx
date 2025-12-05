import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [stats, setStats] = useState({
        companies: 0,
        employees: 0,
        satisfaction: 0
    })

    useEffect(() => {
        // Animate counters
        const duration = 2000
        const steps = 60
        const interval = duration / steps

        let currentStep = 0
        const timer = setInterval(() => {
            currentStep++
            const progress = currentStep / steps

            setStats({
                companies: Math.floor(progress * 500),
                employees: Math.floor(progress * 10000),
                satisfaction: Math.floor(progress * 95)
            })

            if (currentStep >= steps) {
                clearInterval(timer)
                setStats({ companies: 500, employees: 10000, satisfaction: 95 })
            }
        }, interval)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Financial peace for
                            <span className="gradient-text"> modern workplaces</span>
                        </h1>
                        <p className="hero-subtitle">
                            Because when money feels calm, work feels lighter.
                        </p>
                        <p className="hero-description">
                            FinSage helps companies build a culture of financial clarity, care and confidence with expert-led webinars, 1-on-1 coaching, and actionable finance education for your team.
                        </p>
                        <div className="hero-cta">
                            <button className="btn-large btn-primary">Book Your Call Now</button>
                            <button className="btn-large btn-outline">Download Free Guide</button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <h3>{stats.companies}+</h3>
                                <p>Companies Served</p>
                            </div>
                            <div className="stat">
                                <h3>{stats.employees.toLocaleString()}+</h3>
                                <p>Employees Helped</p>
                            </div>
                            <div className="stat">
                                <h3>{stats.satisfaction}%</h3>
                                <p>Satisfaction Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="floating-card card-1">
                            <div className="card-icon">💰</div>
                            <h4>Financial Wellness</h4>
                            <p>Expert guidance for your team</p>
                        </div>
                        <div className="floating-card card-2">
                            <div className="card-icon">📊</div>
                            <h4>Growth Tracking</h4>
                            <p>Monitor your progress</p>
                        </div>
                        <div className="floating-card card-3">
                            <div className="card-icon">🎯</div>
                            <h4>Goal Setting</h4>
                            <p>Achieve financial clarity</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-gradient"></div>
        </section>
    )
}

export default Hero
