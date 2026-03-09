import { Card } from '../ui/Card';

export const Testimonials = () => {
    const testimonials = [
        { text: "Niesamowite jak AI potrafi zaoszczędzić na etatach administracyjnych. System Filar AI sprawił, że przestałem martwić się o kalendarz.", name: "Jan Kowalski", company: "Klinika Medyczna", initial: "J" },
        { text: "Automatyczne przypomnienia i odzyskiwanie porzuconych rezerwacji obniżyło nam no-show o 60% w pierwszym miesiącu.", name: "Anna Nowak", company: "Salon Urody", initial: "A" },
        { text: "Wszystko jest wreszcie w jednym miejscu. Nasi pracownicy uwielbiają nowy system, a ja mam jasne raporty na koniec dnia.", name: "Marek Wiśniewski", company: "Booking Agency", initial: "M" }
    ];

    return (
        <section className="section-spacing bg-white dark:bg-dark-bg">
            <div className="container-padding">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <div>
                        <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em] border-l-2 border-accent-500 pl-4 py-1">
                            Opinie
                        </span>
                        <h2 className="heading-serif text-h2 md:text-[42px] leading-tight">
                            Co mówią klienci
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test, idx) => (
                        <div key={idx} className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.15}s` }}>
                            <Card variant="standard" className="h-full flex flex-col relative pt-12">
                                {/* Quotation Mark Icon overlay */}
                                <div className="absolute top-6 left-6 text-6xl font-display text-gray-border leading-none opacity-50">"</div>

                                <p className="font-display text-lg italic text-text-primary dark:text-white mb-8 relative z-10 flex-grow font-medium leading-relaxed">
                                    {test.text}
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-border dark:border-white/10/50">
                                    <div className="w-12 h-12 rounded-full bg-dark-bg text-white flex items-center justify-center font-bold font-display">
                                        {test.initial}
                                    </div>
                                    <div>
                                        <p className="font-bold text-text-primary dark:text-white text-base">{test.name}</p>
                                        <p className="text-sm text-gray-text">{test.company}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
