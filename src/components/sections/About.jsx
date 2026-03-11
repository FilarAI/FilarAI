"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * FilarAI About Section
 * Features: Two-column layout, staggered on-scroll animations, personal bio, 
 * principles list, and CTA buttons.
 */
export const About = () => {
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const principles = [
        {
            number: "01",
            title: "Nie biorę projektu jeśli nie wiem że dowiezie wynik",
            description: "Zanim zacznę — analizuję czy to ma sens biznesowy. Wolę odmówić niż wziąć pieniądze za coś co nie zadziała."
        },
        {
            number: "02",
            title: "Mówię wprost co działa a co nie",
            description: "Nawet jeśli oznacza to mniejszy zakres projektu. Twój czas i budżet są zbyt cenne na eksperymenty bez gwarancji."
        },
        {
            number: "03",
            title: "Dokumentuję wszystko żebyś nie był uzależniony ode mnie",
            description: "Każde wdrożenie kończy się dokumentacją i szkoleniem. Możesz działać samodzielnie — choć często wracasz po więcej."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#0F0F0F] py-[96px] overflow-hidden"
        >
            <style>{`
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        @media (min-width: 1024px) {
          .about-container {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        /* Left Column - Image & Facts */
        .about-left {
          flex: 0 0 100%;
          transition: all 0.5s ease;
        }

        @media (min-width: 1024px) {
          .about-left {
            flex: 0 0 45%;
          }
        }

        .about-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .image-container {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--bg-4, #222222);
          background: var(--bg-3, #1A1A1A);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s ease;
        }

        .image-container:hover {
          transform: scale(1.02);
        }

        .image-placeholder-icon {
          width: 80px;
          height: 80px;
          color: var(--bg-4, #222222);
        }

        .facts-row {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 20px;
        }

        .fact-item {
          display: flex;
          flex-direction: column;
        }

        .fact-number {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 28px;
          font-weight: 800;
          color: var(--text-1, #F0EFEE);
          line-height: 1;
        }

        .fact-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-3, #5A5550);
          margin-top: 4px;
        }

        .facts-divider {
          width: 1px;
          height: 32px;
          background: var(--bg-4, #222222);
        }

        /* Right Column - Text & Content */
        .about-right {
          flex: 0 0 100%;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 1024px) {
          .about-right {
            flex: 0 0 55%;
          }
        }

        .stagger-item {
          transition: all 0.4s ease;
        }

        .about-right.visible .stagger-item {
          opacity: 1;
          transform: translateY(0);
        }

        .about-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-3, #5A5550);
        }

        .about-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-1, #F0EFEE);
          margin-top: 12px;
          line-height: 1.1;
        }

        .about-title span {
          color: var(--red, #D93025);
        }

        .about-paragraph {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 17px;
          line-height: 1.85;
          color: var(--text-2, #9A9590);
          margin-top: 24px;
          max-width: 520px;
        }

        .pull-quote {
          margin-top: 28px;
          border-left: 3px solid var(--red, #D93025);
          padding-left: 20px;
        }

        .quote-text {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-style: italic;
          font-size: 18px;
          line-height: 1.7;
          color: var(--text-1, #F0EFEE);
        }

        .principles-list {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .principle-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .principle-num {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          color: var(--red, #D93025);
          min-width: 24px;
          padding-top: 3px;
        }

        .principle-content {
          display: flex;
          flex-direction: column;
        }

        .principle-title {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-weight: 600;
          font-size: 15px;
          color: var(--text-1, #F0EFEE);
        }

        .principle-description {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 14px;
          color: var(--text-2, #9A9590);
          line-height: 1.6;
          margin-top: 4px;
        }

        .cta-row {
          margin-top: 40px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--red, #D93025);
          color: white;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-weight: 600;
          font-size: 14px;
          padding: 11px 22px;
          border-radius: 8px;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          background: #B3241B;
          box-shadow: 0 0 16px rgba(217, 48, 37, 0.4);
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid var(--bg-4, #222222);
          color: var(--text-1, #F0EFEE);
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-weight: 600;
          font-size: 14px;
          padding: 11px 22px;
          border-radius: 8px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .btn-secondary:hover {
          border-color: var(--red, #D93025);
          color: var(--red, #D93025);
        }

        /* Animation delays */
        .stagger-0 { transition-delay: 0.1s; }
        .stagger-1 { transition-delay: 0.2s; }
        .stagger-2 { transition-delay: 0.3s; }
        .stagger-3 { transition-delay: 0.4s; }
        .stagger-4 { transition-delay: 0.5s; }
        .stagger-5 { transition-delay: 0.6s; }
        .stagger-6 { transition-delay: 0.7s; }
        .stagger-7 { transition-delay: 0.8s; }
      `}</style>

            <div className="about-container">
                {/* Left Side */}
                <div className={`about-left ${isVisible ? 'visible' : ''}`}>
                    <div className="image-container">
                        <svg className="image-placeholder-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '12px',
                                right: '12px',
                                fontSize: '10px',
                                color: 'var(--text-3)',
                                fontFamily: 'var(--font-mono)'
                            }}
                        >
                            about/kacper.jpg
                        </div>
                    </div>

                    <div className="facts-row">
                        <div className="fact-item">
                            <span className="fact-number">6+</span>
                            <span className="fact-label">WDROŻEŃ</span>
                        </div>
                        <div className="facts-divider" />
                        <div className="fact-item">
                            <span className="fact-number">48h</span>
                            <span className="fact-label">DO PIERWSZEGO DEMO</span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className={`about-right ${isVisible ? 'visible' : ''}`}>
                    <span className="about-label stagger-item stagger-0">O MNIE</span>
                    <h2 className="about-title stagger-item stagger-1">
                        Dlaczego <span>AI</span>? Bo Twój czas jest zbyt cenny.
                    </h2>

                    <p className="about-paragraph stagger-item stagger-2">
                        Nazywam się Kacper Filar. FilarAI powstała bo widziałem jak właściciele firm spędzają niedzielne wieczory na pracy którą mógłby zrobić algorytm. Nie sprzedaję technologii dla technologii — szukam miejsca gdzie AI przyniesie Ci realny zwrot i tam działam.
                    </p>

                    <div className="pull-quote stagger-item stagger-3">
                        <p className="quote-text">
                            „Właściciel firmy nie powinien spędzać niedzielnych wieczorów na pracy którą może zrobić algorytm.”
                        </p>
                    </div>

                    <div className="principles-list stagger-item stagger-4">
                        {principles.map((p, idx) => (
                            <div key={idx} className={`principle-item stagger-item stagger-${idx + 5}`}>
                                <span className="principle-num">{p.number}</span>
                                <div className="principle-content">
                                    <h4 className="principle-title">{p.title}</h4>
                                    <p className="principle-description">{p.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-row stagger-item stagger-8">
                        <button className="btn-primary">Umów bezpłatną rozmowę</button>
                        <button className="btn-secondary">Zobacz realizacje →</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
