import React, { useState } from 'react';
import { X, Instagram, Maximize2 } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { gymInfo } from '../data/gymInfo';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
            marginBottom: '40px'
          }}
        >
          <div>
            <span className="section-eyebrow">INSIDE OXYGEN GYM</span>
            <h2 id="gallery-title" className="section-title">
              THE SPACE. THE WORK. THE ENERGY.
            </h2>
            <p className="section-subtitle">
              Take an inside look at our training platforms, cardio stations, and athletic lifting environment
              in Model Town, Panipat.
            </p>
          </div>

          <a
            href={gymInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-red)',
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}
          >
            <Instagram size={17} />
            <span>FOLLOW @OXYGENGYMPANIPAT ON INSTAGRAM</span>
          </a>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '18px'
          }}
        >
          {galleryItems.map((item, index) => {
            // First item spans 2 columns on desktop for editorial asymmetry
            const isWide = index === 0 || index === 3;

            return (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                style={{
                  position: 'relative',
                  height: isWide ? '320px' : '260px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid var(--color-surface-border)',
                  backgroundColor: 'var(--color-surface)',
                  gridColumn: isWide ? 'span 1' : 'span 1'
                }}
                role="button"
                tabIndex={0}
                aria-label={`View full image: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveImage(item);
                  }
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-smooth)'
                  }}
                  loading="lazy"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />

                {/* Gradient and Hover Metadata */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(10, 10, 11, 0.85) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '16px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--color-red)',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      letterSpacing: '0.08em'
                    }}
                  >
                    {item.category}
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '18px',
                        color: '#FFFFFF',
                        fontWeight: 600
                      }}
                    >
                      {item.title}
                    </span>
                    <Maximize2 size={16} color="#FFFFFF" opacity={0.7} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={() => setActiveImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(5, 5, 6, 0.94)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close preview"
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <X size={24} />
            </button>

            {/* Modal Image Box */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.9)'
              }}
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                style={{
                  width: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain'
                }}
              />
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  padding: '14px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 600 }}>{activeImage.title}</h4>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{activeImage.alt}</span>
                </div>
                <span className="badge badge-red">{activeImage.category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
