import React from 'react';
import { Check, MessageSquare, Sparkles } from 'lucide-react';
import { getActiveOffers } from '../data/offers';
import { getWhatsAppUrl } from '../data/gymInfo';

export default function MembershipOffers() {
  const activeOffers = getActiveOffers();

  return (
    <section id="memberships" className="section" aria-labelledby="memberships-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
            MEMBERSHIP & OFFERS
          </span>
          <h2 id="memberships-title" className="section-title">
            FIND THE PLAN THAT FITS YOU
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Ask the Oxygen Gym team about current plans, membership durations, and ongoing seasonal
            promotions in Model Town, Panipat.
          </p>
        </div>

        {/* Membership Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            alignItems: 'stretch'
          }}
        >
          {activeOffers.map((offer) => {
            const isFeatured = offer.isFeatured;
            const whatsappMessage = `Hi Oxygen Gym Model Town, I am interested in the ${offer.name} (${offer.duration}). Please share current pricing and offer details.`;

            return (
              <div
                key={offer.id}
                style={{
                  backgroundColor: isFeatured ? 'var(--color-surface-elevated)' : 'var(--color-surface)',
                  border: isFeatured ? '2px solid var(--color-red)' : '1px solid var(--color-surface-border)',
                  borderRadius: '8px',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: isFeatured
                    ? '0 12px 36px rgba(239, 41, 41, 0.22)'
                    : '0 8px 24px rgba(0, 0, 0, 0.4)',
                  transform: isFeatured ? 'translateY(-4px)' : 'none',
                  transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
                }}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--color-red)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '4px 14px',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 4px 12px rgba(239, 41, 41, 0.4)'
                    }}
                  >
                    <Sparkles size={13} />
                    <span>RECOMMENDED</span>
                  </div>
                )}

                <div>
                  {/* Top Tier Label & Duration */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '12px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: isFeatured ? 'var(--color-red)' : 'var(--color-text-dim)'
                      }}
                    >
                      {offer.label}
                    </span>
                    <span
                      style={{
                        backgroundColor: isFeatured ? 'rgba(239, 41, 41, 0.15)' : 'var(--color-surface-border)',
                        color: isFeatured ? 'var(--color-red)' : 'var(--color-text)',
                        fontSize: '12px',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {offer.duration}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '26px',
                      fontWeight: 700,
                      marginBottom: '8px',
                      color: 'var(--color-text)'
                    }}
                  >
                    {offer.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.5,
                      marginBottom: '20px',
                      minHeight: '40px'
                    }}
                  >
                    {offer.description}
                  </p>

                  {/* Pricing Display */}
                  <div
                    style={{
                      padding: '14px',
                      backgroundColor: isFeatured ? 'rgba(0, 0, 0, 0.4)' : '#101012',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      marginBottom: '24px',
                      textAlign: 'center'
                    }}
                  >
                    {offer.price !== null ? (
                      <div>
                        <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>₹</span>
                        <span
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '34px',
                            fontWeight: 700,
                            color: 'var(--color-text)'
                          }}
                        >
                          {offer.price}
                        </span>
                        <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginLeft: '4px' }}>
                          / {offer.duration}
                        </span>
                      </div>
                    ) : (
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: isFeatured ? 'var(--color-text)' : 'var(--color-text-muted)',
                          letterSpacing: '0.02em'
                        }}
                      >
                        Contact us for current pricing
                      </div>
                    )}
                  </div>

                  {/* Benefits Checklist */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      marginBottom: '28px'
                    }}
                  >
                    {offer.benefits.map((benefit, bIdx) => (
                      <li
                        key={bIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '13px',
                          color: 'var(--color-text)',
                          lineHeight: 1.4
                        }}
                      >
                        <Check
                          size={16}
                          color="var(--color-red)"
                          style={{ flexShrink: 0, marginTop: '2px' }}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquiry Action Button */}
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isFeatured ? "btn btn-primary" : "btn btn-secondary"}
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '15px'
                  }}
                  aria-label={`Ask about ${offer.name} on WhatsApp`}
                >
                  <MessageSquare size={17} />
                  <span>ASK ABOUT THIS PLAN</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Static Offer Disclaimer Notice */}
        <div
          style={{
            marginTop: '36px',
            textAlign: 'center',
            fontSize: '13px',
            color: 'var(--color-text-dim)',
            maxWidth: '680px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6
          }}
        >
          Membership offers and seasonal availability are subject to periodic updates by Oxygen Gym.
          Please contact our team directly to verify the latest rates and register your membership.
        </div>
      </div>
    </section>
  );
}
