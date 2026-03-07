export const Expertise = () => {
    const reasons = [
        { title: "Szybkość", desc: "Zawsze dowozimy projekty na czas. Niezależnie od skali, dostarczamy gotowy system w 1-2 tygodnie, oszczędzając miesiące prac." },
        { title: "Zaangażowanie", desc: "Podchodzimy z pełną szczerością i pasją do każdego biznesu. Mówimy jasno co jest technicznie możliwe i co przyniesie największe ROI." },
        { title: "Pasja", desc: "Fascynuje nas to co robimy. Stale innowujemy i testujemy najnowsze rozwiązania by uczyć innych jak mogą zaadoptować się na rynku." },
        { title: "Doświadczenie", desc: "Godziny na budowie i wdrażaniu w prawdziwych scenariuszach życiowych przekładają się na mierzalne rezultaty w Twojej firmie." }
    ];

    return (
        <section className="section-spacing bg-white dark:bg-dark-bg border-y border-gray-border dark:border-white/10">
            <div className="container-padding flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                {/* Left Col - Context / Story */}
                <div className="lg:w-1/3 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em]">
                        O Nas
                    </span>
                    <h2 className="heading-serif text-h2 md:text-[36px] mb-6 leading-tight">
                        I can finally focus on building client relationships...
                    </h2>
                    <p className="text-secondary text-base leading-relaxed mb-8">
                        Moim celem jest zdjęcie z Agencji ciężaru zadań administracyjnych i pozwolenie Wam skupić się na tym, co naprawdę się liczy – skalowaniu i budowaniu relacji, podczas gdy AI zajmuje się całą resztą.
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gray-border flex items-center justify-center overflow-hidden">
                            <span className="text-gray-text font-bold text-sm">FOT</span>
                            {/* <img src="/avatar.jpg" alt="Kacper Filar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" /> */}
                        </div>
                        <div>
                            <p className="font-bold text-text-primary dark:text-white text-lg">Kacper Filar</p>
                            <p className="text-sm text-gray-text uppercase tracking-wider">Filar AI Founder</p>
                        </div>
                    </div>
                </div>

                {/* Right Col - 4 Reasons Grid */}
                <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {reasons.map((reason, idx) => (
                            <div key={idx} className="flex gap-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.15 + 0.2}s` }}>
                                <div className="w-8 h-8 rounded shrink-0 bg-accent-500/10 text-accent-500 flex items-center justify-center font-bold text-lg mt-1">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="heading-serif font-bold text-xl mb-2">{reason.title}</h4>
                                    <p className="text-secondary text-base leading-relaxed">{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
