import React from 'react';
import { MessageSquare, ArrowDown, MapPin, ShieldCheck, Flame } from 'lucide-react';
import { gymInfo, getWhatsAppUrl } from '../data/gymInfo';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Welcome to Oxygen Gym"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - var(--total-nav-offset))',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '48px',
        paddingBottom: '64px',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      {/* Background Cinematic Fitness Photography */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlUAf05GAvLDfL9OhxMonq5emQ1n1-jQXW0tn7t3FIsRufZ9nFedEignt5xGESy71th51306o3M5_swpdNtEsSg8QvqUDc8I1-R5u3ijEoHDJoXLTvN7bbfc_MT1kJh75SvXBD-xybiyzTkQBQieYLFwI1EGfXoeRKKUM09Ulnt23jH60jnDHhDaM88bnQnyIrX0qpo9ynjUxZDb8xPg_hMkcE7fu_tZakPSdj2et4HnsgYMaqa9V-FZILXwI4FZy_6c_dQSum3lNA')`,
          backgroundPosition: 'center 30%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.28,
          transform: 'scale(1.02)',
          zIndex: 0
        }}
      />

      {/* Atmospheric Dark & Vignette Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 75% 20%, rgba(239, 41, 41, 0.12) 0%, transparent 60%), linear-gradient(180deg, rgba(10, 10, 11, 0.75) 0%, rgba(10, 10, 11, 0.95) 75%, #0A0A0B 100%)',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Headlines & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Eyebrow Location Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span className="badge badge-dark" style={{ borderColor: 'rgba(239, 41, 41, 0.4)' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-red)'
                  }}
                />
                YOUR FITNESS. YOUR PACE.
              </span>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--color-text-muted)'
                }}
              >
                <MapPin size={13} color="var(--color-red)" />
                <span>MODEL TOWN · PANIPAT</span>
              </div>
            </div>

            {/* Main Display Headline */}
            <h1
              style={{
                fontSize: 'clamp(42px, 6.5vw, 76px)',
                fontWeight: 700,
                letterSpacing: '0.02em',
                lineHeight: 1.02,
                color: 'var(--color-text)'
              }}
            >
              BUILD YOUR <br />
              <span
                style={{
                  color: 'var(--color-red)',
                  textShadow: '0 0 30px rgba(239, 41, 41, 0.35)'
                }}
              >
                STRONGER
              </span>{' '}
              SELF.
            </h1>

            {/* Narrative Subtext */}
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                lineHeight: 1.6,
                color: 'var(--color-text-muted)',
                maxWidth: '560px'
              }}
            >
              Train at Oxygen Gym, Model Town, Panipat. Explore our high-grade facilities,
              calibrated lifting platforms, and ask our team about current membership offers.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                paddingTop: '8px'
              }}
            >
              <a
                href={getWhatsAppUrl("Hi Oxygen Gym, I want to enquire on WhatsApp about membership plans.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: '16px 28px',
                  fontSize: '17px'
                }}
              >
                <MessageSquare size={19} />
                <span>ENQUIRE ON WHATSAPP</span>
              </a>

              <a
                href="#memberships"
                className="btn btn-secondary"
                style={{
                  padding: '16px 26px',
                  fontSize: '17px'
                }}
              >
                <span>EXPLORE MEMBERSHIPS</span>
                <ArrowDown size={18} />
              </a>
            </div>

            {/* Trust Markers / Authentic Highlights */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="var(--color-red)" />
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Verified Floor Equipment
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Flame size={18} color="var(--color-red)" />
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Morning & Evening Shifts
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor Card */}
          <div
            style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)'
            }}
          >
            <div style={{ position: 'relative', height: '360px', width: '100%' }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4NilN68-amyrC7J7z5byoc6vJm-2NzpGlSis_mr3MpcmlMSeb8PTJwvSn-MWrhxyIdEC2gCm-Z5U3SHMz0S7TfG1WARz4kPb1Rr35VRCJv01Nt_dhPjzjFGGFfsNcufi89-Y2wpihDAv1MI_NGKRaBxN4cCyDzZ8A37J4FPYbPZDr2FLI2QD4dXe3YLrnXZna3kZaVlYS6b3q5WmZr2n2EaYhUKVbWhtDPHxTer7n3H2WZrEm3z-0DA2b6q3_dCCPv8VNanUUSnwB"
                alt="Oxygen Gym heavy dumbbell racks and strength equipment in Model Town Panipat"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(10, 10, 11, 0.1) 0%, rgba(10, 10, 11, 0.8) 100%)'
                }}
              />

              {/* Inset Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(21, 21, 23, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-text)',
                    textTransform: 'uppercase'
                  }}
                >
                  STRENGTH & HEAVY IRON
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-red)',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#FFFFFF',
                    textTransform: 'uppercase'
                  }}
                >
                  PANIPAT FACILITY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
