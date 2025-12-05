import './Employers.css'

const Employers = () => {
    return (
        <section className="employers" id="employers">
            <div className="container">
                <div className="section-header">
                    <h2>For <span className="gradient-text">Employers</span></h2>
                    <p>Invest in your team's financial well-being and see the impact on your bottom line</p>
                </div>
                <div className="employers-grid">
                    <div className="employer-benefit">
                        <div className="benefit-icon">📈</div>
                        <h3>Increase Productivity</h3>
                        <p>Financially secure employees are 3x more focused and productive at work. Reduce financial stress distractions and boost overall performance.</p>
                    </div>
                    <div className="employer-benefit">
                        <div className="benefit-icon">🤝</div>
                        <h3>Improve Retention</h3>
                        <p>89% of employees say they'd stay longer at companies that care about their financial wellness. Reduce turnover costs significantly.</p>
                    </div>
                    <div className="employer-benefit">
                        <div className="benefit-icon">⭐</div>
                        <h3>Attract Top Talent</h3>
                        <p>Stand out in the job market with a comprehensive financial wellness program that candidates actually value.</p>
                    </div>
                    <div className="employer-benefit">
                        <div className="benefit-icon">💪</div>
                        <h3>Strengthen Culture</h3>
                        <p>Show your team you care about more than just their work output. Build a culture of support and empowerment.</p>
                    </div>
                </div>
                <div className="employer-cta">
                    <h3>Custom Solutions for Your Organization</h3>
                    <p>We tailor our programs to fit your company size, industry, and specific needs. From monthly webinars to comprehensive financial wellness campaigns, we've got you covered.</p>
                    <button className="btn-large btn-primary">Schedule a Demo</button>
                </div>
            </div>
        </section>
    )
}

export default Employers
