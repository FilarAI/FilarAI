import { TimelineStep } from '../ui/TimelineStep';

export const HowItWorks = () => {
    const steps = [
        { number: "1", title: "Discovery Call", desc: "Podczas krótkiej rozmowy poznamy Twoją agencję, cele biznesowe oraz największe wyzwania operacyjne." },
        { number: "2", title: "Custom System Design", desc: "Projektujemy i budujemy dedykowany ekosystem AI docelowo zoptymalizowany pod Twoje specyficzne procesy." },
        { number: "3", title: "Launch & Support", desc: "Uruchamiamy gotowe rozwiązanie, przeprowadzamy szkolenie i zapewniamy pełne wsparcie powdrożeniowe." }
    ];

    return (
        <section className="section-spacing bg-gray-light">
            <div className="container-padding max-w-[800px]">
                <div className="text-center mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em] border-b-2 border-accent-500 pb-1 inline-block mx-auto">
                        Proces
                    </span>
                    <h2 className="heading-serif text-h2 md:text-[42px] leading-tight">
                        Zacznij działać w 4 tygodnie
                    </h2>
                </div>

                <div className="relative mt-12">
                    {steps.map((step, idx) => (
                        <div key={idx} className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.15 + 0.2}s` }}>
                            <TimelineStep
                                stepNumber={step.number}
                                title={step.title}
                                description={step.desc}
                                isLast={idx === steps.length - 1}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
