"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/**
 * FilarAI Services Section
 * Layout: 2x2 grid on desktop, 1 column on mobile.
 * Features: Branded cards, custom SVG icons, staggered on-scroll animations.
 */
export const Services = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMove = (e) => {
            cardRefs.current.forEach((element) => {
                if (!element) return;
                const { left, top, width, height } = element.getBoundingClientRect();
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                const center = [left + width * 0.5, top + height * 0.5];
                const isActive =
                    mouseX > left - 80 && mouseX < left + width + 80 &&
                    mouseY > top - 80 && mouseY < top + height + 80;
                element.style.setProperty("--active", isActive ? "1" : "0");
                if (!isActive) return;
                const currentAngle = parseFloat(element.style.getPropertyValue("--start")) || 0;
                let targetAngle =
                    (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;
                const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
                const newAngle = currentAngle + angleDiff * 0.15;
                element.style.setProperty("--start", String(newAngle));
            });
        };

        document.body.addEventListener("pointermove", handleMove);

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

        return () => {
            observer.disconnect();
            document.body.removeEventListener("pointermove", handleMove);
        };
    }, []);

    const serviceCards = [
        {
            title: "Oszczędność czasu (Koniec ręcznej roboty)",
            description: "Automatyzujemy powtarzalne procesy które pochłaniają czas bez tworzenia wartości. Twój zespół skupia się na tym co ważne.",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.29 14.71a1 1 0 0 1 0-1.42l1.09-1.09a3 3 0 1 0-4.24-4.24l-1.09 1.09a1 1 0 0 1-1.42-1.42l1.09-1.09a5 5 0 0 1 7.07 7.07l-1.09 1.09a1 1 0 0 1-1.41 0zM14.21 16.54a1 1 0 0 1 1.42 1.42l-1.09 1.09a5 5 0 0 1-7.07-7.07l1.09-1.09a1 1 0 0 1 1.42 1.42l-1.09 1.09a3 3 0 1 0 4.24 4.24l1.09-1.09z" />
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
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #5A5550;
          display: block;
          margin-bottom: 12px;
          transition: opacity 0.4s ease, transform 0.4s ease;
          opacity: 0;
          transform: translateY(12px);
        }

        .services-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #F0EFEE;
          line-height: 1.1;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.1s;
          opacity: 0;
          transform: translateY(12px);
        }

        .services-title span.accent {
          color: #D93025;
        }

        .services-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 17px;
          color: #9A9590;
          max-width: 520px;
          margin-top: 16px;
          line-height: 1.75;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.2s;
          opacity: 0;
          transform: translateY(12px);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .service-card-wrapper {
          position: relative;
          border-radius: 12px;
          --active: 0;
          --start: 0;
          width: 100%;
          opacity: 0;
          transform: translateY(12px);
          transition: transform 0.3s ease, opacity 0.4s ease;
        }

        .is-active .service-card-wrapper {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card-wrapper:hover {
          transform: translateY(-2px);
          transition: transform 0.2s ease !important;
        }

        .service-card-wrapper:hover::before,
        .service-card-wrapper:hover .service-card-glow {
          transition-delay: 0s !important;
        }

        .service-card-glow {
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: conic-gradient(
            from calc((var(--start) - 45) * 1deg),
            transparent 0deg,
            #D93025 60deg,
            #A8201A 120deg,
            transparent 180deg
          );
          opacity: var(--active);
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 0;
        }

        .service-card-inner {
          position: relative;
          z-index: 1;
          background: #141414;
          border-radius: 11px;
          margin: 1px;
          height: calc(100% - 2px);
          box-sizing: border-box;
          padding: 32px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .service-card-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid #222222;
          pointer-events: none;
          z-index: 2;
          opacity: calc(1 - var(--active));
          transition: opacity 0.4s ease;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          background-color: rgba(217, 48, 37, 0.08);
          border: 1px solid rgba(217, 48, 37, 0.25);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D93025;
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #F0EFEE;
          margin-top: 20px;
        }

        .card-description {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: #9A9590;
          margin-top: 10px;
          flex-grow: 1;
        }

        .card-divider {
          height: 1px;
          background-color: #222222;
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
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #D93025;
          flex-shrink: 0;
        }

        .example-text {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #F0EFEE;
        }

        .card-btn {
          margin-top: 24px;
          align-self: flex-start;
          background: transparent;
          border: 1px solid #222222;
          border-radius: 8px;
          padding: 10px 20px;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #9A9590;
          cursor: pointer;
          transition: all 0.15s ease;
          text-decoration: none;
        }

        .card-btn:hover {
          border-color: #D93025;
          color: #D93025;
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
          background-color: #D93025;
          color: #FFFFFF;
          font-family: 'Outfit', sans-serif;
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
          background-color: #A8201A;
          box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
        }

        .btn-secondary {
          background-color: transparent;
          border: 1px solid #222222;
          color: #F0EFEE;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 11px 22px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-secondary:hover {
          border-color: #D93025;
          color: #D93025;
        }

        /* Animation Triggered States */
        .is-active .section-label,
        .is-active .services-title,
        .is-active .services-subtitle,
        .is-active .services-cta {
          opacity: 1;
          transform: translateY(0);
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
                        <div 
                            key={index} 
                            ref={(el) => (cardRefs.current[index] = el)}
                            className={`service-card-wrapper card-${index + 1}`}
                        >
                            <div className="service-card-glow" />
                            <div className="service-card-inner">
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
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <Link href="/oferta" className="btn-primary">Poznaj ofertę dokładniej →</Link>
                    <Link href="/kontakt" className="btn-secondary">Umów się na konsultację</Link>
                </div>
            </div>
        </section>
    );
};
