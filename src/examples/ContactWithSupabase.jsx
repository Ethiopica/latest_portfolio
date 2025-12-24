/**
 * EXAMPLE: Contact Form with Supabase Integration
 * 
 * To use this:
 * 1. Create a 'contacts' table in Supabase with columns:
 *    - id (uuid, primary key, default: gen_random_uuid())
 *    - name (text)
 *    - email (text)
 *    - subject (text)
 *    - message (text)
 *    - created_at (timestamptz, default: now())
 * 
 * 2. Set up Row Level Security (RLS):
 *    - Enable RLS on the table
 *    - Create a policy: INSERT for anon role (allows form submissions)
 * 
 * SQL to create the table:
 * 
 * CREATE TABLE contacts (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   name TEXT NOT NULL,
 *   email TEXT NOT NULL,
 *   subject TEXT NOT NULL,
 *   message TEXT NOT NULL,
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 * 
 * -- Enable RLS
 * ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
 * 
 * -- Allow anyone to insert (for contact form)
 * CREATE POLICY "Allow public inserts" ON contacts
 *   FOR INSERT TO anon
 *   WITH CHECK (true);
 */

import React, { useState } from 'react';
import { useSupabaseInsert } from '../hooks/useSupabase';
import './Contact.css';

const ContactWithSupabase = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { submitData, loading, error, success, reset } = useSupabaseInsert('contacts');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await submitData(formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => reset(), 5000);
    } catch (err) {
      console.error('Failed to submit:', err);
    }
  };

  return (
    <div className="contact section">
      <div className="container">
        <h1 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h1>

        <div className="contact-intro">
          <p>
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="contact-form-container">
          <div className="contact-form-wrapper">
            {/* Success Message */}
            {success && (
              <div className="form-success">
                ✅ Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="form-error">
                ❌ Something went wrong: {error}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithSupabase;


