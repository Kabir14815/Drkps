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
          <h2 className="section-title">Contact Dr. Gera's Clinic</h2>
          <p className="section-description">
            Have questions or need to book an appointment? Reach out to us
            through any of the following channels. We are here to help.
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
              <p>House No 939, Sector 9</p>
              <p>Near Ayush Dispensary, Panchkula - 134109</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <h4>Phone Number</h4>
              <p><a href="tel:9041002165">90410 02165</a></p>
              <p><a href="tel:01161260809">011 6126 0809</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <h4>Email Address</h4>
              <p><a href="mailto:drrajeshgera@gmail.com">drrajeshgera@gmail.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <h4>Clinic Timings</h4>
              <p>Mon - Sat: 5:30 PM - 8:00 PM</p>
              <p>Sunday: Closed</p>
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
                <span>House No 939, Sector 9, Near Ayush Dispensary, Panchkula</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Sent!"
        message="Thank you for reaching out to Dr. Gera's Heart and Diabetes Care Centre. We have received your message and will get back to you shortly."
      />
    </section>
  )
}

export default Contact
