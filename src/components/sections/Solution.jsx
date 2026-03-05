import { Card } from '../ui/Card';

export const Solution = () => {
    const services = [
        { title: "Budowa Automatyzacji", description: "Łączenie ze sobą systemów, automatyzowanie powtarzalnych czynności." },
        { title: "Agentic Workflow", description: "Bardziej zaawansowane automatyzacje, które same myślą, same się naprawiają." },
        { title: "Budowa Web Appów Customowych", description: "Łączenie różnych aplikacji w jedną całość, tworzenie dashboardów." },
        { title: "Budowa Stron Internetowych", description: "Nowoczesne, responsywne i profesjonalne strony gotowe do reklam i automatyzacji." }
    ];

    return (
        <section id="solution" className="bg-[#0F1B3C] py-16 md:py-24 px-4 md:px-6 lg:px-10">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-heading text-[28px] md:text-[36px] text-[#FFFFFF] font-bold opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                        Our AI-Powered Solutions
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
                            <Card variant="accent" className="bg-transparent border-[#06B6D4] text-[#FFFFFF] h-full flex flex-col">
                                <h3 className="font-heading text-[20px] font-bold mb-3">{service.title}</h3>
                                <p className="font-body text-[#F1F5F9] opacity-90 text-[16px] leading-[1.6] flex-grow">{service.description}</p>
                                <div className="mt-6">
                                    <span className="text-[#06B6D4] font-medium hover:text-[#FFFFFF] transition-colors cursor-pointer flex items-center gap-2">
                                        Learn More <span>→</span>
                                    </span>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
