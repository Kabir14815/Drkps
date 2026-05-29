import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    question: "What are the clinic timings?",
    answer: "Dr. Gera's Heart and Diabetes Care Centre is open from 5:30 PM to 8:00 PM, Monday to Saturday. The clinic is closed on Sundays."
  },
  {
    question: "Do I need a prior appointment?",
    answer: "While we do accept walk-ins, we recommend booking an appointment to minimize your wait time. You can call us at 90410 02165 to schedule a visit."
  },
  {
    question: "What medical services do you provide?",
    answer: "We specialize in cardiac care, diabetes management, hypertension, thyroid disorders, respiratory care, gastric and liver ailments, fever treatment, and general physician consultations."
  },
  {
    question: "Who is the doctor at the clinic?",
    answer: "Dr. Rajesh Gera (MBBS, MD - General Medicine) is the consulting physician with over 30 years of experience in internal medicine, diabetes, and non-invasive cardiology."
  },
  {
    question: "What is the consultation fee?",
    answer: "The consultation fee is ₹500. For the latest fee details and availability, please call the clinic at 90410 02165."
  },
  {
    question: "Can I visit for uncontrolled blood pressure, sugar, or thyroid?",
    answer: "Absolutely! You can visit our clinic for irregular blood pressure, uncontrolled sugar, or thyroid conditions. Dr. Gera will provide the necessary treatment and guidance."
  },
  {
    question: "Where is the clinic located?",
    answer: "We are located at House No 939, Near Ayush Dispensary, Sector 9, Panchkula, Haryana - 134109."
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
            <p>Can't find the answer you're looking for? Please call our friendly team.</p>
            <a href="https://wa.me/919041002165" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
