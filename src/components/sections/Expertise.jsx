export const Expertise = () => {
    const credentials = "Posiadam 2 lata doświadczenia jako certyfikowany specjalista do spraw automatyzacji AI oraz budowy profesjonalnych rozwiązań technologicznych.";

    const reasons = [
        { title: "Szybkość", desc: "Działamy szybko. Niezależnie od projektu, realizujemy go w 1-2 tygodnie, a nie miesiące." },
        { title: "Zaangażowanie", desc: "Chcemy robić rzeczy najlepiej. Jeśli coś wymaga więcej czasu, mówimy szczerze. Jesteśmy zaangażowani i szczerzy." },
        { title: "Pasja", desc: "Pasjonują nas te usługi. Stale poszerzamy horyzonty, uczymy się nowych rzeczy, adaptujemy się do rynku i nauczamy innych jak adaptować się do zmian." },
        { title: "Doświadczenie", desc: "Godziny spędzone na budowie, nauce, wdrażaniu rzeczy w prawdziwe życie, kursy, praktyka - wszystko to daje nam wiedzę i umiejętności." }
    ];

    return (
        <section id="expertise" className="bg-[#FFFFFF] py-16 md:py-24 px-4 md:px-6 lg:px-10 border-t border-[#E2E8F0]">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
                <div className="lg:w-1/3 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <h2 className="font-heading text-[28px] md:text-[36px] text-[#0F1B3C] font-bold mb-6">Who You're Working With</h2>
                    <p className="font-body text-[#64748B] text-[16px] leading-[1.6] mb-8">{credentials}</p>

                    {/* Placeholder Photo */}
                    <div className="w-full aspect-square bg-[#F1F5F9] rounded-lg border border-[#E2E8F0] flex items-center justify-center">
                        <span className="text-[#64748B] font-medium">Kacper Filar</span>
                    </div>
                </div>

                <div className="lg:w-2/3">
                    <h3 className="font-heading text-[24px] text-[#0F1B3C] font-bold mb-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">Why Choose Us</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reasons.map((reason, idx) => (
                            <div key={idx} className="flex flex-col gap-2 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.15 + 0.2}s` }}>
                                <div className="w-10 h-10 rounded bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center font-bold mb-2">✓</div>
                                <h4 className="font-heading text-[20px] text-[#0F1B3C] font-bold">{reason.title}</h4>
                                <p className="font-body text-[#64748B] text-[16px] leading-[1.6]">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
