import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/gymInfo';

export default function About() {
  const highlights = [
    {
      title: "Heavy Iron & Precision Platforms",
      desc: "Calibrated dumbbells reaching 50kg+, Olympic power bars, squat cages, and vibration platforms for safe progressive overload."
    },
    {
      title: "Air-Conditioned Atmosphere & Hygiene",
      desc: "Fully climate-controlled workout areas, personal secure lockers, clean changing spaces, and disciplined gym culture."
    },
    {
      title: "Floor Trainer Support",
      desc: "Knowledgeable floor trainers ready to guide beginners on posture calibration, machine setup, and injury prevention."
    }
  ];

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Image Composition */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--color-surface-border)',
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.7)'
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlUAf05GAvLDfL9OhxMonq5emQ1n1-jQXW0tn7t3FIsRufZ9nFedEignt5xGESy71th51306o3M5_swpdNtEsSg8QvqUDc8I1-R5u3ijEoHDJoXLTvN7bbfc_MT1kJh75SvXBD-xybiyzTkQBQieYLFwI1EGfXoeRKKUM09Ulnt23jH60jnDHhDaM88bnQnyIrX0qpo9ynjUxZDb8xPg_hMkcE7fu_tZakPSdj2et4HnsgYMaqa9V-FZILXwI4FZy_6c_dQSum3lNA"
                alt="Oxygen Gym interior floor and lifting equipment in Panipat"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover'
                }}
                loading="lazy"
              />
            </div>

            {/* Floating Accent Tag */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-red)',
                borderRadius: '6px',
                padding: '16px 20px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.8)',
                maxWidth: '260px'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--color-red)',
                  display: 'block',
                  lineHeight: 1.1
                }}
              >
                DISCIPLINE & COMMUNITY
              </span>
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--color-text-muted)',
                  marginTop: '4px',
                  display: 'block'
                }}
              >
                Model Town's premier lifting environment for genuine results.
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span className="section-eyebrow">ABOUT OXYGEN GYM</span>
              <h2 id="about-title" className="section-title">
                YOUR TRAINING. <br />
                YOUR NEXT LEVEL.
              </h2>
            </div>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: 1.65 }}>
              Oxygen Gym in Model Town, Panipat is built for individuals who prioritize disciplined training
              over social distractions. We provide a clean, high-energy environment equipped with heavy free
              weights, biomechanically sound machines, dedicated cardio stations, and functional turf lanes.
            </p>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: 1.65 }}>
              Whether you are an experienced lifter aiming for new personal records or a beginner taking your
              first steps toward physical conditioning, Oxygen Gym offers the space, equipment, and supportive
              atmosphere you need to succeed.
            </p>

            {/* Key Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '10px' }}>
              {highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--color-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        fontWeight: 700,
                        color: 'var(--color-text)',
                        textTransform: 'none',
                        letterSpacing: 'normal',
                        marginBottom: '2px'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Group */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '12px' }}>
              <a
                href={getWhatsAppUrl("Hi Oxygen Gym, I read about the gym on your website and would like to ask about membership.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>ASK ABOUT MEMBERSHIP</span>
                <ArrowRight size={17} />
              </a>

              <a href="#facilities" className="btn btn-secondary">
                <span>VIEW TRAINING ZONES</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
