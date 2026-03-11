"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * FilarAI Services Overview Section
 * 
 * Interactive 4-column grid showing main areas of expertise.
 * Strictly follows BRAND.md and provided design specifications.
 */
export const ServicesOverview = () => {
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

    const services = [
        {
            id: "automatyzacje",
            number: "01",
            title: "Automatyzacje",
            description: "Eliminujemy ręczną robotę i błędy ludzkie w powtarzalnych zadaniach. Systemy działają 24/7 bez nadzoru.",
            tag: "N8N · MAKE · API",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 1l4 4-4 4" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <path d="M7 23l-4-4 4-4" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
            )
        },
        {
            id: "agenci-ai",
            number: "02",
            title: "Agenci AI i Aplikacje",
            description: "Niestandardowe systemy AI i aplikacje webowe zaprojektowane pod konkretny problem Twojego biznesu.",
            tag: "CLAUDE · GPT · RAG",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.07-7.07l-2.12 2.12M7.05 16.95l-2.12 2.12M17.07 16.95l2.12 2.12M7.05 7.05L4.93 4.93" />
                </svg>
            )
        },
        {
            id: "strony",
            number: "03",
            title: "Strony internetowe",
            description: "Szybkie, animowane strony gotowe pod automatyzację, formularze leadowe i kampanie reklamowe.",
            tag: "REACT · NEXT.JS",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" cy="3" width="20" height="18" rx="2" ry="2" />
                    <line x1="2" y1="8" x2="22" y2="8" />
                    <line x1="6" y1="21" x2="6" y2="8" />
                    <path d="M15 12l2 2-2 2" />
                </svg>
            )
        },
        {
            id: "audyt",
            number: "04",
            title: "Audyt AI",
            description: "Nie wiesz od czego zacząć? Analizujemy procesy i wskazujemy gdzie AI przyniesie największy zwrot.",
            tag: "ANALIZA · ROADMAPA",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <path d="M11 7v4l3 2" />
                </svg>
            )
        }
    ];

    return (
        <section ref={sectionRef} className="services-overview-section">
            <style>{`
                .services-overview-section {
                    width: 100%;
                    background: #0F0F0F; /* --bg-1 */
                    padding: 80px 0;
                    display: flex;
                    justify-content: center;
                }

                .services-overview-container {
                    width: 100%;
                    max-width: 1200px;
                    padding: 0 40px;
                }

                .overview-top {
                    text-align: center;
                    margin-bottom: 48px;
                }

                .overview-label {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: #5A5550; /* --text-3 */
                    display: block;
                }

                .overview-h2 {
                    font-family: 'Syne', sans-serif;
                    font-size: 36px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: #F0EFEE; /* --text-1 */
                    margin-top: 12px;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                }

                .service-card {
                    background: #141414; /* --bg-2 */
                    border: 1px solid #222222; /* --bg-4 */
                    border-radius: 12px; /* --r-lg */
                    padding: 28px 24px;
                    cursor: pointer;
                    text-decoration: none;
                    display: block;
                    transition: all 0.2s ease;
                }

                .service-card:hover {
                    border-color: #D93025; /* --red */
                    box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
                    transform: translateY(-2px);
                }

                .service-icon-block {
                    width: 48px;
                    height: 48px;
                    background: rgba(217, 48, 37, 0.08); /* --red-subtle */
                    border: 1px solid rgba(217, 48, 37, 0.25); /* --red-border */
                    border-radius: 8px; /* --r-md */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                    color: #D93025; /* --red */
                }

                .service-icon-block svg {
                    width: 22px;
                    height: 22px;
                }

                .service-title-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 12px;
                }

                .service-number {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: #D93025;
                }

                .service-title {
                    font-family: 'Syne', sans-serif;
                    font-size: 18px;
                    font-weight: 600;
                    color: #F0EFEE;
                }

                .service-desc {
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    color: #9A9590; /* --text-2 */
                    line-height: 1.7;
                    margin-bottom: 20px;
                    min-height: 72px; /* Consistency */
                }

                .service-bottom {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 16px;
                    border-top: 1px solid #222222;
                }

                .service-tag {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 9px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    color: #5A5550;
                }

                .service-arrow {
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    font-weight: 500;
                    color: #D93025;
                }

                /* Staggered on-scroll animations */
                .stagger-item {
                    opacity: 0;
                    transform: translateY(12px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }

                .is-visible .stagger-item {
                    opacity: 1;
                    transform: translateY(0);
                }

                .delay-top { transition-delay: 0s; }
                .card-delay-0 { transition-delay: 0.08s; }
                .card-delay-1 { transition-delay: 0.16s; }
                .card-delay-2 { transition-delay: 0.24s; }
                .card-delay-3 { transition-delay: 0.32s; }

                /* Responsive */
                @media (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 640px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                    }
                    .services-overview-container {
                        padding: 0 24px;
                    }
                    .overview-h2 {
                        font-size: 28px;
                    }
                }
            `}</style>

            <div className={`services-overview-container ${isVisible ? 'is-visible' : ''}`}>
                <div className="overview-top stagger-item delay-top">
                    <span className="overview-label">ZAKRES USŁUG</span>
                    <h2 className="overview-h2">Cztery obszary wdrożeń</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <a 
                            key={service.id} 
                            href={`#${service.id}`}
                            className={`service-card stagger-item card-delay-${index}`}
                        >
                            <div className="service-icon-block">
                                {service.icon}
                            </div>

                            <div className="service-title-row">
                                <span className="service-number">{service.number}</span>
                                <h3 className="service-title">{service.title}</h3>
                            </div>

                            <p className="service-desc">{service.description}</p>

                            <div className="service-bottom">
                                <span className="service-tag">{service.tag}</span>
                                <span className="service-arrow">Zobacz →</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
