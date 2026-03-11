"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * Automatyzacje Section - FilarAI
 * 
 * Detailed service description section with use cases, benefits, and process.
 * Strictly follows BRAND.md and design instructions.
 */
export const Automatyzacje = () => {
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

    const useCases = [
        { title: "Automatyczne faktury", desc: "Zdjęcie → OCR → baza danych → potwierdzenie e-mail. Zero ręcznego przepisywania." },
        { title: "Obsługa skrzynki e-mail", desc: "AI czyta, kategoryzuje i flaguje maile wymagające pilnej odpowiedzi." },
        { title: "Kwalifikacja leadów", desc: "Formularz → AI ocenia dopasowanie → automatyczna oferta lub telefon." },
        { title: "Opinie po usłudze", desc: "Automatyczne pytanie o opinię przez e-mail, SMS lub WhatsApp po zakończeniu zlecenia." },
        { title: "Synchronizacja danych", desc: "Powiadomienia, raporty i synchronizacja między CRM, arkuszami i kalendarzem." },
        { title: "Raportowanie", desc: "Automatyczne raporty tygodniowe i miesięczne wysyłane do właściciela lub zarządu." }
    ];

    const benefits = [
        { icon: "clock", text: "System działa gdy Ty śpisz" },
        { icon: "x-circle", text: "Koniec błędów z przepisywania danych" },
        { icon: "users", text: "Szybsza obsługa bez nowych pracowników" },
        { icon: "zap", text: "Pierwsze wdrożenie w 1–2 tygodnie" }
    ];

    const steps = ["Analiza procesu", "Budowa systemu", "Wdrożenie i testy"];

    const renderIcon = (type) => {
        switch (type) {
            case 'clock':
                return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
            case 'x-circle':
                return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>;
            case 'users':
                return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
            case 'zap':
                return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
            default:
                return null;
        }
    };

    return (
        <section id="automatyzacje" ref={sectionRef} className="automatyzacje-section">
            <style>{`
                .automatyzacje-section {
                    width: 100%;
                    background: #080808; /* --bg-0 */
                    padding: 96px 0;
                    display: flex;
                    justify-content: center;
                    scroll-margin-top: 80px;
                }

                .automatyzacje-container {
                    width: 100%;
                    max-width: 1200px;
                    padding: 0 40px;
                }

                .automatyzacje-top {
                    margin-bottom: 64px;
                }

                .automatyzacje-label {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: #5A5550; /* --text-3 */
                    display: block;
                }

                .automatyzacje-h2 {
                    font-family: 'Syne', sans-serif;
                    font-size: 42px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: #F0EFEE; /* --text-1 */
                    line-height: 1.1;
                    margin-top: 12px;
                }

                .automatyzacje-h2 .accent-red {
                    color: #D93025;
                }

                .automatyzacje-subtitle {
                    font-family: 'Outfit', sans-serif;
                    font-size: 17px;
                    font-weight: 400;
                    color: #9A9590; /* --text-2 */
                    max-width: 600px;
                    line-height: 1.75;
                    margin-top: 16px;
                }

                .automatyzacje-content {
                    display: flex;
                    gap: 64px;
                    align-items: flex-start;
                }

                .column-left { flex: 0 0 55%; }
                .column-right { flex: 0 0 45%; }

                .col-label {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: #5A5550;
                    margin-bottom: 24px;
                    display: block;
                }

                /* Use Case Rows */
                .use-case-list {
                    display: flex;
                    flex-direction: column;
                }

                .use-case-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    padding: 16px 0;
                    border-bottom: 1px solid #222222; /* --bg-4 */
                    transition: all 0.15s ease;
                }

                .use-case-row:last-child {
                    border-bottom: none;
                }

                .use-case-row:hover {
                    background: #0F0F0F; /* --bg-1 */
                    margin: 0 -16px;
                    padding: 16px;
                    border-radius: 8px; /* --r-md */
                    border-bottom-color: transparent;
                }

                .use-case-bullet {
                    width: 8px;
                    height: 8px;
                    background: #D93025;
                    border-radius: 2px;
                    margin-top: 6px;
                    flex-shrink: 0;
                }

                .use-case-title {
                    font-family: 'Outfit', sans-serif;
                    font-size: 15px;
                    font-weight: 600;
                    color: #F0EFEE;
                    margin-bottom: 4px;
                }

                .use-case-desc {
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    font-weight: 400;
                    color: #9A9590;
                    line-height: 1.6;
                }

                /* Benefits Cards */
                .benefit-card {
                    background: #141414; /* --bg-2 */
                    border: 1px solid #222222;
                    border-radius: 8px;
                    padding: 16px 20px;
                    margin-bottom: 12px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }

                .benefit-icon {
                    width: 36px;
                    height: 36px;
                    background: rgba(217, 48, 37, 0.08); /* --red-subtle */
                    border: 1px solid rgba(217, 48, 37, 0.25); /* --red-border */
                    border-radius: 4px; /* --r-sm */
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #D93025;
                }

                .benefit-icon svg {
                    width: 16px;
                    height: 16px;
                }

                .benefit-text {
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    color: #F0EFEE;
                }

                /* Mini Process */
                .mini-process {
                    margin-top: 32px;
                }

                .steps-container {
                    display: flex;
                    gap: 0;
                }

                .step-item {
                    flex: 1;
                    text-align: center;
                    position: relative;
                }

                .step-number {
                    font-family: 'Syne', sans-serif;
                    font-size: 20px;
                    font-weight: 700;
                    color: #D93025;
                }

                .step-label {
                    font-family: 'Outfit', sans-serif;
                    font-size: 12px;
                    font-weight: 400;
                    color: #9A9590;
                    margin-top: 4px;
                }

                .connector {
                    position: absolute;
                    top: 10px;
                    left: 50%;
                    width: 100%;
                    height: 1px;
                    background: #222222;
                }

                /* CTA Row */
                .cta-row {
                    margin-top: 32px;
                    padding-top: 24px;
                    border-top: 1px solid #222222;
                    display: flex;
                    flex-direction: column;
                }

                .cta-btn-primary {
                    display: inline-block;
                    background: #D93025;
                    color: #ffffff;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 600;
                    font-size: 14px;
                    padding: 13px 28px;
                    border-radius: 8px;
                    text-decoration: none;
                    width: fit-content;
                    box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
                    transition: all 0.15s ease;
                }

                .cta-btn-primary:hover {
                    background: #A8201A;
                    box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
                    transform: translateY(-2px);
                }

                .cta-hint {
                    font-family: 'Outfit', sans-serif;
                    font-size: 12px;
                    font-weight: 400;
                    color: #5A5550;
                    margin-top: 8px;
                }

                /* Staggered Animations */
                .stagger-item {
                    opacity: 0;
                    transform: translateY(12px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }

                .is-visible .stagger-item {
                    opacity: 1;
                    transform: translateY(0);
                }

                .delay-intro { transition-delay: 0s; }
                .delay-process { transition-delay: 0.3s; }
                .delay-cta { transition-delay: 0.35s; }

                /* Use cases staggering */
                ${useCases.map((_, i) => `.delay-use-${i} { transition-delay: ${0.06 * i}s; }`).join('\n')}
                /* Benefits staggering */
                ${benefits.map((_, i) => `.delay-benefit-${i} { transition-delay: ${0.08 * i}s; }`).join('\n')}

                /* Responsive */
                @media (max-width: 768px) {
                    .automatyzacje-section {
                        padding: 64px 0;
                    }
                    .automatyzacje-h2 {
                        font-size: 32px;
                    }
                    .automatyzacje-content {
                        flex-direction: column;
                        gap: 48px;
                    }
                    .column-left, .column-right {
                        flex: 1 1 100%;
                        width: 100%;
                    }
                    .automatyzacje-container {
                        padding: 0 24px;
                    }
                }
            `}</style>

            <div className={`automatyzacje-container ${isVisible ? 'is-visible' : ''}`}>
                <div className="automatyzacje-top stagger-item delay-intro">
                    <span className="automatyzacje-label">01 · AUTOMATYZACJE</span>
                    <h2 className="automatyzacje-h2">
                        Koniec <span className="accent-red">ręcznej</span> roboty
                    </h2>
                    <p className="automatyzacje-subtitle">
                        Analizujemy procesy w Twojej firmie i automatyzujemy te, które pochłaniają czas bez tworzenia wartości. Systemy działają 24/7 bez nadzoru człowieka.
                    </p>
                </div>

                <div className="automatyzacje-content">
                    {/* Left Column */}
                    <div className="column-left">
                        <span className="col-label stagger-item delay-intro">PRZYKŁADY ZASTOSOWAŃ</span>
                        <div className="use-case-list">
                            {useCases.map((uc, i) => (
                                <div key={i} className={`use-case-row stagger-item delay-use-${i}`}>
                                    <div className="use-case-bullet" />
                                    <div>
                                        <h3 className="use-case-title">{uc.title}</h3>
                                        <p className="use-case-desc">{uc.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="column-right">
                        <span className="col-label stagger-item delay-intro">CO ZYSKUJESZ</span>
                        <div className="benefits-list">
                            {benefits.map((b, i) => (
                                <div key={i} className={`benefit-card stagger-item delay-benefit-${i}`}>
                                    <div className="benefit-icon">
                                        {renderIcon(b.icon)}
                                    </div>
                                    <span className="benefit-text">{b.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mini-process stagger-item delay-process">
                            <span className="col-label">JAK TO DZIAŁA</span>
                            <div className="steps-container">
                                {steps.map((step, i) => (
                                    <div key={i} className="step-item">
                                        {i < steps.length - 1 && <div className="connector" />}
                                        <span className="step-number">{i + 1}</span>
                                        <p className="step-label">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cta-row stagger-item delay-cta">
                            <a 
                                href="https://calendar.app.google/BtxhP1NN7bvTtwX57" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cta-btn-primary"
                            >
                                Porozmawiaj o automatyzacji →
                            </a>
                            <span className="cta-hint">Bezpłatna konsultacja 30 min</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
