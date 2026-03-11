import { FloatingHeader } from '@/components/FloatingHeader';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return [
        { slug: 'automatyzacja-procesow-biznesowych' },
        { slug: 'inteligentne-narzedzia-ai' },
        { slug: 'strony-internetowe-i-cyfrowa-obecnosc' },
        { slug: 'audyt-ai-i-mapa-transformacji' }
    ];
}

const offerData = {
    'automatyzacja-procesow-biznesowych': {
        title: "Automatyzacja procesów biznesowych",
        subtitle: "Łączymy używane przez Ciebie aplikacje w spójny organizm. Dzięki temu powtarzalne czynności wykonują się same.",
        whatItIs: "Automatyzacja to budowanie inteligentnych 'mostów' między aplikacjami, z których korzystacie na co dzień (np. GMail, Slack, CRM, Systemy księgowe). Zamiast ręcznie przeklejać dane z jednego miejsca w drugie, tworzymy bezpieczne skrypty (np. w Make, n8n czy Zapier), które wykonują tę pracę natychmiastowo.",
        useCases: [
            "Automatyczne fakturowanie na koniec miesiąca i wysyłka do klienta.",
            "Przesyłanie leadów z reklam FB/Google prosto do CRM z notyfikacją na Slack dla handlowca.",
            "Cykliczne, spersonalizowane raporty pobierane z baz danych i wysyłane mailowo do zarządu."
        ],
        whyItHelps: "Odzyskujesz dziesiątki, a nawet setki godzin miesięcznie. Zdejmujesz ze swojego zespołu najnudniejszą, najbardziej żmudną pracę, co radykalnie podnosi morale. Co najważniejsze, eliminujesz kosztowne błędy ludzkie (literówki, zapomniane zapytania ofertowe), zyskując proces, który działa z niezawodnością maszyny 24 godziny na dobę."
    },
    'inteligentne-narzedzia-ai': {
        title: "Inteligentne narzędzia AI (Agenci i Aplikacje)",
        subtitle: "Wdrażamy zaawansowane systemy sztucznej inteligencji, web apps oraz agentów, którzy potrafią analizować informacje i wyręczać Cię decyzyjnie.",
        whatItIs: "Okraczamy poza zwykłe, sztywne boty typu 'jeśli A to B'. Wdrażamy Agentów AI opartych o Najnowsze modele językowe (LLM), którzy potrafią wchodzić w elastyczne interakcje, rozumieć intencje, odczytywać zawiłe dokumenty, a nawet korzystać z zewnętrznych narzędzi (tzw. Agentic Workflow). Budujemy pod to dedykowane interfejsy (Aplikacje Webowe), dzięki czemu zarządzasz agentami ze swojej firmowej platformy.",
        useCases: [
            "Asystent AI analizujący długie PDF-y umów prawnych z podsumowaniem ryzyka.",
            "Bot na stronę internetową umiejący przeprowadzić pełną konwersację sprzedażową i samodzielnie umówić spotkanie w Calendly.",
            "Aplikacja webowa HR, gdzie sztuczna inteligencja wstępnie weryfikuje i ocenia CV kandydatów w ułamku sekundy."
        ],
        whyItHelps: "Twoja firma zyskuje 'niewidzialnych pracowników' z poziomem inteligencji pozwalającym na delegowanie zadań, o których wcześniej nie marzyłeś. Zwiększasz przepustowość i skalujesz zyski swojej agencji bez konieczności ryzykownych procesów rekrutacyjnych. Twój biznes staje się prawdziwie odporny i skalowalny."
    },
    'strony-internetowe-i-cyfrowa-obecnosc': {
        title: "Strony internetowe i cyfrowa obecność",
        subtitle: "Zbudujemy od podstaw dedykowane, niesamowicie szybkie wizytówki i platformy generujące leady.",
        whatItIs: "Nie korzystamy z ociężałych, atakowanych przez hakerów gotowców. Kodujemy od podstaw niesamowicie lekkie i niezawodne strony internetowe wykorzystując ekosystem Next.js i React. Skupiamy się na designie premium, minimalistycznych animacjach oraz ekstremalnej optymalizacji pod SEO i czas ładowania (Web Vitals).",
        useCases: [
            "Całkowity rebranding i nowa, zachwycająca wizytówka Agencji gotowa na reklamy.",
            "Platforma edukacyjna lub abonamentowa dla wąskiego grona klientów.",
            "Portal B2B w pełni ukierunkowany na konwersję (Lead Generation) z wbudowanymi automatyzacjami po stronie serwera."
        ],
        whyItHelps: "W ułamku sekundy wyróżniasz się na tle lokalnej konkurencji. Strona, która ładuje się błyskawicznie i wygląda profesjonalnie, podświadomie buduje gigantyczne zaufanie u klienta jeszcze przed pierwszą rozmową. Jest do tego w pełni przystosowana pod kampanie reklamowe (brak uciekającego ruchu w wyniku wolnego renderowania)."
    },
    'audyt-ai-i-mapa-transformacji': {
        title: "Audyt AI i mapa transformacji",
        subtitle: "Zbadamy obecne procesy firmowe i przygotujemy szczegółową strategię wdrożenia rozwiązań AI tam, gdzie dadzą największy ROI.",
        whatItIs: "Każda udana cyfrowa transformacja opiera się na twardych danych. Spotykamy się z Tobą (oraz liderami Twojego zespołu) i szczegółowo rozpisujemy przepływ informacji w firmie. Identyfikujemy przestoje (tzw. wąskie gardła) i układamy precyzyjny plan: co i w jakiej kolejności automatyzować krok po kroku.",
        useCases: [
            "Głęboki warsztat konsultingowy z analizą obecnego stosu technologicznego.",
            "Dokładny raport 'Wąskich Gardeł' wraz ze wskazaniem punktów najszybszego zwrotu inwestycji (Quick Wins).",
            "Harmonogram i roadmapa wdrożeń (AS-IS na TO-BE) gotowa dla zespołu deweloperskiego."
        ],
        whyItHelps: "Nie tracisz budżetu na wciskanie AI w miejsca, w których i tak niczego to nie zmieni. Otrzymujesz jasny, czytelny drogowskaz – wiesz, jaki będzie koszt, czego oczekiwać oraz – co najważniejsze – jak mierzalny zysk czy oszczędność wygeneruje zautomatyzowanie danego działu."
    }
};

export default function OfertaSlugPage({ params }) {
    const data = offerData[params.slug];

    if (!data) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg text-text-primary dark:text-white">
            <FloatingHeader />

            {/* Subpage Hero */}
            <section className="pt-32 pb-20 bg-gray-light dark:bg-[#1A1A1A] border-b border-gray-border dark:border-white/10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/5 to-transparent pointer-events-none"></div>
                <div className="container-padding max-w-4xl relative z-10 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <Link href="/oferta" className="inline-flex items-center text-accent-500 font-bold text-sm tracking-widest uppercase mb-8 hover:text-accent-600 transition-colors">
                        ← Wróć do Usług
                    </Link>
                    <h1 className="heading-serif text-h1 md:text-[56px] leading-tight mb-6">{data.title}</h1>
                    <p className="font-body text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>
            </section>

            {/* What it is */}
            <section className="py-24 bg-white dark:bg-dark-bg border-b border-gray-border dark:border-white/10">
                <div className="container-padding max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
                        <div className="md:w-1/3 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                            <h2 className="heading-serif text-3xl font-bold border-l-4 border-accent-500 pl-4 py-1">
                                Na czym to polega?
                            </h2>
                        </div>
                        <div className="md:w-2/3 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
                            <p className="font-body text-lg text-text-secondary leading-relaxed">
                                {data.whatItIs}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use cases */}
            <section className="py-24 bg-gray-light dark:bg-[#1A1A1A]">
                <div className="container-padding max-w-5xl">
                    <div className="text-center mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                        <h2 className="heading-serif text-3xl md:text-4xl text-text-primary dark:text-white">
                            Przykłady zastosowań
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.useCases.map((useCase, idx) => (
                            <div key={idx} className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
                                <Card variant="standard" className="h-full group hover:border-accent-500 transition-colors">
                                    <div className="w-10 h-10 bg-accent-500/10 text-accent-500 rounded flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                                        {idx + 1}
                                    </div>
                                    <p className="font-body text-text-primary dark:text-white font-medium leading-relaxed">
                                        {useCase}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why it helps */}
            <section className="py-24 bg-white dark:bg-dark-bg text-center border-b border-gray-border dark:border-white/10">
                <div className="container-padding max-w-4xl opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <div className="inline-block w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center text-3xl mb-8 mx-auto -mt-4 ring-8 ring-accent-500/20">
                        ⚡
                    </div>
                    <h2 className="heading-serif text-3xl md:text-4xl leading-tight mb-8">
                        Dlaczego to pomaga biznesowi?
                    </h2>
                    <p className="font-body text-xl text-text-secondary leading-relaxed mb-12">
                        {data.whyItHelps}
                    </p>
                    <Link href="/kontakt" className="btn-primary inline-flex scale-110 shadow-medium">
                        Porozmawiajmy o tym rozwiązaniu
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
