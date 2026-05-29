import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Simran',
    location: 'Panchkula',
    rating: 5,
    avatar: '👩',
    text: 'Dr. Gera has been of tremendous value to us. He saved my father\'s life when we brought him in a critical condition of renal damage and seizures. His commitment and humanitarian touch is commendable. One of the finest doctors I have met.',
    treatment: 'Critical Care'
  },
  {
    name: 'Anil Kumar Khosla',
    location: 'Panchkula',
    rating: 5,
    avatar: '👨‍🦳',
    text: 'The doctor went through the whole history of my disease with great patience since I am a patient since 1982. After thorough examination he prescribed medicine and asked for tests. We talked in a very cordial atmosphere to my entire satisfaction.',
    treatment: 'General Physician'
  },
  {
    name: 'Atharv',
    location: 'Panchkula',
    rating: 5,
    avatar: '👨',
    text: 'Dr. Rajesh Gera is not only a wonderful doctor but also a very calm and empathetic human being. He listened to and answered all questions patiently and explained the health issue and treatment in detail. Really thankful for the care and support.',
    treatment: 'Respiratory Care'
  },
  {
    name: 'Sandeep Singh',
    location: 'Panchkula',
    rating: 5,
    avatar: '👨',
    text: 'Dr. Gera is very supportive and provides excellent guidance. He handled our patient very well during diabetes complications and pneumonia. Thanks for the mediation and treatment. Dr. Gera is doing a great job.',
    treatment: 'Diabetes Management'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex, isPaused])

  return (
    <section
      id="testimonials"
      className="testimonials section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="testimonials-grid">
          {/* Left - Header */}
          <div className="testimonials-header">
            <span className="section-badge">
              <Star size={16} fill="currentColor" />
              Testimonials
            </span>
            <h2 className="testimonials-title">
              What Our <span className="text-gradient">Patients Say</span>
            </h2>
            <p className="testimonials-description">
              Real stories from real patients. Their experiences inspire us to
              continue providing the highest quality healthcare.
            </p>

            {/* Navigation */}
            <div className="testimonials-nav">
              <button className="testimonial-nav-btn" onClick={prevTestimonial} aria-label="Previous">
                <ChevronLeft size={24} />
              </button>
              <div className="nav-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button className="testimonial-nav-btn" onClick={nextTestimonial} aria-label="Next">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right - Testimonial Card */}
          <div className="testimonial-slider">
            <div className="testimonial-card">
              <div className="quote-icon">
                <Quote size={48} />
              </div>

              <p className="testimonial-text">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="testimonial-rating">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="author-info">
                  <h4>{testimonials[currentIndex].name}</h4>
                  <p>{testimonials[currentIndex].location}</p>
                </div>
                <div className="treatment-badge">
                  {testimonials[currentIndex].treatment}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
