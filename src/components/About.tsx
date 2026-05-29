import { Award, Users, Target, Lightbulb, CheckCircle } from 'lucide-react'
import './About.css'

const achievements = [
  { icon: Award, text: 'NABH Accredited' },
  { icon: CheckCircle, text: 'ISO 9001:2015 Certified' },
  { icon: Award, text: 'JCI Standards' },
  { icon: CheckCircle, text: 'Green Hospital Award' }
]

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          {/* Left - Image & Stats */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <div className="about-image-main">
                <img src="/images/clinic/clinic-building.jpg" alt="Real exterior of Dr. KPS Clinic in Kharar" className="about-img" />
              </div>

              {/* Experience Badge */}
              <div className="about-badge">
                <span className="badge-number">15+</span>
                <span className="badge-text">Years of Excellence</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="about-achievements">
              {achievements.map((item, index) => (
                <div key={index} className="achievement-item">
                  <item.icon size={20} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-content">
            <span className="section-badge">
              <Users size={16} />
              About Us
            </span>

            <h2 className="about-title">
              A Legacy of <span className="text-gradient">Compassionate Care</span> & Medical Excellence
            </h2>

            <p className="about-intro">
              Led by **Dr. Karanpartap Singh** (MBBS, MD, DNB Medicine), our clinic is a testament to 15+ years of medical excellence. We combine world-class expertise in physician care with genuine compassion for every patient in the region.
            </p>

            <div className="about-features">
              <div className="feature-box">
                <div className="feature-box-icon">
                  <Target size={24} />
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>To provide accessible, affordable, and exceptional healthcare
                    services that improve the quality of life for our community.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-box-icon">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4>Our Vision</h4>
                  <p>To be the most trusted healthcare destination, recognized for
                    clinical excellence, innovation, and patient-centered care.</p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="core-values">
              <h4>Our Core Values</h4>
              <div className="values-list">
                <span className="value-tag">Compassion</span>
                <span className="value-tag">Excellence</span>
                <span className="value-tag">Integrity</span>
                <span className="value-tag">Innovation</span>
                <span className="value-tag">Teamwork</span>
              </div>
            </div>

            <button className="btn btn-primary">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
