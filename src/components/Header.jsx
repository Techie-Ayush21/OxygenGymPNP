import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { gymInfo, getWhatsAppUrl } from '../data/gymInfo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Facilities", href: "#facilities" },
    { label: "Memberships", href: "#memberships" },
    { label: "Why Oxygen", href: "#why-oxygen" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          backgroundColor: scrolled ? 'rgba(10, 10, 11, 0.95)' : 'var(--color-bg)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-border)',
          transition: 'background-color var(--transition-normal), box-shadow var(--transition-normal)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
          height: 'var(--header-height)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%'
          }}
        >
          {/* Logo / Brand Wordmark */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none'
            }}
            aria-label="Oxygen Gym Home"
          >
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
                fontSize: '18px',
                boxShadow: '0 0 14px rgba(239, 41, 41, 0.4)'
              }}
            >
              O
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: 'var(--color-text)',
                  lineHeight: 1
                }}
              >
                OXYGEN GYM
              </span>
              <span
                style={{
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: 'var(--color-red)',
                  textTransform: 'uppercase',
                  marginTop: '2px'
                }}
              >
                MODEL TOWN · PANIPAT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="desktop-nav"
            style={{
              display: 'none'
            }}
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                listStyle: 'none'
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '16px',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      color: 'var(--color-text-muted)',
                      padding: '6px 2px',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={getWhatsAppUrl("Hi Oxygen Gym, I want to enquire about membership.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary desktop-cta"
              style={{
                padding: '10px 20px',
                fontSize: '15px'
              }}
            >
              <span>ENQUIRE NOW</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '6px',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text)'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Modal */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            width: '100%',
            height: 'calc(100vh - var(--header-height))',
            backgroundColor: 'rgba(10, 10, 11, 0.98)',
            zIndex: 49,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px 20px 40px',
            overflowY: 'auto'
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '22px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--color-text)'
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} color="var(--color-red)" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Action Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
            <a
              href={getWhatsAppUrl("Hi Oxygen Gym, I want to enquire about membership.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', padding: '14px' }}
              onClick={handleLinkClick}
            >
              <MessageSquare size={18} />
              <span>ENQUIRE ON WHATSAPP</span>
            </a>

            <a
              href={`tel:${gymInfo.phoneTel}`}
              className="btn btn-secondary"
              style={{ width: '100%', padding: '14px' }}
              onClick={handleLinkClick}
            >
              <Phone size={18} />
              <span>CALL: {gymInfo.phoneDisplay}</span>
            </a>

            <div
              style={{
                textAlign: 'center',
                fontSize: '12px',
                color: 'var(--color-text-dim)',
                marginTop: '8px'
              }}
            >
              Model Town, Panipat · Open {gymInfo.hoursSummary}
            </div>
          </div>
        </div>
      )}

      {/* Responsive Header CSS Breakpoints */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-cta {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
