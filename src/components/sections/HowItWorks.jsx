import { TimelineStep } from '../shared/TimelineStep';

export const HowItWorks = () => {
    const steps = [
        { number: "1", title: "Discovery Call", desc: "We learn about your business, goals, and specific pain points." },
        { number: "2", title: "Custom System Design", desc: "We design and build an AI automation system specifically tailored for you." },
        { number: "3", title: "Launch & Support", desc: "Your system goes live. We provide comprehensive training and ongoing support." }
    ];

    return (
        <section id="process" className="py-16 md:py-24 px-4 md:px-6 lg:px-10 bg-[#F1F5F9]">
            <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-[28px] md:text-[36px] text-[#0F1B3C] font-bold opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                        Get Started in 4 Weeks
                    </h2>
                </div>

                <div className="relative">
                    {steps.map((step, idx) => (
                        <div key={idx} className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.15}s` }}>
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
