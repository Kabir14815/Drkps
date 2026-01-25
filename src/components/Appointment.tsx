import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react'
import './Appointment.css'

const departments = [
  'General Medicine',
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Oncology',
  'Dermatology',
  'Ophthalmology'
]

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    date: '',
    time: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: '',
        date: '',
        time: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section id="appointment" className="appointment section">
      <div className="container">
        <div className="appointment-grid">
          {/* Left - Info */}
          <div className="appointment-info">
            <span className="section-badge">
              <Calendar size={16} />
              Book Appointment
            </span>
            <h2 className="appointment-title">
              Schedule Your <span className="text-gradient">Appointment</span> Today
            </h2>
            <p className="appointment-description">
              Book an appointment with our expert doctors. We're committed to
              providing you with the best healthcare experience possible.
            </p>

            <div className="appointment-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Quick Scheduling</h4>
                  <p>Book in under 2 minutes</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <User size={24} />
                </div>
                <div>
                  <h4>Expert Doctors</h4>
                  <p>2+ specialists available</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4>Instant Confirmation</h4>
                  <p>Get SMS & email confirmation</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="working-hours">
              <h4>Working Hours</h4>
              <div className="hours-grid">
                <div className="hour-item">
                  <span>Mon - Fri</span>
                  <span>8:00 AM - 10:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Saturday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Sunday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="hour-item emergency">
                  <span>Emergency</span>
                  <span>24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="appointment-form-wrapper">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <CheckCircle size={64} />
                </div>
                <h3>Appointment Booked!</h3>
                <p>We've received your appointment request. You'll receive a confirmation shortly.</p>
              </div>
            ) : (
              <form className="appointment-form" onSubmit={handleSubmit}>
                <h3>Fill in Your Details</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={16} />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <Phone size={16} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="department">
                    <MessageSquare size={16} />
                    Select Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">
                      <Calendar size={16} />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">
                      <Clock size={16} />
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <MessageSquare size={16} />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Any specific concerns or requirements..."
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg submit-btn">
                  <Calendar size={20} />
                  Book Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment
