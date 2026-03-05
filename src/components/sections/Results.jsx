import { StatCard } from '../ui/StatCard';

export const Results = () => {
    const stats = [
        { value: "10", label: "Godzin oszczędzonych/tydzień", desc: "Czas zaoszczędzony na powtarzalnych zadaniach dzięki automatyzacji." },
        { value: "15-20%", label: "Wzrost przychodów", desc: "Zwiększenie rentowności dzięki optymalizacji procesów biznesowych." },
        { value: "40%", label: "Redukcja no-shows", desc: "Zminimalizowanie liczby nieobecności klientów dzięki systemom." },
        { value: "95%", label: "Zadowolenie klientów", desc: "Lepsza komunikacja i szybsza obsługa budują lojalność." }
    ];

    return (
        <section id="results" className="py-16 md:py-24 px-4 md:px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-heading text-[28px] md:text-[36px] text-[#0F1B3C] font-bold opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    Real Results from Real Clients
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
                        <StatCard
                            value={stat.value}
                            label={stat.label}
                            description={stat.desc}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
