import { Card } from '../ui/Card';

export const Problem = () => {
    const painPoints = [
        { title: "Time wasted", description: "Hours lost on scheduling, reminders, and confirmations." },
        { title: "Revenue Lost", description: "No-shows costing 15-25% of potential revenue." },
        { title: "Missed Opportunities", description: "Can't upsell easily due to scattered client data." },
        { title: "Manual Errors", description: "Double bookings and poor client experience." }
    ];

    return (
        <section id="problem" className="py-16 md:py-24 px-4 md:px-6 lg:px-10 max-w-[1440px] mx-auto bg-[#FFFFFF]">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="font-heading text-[28px] md:text-[36px] text-[#0F1B3C] font-bold opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    You're Great at What You Do. But Is Your Business Running You?
                </h2>
            </div>

            {/* Grid: 1 col mobile, 2 tablet, 4 desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {painPoints.map((point, idx) => (
                    <div key={idx} className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
                        <Card variant="standard" className="h-full">
                            <div className="w-12 h-12 bg-[#F1F5F9] rounded-full mb-4 flex items-center justify-center text-[#0F1B3C] font-bold">!</div>
                            <h3 className="font-heading text-[20px] font-bold text-[#0F1B3C] mb-2">{point.title}</h3>
                            <p className="font-body text-[#64748B] text-[16px] leading-[1.6]">{point.description}</p>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};
