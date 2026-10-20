import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../data/gymInfo';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Quick WhatsApp Contact"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '20px',
        zIndex: 45
      }}
    >
      <a
        href={getWhatsAppUrl("Hi Oxygen Gym Model Town, I am visiting the website and would like to ask a question.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Oxygen Gym on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: 'var(--color-red)',
          color: '#FFFFFF',
          padding: '12px 18px',
          borderRadius: '50px',
          boxShadow: '0 8px 24px rgba(239, 41, 41, 0.45)',
          fontFamily: 'var(--font-heading)',
          fontSize: '15px',
          fontWeight: 600,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(239, 41, 41, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(239, 41, 41, 0.45)';
        }}
      >
        {/* Pulsing indicator */}
        <span
          style={{
            position: 'relative',
            display: 'flex',
            width: '10px',
            height: '10px'
          }}
        >
          <span
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              opacity: 0.75,
              animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}
          />
          <span
            style={{
              position: 'relative',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF'
            }}
          />
        </span>

        <MessageSquare size={18} />
        <span className="floating-text">ENQUIRE NOW</span>
      </a>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @media (max-width: 480px) {
          .floating-text {
            display: none;
          }
          aside[aria-label="Quick WhatsApp Contact"] a {
            padding: 14px;
            border-radius: 50%;
          }
        }
      `}</style>
    </aside>
  );
}
