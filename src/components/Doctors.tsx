import { useState } from 'react'
import { Star, Award, GraduationCap, CheckCircle2 } from 'lucide-react'
import './Doctors.css'

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  image: string;
  education: string;
  qualifications: string[];
  achievements: string[];
  available: boolean;
}

const doctors: Doctor[] = [
  {
    name: 'Dr. Rajesh Gera',
    specialty: 'MD - General Medicine, MBBS',
    experience: '30+ Years Experience',
    rating: 4.9,
    image: '/images/doctors/dr-rajesh-gera.png',
    education: 'Consultant Physician & Internal Medicine Specialist',
    qualifications: [
      'MBBS - H.P. University, Shimla',
      'MD - General Medicine, PGIMS Rohtak',
      'Member - Association of Physicians of India (API)'
    ],
    achievements: [
      'Expert in Diabetes Management & Non-Invasive Cardiology',
      'Specialist in Hypertension, Thyroid, Respiratory & Gastric Disorders',
      '94% Patient Satisfaction Rating on Practo',
      'Trusted by patients across Panchkula for over three decades'
    ],
    available: true
  }
]

const specialties = ['All']

const Doctors = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredDoctors = activeFilter === 'All'
    ? doctors
    : doctors.filter(d => d.specialty === activeFilter)


  return (
    <section id="doctors" className="doctors section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Award size={16} />
            Our Expert
          </span>
          <h2 className="section-title">Meet Dr. Rajesh Gera</h2>
          <p className="section-description">
            Dr. Rajesh Gera is a highly qualified general physician with over 30 years
            of experience specializing in heart care, diabetes management, and internal medicine.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="doctors-filters">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              className={`filter-btn ${activeFilter === specialty ? 'active' : ''}`}
              onClick={() => { setActiveFilter(specialty); }}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="doctors-wrapper">
          <div className="doctors-grid">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                className="doctor-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="doctor-image">
                  <img src={doctor.image} alt={`${doctor.name} - ${doctor.specialty} at Dr. Gera's Clinic`} className="doctor-avatar-img" />
                  {doctor.available && <span className="available-badge">Available Today</span>}
                </div>

                <div className="doctor-info">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <p className="doctor-specialty">{doctor.specialty}</p>

                  <div className="doctor-meta">
                    <span className="doctor-experience">{doctor.experience}</span>
                    <span className="doctor-rating">
                      <Star size={14} fill="currentColor" />
                      {doctor.rating}
                    </span>
                  </div>

                  <div className="doctor-details">
                    <div className="details-section">
                      <div className="details-label">
                        <GraduationCap size={16} />
                        <span>Qualifications</span>
                      </div>
                      <ul className="details-list">
                        {doctor.qualifications?.map((q, i) => (
                          <li key={i}>{q}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="details-section">
                      <div className="details-label">
                        <Award size={16} />
                        <span>Specializations</span>
                      </div>
                      <ul className="details-list">
                        {doctor.achievements?.map((a, i) => (
                          <li key={i}>
                            <CheckCircle2 size={12} className="check-icon" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="doctors-cta">
          <a href="tel:9041002165" className="btn btn-secondary">Book Consultation</a>
        </div>
      </div>
    </section>
  )
}

export default Doctors
