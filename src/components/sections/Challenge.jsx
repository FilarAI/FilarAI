"use client";
import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, duration, suffix }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
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

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Ease out expo
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(easeOutExpo * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <div ref={countRef} className="stat-number">
            {count}
            <span className="stat-suffix">{suffix}</span>
        </div>
    );
};

export const Challenge = () => {
    const sectionRef = useRef(null);
    const [hasEntered, setHasEntered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEntered(true);
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

    const stats = [
        {
            value: 58,
            suffix: "%",
            label: "FIRM JUŻ UŻYWA AI",
            context: "Tyle przedsiębiorstw w Twojej wielkości wdrożyło automatyzację — źródło: U.S. Chamber of Commerce 2025"
        },
        {
            value: 20,
            suffix: "h",
            label: "OSZCZĘDNOŚCI MIESIĘCZNIE",
            context: "Tyle czasu średnio odzyskują firmy które zautomatyzowały powtarzalne procesy — źródło: Salesforce 2024"
        },
        {
            value: 91,
            suffix: "%",
            label: "RAPORTUJE WZROST PRZYCHODÓW",
            context: "Firm używających AI odnotowało wzrost przychodów w ciągu pierwszego roku — źródło: Salesforce 2024"
        }
    ];

    return (
        <section
            id="challenge"
            ref={sectionRef}
            className={`challenge-section ${hasEntered ? 'is-visible' : ''}`}
        >
            <style>{`
        .challenge-section {
          background-color: var(--bg-1);
          padding: 96px 20px;
          overflow: hidden;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .challenge-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .challenge-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .challenge-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--red);
          display: block;
          margin-bottom: 16px;
        }

        .challenge-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-1, #F0EFEE);
          line-height: 1.1;
        }

        .challenge-title .accent {
          color: var(--red, #D93025);
        }

        .separator {
          height: 1px;
          max-width: 200px;
          background: linear-gradient(90deg, transparent 0%, var(--red, #D93025) 50%, transparent 100%);
          margin: 24px auto 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          position: relative;
        }

        .stat-block {
          position: relative;
          padding: 0 12px;
        }

        .stat-block:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -24px;
          top: 20%;
          bottom: 20%;
          width: 1px;
          background-color: var(--bg-4, #222222);
        }

        .stat-number {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(56px, 8vw, 72px);
          font-weight: 800;
          color: var(--text-1, #F0EFEE);
          line-height: 1;
          display: flex;
          align-items: baseline;
        }

        .stat-suffix {
          color: var(--red, #D93025);
        }

        .stat-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-3, #5A5550);
          margin-top: 8px;
          display: block;
        }

        .stat-context {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 15px;
          color: var(--text-2, #9A9590);
          line-height: 1.75;
          margin-top: 12px;
          max-width: 320px;
        }

        .bottom-quote {
          text-align: center;
          margin-top: 64px;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-style: italic;
          font-size: 17px;
          color: var(--text-2, #9A9590);
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 64px;
          }
          .stat-block:not(:last-child)::after {
            display: none;
          }
          .stat-block {
            text-align: center;
            padding: 0;
          }
          .stat-number {
            justify-content: center;
          }
          .stat-context {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

            <div className="challenge-container">
                <header className="challenge-header">
                    <span className="section-label">RZECZYWISTOŚĆ POLSKIEGO BIZNESU</span>
                    <h2 className="challenge-title">
                        Rynek odjechał. Czy bierzesz <span className="accent">udział</span> w wyścigu?
                    </h2>
                    <div className="separator"></div>
                </header>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-block">
                            <Counter
                                end={stat.value}
                                duration={1500}
                                suffix={stat.suffix}
                            />
                            <span className="stat-label">{stat.label}</span>
                            <p className="stat-context">{stat.context}</p>
                        </div>
                    ))}
                </div>

                <p className="bottom-quote">
                    „Pytanie nie brzmi czy wdrożyć AI. Brzmi czy zdążysz przed konkurencją.”
                </p>
            </div>
        </section>
    );
};
