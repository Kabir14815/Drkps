import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sardar Gurpreet Singh',
    location: 'Kharar',
    rating: 5,
    avatar: '👨‍🦳',
    text: 'Dr. Karanpartap is an excellent physician. I was struggling with uncontrolled BP for years, but his treatment plan brought it back to normal. The clinic atmosphere is very professional.',
    treatment: 'Hypertension Management'
  },
  {
    name: 'Anita Verma',
    location: 'Mohali',
    rating: 5,
    avatar: '👩',
    text: 'Best clinic for family healthcare in Kharar. We\'ve been seeing Dr. KPS for all our medical needs for 5 years now. Very compassionate and explains everything clearly.',
    treatment: 'General Wellness'
  },
  {
    name: 'Rajinder Pal',
    location: 'Chandigarh',
    rating: 5,
    avatar: '👨',
    text: 'The thyroid treatment I received here was life-changing. I feel much more energetic now. Highly recommend Dr. KPS for his expertise and patient care.',
    treatment: 'Thyroid Treatment'
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
