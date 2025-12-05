import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ToolPage.css'

const EmergencyFundCalculator = () => {
    const [formData, setFormData] = useState({
        monthlyExpenses: '',
        dependents: '0',
        jobStability: 'stable'
    })
    const [result, setResult] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const calculateEmergencyFund = (e) => {
        e.preventDefault()
        const monthlyExpenses = parseFloat(formData.monthlyExpenses)

        // Calculate recommended months based on situation
        let recommendedMonths = 3

        if (formData.dependents === '1-2') {
            recommendedMonths = 4
        } else if (formData.dependents === '3+') {
            recommendedMonths = 5
        }

        if (formData.jobStability === 'unstable') {
            recommendedMonths += 2
        } else if (formData.jobStability === 'self-employed') {
            recommendedMonths += 3
        }

        const minFund = monthlyExpenses * 3
        const recommendedFund = monthlyExpenses * recommendedMonths
        const maxFund = monthlyExpenses * 6

        setResult({
            minFund,
            recommendedFund,
            maxFund,
            recommendedMonths
        })
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount)
    }

    return (
        <div className="tool-page">
            <div className="tool-container">
                <Link to="/" className="back-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Resources
                </Link>

                <div className="tool-header">
                    <div className="tool-icon">🧮</div>
                    <h1 className="tool-title">Emergency Fund Calculator</h1>
                    <p className="tool-description">
                        Calculate exactly how much you should have saved for emergencies based on your situation
                    </p>
                </div>

                <div className="tool-content">
                    <form className="tool-form" onSubmit={calculateEmergencyFund}>
                        <div className="form-group">
                            <label htmlFor="monthlyExpenses">Monthly Expenses (₹) *</label>
                            <input
                                type="number"
                                id="monthlyExpenses"
                                name="monthlyExpenses"
                                value={formData.monthlyExpenses}
                                onChange={handleChange}
                                placeholder="50000"
                                required
                                min="0"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dependents">Number of Dependents *</label>
                            <select
                                id="dependents"
                                name="dependents"
                                value={formData.dependents}
                                onChange={handleChange}
                                className="form-input"
                            >
                                <option value="0">No dependents</option>
                                <option value="1-2">1-2 dependents</option>
                                <option value="3+">3 or more dependents</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="jobStability">Job Stability *</label>
                            <select
                                id="jobStability"
                                name="jobStability"
                                value={formData.jobStability}
                                onChange={handleChange}
                                className="form-input"
                            >
                                <option value="stable">Stable job</option>
                                <option value="unstable">Unstable/Contract job</option>
                                <option value="self-employed">Self-employed</option>
                            </select>
                        </div>

                        <button type="submit" className="calculate-btn">
                            Calculate Emergency Fund
                        </button>
                    </form>

                    {result && (
                        <div className="result-container">
                            <h3 className="result-title">Your Emergency Fund Recommendation</h3>
                            <div className="result-grid">
                                <div className="result-card">
                                    <div className="result-label">Minimum Fund</div>
                                    <div className="result-value">{formatCurrency(result.minFund)}</div>
                                    <div className="result-note">3 months of expenses</div>
                                </div>
                                <div className="result-card recommended">
                                    <div className="result-label">Recommended Fund</div>
                                    <div className="result-value">{formatCurrency(result.recommendedFund)}</div>
                                    <div className="result-note">{result.recommendedMonths} months of expenses</div>
                                </div>
                                <div className="result-card">
                                    <div className="result-label">Maximum Fund</div>
                                    <div className="result-value">{formatCurrency(result.maxFund)}</div>
                                    <div className="result-note">6 months of expenses</div>
                                </div>
                            </div>
                            <div className="result-info">
                                <p>💡 <strong>Tip:</strong> Start by building your minimum emergency fund, then gradually increase it to the recommended amount based on your circumstances.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EmergencyFundCalculator
