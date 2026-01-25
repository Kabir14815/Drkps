import { useState } from 'react'
import { Camera, X } from 'lucide-react'
import './Gallery.css'

const galleryImages = [
  { id: 1, title: 'Hospital Reception', category: 'facility', image: '/images/gallery/reception.png' },
  { id: 2, title: 'Operation Theatre', category: 'facility', image: '/images/gallery/ot.png' },
  { id: 3, title: 'Patient Room', category: 'rooms', image: '/images/gallery/room.png' },
  { id: 4, title: 'ICU', category: 'facility', image: '/images/gallery/icu.png' },
  { id: 5, title: 'Diagnostic Lab', category: 'facility', image: '/images/gallery/lab.png' },
  { id: 6, title: 'Premium Suite', category: 'rooms', image: '/images/gallery/room.png' },
  { id: 7, title: 'Hospital Exterior', category: 'facility', image: '/images/hero.png' },
  { id: 8, title: 'Hospital Interior', category: 'facility', image: '/images/about.png' }
]

const categories = ['All', 'facility', 'rooms', 'amenities']

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
            Virtual Tour
          </span>
          <h2 className="section-title">Explore Our World-Class Facilities</h2>
          <p className="section-description">
            Take a virtual tour of our state-of-the-art hospital featuring
            modern amenities and premium patient care facilities.
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
