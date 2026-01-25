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
    name: 'Dr. Karanpartap Singh',
    specialty: 'MBBS, MD, DNB (Medicine)',
    experience: '15+ Years Experience',
    rating: 5.0,
    image: '/images/doctors/dr-karanpratap.png',
    education: 'Senior Physician & Multi-Specialist',
    qualifications: [
      'MBBS, MD, DNB in Medicine',
      'BCME from CMC Ludhiana',
      'BCBR from ICMR, New Delhi'
    ],
    achievements: [
      'Speaker & Chairperson at National MEDICON Conferences',
      'Active Researcher in National & International Journals',
      'Expert in BP, Diabetes, Thyroid, Asthma & Heart Related Diseases'
    ],
    available: true
  },
  {
    name: 'Dr. Simran Kaur',
    specialty: 'MBBS',
    experience: '4+ Years Experience',
    rating: 5.0,
    image: '/images/doctors/dr-simran.png',
    education: 'Comprehensive Family Medicine and Child Healthcare',
    qualifications: ['MBBS'],
    achievements: [
      'Attended workshop - ACLS, Early Management of Trauma, IUCD insertion, Breast examination and Normal delivery.',
      'Expert in Pediatric Care',
      'Family Medicine Specialist',
      'Preventive Healthcare Expert'
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
            Our Experts
          </span>
          <h2 className="section-title">Expert Doctors at Dr. KPS Clinic</h2>
          <p className="section-description">
            Our team of highly qualified and experienced specialists at Dr. KPS Clinic are
            dedicated to providing you with the best medical care and treatment.
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
                  <img src={doctor.image} alt={`${doctor.name} - ${doctor.specialty} Specialist at KPS Hospital`} className="doctor-avatar-img" />
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
                        <span>Highlights & Research</span>
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
          <button className="btn btn-secondary">Book Consultation</button>
        </div>
      </div>
    </section>
  )
}

export default Doctors
