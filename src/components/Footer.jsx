import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <div className="footer-contact">
              <div className="footer-item">
                <span className="footer-icon">📧</span>
                <a href="mailto:eliobais@gmail.com">eliobais@gmail.com</a>
              </div>
              <div className="footer-item">
                <span className="footer-icon">📱</span>
                <a href="tel:+358403232573">+358 40 323 2573</a>
              </div>
              <div className="footer-item">
                <span className="footer-icon">📍</span>
                <span>Helsinki, Finland</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="GitHub">
                <i className="devicon-github-original"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LinkedIn">
                <i className="devicon-linkedin-plain"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          <p>Elias B. Tekle</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

