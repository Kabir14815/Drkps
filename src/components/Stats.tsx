import { useEffect, useRef, useState } from 'react'
import { Users, Stethoscope, Award, Heart } from 'lucide-react'
import './Stats.css'

const stats = [
  {
    icon: Users,
    number: 1000,
    suffix: '+',
    label: 'Happy Patients',
    description: 'Trusted across Panchkula'
  },
  {
    icon: Stethoscope,
    number: 42,
    suffix: '+',
    label: 'Treatments Offered',
    description: 'Comprehensive care'
  },
  {
    icon: Award,
    number: 30,
    suffix: '+',
    label: 'Years Experience',
    description: 'Of medical excellence'
  },
  {
    icon: Heart,
    number: 94,
    suffix: '%',
    label: 'Patient Satisfaction',
    description: 'Recommended by patients'
  }
]

const Counter = ({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="stat-number">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

const Stats = () => {
  return (
    <section className="stats section">
      {/* Background */}
      <div className="stats-bg">
        <div className="stats-gradient"></div>
        <div className="stats-pattern"></div>
      </div>

      <div className="container">
        <div className="stats-content">
          <div className="stats-header">
            <h2>Trusted by Patients, Recognized for Excellence</h2>
            <p>Our commitment to heart and diabetes care speaks through the lives we've touched.</p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <stat.icon size={28} />
                </div>
                <Counter end={stat.number} suffix={stat.suffix} />
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
