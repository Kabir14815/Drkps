import { Check, ArrowRight, Sparkles } from 'lucide-react'
import './HealthPackages.css'

const packages = [
  {
    name: 'Basic Health Checkup',
    price: '₹1,999',
    originalPrice: '₹2,999',
    popular: false,
    features: [
      'Complete Blood Count',
      'Blood Sugar Tests',
      'Lipid Profile',
      'Liver Function Test',
      'Kidney Function Test',
      'Urine Analysis',
      'Doctor Consultation'
    ]
  },
  {
    name: 'Comprehensive Health',
    price: '₹4,999',
    originalPrice: '₹6,999',
    popular: true,
    features: [
      'All Basic Package Tests',
      'ECG & Echo',
      'Chest X-Ray',
      'Thyroid Profile',
      'Vitamin D & B12',
      'Eye Examination',
      'Dental Checkup',
      'Diet Consultation'
    ]
  },
  {
    name: 'Executive Health',
    price: '₹9,999',
    originalPrice: '₹14,999',
    popular: false,
    features: [
      'All Comprehensive Tests',
      'Full Body MRI',
      'Cardiac Stress Test',
      'Cancer Markers',
      'Bone Density Scan',
      'Pulmonary Function',
      'Senior Specialist Review',
      'Personalized Health Report'
    ]
  }
]

const HealthPackages = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="packages" className="packages section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={16} />
            Health Packages
          </span>
          <h2 className="section-title">Preventive Health Checkup Packages</h2>
          <p className="section-description">
            Early detection saves lives. Choose from our comprehensive health
            checkup packages designed for all age groups and health needs.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`package-card ${pkg.popular ? 'popular' : ''}`}
            >
              {pkg.popular && (
                <div className="popular-badge">
                  <Sparkles size={14} />
                  Most Popular
                </div>
              )}

              <h3 className="package-name">{pkg.name}</h3>

              <div className="package-price">
                <span className="price">{pkg.price}</span>
                <span className="original-price">{pkg.originalPrice}</span>
              </div>

              <ul className="package-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} package-btn`}
                onClick={() => scrollToSection('appointment')}
              >
                Book Now
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="packages-note">
          * Prices are subject to change. Please contact us for the latest pricing and customized packages.
        </p>
      </div>
    </section>
  )
}

export default HealthPackages
