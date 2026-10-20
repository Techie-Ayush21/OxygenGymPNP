import React from 'react';
import { MapPin, Clock, Dumbbell, MessageSquare } from 'lucide-react';
import { gymInfo } from '../data/gymInfo';

export default function QuickFacts() {
  const facts = [
    {
      icon: MapPin,
      title: "Prime Location",
      subtitle: "Model Town, Panipat",
      description: "Conveniently situated near Main Market with accessible roadside parking."
    },
    {
      icon: Clock,
      title: "Daily Hours",
      subtitle: "5:30 AM – 10:30 PM",
      description: "Mon – Sat: 05:30 AM – 10:30 PM | Sun: 09:00 AM – 02:30 PM."
    },
    {
      icon: Dumbbell,
      title: "Training Zones",
      subtitle: "Iron, Cardio & Turf",
      description: "Calibrated free weights up to 50kg+, high-incline cardio, and sled turf track."
    },
    {
      icon: MessageSquare,
      title: "Fast Enquiries",
      subtitle: "Direct WhatsApp",
      description: "Message our front desk for current seasonal membership offers and walk-in tours."
    }
  ];

  return (
    <section
      aria-label="Oxygen Gym Quick Facts"
      style={{
        backgroundColor: '#0F0F11',
        borderBottom: '1px solid var(--color-border)',
        paddingTop: '36px',
        paddingBottom: '36px'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '24px'
          }}
        >
          {facts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  padding: '16px',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '6px',
                  border: '1px solid var(--color-surface-border)',
                  borderLeft: '3px solid var(--color-red)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(239, 41, 41, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-red)'
                    }}
                  >
                    <IconComponent size={18} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-text-dim)',
                        display: 'block'
                      }}
                    >
                      {fact.title}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '17px',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        letterSpacing: '0.02em',
                        display: 'block'
                      }}
                    >
                      {fact.subtitle}
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.5,
                    marginTop: '4px'
                  }}
                >
                  {fact.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
