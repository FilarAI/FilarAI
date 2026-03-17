"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * OfertaProblem Section - FilarAI "Oferta" Page
 * 
 * Highlights common business challenges through 6 problem cards.
 * Strictly follows BRAND.md and design instructions.
 */
export const OfertaProblem = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMove = (e) => {
            cardRefs.current.forEach((element) => {
                if (!element) return;
                const { left, top, width, height } = element.getBoundingClientRect();
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                const center = [left + width * 0.5, top + height * 0.5];
                const isActive =
                    mouseX > left - 80 && mouseX < left + width + 80 &&
                    mouseY > top - 80 && mouseY < top + height + 80;
                element.style.setProperty("--active", isActive ? "1" : "0");
                if (!isActive) return;
                const currentAngle = parseFloat(element.style.getPropertyValue("--start")) || 0;
                let targetAngle =
                    (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;
                const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
                const newAngle = currentAngle + angleDiff * 0.15;
                element.style.setProperty("--start", String(newAngle));
            });
        };

        document.body.addEventListener("pointermove", handleMove);

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

        return () => {
            observer.disconnect();
            document.body.removeEventListener("pointermove", handleMove);
        };
    }, []);

    const problems = [
        {
            statement: "Część zespołu spędza godziny tygodniowo na kopiowaniu tych samych danych między systemami.",
            context: "Arkusze, maile, CRM — każdy ma swoje dane i ktoś musi to spinać ręcznie. To się da zautomatyzować.",
            tag: "POWTARZALNA ROBOTA",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 1l4 4-4 4" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <path d="M7 23l-4-4 4-4" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
            )
        },
        {
            statement: "Nowi pracownicy przez tygodnie pytają o rzeczy które są gdzieś w dokumentach — ale nikt nie wie gdzie.",
            context: "Wiedza firmy jest w głowach ludzi albo rozrzucona po folderach. Dostęp do niej nie powinien wymagać pytania managera.",
            tag: "WIEDZA FIRMY",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
            )
        },
        {
            statement: "Zapytania od klientów czekają na odpowiedź godzinami bo nikt nie pilnuje skrzynki przez całą dobę.",
            context: "Klient który nie dostał odpowiedzi w ciągu godziny często idzie do konkurencji. System może odpowiadać zamiast Ciebie.",
            tag: "OBSŁUGA KLIENTA",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            )
        },
        {
            statement: "Raporty, zestawienia i podsumowania tygodniowe przygotowuje człowiek — za każdym razem od nowa.",
            context: "Dane są w systemach. Raport można generować automatycznie i wysyłać o ustalonej porze bez udziału człowieka.",
            tag: "RAPORTOWANIE",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            )
        },
        {
            statement: "Strona internetowa istnieje ale nie generuje zapytań — jest wizytówką a nie narzędziem sprzedaży.",
            context: "Strona powinna pracować 24/7: zbierać dane, kwalifikować klientów, umawiać spotkania. Nie tylko wyglądać.",
            tag: "OBECNOŚĆ ONLINE",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
                    <line x1="2" y1="8" x2="22" y2="8" />
                    <line x1="6" y1="21" x2="6" y2="8" />
                </svg>
            )
        },
        {
            statement: "Nie wiesz od czego zacząć z AI — słyszysz o tym wszędzie ale nikt nie powiedział Ci co konkretnie zrobić.",
            context: "To normalne. AI to nie jeden produkt — to setki narzędzi. Naszą rolą jest wskazać te które mają sens w Twojej firmie.",
            tag: "GDZIE ZACZĄĆ",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="12" />
                    <line x1="11" y1="14" x2="11.01" y2="14" />
                </svg>
            )
        }
    ];

    return (
        <section ref={sectionRef} className="problem-section">
            <style>{`
                .problem-section {
                    width: 100%;
                    background: #0F0F0F; /* --bg-1 */
                    padding: 96px 0;
                    display: flex;
                    justify-content: center;
                }

                .problem-container {
                    width: 100%;
                    max-width: 1200px;
                    padding: 0 40px;
                }

                .problem-top {
                    text-align: center;
                    margin-bottom: 64px;
                }

                .problem-label {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--red);
                    display: block;
                }

                .problem-h2 {
                    font-family: 'Syne', sans-serif;
                    font-size: 42px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: #F0EFEE; /* --text-1 */
                    margin-top: 12px;
                }

                .problem-h2 .accent-red {
                    color: #D93025;
                }

                .problem-subtitle {
                    font-family: 'Outfit', sans-serif;
                    font-size: 17px;
                    font-weight: 400;
                    color: #9A9590; /* --text-2 */
                    max-width: 560px;
                    margin: 16px auto 0;
                    line-height: 1.75;
                }

                .problems-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-top: 56px;
                }

                .problem-card-wrapper {
                  position: relative;
                  border-radius: 12px; /* var(--r-lg) */
                  --active: 0;
                  --start: 0;
                  width: 100%;
                  opacity: 0;
                  transform: translateY(16px);
                  transition: transform 0.2s ease, opacity 0.4s ease;
                }

                .is-visible .problem-card-wrapper {
                  opacity: 1;
                  transform: translateY(0);
                }

                .problem-card-wrapper:hover {
                  transform: translateY(-2px);
                  transition: transform 0.2s ease !important;
                }

                /* Prevent transition-delay from stagger animation affecting interactive properties */
                .problem-card-wrapper:hover::before,
                .problem-card-wrapper:hover .problem-card-glow {
                  transition-delay: 0s !important;
                }

                .problem-card-glow {
                  position: absolute;
                  inset: -1px;
                  border-radius: inherit;
                  background: conic-gradient(
                    from calc((var(--start) - 45) * 1deg),
                    transparent 0deg,
                    #D93025 60deg,
                    #A8201A 120deg,
                    transparent 180deg
                  );
                  opacity: var(--active);
                  transition: opacity 0.4s ease;
                  pointer-events: none;
                  z-index: 0;
                }

                .problem-card-inner {
                  position: relative;
                  z-index: 1;
                  background: #141414; /* var(--bg-2) */
                  border-radius: 11px; /* calc(var(--r-lg) - 1px) */
                  margin: 1px;
                  height: calc(100% - 2px);
                  box-sizing: border-box;
                  padding: 28px;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                }

                .problem-card-wrapper::before {
                  content: '';
                  position: absolute;
                  inset: 0;
                  border-radius: inherit;
                  border: 1px solid #222222; /* var(--bg-4) */
                  pointer-events: none;
                  z-index: 2;
                  opacity: calc(1 - var(--active));
                  transition: opacity 0.4s ease;
                }

                .bg-icon {
                    position: absolute;
                    bottom: -12px;
                    right: -8px;
                    width: 80px;
                    height: 80px;
                    opacity: 0.04;
                    color: #F0EFEE;
                }

                .quote-mark {
                    font-family: 'Syne', sans-serif;
                    font-size: 48px;
                    font-weight: 800;
                    line-height: 1;
                    color: #D93025;
                    margin-bottom: 8px;
                    display: block;
                }

                .statement {
                    font-family: 'Outfit', sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                    color: #F0EFEE;
                    line-height: 1.6;
                    margin-bottom: 16px;
                    z-index: 1;
                }

                .context {
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    color: #9A9590;
                    line-height: 1.7;
                    z-index: 1;
                }

                .card-tag {
                    margin-top: auto;
                    padding-top: 16px;
                    border-top: 1px solid #222222;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 10px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: #5A5550;
                }

                .problem-bottom {
                    text-align: center;
                    margin-top: 56px;
                    font-family: 'Outfit', sans-serif;
                    font-size: 17px;
                    font-weight: 400;
                    font-style: italic;
                    color: #9A9590;
                }

                .problem-bottom .focus {
                    color: #F0EFEE;
                    font-weight: 500;
                    font-style: normal;
                }

                /* Staggered Animations */
                .stagger-item {
                    opacity: 0;
                    transform: translateY(16px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }

                .is-visible .stagger-item {
                    opacity: 1;
                    transform: translateY(0);
                }

                .delay-intro { transition-delay: 0s; }
                .delay-bottom { transition-delay: 0.5s; }
                ${problems.map((_, i) => `.card-delay-${i} { transition-delay: ${0.08 * i}s; }`).join('\n')}

                /* Responsive */
                @media (max-width: 1024px) {
                    .problems-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 640px) {
                    .problems-grid {
                        grid-template-columns: 1fr;
                    }
                    .problem-container {
                        padding: 0 24px;
                    }
                    .problem-h2 {
                        font-size: 32px;
                    }
                }
            `}</style>

            <div className={`problem-container ${isVisible ? 'is-visible' : ''}`}>
                <div className="problem-top stagger-item delay-intro">
                    <span className="problem-label">BRZMI ZNAJOMO?</span>
                    <h2 className="problem-h2">
                        Twój zespół robi <span className="accent-red">za dużo</span> rzeczy ręcznie
                    </h2>
                    <p className="problem-subtitle">
                        Nie musisz mieć chaosu żeby skorzystać z automatyzacji. Wystarczy że gdzieś w firmie ktoś codziennie robi to samo — ręcznie, od miesięcy.
                    </p>
                </div>

                <div className="problems-grid">
                    {problems.map((prob, i) => (
                        <div 
                            key={i} 
                            ref={(el) => (cardRefs.current[i] = el)}
                            className={`problem-card-wrapper stagger-item card-delay-${i}`}
                        >
                            <div className="problem-card-glow" />
                            <div className="problem-card-inner">
                                <div className="bg-icon">
                                    {prob.icon}
                                </div>
                                <span className="quote-mark">„</span>
                                <p className="statement">{prob.statement}</p>
                                <p className="context">{prob.context}</p>
                                <div className="card-tag">{prob.tag}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="problem-bottom stagger-item delay-bottom">
                    Jeśli któryś z tych punktów brzmi znajomo — <span className="focus">jesteś we właściwym miejscu.</span>
                </div>
            </div>
        </section>
    );
};
