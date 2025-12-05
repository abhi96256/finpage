import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ToolPage.css'

const TaxCalculator = () => {
    const [formData, setFormData] = useState({
        annualIncome: '',
        taxRegime: 'old',
        deductions: ''
    })
    const [result, setResult] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const calculateTax = (e) => {
        e.preventDefault()
        const income = parseFloat(formData.annualIncome)
        const deductions = parseFloat(formData.deductions) || 0

        let taxableIncome = income
        let tax = 0

        if (formData.taxRegime === 'old') {
            // Old Tax Regime with deductions
            taxableIncome = income - deductions

            // Old regime slabs
            if (taxableIncome <= 250000) {
                tax = 0
            } else if (taxableIncome <= 500000) {
                tax = (taxableIncome - 250000) * 0.05
            } else if (taxableIncome <= 1000000) {
                tax = 12500 + (taxableIncome - 500000) * 0.20
            } else {
                tax = 12500 + 100000 + (taxableIncome - 1000000) * 0.30
            }
        } else {
            // New Tax Regime (no deductions)
            if (taxableIncome <= 300000) {
                tax = 0
            } else if (taxableIncome <= 600000) {
                tax = (taxableIncome - 300000) * 0.05
            } else if (taxableIncome <= 900000) {
                tax = 15000 + (taxableIncome - 600000) * 0.10
            } else if (taxableIncome <= 1200000) {
                tax = 15000 + 30000 + (taxableIncome - 900000) * 0.15
            } else if (taxableIncome <= 1500000) {
                tax = 15000 + 30000 + 45000 + (taxableIncome - 1200000) * 0.20
            } else {
                tax = 15000 + 30000 + 45000 + 60000 + (taxableIncome - 1500000) * 0.30
            }
        }

        // Add 4% cess
        const cess = tax * 0.04
        const totalTax = tax + cess

        setResult({
            grossIncome: income,
            deductions: deductions,
            taxableIncome: taxableIncome,
            tax: tax,
            cess: cess,
            totalTax: totalTax,
            netIncome: income - totalTax,
            effectiveRate: ((totalTax / income) * 100).toFixed(2)
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
                    <h1 className="tool-title">Tax Calculator</h1>
                    <p className="tool-description">
                        Calculate income tax based on current tax slabs and understand your tax liability
                    </p>
                </div>

                <div className="tool-content">
                    <form className="tool-form" onSubmit={calculateTax}>
                        <div className="form-group">
                            <label htmlFor="annualIncome">Annual Income (₹) *</label>
                            <input
                                type="number"
                                id="annualIncome"
                                name="annualIncome"
                                value={formData.annualIncome}
                                onChange={handleChange}
                                placeholder="1200000"
                                required
                                min="0"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="taxRegime">Tax Regime *</label>
                            <select
                                id="taxRegime"
                                name="taxRegime"
                                value={formData.taxRegime}
                                onChange={handleChange}
                                className="form-input"
                            >
                                <option value="old">Old Tax Regime (with deductions)</option>
                                <option value="new">New Tax Regime (without deductions)</option>
                            </select>
                        </div>

                        {formData.taxRegime === 'old' && (
                            <div className="form-group">
                                <label htmlFor="deductions">80C Deductions (₹)</label>
                                <input
                                    type="number"
                                    id="deductions"
                                    name="deductions"
                                    value={formData.deductions}
                                    onChange={handleChange}
                                    placeholder="150000"
                                    min="0"
                                    max="150000"
                                    className="form-input"
                                />
                                <small style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                                    Maximum ₹1,50,000 under Section 80C
                                </small>
                            </div>
                        )}

                        <button type="submit" className="calculate-btn">
                            Calculate Tax
                        </button>
                    </form>

                    {result && (
                        <div className="result-container">
                            <h3 className="result-title">Your Tax Calculation</h3>

                            <div className="tax-breakdown">
                                <div className="breakdown-row">
                                    <span className="breakdown-label">Gross Annual Income</span>
                                    <span className="breakdown-value">{formatCurrency(result.grossIncome)}</span>
                                </div>
                                {result.deductions > 0 && (
                                    <div className="breakdown-row">
                                        <span className="breakdown-label">Less: Deductions (80C)</span>
                                        <span className="breakdown-value">- {formatCurrency(result.deductions)}</span>
                                    </div>
                                )}
                                <div className="breakdown-row total">
                                    <span className="breakdown-label">Taxable Income</span>
                                    <span className="breakdown-value">{formatCurrency(result.taxableIncome)}</span>
                                </div>
                            </div>

                            <div className="result-grid" style={{ marginTop: '2rem' }}>
                                <div className="result-card">
                                    <div className="result-label">Income Tax</div>
                                    <div className="result-value">{formatCurrency(result.tax)}</div>
                                </div>
                                <div className="result-card">
                                    <div className="result-label">Cess (4%)</div>
                                    <div className="result-value">{formatCurrency(result.cess)}</div>
                                </div>
                                <div className="result-card recommended">
                                    <div className="result-label">Total Tax</div>
                                    <div className="result-value">{formatCurrency(result.totalTax)}</div>
                                </div>
                            </div>

                            <div className="net-income-section">
                                <div className="net-income-card">
                                    <h4>Net Annual Income (After Tax)</h4>
                                    <div className="net-amount">{formatCurrency(result.netIncome)}</div>
                                    <div className="monthly-amount">
                                        Monthly ≈ {formatCurrency(result.netIncome / 12)}
                                    </div>
                                </div>
                            </div>

                            <div className="result-info">
                                <p>
                                    💡 <strong>Effective Tax Rate:</strong> {result.effectiveRate}% of your gross income
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TaxCalculator
