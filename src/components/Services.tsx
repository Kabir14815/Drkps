import { Heart, Activity, Zap, Wind, Stethoscope, Thermometer, Bone, Brain, ArrowRight } from 'lucide-react'
import './Services.css'
const services = [
  {
    icon: Heart,
    name: 'Heart Related Diseases',
    description: 'Expert consultation for hypertension, hypertension, and various heart conditions with advanced cardiac diagnostics.',
    color: '#ef4444',
    bgColor: '#fef2f2'
  },
  {
    icon: Activity,
    name: 'Hypertension & Diabetes',
    description: 'Specialized management of hypertension and diabetes to prevent complications and maintain long-term health.',
    color: '#8b5cf6',
    bgColor: '#f5f3ff'
  },
  {
    icon: Zap,
    name: 'Thyroid & Hormonal Care',
    description: 'Diagnosis and treatment of thyroid disorders (hypo/hyperthyroidism) and other hormonal imbalances.',
    color: '#f59e0b',
    bgColor: '#fffbeb'
  },
  {
    icon: Wind,
    name: 'Asthma & Breathing Issues',
    description: 'Comprehensive respiratory care for asthma, allergies, and chronic breathing difficulties for all age groups.',
    color: '#10b981',
    bgColor: '#ecfdf5'
  },
  {
    icon: Stethoscope,
    name: 'Gastric & Liver Care',
    description: 'Expert treatment for digestive issues, acid reflux, stomach infections, and various liver-related conditions.',
    color: '#ec4899',
    bgColor: '#fdf2f8'
  },
  {
    icon: Thermometer,
    name: 'Fever & Infections',
    description: 'Accurate diagnosis and effective treatment of viral, bacterial, and seasonal fevers for a quick recovery.',
    color: '#06b6d4',
    bgColor: '#ecfeff'
  },
  {
    icon: Bone,
    name: 'Joint Pains & Ortho',
    description: 'Specialized care for joint pains, arthritis, and other orthopedic issues to restore mobility and comfort.',
    color: '#3b82f6',
    bgColor: '#eff6ff'
  },
  {
    icon: Brain,
    name: 'Headache & Neurology',
    description: 'Professional management of chronic headaches, migraines, and various neurological health concerns.',
    color: '#8b5cf6',
    bgColor: '#f5f3ff'
  }
]

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Stethoscope size={16} />
            Our Specialties
          </span>
          <h2 className="section-title">Specialized Care at Dr. KPS Clinic</h2>
          <p className="section-description">
            Dr. KPS Clinic houses specialized medical expertise staffed by experienced doctors
            dedicated to providing comprehensive healthcare in Kharar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="service-icon"
                style={{ backgroundColor: service.bgColor, color: service.color }}
              >
                <service.icon size={28} />
              </div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">
                Learn More
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta">
          <p>Can't find what you're looking for?</p>
          <a href="#contact" className="btn btn-primary">
            Contact Us
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
