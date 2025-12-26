import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
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
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '7f6d89f4-0467-46fa-a5c0-3243e974f39a',
          ...formData,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus({ sending: false, sent: true, error: null })
        setFormData({ name: '', email: '', subject: '', message: '' })

        setTimeout(() => {
          setStatus({ sending: false, sent: false, error: null })
        }, 5000)
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      setStatus({
        sending: false,
        sent: false,
        error: 'Failed to send message. Please try again.',
      })
    }
  }

  return (
    <div className="contact section">
      <div className="container">
        <h1 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h1>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="8"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status.error && (
              <div className="form-status error">❌ {status.error}</div>
            )}

            {status.sent && (
              <div className="form-status success">
                ✅ Message sent successfully!
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
  )
}

export default Contact

