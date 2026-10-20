import React from 'react';
import { MapPin, Dumbbell, Clock, Users, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/gymInfo';

export default function WhyOxygen() {
  const differentiators = [
    {
      icon: MapPin,
      title: "Prime Central Location",
      desc: "Located in Model Town, Panipat near the Main Market. Convenient walking and roadside parking access for local residents."
    },
    {
      icon: Dumbbell,
      title: "Extensive Heavy Iron Selection",
      desc: "Full rack of dumbbells scaling from lightweight up to 50kg+, Olympic barbells, power racks, and targeted biomechanic machines."
    },
    {
      icon: Clock,
      title: "Early-to-Late Shift Flexibility",
      desc: "Doors open at 5:30 AM for early risers and stay open until 10:30 PM for post-work sessions, accommodating busy professional schedules."
    },
    {
      icon: Users,
      title: "Disciplined Training Culture",
      desc: "A focused atmosphere where lifters of all experience levels train with purpose, respect, and consistent mutual encouragement."
    }
  ];

  return (
    <section id="why-oxygen" className="section theme-light" aria-labelledby="why-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-red)',
              marginBottom: '12px'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--color-red)',
                borderRadius: '1px'
              }}
            />
            WHY CHOOSE OXYGEN GYM
          </span>

          <h2
            id="why-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1.08,
              marginBottom: '16px',
              color: 'var(--color-light-text)'
            }}
          >
            A BETTER PLACE TO SHOW UP
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'var(--color-light-muted)',
              maxWidth: '640px',
              lineHeight: 1.6
            }}
          >
            We focus on what actually matters for long-term physical progress: reliable equipment,
            convenient hours, a clean workout floor, and a supportive community.
          </p>
        </div>

        {/* 4 Differentiators Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '24px'
          }}
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-light-border)',
                  borderRadius: '8px',
                  padding: '28px 24px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(239, 41, 41, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-red)'
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--color-light-text)',
                    letterSpacing: '0.02em'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--color-light-muted)',
                    lineHeight: 1.6
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Action */}
        <div
          style={{
            marginTop: '44px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <a
            href={getWhatsAppUrl("Hi Oxygen Gym, I want to learn more about the gym and visit for a tour.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light-primary"
            style={{ padding: '16px 32px' }}
          >
            <span>JOIN THE OXYGEN COMMUNITY</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
