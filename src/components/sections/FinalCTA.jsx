"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * FilarAI Final CTA Section
 * Features: Warm red gradient background, inverted primary button, 
 * contact alternatives, and staggered on-scroll animations.
 */
export const FinalCTA = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const contactOptions = [
        {
            label: "WHATSAPP",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            ),
            href: "https://wa.me/48534458418"
        },
        {
            label: "INSTAGRAM",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
            href: "https://www.instagram.com/kacperfilar_/"
        },
        {
            label: "EMAIL",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            href: "mailto:kacperfilarkontakt@gmail.com"
        },
        {
            label: "TELEFON",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            href: "tel:+48534458418"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #7A1510 0%, #1a0a08 100%)',
                padding: '120px 0'
            }}
        >
            <style>{`
        .cta-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(217, 48, 37, 0.15) 0%, transparent 70%);
        }

        .cta-top-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #D93025 50%, transparent 100%);
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          padding: 0 24px;
        }

        .cta-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(240, 239, 238, 0.5);
          display: block;
        }

        .cta-heading {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(36px, 6vw, 52px);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.0;
          color: #F0EFEE;
          margin-top: 16px;
        }

        .cta-support {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 18px;
          line-height: 1.75;
          color: rgba(240, 239, 238, 0.7);
          max-width: 480px;
          margin: 24px auto 0;
        }

        .cta-button {
          display: inline-block;
          margin-top: 48px;
          background: #F0EFEE;
          color: #D93025;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-weight: 700;
          font-size: 15px;
          letter-spacing: -0.01em;
          padding: 14px 32px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .cta-button:hover {
          background: #ffffff;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transform: translateY(-2px);
        }

        .cta-microcopy {
          margin-top: 16px;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(240, 239, 238, 0.4);
          display: block;
        }

        .contact-options {
          margin-top: 56px;
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          cursor: pointer;
          group;
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(240, 239, 238, 0.1);
          border: 1px solid rgba(240, 239, 238, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(240, 239, 238, 0.7);
          transition: all 0.2s ease;
        }

        .contact-icon svg {
          width: 18px;
          height: 18px;
        }

        .contact-item:hover .contact-icon {
          border-color: rgba(240, 239, 238, 0.5);
          background: rgba(240, 239, 238, 0.15);
        }

        .contact-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(240, 239, 238, 0.4);
          transition: all 0.2s ease;
        }

        .contact-item:hover .contact-label {
          color: rgba(240, 239, 238, 0.7);
        }

        .cta-bottom-divider {
          margin-top: 56px;
          height: 1px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
          background: linear-gradient(90deg, transparent 0%, rgba(240, 239, 238, 0.2) 50%, transparent 100%);
        }

        .footer-line {
          margin-top: 24px;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(240, 239, 238, 0.25);
        }

        /* Animations */
        .stagger-item {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .visible .stagger-item {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-0 { transition-delay: 0s; }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.45s; }
      `}</style>

            <div className="cta-overlay" />
            <div className="cta-top-line" />

            <div className={`cta-content ${isVisible ? 'visible' : ''}`}>
                <span className="cta-label stagger-item delay-0">NASTĘPNY KROK</span>
                <h2 className="cta-heading stagger-item delay-1">
                    30 minut rozmowy. Konkretne wnioski. Zero zobowiązań.
                </h2>
                <p className="cta-support stagger-item delay-2">
                    Nie musisz wiedzieć od czego zacząć. Wystarczy że wiesz że coś można zrobić lepiej.
                </p>

                <div className="stagger-item delay-3">
                    <a href="#" className="cta-button">
                        Umów bezpłatną konsultację →
                    </a>
                    <span className="cta-microcopy">
                        Odpiszę w ciągu 24h · Bez umów · Bez ukrytych kosztów
                    </span>
                </div>

                <div className="contact-options stagger-item delay-4">
                    {contactOptions.map((option, idx) => (
                        <a key={idx} href={option.href} className="contact-item">
                            <div className="contact-icon">
                                {option.icon}
                            </div>
                            <span className="contact-label">{option.label}</span>
                        </a>
                    ))}
                </div>

                <div className="cta-bottom-divider stagger-item delay-4" />

                <div className="footer-line stagger-item delay-4">
                    FilarAI · filarai.agency · Wdrożenia AI · Automatyzacje · Narzędzia Cyfrowe
                </div>
            </div>
        </section>
    );
};
