import { useEffect } from 'react'
import { Award, Target, Lightbulb, CheckCircle, Shield, Heart, Sparkles, Activity } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import './AboutPage.css'

const achievements = [
  { icon: Award, text: 'NABH Accredited' },
  { icon: CheckCircle, text: 'ISO Certified' },
  { icon: Heart, text: 'Patient First' },
  { icon: Shield, text: 'Safety First' }
]

const AboutPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    window.scrollTo(0, 0); // Ensure scroll to top on mount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="hero-content animate-fadeInUp">
              <div className="hero-badge silver">
                <Sparkles size={16} className="sparkle" />
                <span>Established Since 1998</span>
              </div>
              <h1>
                Healthcare with a <br />
                <span className="text-gradient">Personal Touch</span>
              </h1>
              <p className="hero-subtitle">
                At KPS Hospital, we combine world-class medical innovation
                with the warmth of human compassion to deliver exceptional care.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story section">
          <div className="container">
            <div className="story-grid">
              <div className="story-image-container animate-on-scroll">
                <img src="/images/about.png" alt="Hospital Architecture" />
                <div className="overlay-badge">
                  <div className="badge-content">
                    <span className="count">15+</span>
                    <span className="label">Years of <br /> Excellence</span>
                  </div>
                </div>
              </div>
              <div className="story-text animate-on-scroll">
                <span className="section-badge teal">
                  <Activity size={16} />
                  Out Patient Journey
                </span>
                <h2 className="section-title">A Legacy Written in <br /><span className="text-gradient">Trust & Care</span></h2>
                <p>
                  Founded by the visionary **Dr. Karanpartap Singh** (MBBS, MD, DNB Medicine), our clinic represents a legacy of medical excellence and compassionate service spanning over 15 years.
                </p>
                <p>
                  A pioneer in healthcare, Dr. Singh brings specialized expertise from prestigious institutions like **CMC Ludhiana** (BCME) and **ICMR, New Delhi** (BCBR). His commitment to advancing medicine is reflected in his active role as a speaker and chairperson at national conferences like **MEDICON**, and his prolific research contributions to international medical journals.
                </p>
                <p>
                  Under his leadership, KPS Hospital has evolved from a humble clinic into a regional healthcare beacon, dedicated to providing expert care for BP, Diabetes, Thyroid, and Heart-related diseases with a personal touch.
                </p>
                <div className="achievements-grid">
                  {achievements.map((item, index) => (
                    <div key={index} className="achievement-card">
                      <item.icon size={20} />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Integration */}
        <div className="animate-on-scroll">
          <Stats />
        </div>

        {/* Mission Vision Glass Section */}
        <section className="mv-section animate-on-scroll">
          <div className="container">
            <div className="mv-grid">
              <div className="glass-card">
                <div className="value-icon-wrapper">
                  <Target size={32} />
                </div>
                <h3>Dedicated Mission</h3>
                <p>To redefine healthcare standards by making professional medical services accessible to every stratum of society with uncompromising quality.</p>
              </div>
              <div className="glass-card">
                <div className="value-icon-wrapper">
                  <Lightbulb size={32} />
                </div>
                <h3>Vision 2030</h3>
                <p>Elevating KPS Hospital into a premier global healthcare institution through digitized health systems and robotic surgical excellence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section values-section">
          <div className="container">
            <div className="section-header text-center animate-on-scroll">
              <h2 className="section-title">Our <span className="text-gradient">Core Values</span></h2>
              <p className="section-description">The pillars that uphold our commitment to humanity.</p>
            </div>
            <div className="values-grid">
              {[
                { title: 'Compassion', text: 'Empathy at the heart of care.' },
                { title: 'Excellence', text: 'Striving for perfection always.' },
                { title: 'Innovation', text: 'Future-ready medical science.' },
                { title: 'Integrity', text: 'Honesty in every heart beat.' }
              ].map((v, i) => (
                <div key={i} className="glass-card value-item animate-on-scroll">
                  <div className="value-icon-wrapper">
                    <CheckCircle size={24} />
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default AboutPage
