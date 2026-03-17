"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * OfertaDlaKogo Section - FilarAI "Oferta" Page
 * 
 * Target fit section explaining who fits the service model and who doesn't.
 * Strictly follows BRAND.md and design instructions.
 */
export const OfertaDlaKogo = () => {
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

    const fits = [
        { title: "Masz firmę 5–30 osób", context: "Segment który najszybciej zyskuje na automatyzacji — duży potencjał, krótki czas decyzji." },
        { title: "Część pracy dzieje się 'ręcznie' i wszyscy o tym wiedzą", context: "Maile, przepisywanie danych, raporty — ktoś to robi i wiesz że nie powinien." },
        { title: "Chcesz rosnąć bez proporcjonalnego zwiększania zespołu", context: "Automatyzacja pozwala obsłużyć więcej klientów bez nowych etatów." },
        { title: "Decyzje podejmujesz szybko — bez komitetów i miesięcy analiz", context: "Pracujemy z właścicielami i menedżerami którzy mogą powiedzieć 'tak' na spotkaniu." },
        { title: "Słyszałeś o AI i chcesz to wdrożyć — ale nie wiesz od czego zacząć", context: "Dokładnie po to jesteśmy. Zaczniemy od audytu i wskażemy priorytety." },
        { title: "Zależy Ci na partnerze który mówi wprost co działa a co nie", context: "Nie sprzedamy Ci rozwiązania które nie ma sensu w Twojej firmie." }
    ];

    const nonFits = [
        { title: "Korporacje z systemami enterprise", context: "SAP, Oracle, wielomiesięczne due diligence i komitety zakupowe — to nie nasz świat." },
        { title: "Szukasz najtańszej opcji na rynku", context: "Nie konkurujemy ceną. Konkurujemy jakością wdrożenia i długoterminowym efektem." },
        { title: "Chcesz gotowy szablon bez dostosowania", context: "Każde nasze wdrożenie jest projektowane pod konkretny problem — nie kopiujemy gotowców." }
    ];

    return (
        <section ref={sectionRef} className="dk-section">
            <style>{`
                .dk-section {
                    width: 100%;
                    background: #0F0F0F; /* --bg-1 */
                    padding: 96px 0;
                    display: flex;
                    justify-content: center;
                }

                .dk-container {
                    width: 100%;
                    max-width: 1200px;
                    padding: 0 40px;
                }

                .dk-top {
                    text-align: center;
                    margin-bottom: 64px;
                }

                .dk-label {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: #5A5550; /* --text-3 */
                    display: block;
                }

                .dk-h2 {
                    font-family: 'Syne', sans-serif;
                    font-size: 42px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: #F0EFEE; /* --text-1 */
                    margin-top: 12px;
                }

                .dk-h2 .accent-red {
                    color: #D93025;
                }

                .dk-content {
                    display: flex;
                    gap: 48px;
                    align-items: flex-start;
                }

                .dk-col-left { flex: 0 0 60%; }
                .dk-col-right { flex: 0 0 40%; }

                .dk-col-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 28px;
                }

                .dk-header-text {
                    font-family: 'Outfit', sans-serif;
                    font-size: 16px;
                    font-weight: 600;
                }

                .dk-col-left .dk-header-text { color: #F0EFEE; }
                .dk-col-right .dk-header-text { color: #9A9590; }

                .dk-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    padding: 16px 0;
                    border-bottom: 1px solid #222222; /* --bg-4 */
                    transition: all 0.15s ease;
                }

                .dk-row:last-child {
                    border-bottom: none;
                }

                /* Only left column has hover effect */
                .dk-col-left .dk-row:hover {
                    background: #141414; /* --bg-2 */
                    margin: 0 -16px;
                    padding: 16px;
                    border-radius: 4px; /* --r-sm */
                }

                .dk-icon-s {
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .dk-row-title {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 600;
                    margin-bottom: 4px;
                }

                .dk-col-left .dk-row-title { font-size: 15px; color: #F0EFEE; }
                .dk-col-right .dk-row-title { font-size: 14px; color: #9A9590; }

                .dk-row-context {
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 1.6;
                }

                .dk-col-left .dk-row-context { color: #9A9590; }
                .dk-col-right .dk-row-context { color: #5A5550; }

                /* Bottom Bar */
                .dk-bottom-bar {
                    margin-top: 56px;
                    padding: 28px 32px;
                    background: #141414; /* --bg-2 */
                    border: 1px solid rgba(217, 48, 37, 0.4); /* --red-border approx */
                    border-radius: 12px; /* --r-lg */
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .dk-bottom-h3 {
                    font-family: 'Syne', sans-serif;
                    font-size: 20px;
                    font-weight: 600;
                    color: #F0EFEE;
                }

                .dk-bottom-p {
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    color: #9A9590;
                    margin-top: 6px;
                }

                .dk-btn-primary {
                    background: #D93025;
                    color: #ffffff;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 600;
                    font-size: 14px;
                    padding: 12px 24px;
                    border-radius: 4px;
                    text-decoration: none;
                    transition: all 0.15s ease;
                }

                .dk-btn-primary:hover {
                    background: #A8201A;
                    box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
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
                .delay-bottom { transition-delay: 0.4s; }

                ${fits.map((_, i) => `.delay-fit-${i} { transition-delay: ${0.07 * i}s; }`).join('\n')}
                ${nonFits.map((_, i) => `.delay-nonfit-${i} { transition-delay: ${0.1 + 0.07 * i}s; }`).join('\n')}

                /* Responsive */
                @media (max-width: 768px) {
                    .dk-content {
                        flex-direction: column;
                        gap: 48px;
                    }
                    .dk-col-left, .dk-col-right {
                        flex: 1 1 100%;
                        width: 100%;
                    }
                    .dk-container {
                        padding: 0 24px;
                    }
                    .dk-h2 {
                        font-size: 32px;
                    }
                    .dk-bottom-bar {
                        flex-direction: column;
                        align-items: stretch;
                        text-align: center;
                    }
                    .dk-btn-primary {
                        text-align: center;
                    }
                }
            `}</style>

            <div className={`dk-container ${isVisible ? 'is-visible' : ''}`}>
                <div className="dk-top stagger-item delay-intro">
                    <span className="dk-label">DLA KOGO</span>
                    <h2 className="dk-h2">To jest <span className="accent-red">dla Ciebie</span> jeśli...</h2>
                </div>

                <div className="dk-content">
                    {/* Left Column */}
                    <div className="dk-col-left">
                        <div className="dk-col-header stagger-item delay-intro">
                            <svg className="dk-icon-m" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="9" stroke="#22C55E" strokeWidth="1.5" />
                                <path d="M6 10L9 13L14 7" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="dk-header-text">Pasujemy do siebie</span>
                        </div>

                        <div className="dk-list">
                            {fits.map((row, i) => (
                                <div key={i} className={`dk-row stagger-item delay-fit-${i}`}>
                                    <svg className="dk-icon-s" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8L6.5 11.5L13 5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div>
                                        <h4 className="dk-row-title">{row.title}</h4>
                                        <p className="dk-row-context">{row.context}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="dk-col-right">
                        <div className="dk-col-header stagger-item delay-intro">
                            <svg className="dk-icon-m" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="9" stroke="#5A5550" strokeWidth="1.5" />
                                <path d="M7 7L13 13" stroke="#5A5550" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M13 7L7 13" stroke="#5A5550" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span className="dk-header-text">Kiedy nie jesteśmy dobrym dopasowaniem</span>
                        </div>

                        <div className="dk-list">
                            {nonFits.map((row, i) => (
                                <div key={i} className={`dk-row stagger-item delay-nonfit-${i}`}>
                                    <svg className="dk-icon-s" width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: '3px' }}>
                                        <path d="M4 4L10 10" stroke="#5A5550" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M10 4L4 10" stroke="#5A5550" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <div>
                                        <h4 className="dk-row-title">{row.title}</h4>
                                        <p className="dk-row-context">{row.context}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="dk-bottom-bar stagger-item delay-bottom">
                    <div className="dk-bottom-text">
                        <h3 className="dk-bottom-h3">Nie jesteś pewny czy to dla Ciebie?</h3>
                        <p className="dk-bottom-p">Umów bezpłatną konsultację — po 30 minutach oboje będziemy wiedzieć czy warto iść dalej.</p>
                    </div>
                    <a href="/kontakt" className="dk-btn-primary">
                        Sprawdź czy pasujemy →
                    </a>
                </div>
            </div>
        </section>
    );
};
