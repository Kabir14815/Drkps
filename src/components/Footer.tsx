import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer */}
        <div className="footer-grid">
          {/* About */}
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <span>Dr. Gera's Heart & Diabetes Care</span>
            </div>
            <p>
              Expert heart and diabetes care in Panchkula by Dr. Rajesh Gera.
              Compassionate treatment for hypertension, diabetes, thyroid,
              and cardiac conditions with a personal touch.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/Dr.RajeshGera" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="/#services">Our Services</a></li>
              <li><a href="/#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Cardiac Care</a></li>
              <li><a href="#services">Diabetes Management</a></li>
              <li><a href="#services">Hypertension</a></li>
              <li><a href="#services">Thyroid Disorders</a></li>
              <li><a href="#services">Respiratory Care</a></li>
              <li><a href="#services">Gastric & Liver Care</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <MapPin size={18} />
              <span>House No 939, Near Ayush Dispensary, Sector 9, Panchkula, Haryana - 134109</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <div>
                <a href="tel:9041002165">90410 02165</a>
                <span className="emergency">Mon-Sat: 5:30 PM - 8:00 PM</span>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:drrajeshgera@gmail.com">drrajeshgera@gmail.com</a>
            </div>
            <div className="contact-item">
              <Clock size={18} />
              <span>Evening OPD: Mon-Sat</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Dr. Gera's Heart and Diabetes Care Centre. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}

export default Footer
