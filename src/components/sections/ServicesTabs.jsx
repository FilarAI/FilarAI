"use client";
import React, { useState, useEffect, useRef } from 'react';

/**
 * ServicesTabs Section - FilarAI "Oferta" Page
 * 
 * Interactive tabbed interface with accordions and benefits.
 * Strictly follows BRAND.md and design instructions.
 */
export const ServicesTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState(0);
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

    const tabs = [
        {
            label: "Automatyzacje",
            h3: "Twój biznes pracuje — nawet gdy Ty nie pracujesz",
            description: "Analizujemy procesy w Twojej firmie i automatyzujemy te, które pochłaniają czas bez tworzenia wartości. Używamy n8n, Make i integracji z AI do budowania przepływów działających 24/7.",
            accordion: [
                { title: "Automatyczne faktury", desc: "Zdjęcie → OCR → baza danych → potwierdzenie e-mail. Zero ręcznego przepisywania danych." },
                { title: "Obsługa skrzynki e-mail", desc: "AI czyta, kategoryzuje i flaguje maile wymagające pilnej odpowiedzi. Priorytetyzacja bez udziału człowieka." },
                { title: "Kwalifikacja leadów", desc: "Formularz → AI ocenia dopasowanie → automatyczna oferta lub telefon do właściwych klientów." },
                { title: "Opinie po usłudze", desc: "Automatyczne pytanie o opinię przez e-mail, SMS lub WhatsApp zaraz po zakończeniu zlecenia." },
                { title: "Synchronizacja systemów", desc: "Dane między CRM, arkuszami i kalendarzem synchronizują się automatycznie bez ręcznego kopiowania." }
            ],
            benefits: [
                { icon: "clock", title: "System działa 24/7", desc: "Procesy działają bez nadzoru, również w nocy i w weekendy." },
                { icon: "x-circle", title: "Zero błędów z przepisywania", desc: "Automatyzacja eliminuje błędy ludzkie wynikające z rutyny i zmęczenia." },
                { icon: "users", title: "Bez nowych pracowników", desc: "Zwiększasz przepustowość firmy bez zwiększania zespołu." },
                { icon: "zap", title: "Wdrożenie w 1–2 tygodnie", desc: "Pierwsze działające automatyzacje dostarczamy szybko — bez miesięcy czekania." }
            ],
            cta: {
                text: "Chcesz wiedzieć które procesy w Twojej firmie można zautomatyzować?",
                button: "Porozmawiaj o automatyzacji →",
                href: "/kontakt"
            }
        },
        {
            label: "Agenci AI i Aplikacje",
            h3: "Narzędzie szyte na miarę Twojego biznesu",
            description: "Budujemy agentów AI i dedykowane aplikacje webowe integrujące się z Twoimi procesami. Nie gotowe szablony — każde rozwiązanie projektujemy od podstaw pod konkretny problem.",
            accordion: [
                { title: "Chatbot z bazą wiedzy", desc: "AI z wiedzą o Twojej firmie obsługuje FAQ, odpowiada na pytania i umawia spotkania przez całą dobę." },
                { title: "RAG Agent firmowy", desc: "Agent z dostępem do procedur, cenników i danych firmy. Nowi pracownicy pytają agenta zamiast managera." },
                { title: "System Fast Lead", desc: "Klient wypełnia formularz → AI kwalifikuje → generuje spersonalizowaną ofertę → umawia rozmowę." },
                { title: "Dashboard zarządzania", desc: "Aplikacja webowa z logowaniem: zapasy, zamówienia, faktury — wszystko w jednym miejscu z dowolnego urządzenia." },
                { title: "Agent Gmail", desc: "Czyta, priorytetyzuje i proponuje odpowiedzi na maile. Skrzynka pod kontrolą bez godzin przy komputerze." }
            ],
            benefits: [
                { icon: "settings", title: "Szyte na miarę", desc: "Płacisz tylko za funkcje które potrzebujesz — bez zbędnych modułów." },
                { icon: "plug", title: "Integracja z tym co masz", desc: "Łączymy się z narzędziami których już używasz w firmie." },
                { icon: "user", title: "Prosta obsługa", desc: "Projektujemy z myślą o osobach bez technicznego backgroundu." },
                { icon: "book", title: "Pełna dokumentacja", desc: "Każde wdrożenie kończy się dokumentacją i szkoleniem dla zespołu." }
            ],
            cta: {
                text: "Masz pomysł na narzędzie które rozwiązałoby problem w Twojej firmie?",
                button: "Omów swój pomysł →",
                href: "/kontakt"
            }
        },
        {
            label: "Strony internetowe",
            h3: "Strona która aktywnie pozyskuje klientów",
            description: "Tworzymy szybkie, animowane strony zaprojektowane tak by od razu współpracować z systemami automatyzacji, formularzami leadowymi i kampaniami reklamowymi.",
            accordion: [
                { title: "Strona firmowa", desc: "Sekcje oferty, portfolio, kontaktu i zapisu na konsultację. Zaprojektowana pod konwersję od pierwszego dnia." },
                { title: "Landing page pod reklamy", desc: "Strona pod kampanię Google/Meta Ads z formularzem leadowym połączonym z automatyzacją." },
                { title: "Strona z chatbotem AI", desc: "Wbudowany chatbot obsługuje klientów, odpowiada na pytania i umawia spotkania zamiast Ciebie." },
                { title: "Integracja z CRM i kalendarzem", desc: "Formularz kontaktowy trafia prosto do CRM i kalendarza — zero ręcznego przepisywania danych z maili." }
            ],
            benefits: [
                { icon: "monitor", title: "Wygląda profesjonalnie", desc: "Design który buduje zaufanie od pierwszych sekund na stronie." },
                { icon: "zap", title: "Gotowa pod reklamy", desc: "Struktura i szybkość zoptymalizowane pod kampanie płatne od pierwszego dnia." },
                { icon: "smartphone", title: "Responsywna mobilnie", desc: "Działa perfekcyjnie na każdym urządzeniu — telefon, tablet, desktop." },
                { icon: "link", title: "Zintegrowana z automatyzacją", desc: "Formularz, chatbot i kalendarz działają razem jako jeden system." }
            ],
            cta: {
                text: "Chcesz stronę która pracuje na Twój biznes przez całą dobę?",
                button: "Porozmawiaj o stronie →",
                href: "/kontakt"
            }
        },
        {
            label: "Audyt AI",
            h3: "Zanim zainwestujesz — wiedz co kupujesz",
            description: "Przeprowadzamy szczegółowy audyt procesów i identyfikujemy miejsca gdzie AI przyniesie największy zwrot z inwestycji. Dostarczamy konkretny plan działania z priorytetami i kosztami.",
            accordion: [
                { title: "Analiza procesów operacyjnych", desc: "Przyglądamy się sprzedaży, obsłudze klienta, administracji i finansom — szukamy gdzie ucieka czas i pieniądze." },
                { title: "Identyfikacja quick wins", desc: "Wskazujemy automatyzacje które można wdrożyć w ciągu 2 tygodni i od razu przyniosą efekt." },
                { title: "Mapa drogowa 6–12 miesięcy", desc: "Konkretny plan transformacji cyfrowej z priorytetami, kosztami i oczekiwanymi efektami." },
                { title: "Raport z rekomendacjami", desc: "Dokument który możesz użyć do podjęcia decyzji lub przedstawienia zarządowi czy wspólnikom." }
            ],
            benefits: [
                { icon: "search", title: "Jasność priorytetów", desc: "Wiesz co wdrożyć najpierw — bez przepalania budżetu na złe rzeczy." },
                { icon: "shield", title: "Bezpieczny start", desc: "Zanim zainwestujesz w wdrożenie wiesz dokładnie co i za ile kupujesz." },
                { icon: "file-text", title: "Gotowy dokument", desc: "Raport który możesz pokazać zespołowi lub użyć do planowania budżetu." },
                { icon: "trending-up", title: "Zwrot z inwestycji", desc: "Każda rekomendacja uzasadniona konkretnym efektem biznesowym." }
            ],
            cta: {
                text: "Nie wiesz od czego zacząć z AI w swojej firmie?",
                button: "Zamów audyt AI →",
                href: "/kontakt"
            }
        }
    ];

    const renderIcon = (type) => {
        const props = { width: 18, height: 18, stroke: "currentColor", strokeWidth: 1.5, fill: "none" };
        switch (type) {
            case 'clock': return <svg {...props} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
            case 'x-circle': return <svg {...props} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>;
            case 'users': return <svg {...props} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
            case 'zap': return <svg {...props} viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
            case 'settings': return <svg {...props} viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2a2 2 0 0 1-2 2a2 2 0 0 0-2 2v.44a2 2 0 0 0 2 2a2 2 0 0 1 2 2a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2a2 2 0 0 1 2-2a2 2 0 0 0 2-2V7.78a2 2 0 0 0-2-2a2 2 0 0 1-2-2a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>;
            case 'plug': return <svg {...props} viewBox="0 0 24 24"><path d="M12 2v5M17 2v3M7 2v3M5 15a7 7 0 0 0 14 0h-2l-1-4h-8l-1 4H5zM12 15v7" /></svg>;
            case 'user': return <svg {...props} viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
            case 'book': return <svg {...props} viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
            case 'monitor': return <svg {...props} viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
            case 'smartphone': return <svg {...props} viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>;
            case 'link': return <svg {...props} viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>;
            case 'search': return <svg {...props} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
            case 'shield': return <svg {...props} viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
            case 'file-text': return <svg {...props} viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>;
            case 'trending-up': return <svg {...props} viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>;
            default: return null;
        }
    };

    const handleTabChange = (index) => {
        setActiveTab(index);
        setActiveAccordion(0);
    };

    return (
        <section ref={sectionRef} className="services-tabs-section">
            <style>{`
                .services-tabs-section {
                    width: 100%;
                    background: #080808; /* --bg-0 */
                    padding: 96px 0;
                    display: flex;
                    justify-content: center;
                }

                .services-tabs-container {
                    width: 100%;
                    max-width: 1200px;
                    padding: 0 40px;
                }

                .st-top {
                    text-align: center;
                    margin-bottom: 56px;
                }

                .st-label {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: #5A5550; /* --text-3 */
                }

                .st-h2 {
                    font-family: 'Syne', sans-serif;
                    font-size: 42px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: #F0EFEE; /* --text-1 */
                    margin-top: 12px;
                }

                .st-h2 .accent-red {
                    color: #D93025; /* --red */
                }

                /* Tab Navigation */
                .st-nav {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 48px;
                }

                .st-tab-btn {
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    padding: 10px 24px;
                    border-radius: 999px; /* --r-full */
                    cursor: pointer;
                    transition: all 0.15s ease;
                    border: 1px solid #222222; /* --bg-4 */
                    background: transparent;
                    color: #9A9590; /* --text-2 */
                }

                .st-tab-btn:hover {
                    border-color: #5A5550; /* --text-3 */
                    color: #F0EFEE;
                }

                .st-tab-btn.active {
                    background: rgba(217, 48, 37, 0.08); /* --red-subtle */
                    border-color: rgba(217, 48, 37, 0.25); /* --red-border */
                    color: #D93025;
                    font-weight: 600;
                }

                /* Tab Panel Content */
                .st-panel {
                    display: flex;
                    gap: 64px;
                    align-items: flex-start;
                    animation: panelFadeUp 0.25s ease forwards;
                }

                @keyframes panelFadeUp {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .st-col-left { flex: 0 0 55%; }
                .st-col-right { flex: 0 0 45%; }

                .st-h3 {
                    font-family: 'Syne', sans-serif;
                    font-size: 32px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: #F0EFEE;
                    line-height: 1.2;
                    margin-bottom: 16px;
                }

                .st-description {
                    font-family: 'Outfit', sans-serif;
                    font-size: 16px;
                    color: #9A9590;
                    line-height: 1.8;
                    margin-bottom: 32px;
                }

                .st-label-small {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: #5A5550;
                    margin-bottom: 16px;
                    display: block;
                }

                /* Accordion */
                .st-accordion {
                    display: flex;
                    flex-direction: column;
                }

                .st-acc-item {
                    border-bottom: 1px solid #222222;
                    padding: 16px 0;
                }

                .st-acc-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    width: 100%;
                    background: none;
                    border: none;
                    text-align: left;
                    padding: 0;
                }

                .st-acc-title {
                    font-family: 'Outfit', sans-serif;
                    font-size: 15px;
                    font-weight: 600;
                    color: #F0EFEE;
                    transition: color 0.2s ease;
                }

                .st-acc-header:hover .st-acc-title {
                    color: #D93025;
                }

                .st-acc-icon {
                    font-family: 'Syne', sans-serif;
                    font-size: 20px;
                    font-weight: 700;
                    color: #D93025;
                }

                .st-acc-body {
                    max-height: 0;
                    overflow: hidden;
                    opacity: 0;
                    transition: max-height 0.3s ease, opacity 0.3s ease;
                }

                .st-acc-item.active .st-acc-body {
                    max-height: 200px;
                    opacity: 1;
                    padding-top: 12px;
                    padding-bottom: 8px;
                }

                .st-acc-desc {
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    color: #9A9590;
                    line-height: 1.7;
                    margin-bottom: 10px;
                }

                .st-acc-link {
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    font-weight: 500;
                    color: #D93025;
                    text-decoration: none;
                }

                /* Benefits List */
                .st-benefits {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .st-benefit-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    padding: 16px 0;
                    border-bottom: 1px solid #222222;
                }

                .st-benefit-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(217, 48, 37, 0.08); /* --red-subtle */
                    border: 1px solid rgba(217, 48, 37, 0.25); /* --red-border */
                    border-radius: 8px; /* --r-md */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #D93025;
                    flex-shrink: 0;
                }

                .st-benefit-title {
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    font-weight: 600;
                    color: #F0EFEE;
                    margin-bottom: 4px;
                }

                .st-benefit-desc {
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    color: #9A9590;
                    line-height: 1.6;
                }

                /* CTA Block */
                .st-cta-block {
                    margin-top: 32px;
                    padding: 24px;
                    background: #141414; /* --bg-2 */
                    border: 1px solid #222222;
                    border-radius: 12px; /* --r-lg */
                }

                .st-cta-text {
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    color: #9A9590;
                    margin-bottom: 16px;
                }

                .st-cta-btn {
                    display: block;
                    width: 100%;
                    background: #D93025;
                    color: white;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 600;
                    font-size: 14px;
                    padding: 12px;
                    border-radius: 8px; /* --r-md */
                    text-decoration: none;
                    text-align: center;
                    transition: all 0.2s ease;
                }

                .st-cta-btn:hover {
                    background: #A8201A; /* --red-dim */
                    box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
                }

                .st-cta-micro {
                    display: block;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 10px;
                    color: #5A5550;
                    text-align: center;
                    margin-top: 8px;
                    letter-spacing: 0.05em;
                }

                /* Staggered on scroll entry */
                .stagger-item {
                    opacity: 0;
                    transform: translateY(12px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }

                .is-visible .stagger-item {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Tablet / Mobile */
                @media (max-width: 1024px) {
                    .st-panel {
                        flex-direction: column;
                        gap: 48px;
                    }
                    .st-col-left, .st-col-right {
                        flex: 1 1 100%;
                        width: 100%;
                    }
                }

                @media (max-width: 640px) {
                    .services-tabs-container {
                        padding: 0 24px;
                    }
                    .st-h2 { font-size: 32px; }
                    .st-h3 { font-size: 24px; }
                }
            `}</style>

            <div className={`services-tabs-container ${isVisible ? 'is-visible' : ''}`}>
                <div className="st-top stagger-item">
                    <span className="st-label">ROZWIĄZANIA</span>
                    <h2 className="st-h2">Wybierz obszar który Cię <span className="accent-red">interesuje</span></h2>
                </div>

                {/* Tab Navigation */}
                <nav className="st-nav stagger-item">
                    {tabs.map((tab, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleTabChange(idx)}
                            className={`st-tab-btn ${activeTab === idx ? 'active' : ''}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>

                {/* Content Panel */}
                <div key={activeTab} className="st-panel">
                    {/* Left Column */}
                    <div className="st-col-left">
                        <h3 className="st-h3">{tabs[activeTab].h3}</h3>
                        <p className="st-description">{tabs[activeTab].description}</p>
                        
                        <span className="st-label-small">PRZYKŁADY ZASTOSOWAŃ</span>
                        <div className="st-accordion">
                            {tabs[activeTab].accordion.map((item, idx) => (
                                <div key={idx} className={`st-acc-item ${activeAccordion === idx ? 'active' : ''}`}>
                                    <button 
                                        className="st-acc-header"
                                        onClick={() => setActiveAccordion(activeAccordion === idx ? -1 : idx)}
                                    >
                                        <span className="st-acc-title">{item.title}</span>
                                        <span className="st-acc-icon">{activeAccordion === idx ? '−' : '+'}</span>
                                    </button>
                                    <div className="st-acc-body">
                                        <p className="st-acc-desc">{item.desc}</p>
                                        <a href="/portfolio" className="st-acc-link">Zobacz realizację →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="st-col-right">
                        <span className="st-label-small">CO ZYSKUJESZ</span>
                        <div className="st-benefits">
                            {tabs[activeTab].benefits.map((benefit, idx) => (
                                <div key={idx} className="st-benefit-row">
                                    <div className="st-benefit-icon">
                                        {renderIcon(benefit.icon)}
                                    </div>
                                    <div className="st-benefit-content">
                                        <h4 className="st-benefit-title">{benefit.title}</h4>
                                        <p className="st-benefit-desc">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Block */}
                        <div className="st-cta-block">
                            <p className="st-cta-text">{tabs[activeTab].cta.text}</p>
                            <a 
                                href={tabs[activeTab].cta.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="st-cta-btn"
                            >
                                {tabs[activeTab].cta.button}
                            </a>
                            <span className="st-cta-micro">30 MIN · BEZ ZOBOWIĄZAŃ</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
