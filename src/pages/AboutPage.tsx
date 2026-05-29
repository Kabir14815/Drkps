import { useEffect } from 'react'
import { Award, Target, Lightbulb, CheckCircle, Shield, Heart, Sparkles, Activity } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import './AboutPage.css'

const achievements = [
  { icon: Award, text: 'MD General Medicine' },
  { icon: CheckCircle, text: 'API Member' },
  { icon: Heart, text: 'Patient First' },
  { icon: Shield, text: 'Trusted Care' }
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
    window.scrollTo(0, 0);
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
                <span>30+ Years of Medical Excellence</span>
              </div>
              <h1>
                Heart & Diabetes Care with a <br />
                <span className="text-gradient">Personal Touch</span>
              </h1>
              <p className="hero-subtitle">
                At Dr. Gera's Heart and Diabetes Care Centre, we combine expert medical knowledge
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
                <img src="/images/about.png" alt="Dr. Gera's Clinic Interior" />
                <div className="overlay-badge">
                  <div className="badge-content">
                    <span className="count">30+</span>
                    <span className="label">Years of <br /> Excellence</span>
                  </div>
                </div>
              </div>
              <div className="story-text animate-on-scroll">
                <span className="section-badge teal">
                  <Activity size={16} />
                  Our Journey
                </span>
                <h2 className="section-title">A Legacy Written in <br /><span className="text-gradient">Trust & Care</span></h2>
                <p>
                  Founded by **Dr. Rajesh Gera** (MBBS, MD - General Medicine), our clinic represents a legacy of medical excellence and compassionate service spanning over 30 years in Panchkula.
                </p>
                <p>
                  A distinguished physician, Dr. Gera completed his MBBS from H.P. University, Shimla and MD in General Medicine from PGIMS, Rohtak. He is an active member of the Association of Physicians of India (API) and has dedicated his career to diabetes management and non-invasive cardiology.
                </p>
                <p>
                  Dr. Gera's particular interest lies in diabetes and its complications, hypertension, thyroid disorders, respiratory ailments, and cardiac care. His clinic in Sector 9, Panchkula has become a trusted destination for patients seeking expert, personalized medical attention.
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
                <h3>Our Mission</h3>
                <p>To provide accessible, expert medical care for heart and diabetes patients, helping them live healthier lives through personalized treatment and compassionate service.</p>
              </div>
              <div className="glass-card">
                <div className="value-icon-wrapper">
                  <Lightbulb size={32} />
                </div>
                <h3>Our Vision</h3>
                <p>To be the most trusted heart and diabetes care centre in Panchkula, recognized for clinical excellence, patient satisfaction, and a commitment to community health.</p>
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
                { title: 'Integrity', text: 'Honesty in every heartbeat.' },
                { title: 'Trust', text: 'Building lasting patient relationships.' }
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
