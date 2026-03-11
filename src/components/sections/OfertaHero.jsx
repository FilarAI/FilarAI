"use client";
import React, { useEffect, useState } from 'react';

/**
 * OfertaHero Section
 * 
 * Rebuild for the FilarAI "Oferta" page.
 * Strictly adheres to BRAND.md specifications and the provided design instructions.
 */
export const OfertaHero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="oferta-hero-section">
            <style>{`
                .oferta-hero-section {
                    width: 100%;
                    background: #080808; /* --bg-0 */
                    padding-top: 160px;
                    padding-bottom: 96px;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                }

                .oferta-hero-container {
                    width: 100%;
                    max-width: 900px;
                    padding: 0 40px;
                    text-align: center;
                }

                /* Staggered on-load animations */
                .stagger-item {
                    opacity: 0;
                    transform: translateY(12px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }

                .is-loaded .stagger-item {
                    opacity: 1;
                    transform: translateY(0);
                }

                .delay-label { transition-delay: 0s; }
                .delay-h1 { transition-delay: 0.1s; }
                .delay-subtitle { transition-delay: 0.2s; }
                .delay-cta { transition-delay: 0.3s; }
                .delay-separator { transition-delay: 0.4s; }

                .section-label {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: #5A5550; /* --text-3 */
                    display: block;
                }

                .oferta-hero-h1 {
                    font-family: 'Syne', sans-serif;
                    font-size: 64px;
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    line-height: 1.05;
                    color: #F0EFEE; /* --text-1 */
                    margin-top: 12px;
                }

                .oferta-hero-h1 .accent-red {
                    color: #D93025; /* --red */
                }

                .oferta-hero-subtitle {
                    font-family: 'Outfit', sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    color: #9A9590; /* --text-2 */
                    line-height: 1.75;
                    max-width: 600px;
                    margin: 24px auto 0;
                }

                .cta-wrapper {
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .primary-cta-btn {
                    display: inline-block;
                    background: #D93025; /* --red */
                    color: #ffffff;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 600;
                    font-size: 14px;
                    padding: 13px 28px;
                    border-radius: 8px; /* --r-md */
                    text-decoration: none;
                    box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
                    transition: all 0.15s ease;
                }

                .primary-cta-btn:hover {
                    background: #A8201A; /* --red-dim */
                    box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
                    transform: translateY(-2px);
                }

                .microcopy {
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    font-weight: 400;
                    color: #5A5550; /* --text-3 */
                    margin-top: 12px;
                    display: block;
                }

                .hero-separator {
                    margin: 64px auto 0;
                    height: 1px;
                    background: #D93025; /* --red */
                    width: 0;
                    transition: width 0.4s ease-out;
                    transition-delay: 0.4s;
                }

                .is-loaded .hero-separator {
                    width: 60px;
                }

                /* Mobile overrides */
                @media (max-width: 768px) {
                    .oferta-hero-section {
                        padding-top: 120px;
                    }
                    .oferta-hero-h1 {
                        font-size: 40px;
                    }
                    .oferta-hero-container {
                        padding: 0 24px;
                    }
                }
            `}</style>

            <div className={`oferta-hero-container ${isLoaded ? 'is-loaded' : ''}`}>
                <span className="section-label stagger-item delay-label">
                    OFERTA
                </span>
                
                <h1 className="oferta-hero-h1 stagger-item delay-h1">
                    Rozwiązania które <span className="accent-red">działają</span>
                </h1>

                <p className="oferta-hero-subtitle stagger-item delay-subtitle">
                    Nie sprzedajemy technologii dla technologii. Każde wdrożenie zaczyna się od problemu biznesowego i kończy na działającym systemie — nie proof-of-concept do szuflady.
                </p>

                <div className="cta-wrapper stagger-item delay-cta">
                    <a 
                        href="https://calendar.app.google/BtxhP1NN7bvTtwX57" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="primary-cta-btn"
                    >
                        Umów bezpłatną konsultację →
                    </a>
                    <span className="microcopy">
                        30 minut · Bez zobowiązań · Konkretne wnioski
                    </span>
                </div>

                <div className="hero-separator" />
            </div>
        </section>
    );
};
