import React from 'react';
import { MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { gymInfo, getWhatsAppUrl } from '../data/gymInfo';

export default function FinalCTA() {
  return (
    <section
      aria-label="Final Call to Action"
      style={{
        backgroundColor: '#0F0F11',
        paddingTop: '64px',
        paddingBottom: '64px',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '250px',
          backgroundColor: 'rgba(239, 41, 41, 0.08)',
          filter: 'blur(80px)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
            TAKE THE NEXT STEP
          </span>

          <h2
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: '16px'
            }}
          >
            READY TO BUILD YOUR <br />
            <span style={{ color: 'var(--color-red)' }}>STRONGER</span> SELF?
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              marginBottom: '32px'
            }}
          >
            Visit Oxygen Gym in Model Town, Panipat or message us directly on WhatsApp to learn about
            membership options, daily shifts, and facility tours.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <a
              href={getWhatsAppUrl("Hi Oxygen Gym, I am ready to start my training and want to enquire about membership.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '16px 32px', fontSize: '17px' }}
            >
              <MessageSquare size={19} />
              <span>CHAT ON WHATSAPP</span>
              <ArrowUpRight size={17} />
            </a>

            <a
              href={`tel:${gymInfo.phoneTel}`}
              className="btn btn-secondary"
              style={{ padding: '16px 28px', fontSize: '17px' }}
            >
              <Phone size={18} />
              <span>CALL: {gymInfo.phoneDisplay}</span>
            </a>
          </div>

          <div
            style={{
              marginTop: '24px',
              fontSize: '13px',
              color: 'var(--color-text-dim)'
            }}
          >
            No complex signups. Direct human assistance from our Panipat gym staff.
          </div>
        </div>
      </div>
    </section>
  );
}
