"use client";
import React, { useState, useEffect, useRef } from 'react';

/**
 * FilarAI Testimonials Section
 * Features: Custom 3-card carousel (center focused), auto-advance with manual override,
 * responsive design, and on-scroll animations.
 */
export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const autoPlayRef = useRef(null);

    const testimonials = [
        {
            quote: "Przestałem spędzać piątki na przepisywaniu faktur. System robi to sam od ręki — zdjęcie i gotowe. Nie wierzę że tyle czasu na to traciłem.",
            name: "Marek Kowalski",
            role: "WŁAŚCICIEL · BIURO RACHUNKOWE",
            initials: "MK"
        },
        {
            quote: "Nasi pracownicy przestali bombardować mnie pytaniami o procedury. Agent AI wie wszystko i odpowiada w kilka sekund. Odzyskałem spokój w pracy.",
            name: "Anna Wiśniewska",
            role: "MANAGER · FIRMA USŁUGOWA",
            initials: "AW"
        },
        {
            quote: "Myślałem że to skomplikowane i drogie. Okazało się że pierwsze demo miałem po 48 godzinach. Teraz system kwalifikuje mi leady zanim zdążę odebrać telefon.",
            name: "Piotr Nowak",
            role: "CEO · AGENCJA MARKETINGOWA",
            initials: "PN"
        },
        {
            quote: "Zarządzanie zapasami w Excelu było koszmarem. Teraz każdy pracownik ma dostęp z telefonu i zamówienia składa w minutę. Nie wyobrażam sobie powrotu do starego.",
            name: "Katarzyna Jabłońska",
            role: "DYREKTOR OPERACYJNY · HANDEL",
            initials: "KJ"
        },
        {
            quote: "Strona zaczęła generować zapytania w pierwszym tygodniu. Chatbot obsługuje klientów w nocy kiedy śpię. To jak zatrudnić kogoś kto nigdy nie wychodzi z biura.",
            name: "Tomasz Wróbel",
            role: "WŁAŚCICIEL · GABINET STOMATOLOGICZNY",
            initials: "TW"
        },
        {
            quote: "Kacper nie sprzedał mi technologii — rozwiązał mi problem. Różnica jest ogromna. System działa, dokumentacja jest prosta i wiem dokładnie co się dzieje.",
            name: "Magdalena Czarnecka",
            role: "WŁAŚCICIEL · E-COMMERCE",
            initials: "MC"
        }
    ];

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
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }, 6000);
        }
        return () => clearInterval(autoPlayRef.current);
    }, [isAutoPlaying, testimonials.length]);

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleManualSelect = (index) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    // Helper to get card classes based on index
    const getCardPosition = (index) => {
        const diff = (index - currentIndex + testimonials.length) % testimonials.length;
        if (diff === 0) return 'active';
        if (diff === 1) return 'next';
        if (diff === testimonials.length - 1) return 'prev';
        return 'hidden';
    };

    return (
        <section
            ref={sectionRef}
            className={`relative w-full bg-[var(--bg-0)] py-[96px] overflow-hidden transition-all duration-700`}
        >
            <style>{`
        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-3, #5A5550);
          display: block;
          margin-bottom: 12px;
        }

        .section-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-1, #F0EFEE);
        }

        .section-title span {
          color: var(--red, #D93025);
        }

        /* Carousel Wrapper */
        .carousel-view {
          position: relative;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonial-card {
          position: absolute;
          background: var(--bg-2, #141414);
          border-radius: 12px;
          padding: 48px;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
        }

        /* CARD STATES */
        .testimonial-card.active {
          width: 580px;
          z-index: 10;
          opacity: 1;
          filter: blur(0);
          transform: translateX(0) scale(1);
          border: 1px solid var(--red, #D93025);
          box-shadow: 0 0 32px rgba(217, 48, 37, 0.15);
        }

        .testimonial-card.prev {
          width: 480px;
          z-index: 5;
          opacity: 0.25;
          filter: blur(3px);
          transform: translateX(-380px) scale(0.92);
          border: 1px solid var(--bg-4, #222222);
          cursor: pointer;
        }

        .testimonial-card.next {
          width: 480px;
          z-index: 5;
          opacity: 0.25;
          filter: blur(3px);
          transform: translateX(380px) scale(0.92);
          border: 1px solid var(--bg-4, #222222);
          cursor: pointer;
        }

        .testimonial-card.hidden {
          opacity: 0;
          filter: blur(10px);
          transform: scale(0.8);
          pointer-events: none;
        }

        /* Card Elements */
        .quote-mark {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 80px;
          font-weight: 800;
          color: var(--red, #D93025);
          line-height: 0.8;
          margin-bottom: 8px;
        }

        .quote-text {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-style: italic;
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-1, #F0EFEE);
          max-width: 480px;
        }

        .card-divider {
          height: 1px;
          background: var(--bg-4, #222222);
          margin: 28px 0;
        }

        .author-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-3, #1A1A1A);
          border: 2px solid var(--red, #D93025);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display, 'Syne', sans-serif);
          font-weight: 700;
          font-size: 16px;
          color: var(--red, #D93025);
          flex-shrink: 0;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-weight: 600;
          font-size: 16px;
          color: var(--text-1, #F0EFEE);
        }

        .author-role {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-3, #5A5550);
          margin-top: 4px;
        }

        /* Navigation */
        .carousel-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 48px;
        }

        .nav-arrows {
          display: flex;
          gap: 16px;
        }

        .nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-2, #141414);
          border: 1px solid var(--bg-4, #222222);
          color: var(--text-2, #9A9590);
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .nav-btn:hover {
          border-color: var(--red, #D93025);
          color: var(--red, #D93025);
        }

        .nav-btn.disabled {
          opacity: 0.3;
          pointer-events: none;
        }

        .nav-dots {
          display: flex;
          gap: 8px;
          margin-top: 20px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--bg-4, #222222);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 24px;
          height: 8px;
          border-radius: 4px;
          background: var(--red, #D93025);
        }

        .cta-row {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 48px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.2s;
        }
        .cta-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary {
          background: var(--red, #D93025);
          color: #ffffff;
          border-radius: 4px;
          padding: 11px 22px;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-primary:hover {
          background: var(--red-dim, #A8201A);
          box-shadow: var(--shadow-red, 0 0 24px rgba(217, 48, 37, 0.3));
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-1, #F0EFEE);
          border: 1px solid var(--bg-4, #222222);
          border-radius: 4px;
          padding: 11px 22px;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-secondary:hover {
          border-color: var(--red, #D93025);
          color: var(--red, #D93025);
        }

        @media (max-width: 768px) {
          .cta-row {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding: 0 16px;
          }
          .testimonial-card.active {
            width: calc(100% - 80px);
            padding: 32px;
          }
          .testimonial-card.prev {
            transform: translateX(-180px) scale(0.85);
            opacity: 0.15;
            filter: blur(4px);
          }
          .testimonial-card.next {
            transform: translateX(180px) scale(0.85);
            opacity: 0.15;
            filter: blur(4px);
          }
          .quote-text {
            font-size: 16px;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>

            <div className="testimonials-container">
                <header className="section-header">
                    <span className="section-label">OPINIE</span>
                    <h2 className="section-title">Co mówią ci, którzy wybrali <span>system</span>.</h2>
                </header>

                <div className="carousel-view">
                    {testimonials.map((item, idx) => {
                        const position = getCardPosition(idx);
                        return (
                            <div
                                key={idx}
                                className={`testimonial-card ${position}`}
                                onClick={position === 'next' ? handleNext : position === 'prev' ? handlePrev : undefined}
                            >
                                <span className="quote-mark">„</span>
                                <p className="quote-text">{item.quote}</p>
                                <div className="card-divider" />
                                <div className="author-row">
                                    <div className="avatar">{item.initials}</div>
                                    <div className="author-info">
                                        <span className="author-name">{item.name}</span>
                                        <span className="author-role">{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="carousel-nav">
                    <div className="nav-arrows">
                        <button
                            className={`nav-btn ${currentIndex === 0 ? 'disabled' : ''}`}
                            onClick={handlePrev}
                        >
                            ←
                        </button>
                        <button
                            className="nav-btn"
                            onClick={handleNext}
                        >
                            →
                        </button>
                    </div>
                    <div className="nav-dots">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                                onClick={() => handleManualSelect(idx)}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`cta-row ${isVisible ? 'visible' : ''}`}>
                    <a href="https://calendar.app.google/BtxhP1NN7bvTtwX57" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Umów konsultację →
                    </a>
                    <a href="/portfolio" className="btn-secondary">
                        Zobacz portfolio
                    </a>
                </div>
            </div>
        </section>
    );
};
