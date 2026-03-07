import { Card } from '../ui/Card';

export const Benefits = () => {
    const benefits = [
        { title: "Oszczędzaj czas", description: "Zautomatyzuj powtarzalne procesy i zyskaj cenne godziny, które możesz przeznaczyć na rozwój swojego biznesu.", icon: "⚡" },
        { title: "Zwiększaj przychody", description: "Minimalizuj straty z powodu odwołanych wizyt i optymalizuj działania, podnosząc realne zyski swojej firmy.", icon: "📈" },
        { title: "Skaluj biznes", description: "Rozwijaj firmę bez konieczności zwiększania zatrudnienia do zadań administracyjnych.", icon: "🚀" }
    ];

    return (
        <section className="section-spacing bg-white dark:bg-dark-bg border-t border-gray-border dark:border-white/10">
            <div className="container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
                            <Card variant="standard" className="text-center h-full flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-light dark:bg-[#1A1A1A] rounded-full flex items-center justify-center text-2xl mb-6 shadow-subtle group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="heading-serif text-h3 mb-3">{benefit.title}</h3>
                                <p className="text-secondary text-base leading-relaxed">{benefit.description}</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
