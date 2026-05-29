import { Heart, Activity, Zap, Wind, Stethoscope, Thermometer, Brain, Droplets, ArrowRight } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: Heart,
    name: 'Cardiac Care',
    description: 'Non-invasive cardiology for heart failure, cardiac disorders, and comprehensive heart health management.',
    color: '#ef4444',
    bgColor: '#fef2f2'
  },
  {
    icon: Droplets,
    name: 'Diabetes Management',
    description: 'Expert Type 2 diabetes treatment, complication management, and personalized diabetes care plans.',
    color: '#8b5cf6',
    bgColor: '#f5f3ff'
  },
  {
    icon: Activity,
    name: 'Hypertension Treatment',
    description: 'Specialized management of high blood pressure to prevent complications and maintain long-term health.',
    color: '#f59e0b',
    bgColor: '#fffbeb'
  },
  {
    icon: Zap,
    name: 'Thyroid Disorders',
    description: 'Diagnosis and treatment of thyroid disorders and hormonal imbalances for all age groups.',
    color: '#10b981',
    bgColor: '#ecfdf5'
  },
  {
    icon: Wind,
    name: 'Respiratory Care',
    description: 'Treatment for COPD, bronchial asthma, respiratory tract infections, and breathing difficulties.',
    color: '#06b6d4',
    bgColor: '#ecfeff'
  },
  {
    icon: Stethoscope,
    name: 'Gastric & Liver Care',
    description: 'Expert treatment for gastritis, gastroenteritis, liver ailments, and digestive disorders.',
    color: '#ec4899',
    bgColor: '#fdf2f8'
  },
  {
    icon: Thermometer,
    name: 'Fever & Infections',
    description: 'Treatment for viral fever, dengue, malaria, and seasonal infections for a quick recovery.',
    color: '#3b82f6',
    bgColor: '#eff6ff'
  },
  {
    icon: Brain,
    name: 'Headache & Neurology',
    description: 'Professional management of chronic headaches, migraines, and neurological health concerns.',
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
          <h2 className="section-title">Specialized Care at Dr. Gera's Clinic</h2>
          <p className="section-description">
            Dr. Gera's Heart and Diabetes Care Centre provides comprehensive medical services
            with a focus on heart diseases, diabetes, and general physician care in Panchkula.
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
              <a href="#contact" className="service-link">
                Book Consultation
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
