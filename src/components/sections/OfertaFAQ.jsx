"use client";
import React, { useState, useEffect, useRef } from 'react';

/**
 * OfertaFAQ Section - FilarAI "Oferta" Page
 * 
 * Minimal accordion FAQ section with animated icons.
 * Strictly follows BRAND.md and design instructions.
 */
export const OfertaFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    const faqs = [
        {
            q: "Jak długo trwa wdrożenie?",
            a: "Zależy od złożoności projektu. Proste automatyzacje i chatboty: 3–7 dni roboczych. Bardziej rozbudowane systemy — aplikacje, agenci AI, integracje z wieloma narzędziami: 2–4 tygodnie. Przed rozpoczęciem zawsze podajemy konkretny harmonogram."
        },
        {
            q: "Ile kosztuje wdrożenie?",
            a: "Pracujemy na stałych wycenach — nie na rozliczeniach godzinowych. Cena zależy od zakresu projektu, liczby integracji i złożoności logiki. Bezpłatna konsultacja → analiza zakresu → oferta z ceną stałą. Wiesz z góry ile zapłacisz."
        },
        {
            q: "Czy muszę znać się na technologii żeby korzystać z wdrożonych systemów?",
            a: "Nie. Każde rozwiązanie projektujemy z myślą o osobach bez technicznego backgroundu. Obsługa jest prosta i intuicyjna. Po wdrożeniu przeprowadzamy szkolenie i zostawiamy dokumentację — możesz korzystać z systemu samodzielnie od pierwszego dnia."
        },
        {
            q: "Co się dzieje jeśli coś się zepsuje po wdrożeniu?",
            a: "Klienci z abonamentem utrzymaniowym mają gwarantowane wsparcie i monitoring. Klienci bez abonamentu mogą skorzystać z wsparcia w ramach osobnej płatności. Każde wdrożenie objęte jest też krótkim okresem gwarancyjnym od momentu oddania systemu."
        },
        {
            q: "Czy dane mojej firmy są bezpieczne?",
            a: "Tak. Świadomie dobieramy narzędzia i konfiguracje pod kątem bezpieczeństwa danych. Żaden z naszych systemów nie wysyła danych firmy do zewnętrznych podmiotów bez wiedzy klienta. Na żądanie przygotowujemy dokumentację architektury systemu."
        },
        {
            q: "Od czego zacząć jeśli nie wiem czego potrzebuję?",
            a: "Od bezpłatnej konsultacji. 30 minut rozmowy o Twoich procesach i problemach. Wychodzimy z rozmowy z listą obszarów w których AI może pomóc — bez zobowiązań i bez żargonu technicznego."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section ref={sectionRef} className="faq-section">
            <style>{`
                .faq-section {
                    width: 100%;
                    background: transparent; /* --bg-1 */
                    padding: 96px 0;
                    display: flex;
                    justify-content: center;
                }

                .faq-container {
                    width: 100%;
                    max-width: 800px;
                    padding: 0 40px;
                }

                .faq-top {
                    text-align: center;
                    margin-bottom: 56px;
                }

                .faq-label {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: #5A5550; /* --text-3 */
                    display: block;
                }

                .faq-h2 {
                    font-family: 'Syne', sans-serif;
                    font-size: 42px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: #F0EFEE; /* --text-1 */
                    margin-top: 12px;
                }

                .faq-h2 .accent-red {
                    color: #D93025;
                }

                .faq-accordion {
                    width: 100%;
                    margin-top: 32px;
                }

                .faq-item {
                    border-bottom: 1px solid #222222; /* --bg-4 */
                }

                .faq-item:first-child {
                    border-top: 1px solid #222222;
                }

                .faq-header {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 24px 0;
                    cursor: pointer;
                    background: none;
                    border: none;
                    text-align: left;
                    transition: all 0.15s ease;
                }

                .faq-header:hover .faq-question {
                    color: #D93025;
                }

                .faq-question {
                    font-family: 'Outfit', sans-serif;
                    font-size: 17px;
                    font-weight: 600;
                    color: #F0EFEE;
                    line-height: 1.4;
                    padding-right: 24px;
                    transition: color 0.15s ease;
                }

                /* Custom Animated Icon */
                .faq-icon-box {
                    width: 16px;
                    height: 16px;
                    position: relative;
                    flex-shrink: 0;
                }

                .faq-icon-line {
                    position: absolute;
                    background: #D93025;
                    border-radius: 2px;
                    transition: transform 0.3s ease;
                }

                .faq-icon-line.horizontal {
                    width: 100%;
                    height: 2px;
                    top: 50%;
                    left: 0;
                    margin-top: -1px;
                }

                .faq-icon-line.vertical {
                    width: 2px;
                    height: 100%;
                    top: 0;
                    left: 50%;
                    margin-left: -1px;
                }

                .faq-item.active .faq-icon-line.vertical {
                    transform: rotate(90deg);
                }

                .faq-body {
                    max-height: 0;
                    overflow: hidden;
                    opacity: 0;
                    transition: max-height 0.3s ease, opacity 0.3s ease;
                }

                .faq-item.active .faq-body {
                    max-height: 400px; /* Adjust as needed */
                    opacity: 1;
                    padding-bottom: 24px;
                }

                .faq-answer {
                    font-family: 'Outfit', sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    color: #9A9590; /* --text-2 */
                    line-height: 1.8;
                }

                /* Staggered Animations */
                .stagger-item {
                    opacity: 0;
                    transform: translateY(8px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }

                .is-visible .stagger-item {
                    opacity: 1;
                    transform: translateY(0);
                }

                .delay-intro { transition-delay: 0s; }
                ${faqs.map((_, i) => `.delay-faq-${i} { transition-delay: ${0.08 * i}s; }`).join('\n')}

                /* Mobile Adjustment */
                @media (max-width: 640px) {
                    .faq-h2 {
                        font-size: 32px;
                    }
                    .faq-container {
                        padding: 0 24px;
                    }
                    .faq-question {
                        font-size: 16px;
                    }
                }
            `}</style>

            <div className={`faq-container ${isVisible ? 'is-visible' : ''}`}>
                <div className="faq-top stagger-item delay-intro">
                    <span className="faq-label">FAQ</span>
                    <h2 className="faq-h2">Najczęstsze <span className="accent-red">pytania</span></h2>
                </div>

                <div className="faq-accordion">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className={`faq-item stagger-item delay-faq-${idx} ${openIndex === idx ? 'active' : ''}`}>
                            <button className="faq-header" onClick={() => toggleAccordion(idx)}>
                                <span className="faq-question">{faq.q}</span>
                                <div className="faq-icon-box">
                                    <div className="faq-icon-line horizontal" />
                                    <div className="faq-icon-line vertical" />
                                </div>
                            </button>
                            <div className="faq-body">
                                <p className="faq-answer">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
