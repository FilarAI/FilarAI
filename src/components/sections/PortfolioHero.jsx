"use client";
import React, { useEffect, useState } from 'react';

/**
 * PortfolioHero Section
 * Specified for FilarAI Portfolio Page
 */
export const PortfolioHero = () => {
    return (
        <section className="relative w-full bg-[#080808] pt-[120px] pb-[80px] overflow-hidden">
            <style>{`
                .portfolio-hero-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 0 24px;
                    text-align: center;
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                    width: 100%;
                    max-width: 100vw;
                    box-sizing: border-box;
                }

                .hero-label {
                    font-family: var(--font-mono, 'JetBrains Mono', monospace);
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--text-3, #5A5550);
                    display: block;
                    opacity: 0;
                    transform: translateY(12px);
                    animation: fadeUp 0.4s ease forwards;
                    animation-delay: 0s;
                }

                .hero-title {
                    font-family: var(--font-display); /* Syne */
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 700;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                    text-align: center;
                    max-width: 800px;
                    margin: 16px auto 0;
                    color: var(--text-1);
                }

                .hero-title span.accent {
                    color: var(--red, #D93025);
                }

                .hero-subtitle {
                    font-family: var(--font-body, 'Outfit', sans-serif);
                    font-size: 18px;
                    line-height: 1.75;
                    color: var(--text-2, #9A9590);
                    max-width: 560px;
                    margin: 24px auto 0;
                    opacity: 0;
                    transform: translateY(12px);
                    animation: fadeUp 0.4s ease forwards;
                    animation-delay: 0.2s;
                }

                /* Stats Row */
                .stats-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 48px;
                    margin-top: 56px;
                    opacity: 0;
                    transform: translateY(12px);
                    animation: fadeUp 0.4s ease forwards;
                    animation-delay: 0.35s;
                }

                .stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .stat-number {
                    font-family: var(--font-display, 'Syne', sans-serif);
                    font-size: 36px;
                    font-weight: 800;
                    color: var(--text-1, #F0EFEE);
                    line-height: 1;
                }

                .stat-label {
                    font-family: var(--font-mono, 'JetBrains Mono', monospace);
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--text-3, #5A5550);
                    margin-top: 6px;
                }

                .stat-divider {
                    width: 1px;
                    height: 32px;
                    background-color: var(--bg-4, #222222);
                    align-self: center;
                }

                /* Scroll Hint */
                .scroll-hint {
                    margin-top: 64px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    opacity: 0;
                    transform: translateY(12px);
                    animation: fadeUp 0.4s ease forwards;
                    animation-delay: 0.5s;
                }

                .scroll-text {
                    font-family: var(--font-mono, 'JetBrains Mono', monospace);
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--text-3, #5A5550);
                }

                .scroll-arrow {
                    color: var(--text-3, #5A5550);
                    animation: arrowBounce 1.5s infinite;
                }

                /* Background Detail */
                .bg-glow {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    background: radial-gradient(ellipse 60% 40% at 50% 80%, rgba(217, 48, 37, 0.06) 0%, transparent 70%);
                    z-index: 0;
                }

                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes arrowBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(6px); }
                }

                @media (max-width: 768px) {
                    .stats-row {
                        flex-direction: column;
                        gap: 32px;
                    }
                    .stat-divider {
                        display: none;
                    }
                    .hero-title {
                        font-size: clamp(2rem, 8vw, 2.8rem);
                        max-width: 100%;
                        padding: 0 16px;
                        word-break: break-word;
                    }
                }
            `}</style>

            <div className="bg-glow" />

            <div className="portfolio-hero-container">
                <span className="hero-label">REALIZACJE</span>
                <h1 className="hero-title">
                    Problemy które rozwiązałem. Systemy które <span className="accent">działają</span>.
                </h1>
                <p className="hero-subtitle">
                    Każdy projekt zaczynał się od konkretnego bólu właściciela firmy. Tutaj pokazuję co z tym zrobiłem — i jakie były wyniki.
                </p>

                <div className="stats-row">
                    <div className="stat-item">
                        <span className="stat-number">7</span>
                        <span className="stat-label">PROJEKTÓW</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <span className="stat-number">48h</span>
                        <span className="stat-label">DO PIERWSZEGO DEMO</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">DZIAŁAJĄCYCH SYSTEMÓW</span>
                    </div>
                </div>

                <div className="scroll-hint">
                    <span className="scroll-text">PRZEWIŃ BY ZOBACZYĆ PROJEKTY</span>
                    <svg className="scroll-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>
        </section>
    );
};
