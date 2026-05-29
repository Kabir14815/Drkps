import { useState } from 'react'
import { Camera, X } from 'lucide-react'
import './Gallery.css'

const galleryImages = [
  { id: 1, title: 'Clinic Exterior', category: 'facility', image: '/images/gallery/exterior.png' },
  { id: 2, title: 'Consultation Room', category: 'facility', image: '/images/gallery/consultation.png' },
  { id: 3, title: 'Waiting Area', category: 'facility', image: '/images/gallery/reception.png' },
  { id: 4, title: 'Diagnostic Area', category: 'facility', image: '/images/gallery/lab.png' },
  { id: 5, title: 'Patient Care', category: 'facility', image: '/images/gallery/room.png' },
  { id: 6, title: 'Clinic Interior', category: 'facility', image: '/images/about.png' },
  { id: 7, title: 'Heart & Diabetes Care', category: 'facility', image: '/images/clinic/clinic-building.jpg' },
  { id: 8, title: 'Medical Consultation', category: 'facility', image: '/images/gallery/consultation.png' }
]

const categories = ['All', 'facility']

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Camera size={16} />
            Clinic Gallery
          </span>
          <h2 className="section-title">Explore Our Clinic</h2>
          <p className="section-description">
            Take a look at Dr. Gera's Heart and Diabetes Care Centre —
            a welcoming space designed for your comfort and well-being.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item ${index === 0 || index === 5 ? 'large' : ''}`}
              onClick={() => setLightboxImage(image)}
            >
              <div className="gallery-image">
                <img src={image.image} alt={image.title} className="gallery-img" />
              </div>
              <div className="gallery-overlay">
                <h4>{image.title}</h4>
                <span>Click to view</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="lightbox" onClick={() => setLightboxImage(null)}>
            <button className="lightbox-close" aria-label="Close">
              <X size={24} />
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-image">
                <img src={lightboxImage.image} alt={lightboxImage.title} className="lightbox-img" />
              </div>
              <h3>{lightboxImage.title}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
