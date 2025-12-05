import { useState } from 'react'
import './Our.css'

const OurImpact = () => {
    return (
        <div className="our-impact-page">
            {/* Top Banner */}
            <div className="top-banner">
                <div className="banner-content">
                    <span className="banner-text">Download Free — The Employee Financial Well-being Guide</span>
                    <button className="download-guide-btn">
                        Download Guide
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <div className="impact-hero">
                <div className="container">
                    <h1 className="impact-title">
                        From one conversation to countless calm minds.
                    </h1>
                    <p className="impact-subtitle">
                        This is what financial peace looks like.
                    </p>
                    <p className="impact-description">
                        Real change doesn't make noise — it quietly shifts how people live, work, and feel.
                    </p>
                </div>
            </div>

            {/* Impact Stories Section */}
            <div className="impact-stories-section">
                <div className="container">
                    {/* Tech Startup Story */}
                    <div className="impact-story">
                        <div className="story-header">
                            <div className="story-icon">💻</div>
                            <h3 className="story-company">Tech Startup</h3>
                            <span className="story-size">150 employees</span>
                        </div>

                        <div className="story-content">
                            <div className="story-column">
                                <div className="column-label before">Before</div>
                                <p className="story-text">
                                    High turnover. Exit interviews revealed financial stress was a major factor.
                                    Young workforce juggling student loans, credit cards, and equity confusion.
                                </p>
                            </div>

                            <div className="story-divider"></div>

                            <div className="story-column">
                                <div className="column-label after">After</div>
                                <p className="story-text">
                                    Launched monthly webinars + 1-on-1 coaching. Retention improved by 23%.
                                    Employee engagement scores rose. People now ask about stock options in onboarding.
                                </p>
                            </div>
                        </div>

                        <div className="story-stats">
                            <div className="stat-item-inline">
                                <span className="stat-value">23%</span>
                                <span className="stat-label-inline">↑ Retention</span>
                            </div>
                            <div className="stat-item-inline">
                                <span className="stat-value">4.8/5</span>
                                <span className="stat-label-inline">Avg. Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Logistics & Supply Firm Story */}
                    <div className="impact-story">
                        <div className="story-header">
                            <div className="story-icon">🚚</div>
                            <h3 className="story-company">Logistics & Supply Firm</h3>
                            <span className="story-size">400 employees</span>
                        </div>

                        <div className="story-content">
                            <div className="story-column">
                                <div className="column-label before">Before</div>
                                <p className="story-text">
                                    Blue-collar workforce. Payday loan usage was quietly rising.
                                    No structured financial support beyond the standard 401(k).
                                </p>
                            </div>

                            <div className="story-divider"></div>

                            <div className="story-column">
                                <div className="column-label after">After</div>
                                <p className="story-text">
                                    Introduced on-site webinars in Hindi & English. Coaches available via video.
                                    Emergency fund adoption up. Payday loan dependency dropped measurably.
                                </p>
                            </div>
                        </div>

                        <div className="story-stats">
                            <div className="stat-item-inline">
                                <span className="stat-value">18%</span>
                                <span className="stat-label-inline">↓ Payday Loans</span>
                            </div>
                            <div className="stat-item-inline">
                                <span className="stat-value">67%</span>
                                <span className="stat-label-inline">Built Emergency Fund</span>
                            </div>
                        </div>
                    </div>

                    {/* Retail Chain Story */}
                    <div className="impact-story">
                        <div className="story-header">
                            <div className="story-icon">🏪</div>
                            <h3 className="story-company">Retail Chain</h3>
                            <span className="story-size">1200 employees</span>
                        </div>

                        <div className="story-content">
                            <div className="story-column">
                                <div className="column-label before">Before</div>
                                <p className="story-text">
                                    Multi-location. Varied income levels. Financial benefits existed but no one used them.
                                    Low awareness, high anxiety around money matters.
                                </p>
                            </div>

                            <div className="story-divider"></div>

                            <div className="story-column">
                                <div className="column-label after">After</div>
                                <p className="story-text">
                                    Rolled out app-based learning + live Q&As. Benefits utilization surged.
                                    Employees started actually reading their payslips and asking smarter questions.
                                </p>
                            </div>
                        </div>

                        <div className="story-stats">
                            <div className="stat-item-inline">
                                <span className="stat-value">41%</span>
                                <span className="stat-label-inline">↑ Benefits Usage</span>
                            </div>
                            <div className="stat-item-inline">
                                <span className="stat-value">2,400+</span>
                                <span className="stat-label-inline">Questions Answered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trusted By Section */}
            <div className="trusted-section">
                <div className="container">
                    <h3 className="trusted-title">Trusted by institutions</h3>
                    <div className="trusted-logos">
                        <div className="logo-item">Razorpay</div>
                        <div className="logo-item">Meesho</div>
                        <div className="logo-item">CRED</div>
                        <div className="logo-item">Swiggy</div>
                        <div className="logo-item">Zomato</div>
                    </div>
                </div>
            </div>

            {/* Why Choose Section */}
            <div className="why-choose-section">
                <div className="container">
                    <h2 className="section-title-center">Why Companies Choose Finsage</h2>
                    <div className="why-choose-grid">
                        <div className="why-card">
                            <div className="why-number">14x</div>
                            <p className="why-label">ROI on employee productivity</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">4.9/5</div>
                            <p className="why-label">Average coach satisfaction</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">87%</div>
                            <p className="why-label">Report reduced financial stress</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">3hr</div>
                            <p className="why-label">Avg. time saved per employee/month</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Bring peace to your workplace.</h2>
                        <p className="cta-description">
                            Let's talk about how Finsage can support your team's financial well-being.
                        </p>
                        <button className="cta-button">
                            Get Started
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurImpact
