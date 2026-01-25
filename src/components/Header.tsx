import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ChevronDown, Clock, MapPin } from 'lucide-react'
import './Header.css'

const departments = [
  { name: 'Heart Related Diseases', icon: '❤️' },
  { name: 'Hypertension', icon: '📈' },
  { name: 'Diabetes', icon: '🩸' },
  { name: 'Thyroid', icon: '⚡' },
  { name: 'Gastric', icon: '🩺' },
  { name: 'Fever', icon: '🌡️' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDeptDropdownOpen, setIsDeptDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container flex-between">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <Clock size={14} />
              <span>Open 9 AM - 9 PM (Mon-Sun) - Emergency Services Available</span>
            </div>
            <div className="top-bar-item">
              <MapPin size={14} />
              <span>#1037, Sector 11, Civil Hospital Road, Kharar</span>
            </div>
          </div>
          <div className="top-bar-right">
            <a href="tel:08288013769" className="top-bar-phone">
              <Phone size={14} />
              <span>82880 13769</span>
            </a>
          </div>
          <div className="top-bar-right">
            <a href="tel:08288013769" className="top-bar-phone">
              <Phone size={14} />
              <span>88475 62157</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container flex-between">
          {/* Logo */}
          <Link to="/" className="logo" onClick={() => scrollToSection('hero')}>
            <div className="logo-icon">
              <img src="/favicon.jpeg" alt="Dr. KPS Clinic Logo" style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover' }} />
            </div>
            <div className="logo-text">
              <span className="logo-name">Dr. KPS</span>
              <span className="logo-tagline">Clinic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <ul className="nav-list">
              <li><Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }} aria-label="Home">Home</Link></li>
              <li><Link to="/about" aria-label="About KPS Hospital">About Us</Link></li>
              <li
                className="nav-dropdown"
                onMouseEnter={() => setIsDeptDropdownOpen(true)}
                onMouseLeave={() => setIsDeptDropdownOpen(false)}
              >
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }} aria-expanded={isDeptDropdownOpen} aria-haspopup="true">
                  Departments <ChevronDown size={16} />
                </a>
                <div className={`dropdown-menu ${isDeptDropdownOpen ? 'open' : ''}`}>
                  <div className="dropdown-grid">
                    {departments.map((dept) => (
                      <a key={dept.name} href="#services" className="dropdown-item" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>
                        <span className="dropdown-icon">{dept.icon}</span>
                        <span>{dept.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li><a href="#doctors" onClick={(e) => { e.preventDefault(); scrollToSection('doctors') }}>Our Doctors</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }}>Reviews</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>FAQ</a></li>
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="header-actions">
            <a href="tel:08288013769" className="btn btn-emergency btn-sm">
              <Phone size={16} />
              <span>Emergency</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul>
            <li><Link to="/" onClick={() => scrollToSection('hero')}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>Departments</a></li>
            <li><a href="#doctors" onClick={() => scrollToSection('doctors')}>Our Doctors</a></li>
            <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Reviews</a></li>
            <li><a href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          <div className="mobile-actions">
            <a href="tel:08288013769" className="btn btn-emergency">
              <Phone size={18} />
              <span>Emergency: Call Now</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
