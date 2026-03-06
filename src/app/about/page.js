import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/Card';

export const metadata = {
    title: "O Nas - Filar AI",
    description: "Kim jesteśmy, w co wierzymy i jakie kompetencje stawiamy do dyspozycji Twojej agencji.",
};

export default function AboutPage() {
    const values = [
        { title: "Szybkość", desc: "Czas to jedyny nieodnawialny zasób. Skracamy projektowanie złożonych systemów z kwartałów do zaledwie kilku tygodni.", icon: "⚡" },
        { title: "Zaangażowanie", desc: "Zależy nam na rezultatach. Bez wahania powiemy 'nie', jeśli rozwiązanie będzie w naszej ocenie nierentowne dla Twojej agencji.", icon: "🤝" },
        { title: "Pasja", desc: "Technologia to nasz żywioł. Stale badamy najnowsze modele byś Ty zawsze otrzymywał rozwiązania, które dają przewagę nad konkurencją.", icon: "🔥" },
        { title: "Doświadczenie", desc: "Uczyliśmy się na realnych wdrożeniach, a nie w teorii. Lata praktyki pomagają nam unikać bolesnych błędów organizacyjnych.", icon: "🎓" },
    ];

    const skills = ["Automatyzacja", "AI / LLM", "Next.js & React", "Python", "NoCode / LowCode", "Systemy CRM"];

    return (
        <main className="min-h-screen bg-white text-text-primary overflow-x-hidden">
            <Header />

            {/* Hero Section About */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white border-b border-gray-border text-center relative">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-light to-white pointer-events-none"></div>
                <div className="container-padding max-w-4xl relative z-10 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <h1 className="heading-serif text-h1 md:text-[56px] leading-tight mb-6">Poznaj Filar AI</h1>
                    <p className="font-body text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Pasja, technologia i transparentność u progu nowej, zautomatyzowanej rzeczywistości w biznesie B2B.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-white border-b border-gray-border">
                <div className="container-padding flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                    <div className="md:w-1/2 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                        <h2 className="heading-serif text-3xl md:text-4xl mb-6">Historia twórcy</h2>
                        <div className="space-y-6 font-body text-lg text-text-secondary leading-relaxed">
                            <p>Zawsze uważałem, że rutynowe ręczne przeklikiwanie informacji, tworzenie tych samych e-maili i ręczne zarządzanie grafikiem jest stratą ogromnego ludzkiego potencjału twórczego.</p>
                            <p>Rozpoczynałem swoją przygodę ucząc się przez wielokrotne błędy i wdrażając dziesiątki prototypów, testów na małą i dużą skalę. Odkryłem w automatyzacji fascynujący nowy obszar techniczny, ale przede wszystkim – ogromną ulgę, jaką daje ona przeciążonym pracownikom i managerom.</p>
                            <p>Dziś Filar AI to obietnica partnerstwa, która w samym sercu utrzymuje niezawodność najnowszych rozwiązań Agentic Workflow.</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
                        <div className="aspect-[3/4] max-h-[600px] w-full bg-gray-border rounded-xl shadow-strong flex items-center justify-center text-text-secondary font-display font-bold text-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-dark-bg/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            PHOTO: Kacper Filar
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gray-light">
                <div className="container-padding">
                    <h2 className="heading-serif text-3xl md:text-4xl text-center mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">Cztery fundamenty</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((val, idx) => (
                            <div key={idx} className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.15}s` }}>
                                <Card variant="standard" className="h-full group hover:border-accent-500 border-gray-border">
                                    <div className="w-12 h-12 bg-white border border-gray-border text-text-primary rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 group-hover:border-accent-500 group-hover:text-accent-500 transition-all duration-300">
                                        {val.icon}
                                    </div>
                                    <h3 className="heading-serif text-xl font-bold mb-3">{val.title}</h3>
                                    <p className="font-body text-gray-text text-[15px] leading-relaxed">{val.desc}</p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise & Skills */}
            <section className="py-24 bg-white border-y border-gray-border text-center">
                <div className="container-padding opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <h2 className="heading-serif text-3xl mb-12">Kompetencje techniczne</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        {skills.map((skill, idx) => (
                            <span key={idx} className="px-6 py-3 bg-gray-light text-text-primary font-bold font-body rounded-full border border-gray-border hover:border-accent-500 hover:text-accent-500 transition-colors shadow-sm cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
