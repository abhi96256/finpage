import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <div className="footer-logo">
                            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="18" fill="url(#footerGrad)" />
                                <path d="M20 8V32M12 16H28M14 24H26" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="footerGrad" x1="0" y1="0" x2="40" y2="40">
                                        <stop offset="0%" stopColor="#10b981" />
                                        <stop offset="100%" stopColor="#059669" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>FinSage</span>
                        </div>
                        <p className="footer-description">Building financial peace for modern workplaces.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="LinkedIn">💼</a>
                            <a href="#" aria-label="YouTube">▶️</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">For Employers</a></li>
                            <li><a href="#">For Individuals</a></li>
                            <li><a href="#">1:1 Coaching</a></li>
                            <li><a href="#">Webinars</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Refund Policy</a></li>
                            <li><a href="#">Compliance</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <p>hello@finsage.co</p>
                        <p>Available Mon-Fri, 9AM-6PM</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 FinSage. All rights reserved.</p>
                    <p>Designed with ❤️ for financial wellness</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
