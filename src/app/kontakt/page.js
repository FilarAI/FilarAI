import { FloatingHeader } from '@/components/FloatingHeader';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { ContactForm } from '@/components/sections/ContactForm';
import { Mail, Phone, MessageCircle, Instagram } from 'lucide-react';

export const metadata = {
    title: 'Kontakt | Filar AI',
    description: 'Skontaktuj się z nami i umów się na bezpłatną konsultację.',
};

export default function KontaktPage() {
    const contactData = [
        {
            icon: <Mail size={24} />,
            label: 'E-mail',
            value: 'kacperfilarkontakt@gmail.com',
            href: 'mailto:kacperfilarkontakt@gmail.com'
        },
        {
            icon: <Phone size={24} />,
            label: 'Telefon',
            value: '+48 534 458 418',
            href: 'tel:+48534458418'
        },
        {
            icon: <MessageCircle size={24} />,
            label: 'WhatsApp',
            value: 'Szybka wiadomość',
            href: 'https://wa.me/48534458418'
        },
        {
            icon: <Instagram size={24} />,
            label: 'Instagram',
            value: '@kacperfilar_',
            href: 'https://www.instagram.com/kacperfilar_/'
        }
    ];

    return (
        <main className="min-h-screen bg-[#080808] text-white flex flex-col font-body">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@400;600&family=JetBrains+Mono:wght@500&display=swap');
                
                :root {
                    --red: #D93025;
                    --bg-dark: #080808;
                    --bg-card: #121212;
                    --text-gray: #9A9590;
                }

                .contact-hero {
                    padding: 160px 24px 80px;
                    text-align: center;
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
                    font-family: 'Syne', sans-serif;
                    font-size: 48px;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    line-height: 1.1;
                    margin-bottom: 32px;
                }

                .description-outfit {
                    font-family: 'Outfit', sans-serif;
                    font-size: 18px;
                    color: var(--text-gray);
                    max-width: 640px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    max-width: 1200px;
                    margin: 0 auto 120px;
                    padding: 0 40px;
                }

                .contact-card {
                    background: var(--bg-card);
                    border: 1px solid #1A1A1A;
                    border-radius: 16px;
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
                    background: #181818;
                }

                .icon-circle {
                    width: 56px;
                    height: 56px;
                    background: #000;
                    border: 1px solid #222;
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
                    color: #F0EFEE;
                    margin-bottom: 8px;
                }

                .card-value {
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    color: #5A5550;
                }

                @media (max-width: 1024px) {
                    .contact-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .heading-syne {
                        font-size: 36px;
                    }
                }

                @media (max-width: 640px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        padding: 0 24px;
                    }
                    .contact-hero {
                        padding-top: 120px;
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

            <div className="max-w-4xl mx-auto w-full px-10 mb-24 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <div className="bg-[#0A0A0A] p-10 md:p-16 rounded-[32px] border border-[#1A1A1A]">
                    <div className="text-center mb-12">
                        <h2 className="heading-syne text-3xl mb-4">Opisz swój projekt</h2>
                        <p className="description-outfit text-base">Wypełnij formularz — wrócimy do Ciebie w ciągu 24h.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>

            <FinalCTA />
        </main>
    );
}
