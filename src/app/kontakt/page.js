import { FloatingHeader } from '@/components/FloatingHeader';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { ContactForm } from '@/components/sections/ContactForm';
import { Mail, Phone, MessageCircle, Instagram, FileText, Calendar, ChevronRight, Check } from 'lucide-react';

export const metadata = {
    title: 'Kontakt | Filar AI',
    description: 'Skontaktuj się z nami i umów się na bezpłatną konsultację.',
};

export default function KontaktPage() {
    const contactData = [
        {
            icon: <Mail size={24} />,
            label: 'E-MAIL',
            value: 'kacperfilarkontakt@gmail.com',
            href: 'mailto:kacperfilarkontakt@gmail.com'
        },
        {
            icon: <Phone size={24} />,
            label: 'TELEFON',
            value: '+48 534 458 418',
            href: 'tel:+48534458418'
        },
        {
            icon: <MessageCircle size={24} />,
            label: 'WHATSAPP',
            value: 'Szybka wiadomość',
            href: 'https://api.whatsapp.com/send/?phone=48534458418&text&type=phone_number&app_absent=0'
        },
        {
            icon: <Instagram size={24} />,
            label: 'INSTAGRAM',
            value: '@kacperfilar_',
            href: 'https://www.instagram.com/kacperfilar_/'
        }
    ];

    return (
        <main className="min-h-screen bg-[#080808] text-white flex flex-col font-body">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap');
                
                :root {
                    --red: #D93025;
                    --red-dim: #A8201A;
                    --red-deep: #7A1510;
                    --red-glow: rgba(217, 48, 37, 0.15);
                    --red-subtle: rgba(217, 48, 37, 0.08);
                    --red-border: rgba(217, 48, 37, 0.25);
                    --bg-0: #080808;
                    --bg-1: #0F0F0F;
                    --bg-2: #141414;
                    --bg-3: #1A1A1A;
                    --bg-4: #222222;
                    --text-1: #F0EFEE;
                    --text-2: #9A9590;
                    --text-3: #5A5550;
                    --r-sm: 4px;
                    --r-md: 8px;
                    --r-lg: 12px;
                    --r-xl: 16px;
                }

                .contact-hero {
                    padding: 160px 24px 80px;
                    text-align: center;
                    overflow: hidden;
                    width: 100%;
                    max-width: 100vw;
                    box-sizing: border-box;
                }

                .label-mono {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 12px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--red);
                    display: block;
                    margin-bottom: 24px;
                }

                .heading-syne {
                    font-family: var(--font-display); /* Syne */
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 700;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 32px;
                    color: var(--text-1);
                }

                @media (max-width: 768px) {
                    .heading-syne {
                        font-size: clamp(2rem, 8vw, 2.8rem);
                        max-width: 100%;
                        padding: 0 16px;
                        word-break: break-word;
                    }
                }

                .description-outfit {
                    font-family: 'Outfit', sans-serif;
                    font-size: 18px;
                    color: var(--text-2);
                    max-width: 640px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                /* Desktop Contact Grid */
                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    max-width: 1200px;
                    margin: 0 auto 64px;
                    padding: 0 40px;
                }

                .contact-card {
                    background: var(--bg-2);
                    border: 1px solid var(--bg-4);
                    border-radius: var(--r-lg);
                    padding: 40px 24px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .contact-card:hover {
                    border-color: var(--red);
                    transform: translateY(-4px);
                    background: var(--bg-3);
                }

                .icon-circle {
                    width: 56px;
                    height: 56px;
                    background: var(--bg-0);
                    border: 1px solid var(--bg-4);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--red);
                    margin-bottom: 24px;
                    transition: transform 0.3s ease;
                }

                .contact-card:hover .icon-circle {
                    transform: scale(1.1);
                    border-color: var(--red);
                }

                .card-label {
                    font-family: 'Syne', sans-serif;
                    font-size: 20px;
                    font-weight: 700;
                    color: var(--text-1);
                    margin-bottom: 8px;
                }

                .card-value {
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    color: var(--text-3);
                }

                /* Main 60/40 Grid Layout */
                .main-layout-container {
                    max-width: 1200px;
                    margin: 0 auto 120px;
                    padding: 0 40px;
                    display: grid;
                    grid-template-columns: 3fr 2fr;
                    gap: 64px;
                    align-items: flex-start;
                }

                /* Right Side Calendar CTA (Desktop) */
                .calendar-cta-sticky {
                    position: sticky;
                    top: 120px;
                    background: var(--bg-2);
                    border: 1px solid var(--bg-4);
                    border-radius: var(--r-xl);
                    padding: 40px;
                }

                .cta-label {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--text-3);
                    margin-bottom: 16px;
                    display: block;
                }

                .cta-title {
                    font-family: 'Syne', sans-serif;
                    font-weight: 700;
                    font-size: 28px;
                    color: var(--text-1);
                    line-height: 1.2;
                    margin-bottom: 12px;
                }

                .cta-description {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 400;
                    font-size: 15px;
                    color: var(--text-2);
                    line-height: 1.75;
                    margin-bottom: 28px;
                }

                .btn-primary-full {
                    display: block;
                    width: 100%;
                    background: var(--red);
                    color: white;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 700;
                    font-size: 15px;
                    padding: 14px 24px;
                    border-radius: var(--r-sm);
                    text-align: center;
                    text-decoration: none;
                    box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
                    transition: all 0.15s ease;
                }

                .btn-primary-full:hover {
                    background: var(--red-dim);
                    box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
                }

                .btn-microcopy {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 400;
                    font-size: 13px;
                    color: var(--text-3);
                    text-align: center;
                    margin-top: 10px;
                    display: block;
                }

                .cta-divider {
                    margin-top: 32px;
                    padding-top: 32px;
                    border-top: 1px solid var(--bg-4);
                }

                .trust-point {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 12px;
                }

                .trust-point-text {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 400;
                    font-size: 13px;
                    color: var(--text-2);
                }

                /* Mobile Compact List */
                .mobile-contact-list {
                    display: none;
                }

                /* Mobile Calendar CTA Block */
                .calendar-cta-mobile {
                    display: none;
                }

                @media (max-width: 767px) {
                    .contact-grid {
                        display: none;
                    }

                    .main-layout-container {
                        grid-template-columns: 1fr;
                        padding: 0 24px;
                        gap: 40px;
                        margin-bottom: 80px;
                    }

                    .calendar-cta-sticky {
                        display: none;
                    }

                    .mobile-contact-list {
                        display: block;
                        background: var(--bg-2);
                        border: 1px solid var(--bg-4);
                        border-radius: var(--r-lg);
                        padding: 0 20px;
                        margin: 0 24px 40px;
                        overflow: hidden;
                    }

                    .mobile-contact-row {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        padding: 16px 0;
                        border-bottom: 1px solid var(--bg-4);
                        text-decoration: none;
                    }

                    .mobile-contact-row:last-child {
                        border-bottom: none;
                    }

                    .mobile-icon-circle {
                        width: 36px;
                        height: 36px;
                        background: var(--bg-3);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    }

                    .mobile-info {
                        flex: 1;
                    }

                    .mobile-label-mono {
                        font-family: 'JetBrains Mono', monospace;
                        font-size: 10px;
                        font-weight: 500;
                        text-transform: uppercase;
                        letter-spacing: 0.06em;
                        color: var(--text-3);
                        display: block;
                    }

                    .mobile-value-outfit {
                        font-family: 'Outfit', sans-serif;
                        font-weight: 500;
                        font-size: 15px;
                        color: var(--text-1);
                        margin-top: 2px;
                        display: block;
                    }

                    .calendar-cta-mobile {
                        display: block;
                        background: var(--bg-2);
                        border: 1px solid var(--red-border);
                        border-radius: var(--r-lg);
                        padding: 24px;
                        margin: 0 24px 40px;
                    }

                    .mobile-cta-label {
                        font-family: 'JetBrains Mono', monospace;
                        font-size: 10px;
                        font-weight: 500;
                        text-transform: uppercase;
                        color: var(--red);
                        margin-bottom: 8px;
                        display: block;
                    }

                    .mobile-cta-title {
                        font-family: 'Syne', sans-serif;
                        font-weight: 700;
                        font-size: 22px;
                        color: var(--text-1);
                        margin-bottom: 10px;
                    }

                    .mobile-cta-description {
                        font-family: 'Outfit', sans-serif;
                        font-weight: 400;
                        font-size: 14px;
                        color: var(--text-2);
                        line-height: 1.7;
                        margin-bottom: 20px;
                    }

                    .mobile-btn-microcopy {
                        font-family: 'Outfit', sans-serif;
                        font-weight: 400;
                        font-size: 12px;
                        color: var(--text-3);
                        text-align: center;
                        margin-top: 8px;
                        display: block;
                    }
                    
                    /* Form adjustments for mobile */
                    #contact-form {
                        padding: 0 !important;
                        margin: 0 24px 80px !important;
                    }
                    
                    #contact-form > div {
                        padding: 40px 24px !important;
                    }
                }
            `}</style>

            <FloatingHeader />

            <section className="contact-hero animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="label-mono">POROZMAWIAJMY</span>
                <h1 className="heading-syne">Skontaktuj się z nami</h1>
                <p className="description-outfit">
                    Wybierz najwygodniejszą dla siebie formę kontaktu. Jesteśmy tu, aby odpowiedzieć na Twoje pytania i pomóc w optymalizacji Twojego biznesu.
                </p>
            </section>

            {/* Desktop Contact Grid */}
            <section className="contact-grid">
                {contactData.map((item, idx) => (
                    <a key={idx} href={item.href} className="contact-card group animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                        <div className="icon-circle">
                            {item.icon}
                        </div>
                        <h3 className="card-label">{item.label}</h3>
                        <p className="card-value">{item.value}</p>
                    </a>
                ))}
            </section>

            {/* Mobile Contact List */}
            <section className="mobile-contact-list animate-in fade-in slide-in-from-bottom-8 duration-700">
                {contactData.map((item, idx) => {
                    const icons = [Mail, Phone, MessageCircle, Instagram];
                    const IconComp = icons[idx];
                    return (
                        <a key={idx} href={item.href} className="mobile-contact-row">
                            <div className="mobile-icon-circle">
                                <IconComp size={16} color="var(--red)" />
                            </div>
                            <div className="mobile-info">
                                <span className="mobile-label-mono">{item.label}</span>
                                <span className="mobile-value-outfit">{item.value}</span>
                            </div>
                            <ChevronRight size={16} color="var(--text-3)" />
                        </a>
                    );
                })}
            </section>

            {/* Mobile Calendar CTA */}
            <section className="calendar-cta-mobile animate-in fade-in slide-in-from-bottom-8 duration-700">
                <span className="mobile-cta-label">BEZPŁATNA KONSULTACJA</span>
                <h3 className="mobile-cta-title">Wolisz porozmawiać?</h3>
                <p className="mobile-cta-description">
                    30 minut online. Wyjdziesz z konkretnymi wnioskami.
                </p>
                <a 
                    href="https://calendar.app.google/BtxhP1NN7bvTtwX57" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary-full"
                >
                    Wybierz termin →
                </a>
                <span className="mobile-btn-microcopy">Bez zobowiązań · Online · 30 min</span>
            </section>

            {/* Main Content (60/40 Grid on Desktop) */}
            <div className="main-layout-container">
                {/* Left Column - Contact Form */}
                <div id="contact-form" className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-[#121212] p-10 md:p-16 rounded-[32px] border border-[#1A1A1A]">
                        <div className="text-center mb-12">
                            <h2 className="heading-syne text-3xl mb-4">Opisz swój projekt</h2>
                            <p className="description-outfit text-base">Wypełnij formularz — wrócimy do Ciebie w ciągu 24h.</p>
                        </div>
                        <ContactForm />
                    </div>
                </div>

                {/* Right Column - Calendar CTA (Desktop Sticky) */}
                <aside className="calendar-cta-sticky animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '0.4s' }}>
                    <span className="cta-label">BEZPŁATNA KONSULTACJA</span>
                    <h3 className="cta-title">Wolisz porozmawiać zamiast pisać?</h3>
                    <p className="cta-description">
                        Zarezerwuj 30 minut w kalendarzu. Bez zobowiązań — wyjdziesz z rozmowy z konkretnymi wnioskami co do swojej firmy.
                    </p>
                    <a 
                        href="https://calendar.app.google/BtxhP1NN7bvTtwX57" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-primary-full"
                    >
                        Wybierz termin w kalendarzu →
                    </a>
                    <span className="btn-microcopy">30 min · Online · Bez zobowiązań</span>
                    
                    <div className="cta-divider">
                        <div className="trust-point">
                            <Check size={14} color="var(--red)" />
                            <span className="trust-point-text">Odpowiem w ciągu 24h</span>
                        </div>
                        <div className="trust-point">
                            <Check size={14} color="var(--red)" />
                            <span className="trust-point-text">Konkretne wnioski, nie sprzedawanie</span>
                        </div>
                        <div className="trust-point">
                            <Check size={14} color="var(--red)" />
                            <span className="trust-point-text">Zero ukrytych kosztów</span>
                        </div>
                    </div>
                </aside>
            </div>

            <FinalCTA />
        </main>
    );
}
