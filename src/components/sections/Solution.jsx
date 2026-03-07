import { Card } from '../ui/Card';

export const Solution = () => {
    const services = [
        { title: "Budowa Automatyzacji", description: "Łączenie i automatyzowanie systemów firmowych. Pozwól technologii wykonywać powtarzalne czynności za Twój zespół." },
        { title: "Agentic Workflow", description: "Wdrażanie zaawansowanych systemów AI, które samodzielnie analizują dane, podejmują decyzje i rozwiązują problemy." },
        { title: "Web App Customowe", description: "Dedykowane aplikacje i panele integrujące różne narzędzia w jeden przejrzysty ekosystem operacyjny." },
        { title: "Strony Internetowe", description: "Nowoczesne, responsywne i profesjonalne wizytówki gotowe na reklamy oraz zintegrowane z automatyzacjami." }
    ];

    return (
        <section className="section-spacing bg-white dark:bg-dark-bg border-t border-gray-border dark:border-white/10">
            <div className="container-padding max-w-[1000px]">
                <div className="text-center mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em]">
                        Usługi
                    </span>
                    <h2 className="heading-serif text-h2 md:text-[42px] leading-tight">
                        Rozwiązania na miarę Twoich potrzeb
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.15}s` }}>
                            <Card variant="standard" className="h-full flex flex-col group hover:border-accent-500 hover:shadow-medium border-gray-border dark:border-white/10">
                                <div className="w-12 h-12 bg-gray-light dark:bg-[#1A1A1A] rounded-lg flex items-center justify-center text-text-primary dark:text-white mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <h3 className="heading-serif text-h3 mb-3">{service.title}</h3>
                                <p className="text-secondary text-base leading-relaxed flex-grow">{service.description}</p>
                                <div className="mt-8">
                                    <a href="/oferta" className="inline-flex items-center text-accent-500 font-semibold hover:text-accent-600 transition-colors">
                                        Dowiedz się więcej
                                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
