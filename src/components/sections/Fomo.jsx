"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * FilarAI FOMO Section
 * Layout: Minimalist design with lots of empty space.
 * Features: Sequential on-scroll animations via IntersectionObserver.
 */
export const Fomo = () => {
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
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#080808] py-[120px] overflow-hidden"
            style={{ '--bg-0': '#080808' }}
        >
            <style>{`
        .fomo-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .fomo-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(32px, 6vw, 48px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text-1, #F0EFEE);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .fomo-title span.accent {
          color: var(--red, #D93025);
        }

        .fomo-line {
          width: 0;
          height: 2px;
          background-color: var(--red, #D93025);
          margin-top: 32px;
          margin-bottom: 32px;
          transition: width 0.3s ease;
          transition-delay: 0.3s;
        }

        .fomo-text {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 17px;
          font-weight: 400;
          line-height: 1.75;
          color: var(--text-2, #9A9590);
          max-width: 560px;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.5s;
        }

        /* Animation States */
        .is-active .fomo-title {
          opacity: 1;
          transform: translateY(0);
        }

        .is-active .fomo-line {
          width: 40px;
        }

        .is-active .fomo-text {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

            <div className={`fomo-container ${isVisible ? 'is-active' : ''}`}>
                <h2 className="fomo-title">
                    Twoja konkurencja nie zatrudniła nowego pracownika. Wdrożyła <span className="accent">system</span>.
                </h2>

                <div className="fomo-line" />

                <p className="fomo-text">
                    Automatyzacja przestała być przewagą konkurencyjną. Stała się warunkiem żeby w ogóle być w grze.
                </p>
            </div>
        </section>
    );
};
