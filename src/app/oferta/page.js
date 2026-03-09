import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import Link from 'next/link';

export const metadata = {
    title: "Oferta - Filar AI",
    description: "Poznaj profesjonalne rozwiązania AI dostosowane do Twojej agencji. Automatyzacja, Agentic Workflow, Web App i Strony Internetowe.",
};

const ServiceDetail = ({ title, description, features, reverse, number }) => (
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
                <Link href="/kontakt" className="btn-secondary">
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
            <Header />

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
                title="Budowa Automatyzacji"
                description="Łączymy używane przez Ciebie aplikacje (np. kalendarz, CRM, e-mail) w spójny organizm. Dzięki temu powtarzalne czynności wykonują się same."
                features={["Szybka integracja z obecnymi narzędziami", "Eliminacja błędów ludzkich", "Odzyskany czas pracy zespołu"]}
                reverse={false}
            />

            <ServiceDetail
                number="02"
                title="Agentic Workflow"
                description="Wdrażamy zaawansowane systemy sztucznej inteligencji, które potrafią analizować informacje, planować spotkania i samodzielnie dostosowywać rekomendacje dla Twoich klientów."
                features={["Inteligentna analiza zgłoszeń", "Automatyczny follow-up klientów", "Wirtualny asystent 24/7"]}
                reverse={true}
            />

            <ServiceDetail
                number="03"
                title="Web App Customowe"
                description="Zbudujemy od podstaw dedykowane portale i wewnętrzne dashboardy, zamykając wszystkie procesy w jednym, niesamowicie przejrzystym narzędziu."
                features={["Wszystkie dane w 1 miejscu", "Pełna kontrola ról i dostępów", "Indywidualny design (Superplan-style)"]}
                reverse={false}
            />

            <ServiceDetail
                number="04"
                title="Budowa Stron Internetowych"
                description="Tworzymy profesjonalne, niesamowicie szybkie strony zoptymalizowane pod generowanie leadów. Gotowe do skalowania i podpięcia automatyzacji."
                features={["Błyskawiczny czas ładowania", "Wersja responsywna", "System CMS ułatwiający edycję"]}
                reverse={true}
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
