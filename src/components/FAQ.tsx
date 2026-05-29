import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    question: "What are the clinic timings?",
    answer: "Dr. KPS Clinic is open from 9:00 AM to 9:00 PM, Monday to Sunday. We provide continuous medical care throughout the week."
  },
  {
    question: "Do I need a prior appointment?",
    answer: "While we do accept walk-ins, we recommend booking an appointment to minimize your wait time. You can call us at 82880 13769 to schedule a visit."
  },
  {
    question: "What medical services do you provide?",
    answer: "We specialize in treating Hypertension, Diabetes, Thyroid, Asthma, and Heart-related diseases. We also provide General Physician services, Pediatric care, and Laboratory testing."
  },
  {
    question: "Is there emergency medical care available?",
    answer: "Yes, we provide emergency medical services during our operating hours. For critical emergencies, please call our emergency number 82880 13769 immediately."
  },
  {
    question: "Do you offer home visits for elderly patients?",
    answer: "Yes, depending on the severity and availability, we do provide home consultation services for elderly patients in the Kharar region. Please contact the clinic for more details."
  },
  {
    question: "Are health checkup packages available?",
    answer: "Absolutely! We offer various comprehensive health checkup packages inclusive of blood tests, ECG, and physician consultation at subsidized rates."
  },
   {
    question: "Can I visit Clinic for irregular bp, sugar or thyroid  is not control?",
    answer: "Absolutely! You can visit our clinic for irregular blood pressure, sugar, or thyroid conditions that are not under control. Our experienced doctors will provide the necessary treatment and guidance."
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">
            <HelpCircle size={16} />
            Common Questions
          </span>
          <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="section-description">
            Everything you need to know about our services and procedures.
            If you have other questions, feel free to contact us.
          </p>
        </div>

        <div className="faq-grid">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <div className="faq-icon">
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta-card">
            <div className="cta-icon">
              <HelpCircle size={40} />
            </div>
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <a href="https://wa.me/918288013769" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
