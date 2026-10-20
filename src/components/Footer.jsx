import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Facebook, Navigation } from 'lucide-react';
import { gymInfo, getWhatsAppUrl } from '../data/gymInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "About Oxygen", href: "#about" },
    { label: "Facilities & Zones", href: "#facilities" },
    { label: "Membership Offers", href: "#memberships" },
    { label: "Why Choose Us", href: "#why-oxygen" },
    { label: "Gym Gallery", href: "#gallery" },
    { label: "Frequently Asked Questions", href: "#faqs" },
    { label: "Location & Hours", href: "#contact" }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#050506',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '64px',
        paddingBottom: '40px',
        color: 'var(--color-text-muted)'
      }}
    >
      <div className="container">
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Column 1: Brand Wordmark & Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--color-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px'
                }}
              >
                O
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  letterSpacing: '0.04em'
                }}
              >
                OXYGEN GYM
              </span>
            </div>

            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
              Model Town, Panipat's premier strength training and fitness center. Built for raw strength,
              progressive overload, and unyielding athletic conditioning.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '6px' }}>
              <a
                href={gymInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-surface-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text)'
                }}
                aria-label="Oxygen Gym Instagram"
              >
                <Instagram size={17} />
              </a>

              <a
                href={gymInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-surface-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text)'
                }}
                aria-label="Oxygen Gym Facebook"
              >
                <Facebook size={17} />
              </a>

              <a
                href={gymInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-surface-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text)'
                }}
                aria-label="Oxygen Gym Location on Google Maps"
              >
                <Navigation size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '17px',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '16px',
                letterSpacing: '0.04em'
              }}
            >
              QUICK NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ fontSize: '13px', color: 'var(--color-text-muted)', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-red)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Shifts */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '17px',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '16px',
                letterSpacing: '0.04em'
              }}
            >
              OPERATING TIMINGS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <Clock size={15} color="var(--color-red)" />
                  <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>{gymInfo.hoursDays}</span>
                </div>
                <div style={{ color: 'var(--color-text-muted)', paddingLeft: '23px' }}>
                  {gymInfo.weekdaysHours}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <Clock size={15} color="var(--color-red)" />
                  <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>Sunday</span>
                </div>
                <div style={{ color: 'var(--color-text-muted)', paddingLeft: '23px' }}>
                  {gymInfo.sundaySchedule}
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Direct Contact & Directions */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '17px',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '16px',
                letterSpacing: '0.04em'
              }}
            >
              DIRECT CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={16} color="var(--color-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Model Town, Panipat, Haryana 132103</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="var(--color-red)" style={{ flexShrink: 0 }} />
                <a href={`tel:${gymInfo.phoneTel}`} style={{ color: 'var(--color-text)' }}>
                  {gymInfo.phoneDisplay}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={16} color="var(--color-red)" style={{ flexShrink: 0 }} />
                <a
                  href={getWhatsAppUrl("Hi Oxygen Gym, I have a general enquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-red)', fontWeight: 600 }}
                >
                  WhatsApp Chat Active
                </a>
              </div>

              <div style={{ marginTop: '8px' }}>
                <a
                  href={gymInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '12px', padding: '8px 14px', width: '100%' }}
                >
                  <Navigation size={13} />
                  <span>GET MAP DIRECTIONS</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright Strip */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '12px',
            color: 'var(--color-text-dim)'
          }}
        >
          <p style={{ maxWidth: '780px', lineHeight: 1.5 }}>
            <strong>Notice:</strong> Membership offers, package inclusions, and facility availability are
            subject to periodic seasonal review by Oxygen Gym management. Please contact the front desk
            directly to verify current plans and schedule a facility visit.
          </p>

          <div>
            © {currentYear} Oxygen Gym, Model Town, Panipat, Haryana, India. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
