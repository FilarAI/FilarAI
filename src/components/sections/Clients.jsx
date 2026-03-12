"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * FilarAI Clients Section
 * Layout: Full width, background --bg-1 (#0F0F0F).
 * Features: Infinite scrolling logo strip, animated metrics, branded separator.
 */
export const Clients = () => {
    const metricsRef = useRef(null);
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

        if (metricsRef.current) {
            observer.observe(metricsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const logos = [
        "klient-1",
        "klient-2",
        "klient-3",
        "klient-4",
        "klient-5"
    ];

    return (
        <section className="relative w-full bg-[var(--bg-1)] py-[64px] overflow-hidden">
            <style>{`
        .clients-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .section-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-3, #5A5550);
          display: block;
        }

        .section-subtitle {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 15px;
          color: var(--text-3, #5A5550);
          margin-top: 8px;
        }

        /* Infinite Scrolling Strip */
        .logo-strip-outer {
          margin-top: 48px;
          width: 100%;
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .logo-track {
          display: flex;
          width: fit-content;
          will-change: transform;
          animation: logo-scroll 20s linear infinite;
        }

        .logo-strip-outer:hover .logo-track {
          animation-play-state: paused;
        }

        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 40px;
          flex-shrink: 0;
        }

        .logo-placeholder {
          background-color: var(--bg-3, #1A1A1A);
          height: 32px;
          width: 120px;
          border-radius: 4px;
          filter: grayscale(100%) opacity(40%);
          transition: filter 0.2s ease, opacity 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          color: var(--text-3, #5A5550);
        }

        .logo-item:hover .logo-placeholder {
          filter: grayscale(0%) opacity(100%);
        }

        /* Metrics Block */
        .metrics-block {
          margin-top: 56px;
          display: flex;
          justify-content: center;
          gap: 64px;
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .is-active .metric-item {
          opacity: 1;
          transform: translateY(0);
        }

        .metric-number {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 36px;
          font-weight: 800;
          color: var(--text-1, #F0EFEE);
          line-height: 1;
        }

        .metric-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-3, #5A5550);
          margin-top: 6px;
        }

        .separator-line {
          height: 1px;
          max-width: 200px;
          background: linear-gradient(90deg, transparent 0%, #D93025 50%, transparent 100%);
          margin: 48px auto 0;
        }

        @media (max-width: 768px) {
          .metrics-block {
            flex-direction: column;
            gap: 32px;
          }
        }
      `}</style>

            <div className="clients-container">
                <span className="section-label">ZAUFALI NAM</span>
                <p className="section-subtitle">Firmy które przestały tracić czas na rzeczy które może zrobić algorytm.</p>

                <div className="logo-strip-outer">
                    <div className="logo-track">
                        {/* First Set of Logos */}
                        {logos.map((logo, i) => (
                            <div key={`logo-1-${i}`} className="logo-item">
                                <div className="logo-placeholder" data-logo={logo}>
                                    {logo.toUpperCase()}
                                </div>
                            </div>
                        ))}
                        {/* Second Set of Logos (Duplicate for loop) */}
                        {logos.map((logo, i) => (
                            <div key={`logo-2-${i}`} className="logo-item">
                                <div className="logo-placeholder" data-logo={logo}>
                                    {logo.toUpperCase()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    ref={metricsRef}
                    className={`metrics-block ${isVisible ? 'is-active' : ''}`}
                >
                    <div className="metric-item" style={{ transitionDelay: '0s' }}>
                        <span className="metric-number">6+</span>
                        <span className="metric-label">ZREALIZOWANYCH PROJEKTÓW</span>
                    </div>
                    <div className="metric-item" style={{ transitionDelay: '0.1s' }}>
                        <span className="metric-number">48h</span>
                        <span className="metric-label">DO PIERWSZEGO DEMO</span>
                    </div>
                </div>

                <div className="separator-line" />
            </div>
        </section>
    );
};
