import { FloatingHeader } from '@/components/FloatingHeader';
import { Footer } from '@/components/sections/Footer';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import Link from 'next/link';

export const metadata = {
    title: "Oferta - Filar AI",
    description: "Poznaj profesjonalne rozwiązania AI dostosowane do Twojej agencji. Automatyzacja, Agentic Workflow, Web App i Strony Internetowe.",
};

const ServiceDetail = ({ title, description, features, reverse, number, slug }) => (
    <section className="section-spacing bg-white dark:bg-dark-bg border-b border-gray-border dark:border-white/10 overflow-hidden">
        <div className={`container-padding flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
            <div className="lg:w-1/2 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em]">
                    Usługa {number}
                </span>
                <h2 className="heading-serif text-h2 md:text-[40px] mb-6 leading-tight">{title}</h2>
                <p className="font-body text-text-secondary text-lg leading-relaxed mb-8">{description}</p>
                <ul className="flex flex-col gap-4 mb-10">
                    {features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-text-primary dark:text-white font-medium">
                            <span className="text-accent-500 font-bold">✓</span> {feat}
                        </li>
                    ))}
                </ul>
                <Link href={`/oferta/${slug}`} className="btn-secondary">
                    Dowiedz się więcej
                </Link>
            </div>
            <div className="lg:w-1/2 w-full opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
                <div className="w-full aspect-[4/3] bg-gray-light dark:bg-[#1A1A1A] rounded-2xl border border-gray-border dark:border-white/10 shadow-subtle flex items-center justify-center p-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/5 to-transparent"></div>
                    <div className="w-24 h-24 bg-white dark:bg-dark-bg rounded-2xl shadow-medium flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500 text-accent-500 font-bold font-display">
                        {number}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function OfertaPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg text-text-primary dark:text-white">
            <FloatingHeader />

            {/* Hero Section Oferta */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-light dark:bg-[#1A1A1A] border-b border-gray-border dark:border-white/10 text-center">
                <div className="container-padding max-w-4xl opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <h1 className="heading-serif text-h1 md:text-[56px] leading-tight mb-6">Nasze Rozwiązania</h1>
                    <p className="font-body text-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Profesjonalne usługi dostosowane do specyfiki Twojej agencji. Skaluj mądrzej dzięki przemyślanej automatyzacji i dedykowanym systemom.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <ServiceDetail
                number="01"
                title="Automatyzacja procesów biznesowych"
                description="Łączymy używane przez Ciebie aplikacje (np. kalendarz, CRM, e-mail) w spójny organizm. Dzięki temu powtarzalne czynności wykonują się same."
                features={["Szybka integracja z obecnymi narzędziami", "Eliminacja błędów ludzkich", "Odzyskany czas pracy zespołu"]}
                reverse={false}
                slug="automatyzacja-procesow-biznesowych"
            />

            <ServiceDetail
                number="02"
                title="Inteligentne narzędzia AI (Agenci i Aplikacje)"
                description="Wdrażamy zaawansowane systemy sztucznej inteligencji, web apps oraz agentów, którzy potrafią analizować informacje i wyręczać Cię w procesach decyzyjnych."
                features={["Inteligentna analiza zgłoszeń i danych", "Dedykowane aplikacje wewnętrzne", "Wirtualny asystent 24/7"]}
                reverse={true}
                slug="inteligentne-narzedzia-ai"
            />

            <ServiceDetail
                number="03"
                title="Strony internetowe i cyfrowa obecność"
                description="Zbudujemy od podstaw dedykowane, niesamowicie szybkie wizytówki, portale i platformy generujące leady dla Twojej agencji."
                features={["Błyskawiczny czas ładowania", "CMS ułatwiający edycję treści", "Indywidualny design konwertujący ruch (Premium)"]}
                reverse={false}
                slug="strony-internetowe-i-cyfrowa-obecnosc"
            />

            <ServiceDetail
                number="04"
                title="Audyt AI i mapa transformacji"
                description="Kompleksowo zbadamy Twoje obecne procesy firmowe i przygotujemy szczegółową, dopasowaną strategię wdrożenia zautomatyzowanych rozwiązań AI tam, gdzie dadzą największy zwrot z inwestycji (ROI)."
                features={["Szczegółowa mapa procesów AS-IS / TO-BE", "Identyfikacja wąskich gardeł w zespole", "Kalkulacja potencjalnego zwrotu z wdrożeń AI"]}
                reverse={true}
                slug="audyt-ai-i-mapa-transformacji"
            />

            <div className="py-24 bg-white dark:bg-dark-bg text-center">
                <h2 className="heading-serif text-3xl mb-4">Jak realizujemy rozwiązania?</h2>
            </div>

            <HowItWorks />
            <PortfolioPreview />
            <Testimonials />
            <Footer />
        </main>
    );
}
