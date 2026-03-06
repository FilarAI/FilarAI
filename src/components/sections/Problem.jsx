export const Problem = () => {
    const problems = [
        { number: "30h", label: "tracone średnio w miesiącu na rutynowe zadania", title: "Nadmiar administracji" },
        { number: "40%", label: "przychodu przepada przez nieefektywność", title: "Brak optymalizacji" },
        { number: "15%", label: "mniej odwołanych spotkań dzięki sztucznej inteligencji", title: "Niezadowoleni klienci" }
    ];

    return (
        <section className="section-dark relative text-white">
            <div className="container-padding">

                <div className="mb-16 flex flex-col md:flex-row gap-8 items-start justify-between opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <div className="md:w-1/2">
                        <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em] border-l-2 border-accent-500 pl-4 py-1">
                            Wyzwanie
                        </span>
                        <h2 className="heading-serif text-h2 md:text-[48px] text-white leading-tight">
                            Twoja agencja czeka na rozwój
                        </h2>
                    </div>
                    <div className="md:w-1/2">
                        <p className="font-body text-gray-secondary text-lg leading-relaxed">
                            Zbyt wiele czasu tracisz na rutynowe obowiązki, powtarzane e-maile i manualną organizację danych, zamiast skupić się na budowaniu relacji i strategii na przód.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 border-t border-gray-dark pt-16">
                    {problems.map((prob, idx) => (
                        <div key={idx} className="flex flex-col opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.15}s` }}>
                            <div className="w-12 h-12 rounded-full bg-accent-500/10 text-accent-500 flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </div>
                            <h3 className="font-display text-[64px] font-bold text-white leading-none mb-2">{prob.number}</h3>
                            <h4 className="font-display font-semibold text-xl mb-2 text-white mt-4">{prob.title}</h4>
                            <p className="font-body text-gray-secondary text-sm">{prob.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
