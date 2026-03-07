export const ClientLogos = () => {
    const logos = [
        { name: "Company 1", content: "LOGO 1" },
        { name: "Company 2", content: "LOGO 2" },
        { name: "Company 3", content: "LOGO 3" },
        { name: "Company 4", content: "LOGO 4" },
        { name: "Company 5", content: "LOGO 5" },
        { name: "Company 6", content: "LOGO 6" },
    ];

    return (
        <section className="py-12 bg-white dark:bg-dark-bg border-b border-gray-border dark:border-white/10">
            <div className="container-padding max-w-[1200px]">
                <p className="text-center text-sm font-medium text-gray-text uppercase tracking-widest mb-8">
                    Zaufali nam liderzy swoich branż
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
                    {logos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer text-text-primary dark:text-white font-display font-bold text-xl select-none"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {logo.content}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
