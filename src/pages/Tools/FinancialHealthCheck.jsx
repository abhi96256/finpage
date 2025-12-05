import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ToolPage.css'

const FinancialHealthCheck = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [answers, setAnswers] = useState({})
    const [result, setResult] = useState(null)

    const questions = [
        {
            id: 'savings',
            question: 'Do you have savings equal to at least 3 months of expenses?',
            options: [
                { value: 5, label: 'Yes, 6+ months' },
                { value: 3, label: 'Yes, 3-6 months' },
                { value: 1, label: 'Less than 3 months' },
                { value: 0, label: 'No savings' }
            ]
        },
        {
            id: 'debt',
            question: 'What is your current debt situation?',
            options: [
                { value: 5, label: 'No debt' },
                { value: 3, label: 'Manageable debt, paying on time' },
                { value: 1, label: 'High debt burden' },
                { value: 0, label: 'Struggling with debt payments' }
            ]
        },
        {
            id: 'budget',
            question: 'Do you track your monthly income and expenses?',
            options: [
                { value: 5, label: 'Yes, regularly and in detail' },
                { value: 3, label: 'Sometimes' },
                { value: 1, label: 'Rarely' },
                { value: 0, label: 'Never' }
            ]
        },
        {
            id: 'retirement',
            question: 'Are you saving for retirement?',
            options: [
                { value: 5, label: 'Yes, consistently' },
                { value: 3, label: 'Yes, occasionally' },
                { value: 1, label: 'Planning to start soon' },
                { value: 0, label: 'Not yet' }
            ]
        },
        {
            id: 'insurance',
            question: 'Do you have health and life insurance?',
            options: [
                { value: 5, label: 'Yes, both and adequate' },
                { value: 3, label: 'Yes, but may need more coverage' },
                { value: 1, label: 'Only one type' },
                { value: 0, label: 'No insurance' }
            ]
        }
    ]

    const handleAnswer = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value })
        if (currentStep < questions.length) {
            setCurrentStep(currentStep + 1)
        } else {
            calculateScore()
        }
    }

    const calculateScore = () => {
        const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
        const maxScore = questions.length * 5
        const percentage = (totalScore / maxScore) * 100

        let rating, message, color

        if (percentage >= 80) {
            rating = 'Excellent'
            message = 'Your financial health is excellent! Keep up the great work.'
            color = '#10b981'
        } else if (percentage >= 60) {
            rating = 'Good'
            message = 'Your financial health is good, but there\'s room for improvement.'
            color = '#3b82f6'
        } else if (percentage >= 40) {
            rating = 'Fair'
            message = 'Your financial health needs attention. Consider reviewing your finances.'
            color = '#f59e0b'
        } else {
            rating = 'Needs Improvement'
            message = 'Your financial health needs immediate attention. Let\'s work on it together.'
            color = '#ef4444'
        }

        setResult({
            score: totalScore,
            maxScore,
            percentage: Math.round(percentage),
            rating,
            message,
            color
        })
    }

    const restartAssessment = () => {
        setCurrentStep(1)
        setAnswers({})
        setResult(null)
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
                    <div className="tool-icon">📊</div>
                    <h1 className="tool-title">Financial Health Check</h1>
                    <p className="tool-description">
                        Take our 5-minute assessment to understand your current financial wellness score
                    </p>
                </div>

                {!result ? (
                    <div className="tool-content">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${(currentStep / questions.length) * 100}%` }}
                            ></div>
                        </div>
                        <div className="progress-text">
                            Question {currentStep} of {questions.length}
                        </div>

                        <div className="question-container">
                            <h3 className="question-text">{questions[currentStep - 1].question}</h3>
                            <div className="options-grid">
                                {questions[currentStep - 1].options.map((option, index) => (
                                    <button
                                        key={index}
                                        className="option-button"
                                        onClick={() => handleAnswer(questions[currentStep - 1].id, option.value)}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="result-container">
                        <div className="score-circle" style={{ borderColor: result.color }}>
                            <div className="score-percentage" style={{ color: result.color }}>
                                {result.percentage}%
                            </div>
                            <div className="score-rating">{result.rating}</div>
                        </div>
                        <p className="result-message">{result.message}</p>
                        <div className="result-details">
                            <p>Your Score: <strong>{result.score} / {result.maxScore}</strong></p>
                        </div>
                        <button className="restart-btn" onClick={restartAssessment}>
                            Take Assessment Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FinancialHealthCheck
