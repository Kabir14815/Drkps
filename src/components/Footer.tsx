import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react'
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
              <span>Dr. KPS Clinic</span>
            </div>
            <p>
              Dr. KPS Clinic: Providing world-class healthcare with compassion and expertise
              in Kharar. Your health is our priority, always.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="/#services">Our Departments</a></li>
              <li><a href="/#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div className="footer-col">
            <h4>Departments</h4>
            <ul>
              <li><a href="#services">Heart Related Diseases</a></li>
              <li><a href="#services">Hypertension</a></li>
              <li><a href="#services">Diabetes</a></li>
              <li><a href="#services">Thyroid</a></li>
              <li><a href="#services">Gastric</a></li>
              <li><a href="#services">Fever</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <MapPin size={18} />
              <span>#1037, Sector 11, Civil Hospital Road, Kharar, Punjab - 140301</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <div>
                <a href="tel:08288013769">082880 13769</a>
                <span className="emergency">9 AM - 9 PM Available</span>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:info@kpshospital.com">info@kpshospital.com</a>
            </div>
            <div className="contact-item">
              <Clock size={18} />
              <span>24/7 Emergency Services</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Dr. KPS Clinic. All rights reserved.</p>
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
