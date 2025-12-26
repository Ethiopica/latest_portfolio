import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// EmailJS Configuration - Replace these with your actual IDs from emailjs.com
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({
    sending: false,
    sent: false,
    error: null,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ sending: true, sent: false, error: null })

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      
      setStatus({ sending: false, sent: true, error: null })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ sending: false, sent: false, error: null })
      }, 5000)
    } catch (error) {
      console.error('EmailJS error:', error.text || error.message || error)
      setStatus({ sending: false, sent: false, error: error.text || 'Failed to send message. Please try again.' })
    }
  }

  return (
    <div className="contact section">
      <div className="container">
        <h1 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h1>

        <div className="contact-intro">
          <p>
            Have a project in mind or just want to chat? Feel free to reach out!
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
        </div>

        <div className="contact-form-container">
          <div className="contact-form-wrapper">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="8"
                  required
                ></textarea>
              </div>

              {status.error && (
                <div className="form-status error">
                  ❌ {status.error}
                </div>
              )}

              {status.sent && (
                <div className="form-status success">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={status.sending}
              >
                {status.sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
