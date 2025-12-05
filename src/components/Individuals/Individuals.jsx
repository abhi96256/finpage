import './Individuals.css'

const Individuals = () => {
    const plans = [
        {
            title: '🎯 Personalized 1:1 Coaching',
            description: 'Work directly with a certified financial advisor to create a customized plan for your unique situation.',
            features: [
                'Budget creation and optimization',
                'Debt payoff strategies',
                'Investment planning',
                'Retirement preparation',
                'Emergency fund building'
            ],
            price: '₹2,999/session',
            featured: false
        },
        {
            title: '💎 Complete Financial Makeover',
            description: 'A comprehensive 3-month program to transform your entire financial life.',
            features: [
                '6 one-on-one coaching sessions',
                'Custom financial plan',
                'Investment portfolio review',
                'Tax optimization strategies',
                'Lifetime access to resources',
                'Email support between sessions'
            ],
            price: '₹15,999',
            originalPrice: '₹24,999',
            featured: true
        },
        {
            title: '📚 DIY Resources Package',
            description: 'Access our complete library of tools, templates, and educational content.',
            features: [
                'Budget spreadsheet templates',
                'Investment calculators',
                '50+ educational videos',
                'Monthly newsletter',
                'Community forum access'
            ],
            price: '₹999/month',
            featured: false
        }
    ]

    return (
        <section className="individuals" id="individuals">
            <div className="container">
                <div className="section-header">
                    <h2>For <span className="gradient-text">Individuals</span></h2>
                    <p>Take control of your financial future with personalized guidance and support</p>
                </div>
                <div className="individuals-content">
                    {plans.map((plan, index) => (
                        <div key={index} className={`individual-card ${plan.featured ? 'featured' : ''}`}>
                            {plan.featured && <div className="featured-badge">Most Popular</div>}
                            <div className="card-header">
                                <h3>{plan.title}</h3>
                            </div>
                            <p>{plan.description}</p>
                            <ul>
                                {plan.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <p className="price">
                                {plan.price}
                                {plan.originalPrice && <span className="original-price"> {plan.originalPrice}</span>}
                            </p>
                            <button className="btn-primary">{plan.featured ? 'Get Started Today' : 'Book Your Session'}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Individuals
