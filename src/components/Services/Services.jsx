import './Services.css'

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="section-header">
                    <h2>Our <span className="gradient-text">Services</span></h2>
                    <p>Comprehensive financial wellness solutions for your workplace</p>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="20" fill="url(#serviceGrad1)" opacity="0.2" />
                                <path d="M24 14C18.48 14 14 18.48 14 24C14 29.52 18.48 34 24 34C29.52 34 34 29.52 34 24C34 18.48 29.52 14 24 14ZM24 28C21.79 28 20 26.21 20 24C20 21.79 21.79 20 24 20C26.21 20 28 21.79 28 24C28 26.21 26.21 28 24 28Z" fill="url(#serviceGrad1)" />
                                <defs>
                                    <linearGradient id="serviceGrad1" x1="14" y1="14" x2="34" y2="34">
                                        <stop offset="0%" stopColor="#10b981" />
                                        <stop offset="100%" stopColor="#059669" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3>1:1 Money Check-up</h3>
                        <p>Personalized financial coaching sessions with certified experts. Get one-on-one guidance tailored to your unique financial situation and goals.</p>
                        <ul className="service-features">
                            <li>✓ Personal Budget Analysis</li>
                            <li>✓ Debt Management Strategy</li>
                            <li>✓ Investment Planning</li>
                            <li>✓ Retirement Preparation</li>
                        </ul>
                        <button className="btn-service">Learn More →</button>
                    </div>

                    <div className="service-card featured">
                        <div className="featured-badge">Most Popular</div>
                        <div className="service-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="20" fill="url(#serviceGrad2)" opacity="0.2" />
                                <path d="M32 18H28V16C28 13.79 26.21 12 24 12C21.79 12 20 13.79 20 16V18H16C14.9 18 14 18.9 14 20V32C14 33.1 14.9 34 16 34H32C33.1 34 34 33.1 34 32V20C34 18.9 33.1 18 32 18ZM24 28C22.9 28 22 27.1 22 26C22 24.9 22.9 24 24 24C25.1 24 26 24.9 26 26C26 27.1 25.1 28 24 28ZM26.1 18H21.9V16C21.9 14.84 22.84 13.9 24 13.9C25.16 13.9 26.1 14.84 26.1 16V18Z" fill="url(#serviceGrad2)" />
                                <defs>
                                    <linearGradient id="serviceGrad2" x1="14" y1="12" x2="34" y2="34">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#1d4ed8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3>Financial Wellness Campaigns</h3>
                        <p>Comprehensive financial education programs designed for your entire organization. Build a culture of financial confidence.</p>
                        <ul className="service-features">
                            <li>✓ Expert-Led Webinars</li>
                            <li>✓ Interactive Workshops</li>
                            <li>✓ Custom Content Library</li>
                            <li>✓ Team Challenges</li>
                        </ul>
                        <button className="btn-service">Learn More →</button>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="20" fill="url(#serviceGrad3)" opacity="0.2" />
                                <path d="M32 14H16C14.9 14 14 14.9 14 16V32C14 33.1 14.9 34 16 34H32C33.1 34 34 33.1 34 32V16C34 14.9 33.1 14 32 14ZM30 30H18V28H30V30ZM30 26H18V24H30V26ZM30 22H18V20H30V22ZM30 18H18V16H30V18Z" fill="url(#serviceGrad3)" />
                                <defs>
                                    <linearGradient id="serviceGrad3" x1="14" y1="14" x2="34" y2="34">
                                        <stop offset="0%" stopColor="#8b5cf6" />
                                        <stop offset="100%" stopColor="#6d28d9" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3>Resources & Digital Tools</h3>
                        <p>Access our comprehensive library of financial resources, calculators, and planning tools available 24/7 for your team.</p>
                        <ul className="service-features">
                            <li>✓ Budget Calculators</li>
                            <li>✓ Financial Guides</li>
                            <li>✓ Video Tutorials</li>
                            <li>✓ Planning Templates</li>
                        </ul>
                        <button className="btn-service">Learn More →</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
