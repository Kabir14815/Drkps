import { ArrowRight, Search, Phone, Shield, Clock, Award } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-cross cross-1">+</div>
          <div className="floating-cross cross-2">+</div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-text">
            <div className="hero-badge animate-fadeInUp">
              <Shield size={16} />
              <span>Trusted by 50,000+ Patients</span>
            </div>

            <h1 className="hero-title animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient">Dr. KPS Clinic</span>: World-Class
              <span className="text-gradient"> Healthcare</span> in Kharar
            </h1>

            <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Experience exceptional medical care at Dr. KPS Clinic with cutting-edge technology,
              compassionate doctors, and a commitment to your well-being.
              Your health is our priority, always.
            </p>

            {/* CTA Buttons */}
            <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('doctors')}>
              <Search size={20} />
              <span>Find a Doctor</span>
            </button>

            {/* Quick Stats */}
            <div className="hero-stats animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="hero-stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat">
                <div className="stat-number">2+</div>
                <div className="stat-label">Expert Doctors</div>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hero-visual">
            <div className="hero-image-wrapper animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="hero-main-image">
                <img src="/images/clinic/clinic-building.jpg" alt="Dr. KPS Clinic exterior in Kharar" className="hero-img" />
              </div>

              {/* Floating Feature Cards */}
              <div className="feature-card feature-card-1 animate-float">
                <div className="feature-icon">
                  <Clock size={24} />
                </div>
                <div className="feature-title">
                  <span className="feature-title">Emergency Care</span>
                </div>
              </div>

              <div className="feature-card feature-card-2 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <div className="feature-text">
                  <span className="feature-title">NABH Accredited</span>
                  <span className="feature-subtitle">Quality Certified</span>
                </div>
              </div>

              <div className="feature-card feature-card-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="feature-icon emergency">
                  <Phone size={24} />
                </div>
                <div className="feature-text">
                  <span className="feature-title">Emergency</span>
                  <span className="feature-subtitle emergency-number">Call 082880 13769</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Bar */}
        <div className="quick-access animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <a href="#services" className="quick-item" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>
            <span className="quick-icon">🏥</span>
            <span>Departments</span>
            <ArrowRight size={16} />
          </a>
          <a href="#packages" className="quick-item" onClick={(e) => { e.preventDefault(); scrollToSection('packages') }}>
            <span className="quick-icon">📋</span>
            <span>Health Packages</span>
            <ArrowRight size={16} />
          </a>
          <a href="#doctors" className="quick-item" onClick={(e) => { e.preventDefault(); scrollToSection('doctors') }}>
            <span className="quick-icon">👨‍⚕️</span>
            <span>Find Doctor</span>
            <ArrowRight size={16} />
          </a>
          <a href="#contact" className="quick-item" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
            <span className="quick-icon">📍</span>
            <span>Locate Us</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
