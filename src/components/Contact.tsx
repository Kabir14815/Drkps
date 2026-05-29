import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import SuccessModal from './SuccessModal'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <MapPin size={16} />
            Contact Us
          </span>
          <h2 className="section-title">Contact KPS Clinic</h2>
          <p className="section-description">
            Have questions or need assistance? Reach out to KPS Clinic
            through any of the following channels. We are here to help 24/7.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Cards */}
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <h4>Our Location</h4>
              <p>#1037, Sector 11</p>
              <p>Civil Hospital Road, Kharar - 140301</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <h4>Phone Numbers</h4>
              <p><a href="tel:08288013769">082880 13769</a></p>
              <p><a href="tel:08288013769">Emergency: 082880 13769</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <h4>Email Address</h4>
              <p><a href="mailto:drkpsclinic@gmail.com">drkpsclinic@gmail.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <h4>Working Hours</h4>
              <p>Mon - Sun: 9 AM - 9 PM</p>
              <p>All Days Open</p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      aria-label="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      aria-label="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="map-wrapper">
              <div className="map-placeholder">
                <MapPin size={48} />
                <p>Interactive Map</p>
                <span>#1037, Sector 11, Civil Hospital Road, Kharar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Sent!"
        message="Thank you for reaching out to Dr. KPS Clinic. We have received your message and will get back to you shortly."
      />
    </section>
  )
}

export default Contact
