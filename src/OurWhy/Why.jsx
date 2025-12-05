import './Why.css'

const OurWhy = () => {
    return (
        <div className="our-why-page">
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
            <div className="why-hero">
                <div className="container">
                    <h1 className="why-title">
                        Because financial stress shouldn't be part of the job description.
                    </h1>
                    <p className="why-description">
                        We exist to change the way companies care for their people — starting with their financial well-being.
                    </p>
                </div>
            </div>

            {/* The Problem Section */}
            <div className="problem-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">The Problem</span>
                        <h2 className="section-title">Financial stress is the silent productivity killer.</h2>
                    </div>

                    <div className="stats-grid-large">
                        <div className="stat-card">
                            <div className="stat-number-large">78%</div>
                            <p className="stat-description">of employees say financial stress affects their work performance</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number-large">60%</div>
                            <p className="stat-description">admit they think about money problems during work hours</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number-large">₹3L+</div>
                            <p className="stat-description">average cost per employee in lost productivity annually</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Solution Section */}
            <div className="solution-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Our Solution</span>
                        <h2 className="section-title">Financial wellness that actually works.</h2>
                        <p className="section-subtitle">
                            We don't just talk about money—we help your team take control of it.
                        </p>
                    </div>

                    <div className="solution-cards">
                        <div className="solution-card">
                            <div className="solution-icon">🎯</div>
                            <h3 className="solution-card-title">Expert Guidance</h3>
                            <p className="solution-card-description">
                                Certified financial coaches who understand Indian salaries, benefits, and life stages.
                            </p>
                        </div>

                        <div className="solution-card">
                            <div className="solution-icon">📚</div>
                            <h3 className="solution-card-title">Actionable Education</h3>
                            <p className="solution-card-description">
                                No jargon. Just clear, practical advice on taxes, investments, insurance, and planning.
                            </p>
                        </div>

                        <div className="solution-card">
                            <div className="solution-icon">💝</div>
                            <h3 className="solution-card-title">Personalized Support</h3>
                            <p className="solution-card-description">
                                1-on-1 coaching, group webinars, and on-demand resources tailored to your team's needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="story-section">
                <div className="container">
                    <div className="story-content-wrapper">
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                alt="Team collaboration"
                            />
                        </div>
                        <div className="story-text">
                            <span className="section-label">Our Story</span>
                            <h2 className="story-title">We started where most people do — stressed about money.</h2>
                            <p className="story-description">
                                Finsage was born from a simple observation: talented people were leaving great jobs
                                because they couldn't figure out their finances. We saw friends miss out on stock options,
                                overpay on taxes, and delay life goals — not because they weren't smart, but because
                                financial literacy wasn't part of workplace culture.
                            </p>
                            <p className="story-description">
                                So we built what we wished existed: a partner for companies who want to care for their
                                people beyond the paycheck. Today, we work with startups, SMEs, and large enterprises
                                to bring financial clarity, confidence, and peace to thousands of employees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Team Section */}
            <div className="team-section">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-label">Our Team</span>
                        <h2 className="section-title">Meet the people behind Finsage.</h2>
                        <p className="section-subtitle">
                            A mix of financial experts, educators, and empaths who love making complex stuff simple.
                        </p>
                    </div>

                    <div className="team-grid">
                        <div className="team-card">
                            <div className="team-image">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces" alt="Team member" />
                            </div>
                            <h3 className="team-name">Rahul Sharma</h3>
                            <p className="team-role">Founder & CEO</p>
                            <p className="team-bio">Ex-consultant turned financial wellness advocate. CFP certified.</p>
                        </div>

                        <div className="team-card">
                            <div className="team-image">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces" alt="Team member" />
                            </div>
                            <h3 className="team-name">Priya Desai</h3>
                            <p className="team-role">Head of Coaching</p>
                            <p className="team-bio">15+ years helping people make smarter money decisions.</p>
                        </div>

                        <div className="team-card">
                            <div className="team-image">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces" alt="Team member" />
                            </div>
                            <h3 className="team-name">Arjun Mehta</h3>
                            <p className="team-role">Lead Financial Coach</p>
                            <p className="team-bio">Specializes in tax planning and investment strategies.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open Roles Section */}
            <div className="roles-section">
                <div className="container">
                    <div className="roles-content center">
                        <span className="section-label">Join Us</span>
                        <h2 className="section-title">Open Roles</h2>
                        <p className="roles-description">
                            We're growing. If you're passionate about financial wellness and want to make a real impact,
                            we'd love to hear from you.
                        </p>
                        <div className="roles-list">
                            <div className="role-item">
                                <div className="role-info">
                                    <h3 className="role-title">Senior Financial Coach</h3>
                                    <p className="role-location">Remote • Full-time</p>
                                </div>
                                <button className="role-apply-btn">Apply Now</button>
                            </div>

                            <div className="role-item">
                                <div className="role-info">
                                    <h3 className="role-title">Content Writer (Finance)</h3>
                                    <p className="role-location">Hybrid • Full-time</p>
                                </div>
                                <button className="role-apply-btn">Apply Now</button>
                            </div>

                            <div className="role-item">
                                <div className="role-info">
                                    <h3 className="role-title">Partnerships Manager</h3>
                                    <p className="role-location">Bangalore • Full-time</p>
                                </div>
                                <button className="role-apply-btn">Apply Now</button>
                            </div>
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

export default OurWhy
