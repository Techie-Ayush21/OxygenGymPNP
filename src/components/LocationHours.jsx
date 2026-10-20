import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, Navigation, ExternalLink } from 'lucide-react';
import { gymInfo, getWhatsAppUrl } from '../data/gymInfo';

export default function LocationHours() {
  return (
    <section id="contact" className="section" aria-labelledby="location-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">VISIT & CONTACT</span>
          <h2 id="location-title" className="section-title">
            LOCATION & OPERATING HOURS
          </h2>
          <p className="section-subtitle">
            Centrally situated in Model Town, Panipat. Drop by during operating shifts for a walk-in tour
            or connect with our front desk directly.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '36px',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Contact Cards */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-surface-border)',
              borderRadius: '8px',
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '28px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Address Item */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(239, 41, 41, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-red)',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '19px',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                  >
                    Gym Address
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    {gymInfo.address}
                  </p>
                </div>
              </div>

              {/* Hours Item */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(239, 41, 41, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-red)',
                    flexShrink: 0
                  }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '19px',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                  >
                    Gym Timings
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    Monday – Saturday: <strong style={{ color: 'var(--color-text)' }}>{gymInfo.weekdaysHours}</strong>
                    <br />
                    Sunday: <strong style={{ color: 'var(--color-text)' }}>{gymInfo.sundaySchedule}</strong>
                  </p>
                </div>
              </div>

              {/* Contact Item */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(239, 41, 41, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-red)',
                    flexShrink: 0
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '19px',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                  >
                    Front Desk Direct
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                    Phone: <strong style={{ color: 'var(--color-text)' }}>{gymInfo.phoneDisplay}</strong>
                    <br />
                    WhatsApp: <strong style={{ color: 'var(--color-red)' }}>Active for Enquiries</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                paddingTop: '20px',
                borderTop: '1px solid var(--color-surface-border)'
              }}
            >
              <a
                href={gymInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: '1 1 auto', minWidth: '160px', padding: '12px 18px', fontSize: '15px' }}
              >
                <Navigation size={17} />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${gymInfo.phoneTel}`}
                className="btn btn-secondary"
                style={{ flex: '1 1 auto', minWidth: '140px', padding: '12px 18px', fontSize: '15px' }}
              >
                <Phone size={17} />
                <span>CALL DESK</span>
              </a>

              <a
                href={getWhatsAppUrl("Hi Oxygen Gym, I would like to schedule a visit to the gym in Model Town.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
              >
                <MessageSquare size={17} />
                <span>ENQUIRE ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map Card */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-surface-border)',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            {/* Architectural Location Render / Map Graphic */}
            <div style={{ position: 'relative', flex: 1, minHeight: '300px' }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvEW3EiX1gu9Ol5w4n7Uk11TxU1axmd_L61VosuR_wjko0_VVXj1aQEhPppLmVjma0s5pUpMpJ3imCEJNRyAxAqjCnSQwvFrBR5iHKqoA6nh0RmyrbSGEw9hSmSb08RHZpPfuZOjRw4KXq3ccfrzivifPNUSRZOkMxI_9uHkNrrrr9x76LW2oPHMHADyVVnq62qTZtc3Pdpm-WPqgTW-wOW5P9TzkYdQ5X97BEC_vHKjicO16QMBDr_5Ukz0NayuaukIIgYdHy9oLt"
                alt="Map representation of Model Town Panipat showing Oxygen Gym location"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                loading="lazy"
              />

              {/* Pin Overlay Badge */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(10, 10, 11, 0.45)',
                  backdropFilter: 'blur(2px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    boxShadow: '0 0 24px rgba(239, 41, 41, 0.6)',
                    marginBottom: '12px'
                  }}
                >
                  <MapPin size={28} />
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    letterSpacing: '0.04em'
                  }}
                >
                  OXYGEN GYM
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    color: 'var(--color-text-muted)',
                    marginTop: '2px',
                    fontWeight: 500
                  }}
                >
                  Model Town, Panipat, Haryana 132103
                </span>

                <a
                  href={gymInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    marginTop: '18px',
                    padding: '10px 20px',
                    fontSize: '14px'
                  }}
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Bottom Landmark Strip */}
            <div
              style={{
                padding: '16px 20px',
                borderTop: '1px solid var(--color-surface-border)',
                backgroundColor: 'var(--color-surface-elevated)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: 'var(--color-text-muted)'
              }}
            >
              <span>Near Main Market Landmark</span>
              <span style={{ color: 'var(--color-red)', fontWeight: 600 }}>Easy Parking Area</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
