import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { faqs } from '../data/faqs';
import { getWhatsAppUrl } from '../data/gymInfo';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="section" aria-labelledby="faqs-title" style={{ backgroundColor: '#0D0D0E' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
            QUESTIONS & ANSWERS
          </span>
          <h2 id="faqs-title" className="section-title">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Everything you need to know about joining, daily operating shifts, and facilities at Oxygen Gym, Model Town, Panipat.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: isOpen ? '1px solid rgba(239, 41, 41, 0.4)' : '1px solid var(--color-surface-border)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast)'
                }}
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleIndex(index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    color: 'var(--color-text)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '19px',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                      color: isOpen ? 'var(--color-red)' : 'var(--color-text)',
                      transition: 'color var(--transition-fast)'
                    }}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    color={isOpen ? 'var(--color-red)' : 'var(--color-text-dim)'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-normal)',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    style={{
                      padding: '0 24px 22px 24px',
                      color: 'var(--color-text-muted)',
                      fontSize: '15px',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingTop: '14px'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Box */}
        <div
          style={{
            marginTop: '40px',
            padding: '20px',
            backgroundColor: 'var(--color-surface-elevated)',
            border: '1px solid var(--color-surface-border)',
            borderRadius: '6px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '16px', color: 'var(--color-text)', marginBottom: '4px' }}>
              Have another question?
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
              Our team in Model Town Panipat is available to answer your specific queries.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hi Oxygen Gym, I have a question that was not listed on your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: '14px', padding: '10px 18px' }}
          >
            <MessageSquare size={16} />
            <span>ASK ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
}
