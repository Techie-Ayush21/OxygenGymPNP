import React from 'react';
import { MapPin, Clock, Phone, MessageSquare } from 'lucide-react';
import { gymInfo, getWhatsAppUrl } from '../data/gymInfo';

export default function UtilityBar() {
  return (
    <aside 
      className="utility-bar" 
      aria-label="Gym Quick Information"
      style={{
        backgroundColor: '#050506',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        width: '100%',
        position: 'relative',
        zIndex: 40
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          paddingTop: '6px',
          paddingBottom: '6px',
          minHeight: 'var(--utility-bar-height)'
        }}
      >
        {/* Left: Location & Hours */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={13} color="var(--color-red)" aria-hidden="true" />
            <span style={{ color: 'var(--color-text)' }}>{gymInfo.location}</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={13} color="var(--color-red)" aria-hidden="true" />
            <span>Open: {gymInfo.hoursSummary}</span>
          </div>
        </div>

        {/* Right: Phone & WhatsApp Active */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a 
            href={`tel:${gymInfo.phoneTel}`}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px',
              color: 'var(--color-text)'
            }}
            aria-label={`Call Oxygen Gym at ${gymInfo.phoneDisplay}`}
          >
            <Phone size={13} color="var(--color-red)" aria-hidden="true" />
            <span>{gymInfo.phoneDisplay}</span>
          </a>

          <a 
            href={getWhatsAppUrl("Hi Oxygen Gym Model Town, I have a quick question.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px',
              color: 'var(--color-red)',
              fontWeight: 600
            }}
            aria-label="Enquire with Oxygen Gym on WhatsApp"
          >
            <span 
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-red)',
                display: 'inline-block'
              }}
              aria-hidden="true"
            />
            <span>WhatsApp Available</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
