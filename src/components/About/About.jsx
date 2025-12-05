import './About.css'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About <span className="gradient-text">FinSage</span></h2>
                        <p className="about-lead">
                            We believe that financial wellness is the foundation of workplace happiness and productivity.
                        </p>
                        <p>
                            FinSage was founded with a simple mission: to help companies create a culture where employees feel financially secure, confident, and empowered. Through expert-led education, personalized coaching, and actionable resources, we're transforming how organizations support their teams' financial well-being.
                        </p>
                        <p>
                            Our team of certified financial advisors and wellness experts brings decades of experience in helping individuals and organizations achieve financial clarity. We've worked with companies of all sizes, from startups to Fortune 500 enterprises, creating custom programs that deliver real, measurable results.
                        </p>
                        <div className="about-features">
                            <div className="about-feature">
                                <div className="feature-icon">🎓</div>
                                <h4>Expert Team</h4>
                                <p>Certified financial advisors and wellness coaches</p>
                            </div>
                            <div className="about-feature">
                                <div className="feature-icon">💼</div>
                                <h4>Proven Track Record</h4>
                                <p>500+ companies trust us with their team's financial wellness</p>
                            </div>
                            <div className="about-feature">
                                <div className="feature-icon">🏆</div>
                                <h4>Award Winning</h4>
                                <p>Recognized leader in workplace financial education</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
