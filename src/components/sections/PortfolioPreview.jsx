export const PortfolioPreview = () => {
    const projects = [
        { title: "System CRM z AI", category: "Agentic Workflow", imgPlaceholder: "CRM" },
        { title: "Automatyczny Kalendarz", category: "Automatyzacja", imgPlaceholder: "KAL" },
        { title: "Aplikacja dla Gabinetu", category: "Web App", imgPlaceholder: "APP" }
    ];

    return (
        <section className="section-spacing bg-gray-light dark:bg-[#1A1A1A] border-y border-gray-border dark:border-white/10">
            <div className="container-padding">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <div>
                        <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em] border-l-2 border-accent-500 pl-4 py-1">
                            Portfolio
                        </span>
                        <h2 className="heading-serif text-h2 md:text-[42px] leading-tight">
                            Sprawdź co robimy
                        </h2>
                    </div>
                    <a href="/portfolio" className="hidden md:inline-flex items-center text-text-primary dark:text-white border-b-2 border-transparent hover:border-accent-500 hover:text-accent-500 transition-all duration-300 font-bold pb-1">
                        Więcej prac <span className="ml-2">→</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="group cursor-pointer opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.15}s` }}>
                            <div className="w-full aspect-video bg-white dark:bg-dark-bg border border-gray-border dark:border-white/10 rounded-lg mb-6 overflow-hidden relative shadow-subtle group-hover:shadow-medium transition-shadow duration-300">
                                {/* Image Placeholder */}
                                <div className="w-full h-full flex items-center justify-center text-4xl text-gray-secondary font-display font-bold group-hover:scale-105 transition-transform duration-500">
                                    {proj.imgPlaceholder}
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-dark-bg/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        Zobacz Detale
                                    </span>
                                </div>
                            </div>

                            <h3 className="heading-serif font-bold text-xl mb-1 group-hover:text-accent-500 transition-colors">{proj.title}</h3>
                            <p className="font-body text-gray-text text-sm uppercase tracking-wider">{proj.category}</p>
                        </div>
                    ))}
                </div>

                <div className="md:hidden text-center opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
                    <a href="/portfolio" className="btn-secondary w-full">Więcej prac</a>
                </div>

            </div>
        </section>
    );
};
