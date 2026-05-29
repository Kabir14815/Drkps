import { Award, Users, Target, Lightbulb, CheckCircle } from 'lucide-react'
import './About.css'

const achievements = [
  { icon: Award, text: 'MD General Medicine' },
  { icon: CheckCircle, text: 'API Member' },
  { icon: Award, text: '30+ Years Experience' },
  { icon: CheckCircle, text: 'Non-Invasive Cardiology' }
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
                <img src="/images/clinic/clinic-building.jpg" alt="Dr. Gera's Heart and Diabetes Care Centre in Panchkula" className="about-img" />
              </div>

              {/* Experience Badge */}
              <div className="about-badge">
                <span className="badge-number">30+</span>
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
              Expert <span className="text-gradient">Heart & Diabetes Care</span> with a Personal Touch
            </h2>

            <p className="about-intro">
              Led by **Dr. Rajesh Gera** (MBBS, MD - General Medicine), our clinic specializes in diabetes management, non-invasive cardiology, hypertension, thyroid, respiratory, and gastric care. With over 30 years of experience, Dr. Gera provides compassionate, patient-centered treatment for every individual.
            </p>

            <div className="about-features">
              <div className="feature-box">
                <div className="feature-box-icon">
                  <Target size={24} />
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>To provide accessible, expert medical care for heart and diabetes patients,
                    helping them live healthier lives through personalized treatment plans.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-box-icon">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4>Our Vision</h4>
                  <p>To be the most trusted heart and diabetes care centre in Panchkula,
                    recognized for clinical excellence and compassionate patient care.</p>
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
                <span className="value-tag">Patient First</span>
                <span className="value-tag">Trust</span>
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
