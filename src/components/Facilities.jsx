import React from 'react';
import { Check, ArrowRight, MessageSquare } from 'lucide-react';
import { facilities } from '../data/facilities';
import { getWhatsAppUrl } from '../data/gymInfo';

export default function Facilities() {
  return (
    <section id="facilities" className="section" aria-labelledby="facilities-title" style={{ backgroundColor: '#0D0D0E' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">FACILITIES & TRAINING ZONES</span>
          <h2 id="facilities-title" className="section-title">
            EQUIPPED FOR YOUR PROGRESS
          </h2>
          <p className="section-subtitle">
            Explore dedicated zones engineered for strength development, cardiovascular endurance,
            and functional conditioning inside Oxygen Gym, Model Town, Panipat.
          </p>
        </div>

        {/* 3 Training Zone Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '30px'
          }}
        >
          {facilities.map((zone) => (
            <article
              key={zone.id}
              className="card-dark"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: '8px'
              }}
            >
              {/* Card Image Banner */}
              <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={zone.image}
                  alt={zone.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-smooth)'
                  }}
                  loading="lazy"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(10, 10, 11, 0.85)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--color-red)'
                  }}
                >
                  {zone.tag}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '22px',
                      fontWeight: 700,
                      marginBottom: '10px',
                      color: 'var(--color-text)'
                    }}
                  >
                    {zone.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '20px'
                    }}
                  >
                    {zone.description}
                  </p>

                  {/* Feature Tags List */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginBottom: '24px'
                    }}
                  >
                    {zone.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '13px',
                          color: 'var(--color-text)'
                        }}
                      >
                        <Check size={14} color="var(--color-red)" style={{ flexShrink: 0 }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div style={{ borderTop: '1px solid var(--color-surface-border)', paddingTop: '16px' }}>
                  <a
                    href={getWhatsAppUrl(`Hi Oxygen Gym, I would like to ask about the ${zone.title} facilities.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--color-red)',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    <MessageSquare size={15} />
                    <span>ENQUIRE ABOUT THIS ZONE</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
