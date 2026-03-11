"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * FilarAI Services Section
 * Layout: 2x2 grid on desktop, 1 column on mobile.
 * Features: Branded cards, custom SVG icons, staggered on-scroll animations.
 */
export const Services = () => {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const serviceCards = [
        {
            title: "Koniec ręcznej roboty",
            description: "Automatyzujemy powtarzalne procesy które pochłaniają czas bez tworzenia wartości. Twój zespół skupia się na tym co ważne.",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            ),
            examples: [
                "Automatyczne faktury i dokumenty",
                "Obsługa skrzynki mailowej przez AI",
                "Synchronizacja danych między systemami"
            ]
        },
        {
            title: "System który pracuje gdy Ty śpisz",
            description: "Budujemy agentów AI i dedykowane aplikacje webowe zintegrowane z Twoimi procesami. Architektura pod Twój biznes — nie gotowe szablony.",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                </svg>
            ),
            examples: [
                "Chatbot z bazą wiedzy firmy",
                "Agent kwalifikujący leady 24/7",
                "Dashboard zarządzania z autoryzacją"
            ]
        },
        {
            title: "Strona która generuje zapytania",
            description: "Tworzymy szybkie strony internetowe zaprojektowane tak by aktywnie pozyskiwać klientów — nie tylko ładnie wyglądać.",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <line x1="3" x2="21" y1="9" y2="9" />
                    <line x1="9" x2="9" y1="21" y2="9" />
                </svg>
            ),
            examples: [
                "Wizytówka B2B pod reklamy",
                "Landing page z automatyzacją leadów",
                "Strona z wbudowanym chatbotem AI"
            ]
        },
        {
            title: "Gdzie uciekają Twoje pieniądze?",
            description: "Audyt procesów firmy i konkretna mapa drogowa — zanim zainwestujesz w wdrożenie wiesz dokładnie co kupujesz i ile to zwróci.",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" x2="16.65" y1="21" y2="16.65" />
                    <line x1="11" x2="11" y1="8" y2="12" />
                    <line x1="11" x2="11.01" y1="14" y2="14" />
                </svg>
            ),
            examples: [
                "Analiza procesów operacyjnych",
                "Identyfikacja quick wins w 2 tygodnie",
                "Raport z priorytetami i kosztami"
            ]
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#0F0F0F] py-[96px] overflow-hidden"
            style={{ '--bg-1': '#0F0F0F' }}
        >
            <style>{`
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .services-header {
          margin-bottom: 56px;
        }

        .section-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-3, #5A5550);
          display: block;
          margin-bottom: 12px;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .services-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-1, #F0EFEE);
          line-height: 1.1;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.1s;
        }

        .services-title span.accent {
          color: var(--red, #D93025);
        }

        .services-subtitle {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 17px;
          color: var(--text-2, #9A9590);
          max-width: 520px;
          margin-top: 16px;
          line-height: 1.75;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.2s;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .service-card {
          background-color: var(--bg-2, #141414);
          border: 1px solid var(--bg-4, #222222);
          border-radius: 12px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }

        .service-card:hover {
          border-color: var(--red, #D93025);
          box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
          transform: translateY(-1px);
        }

        .icon-box {
          width: 48px;
          height: 48px;
          background-color: var(--red-subtle, rgba(217, 48, 37, 0.08));
          border: 1px solid var(--red-border, rgba(217, 48, 37, 0.25));
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--red, #D93025);
        }

        .card-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--text-1, #F0EFEE);
          margin-top: 20px;
        }

        .card-description {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 15px;
          line-height: 1.75;
          color: var(--text-2, #9A9590);
          margin-top: 10px;
          flex-grow: 1;
        }

        .card-divider {
          height: 1px;
          background-color: var(--bg-4, #222222);
          margin: 20px 0;
        }

        .examples-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .example-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .example-prefix {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 12px;
          color: var(--red, #D93025);
          flex-shrink: 0;
        }

        .example-text {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-1, #F0EFEE);
        }

        .card-btn {
          margin-top: 24px;
          align-self: flex-start;
          background: transparent;
          border: 1px solid var(--bg-4, #222222);
          border-radius: 8px;
          padding: 10px 20px;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-2, #9A9590);
          cursor: pointer;
          transition: all 0.15s ease;
          text-decoration: none;
        }

        .card-btn:hover {
          border-color: var(--red, #D93025);
          color: var(--red, #D93025);
        }

        .services-cta {
          margin-top: 56px;
          display: flex;
          justify-content: center;
          gap: 16px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.6s;
        }

        .btn-primary {
          background-color: var(--red, #D93025);
          color: #FFFFFF;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 14px;
          font-weight: 600;
          padding: 11px 22px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-primary:hover {
          background-color: var(--red-dim, #A8201A);
          box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
        }

        .btn-secondary {
          background-color: transparent;
          border: 1px solid var(--bg-4, #222222);
          color: var(--text-1, #F0EFEE);
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 14px;
          font-weight: 600;
          padding: 11px 22px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-secondary:hover {
          border-color: var(--red, #D93025);
          color: var(--red, #D93025);
        }

        /* Animation Triggered States */
        .is-active .section-label,
        .is-active .services-title,
        .is-active .services-subtitle,
        .is-active .services-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .is-active .service-card {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s ease, transform 0.4s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .is-active .card-1 { transition-delay: 0.1s; }
        .is-active .card-2 { transition-delay: 0.2s; }
        .is-active .card-3 { transition-delay: 0.3s; }
        .is-active .card-4 { transition-delay: 0.4s; }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .services-cta {
            flex-direction: column;
            align-items: center;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

            <div className={`services-container ${isVisible ? 'is-active' : ''}`}>
                <header className="services-header">
                    <span className="section-label">OFERTA I WDROŻENIA</span>
                    <h2 className="services-title">
                        Cztery obszary w których zamieniamy <span className="accent">chaos</span> w system.
                    </h2>
                    <p className="services-subtitle">
                        Projektujemy i wdrażamy rozwiązania skrojone pod Twój biznes, nie na odwrót.
                    </p>
                </header>

                <div className="services-grid">
                    {serviceCards.map((card, index) => (
                        <div key={index} className={`service-card card-${index + 1}`}>
                            <div className="icon-box">
                                {card.icon}
                            </div>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>

                            <div className="card-divider" />

                            <div className="examples-list">
                                {card.examples.map((example, i) => (
                                    <div key={i} className="example-item">
                                        <span className="example-prefix">—</span>
                                        <span className="example-text">{example}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#oferta" className="card-btn">Poznaj lepiej ofertę →</a>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <a href="#oferta" className="btn-primary">Poznaj ofertę dokładniej →</a>
                    <a href="#kontakt" className="btn-secondary">Umów się na konsultację</a>
                </div>
            </div>
        </section>
    );
};
