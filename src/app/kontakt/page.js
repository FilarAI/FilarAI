import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Mail, Phone, Instagram, Calendar, FileText, MessageCircle } from 'lucide-react';

export const metadata = {
    title: 'Kontakt | Filar AI',
    description: 'Skontaktuj się z nami i umów się na bezpłatną konsultację.',
};

export default function KontaktPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg text-text-primary dark:text-white flex flex-col">
            <Header />

            <section className="pt-20 md:pt-32 pb-16 md:pb-24 flex-grow">
                <div className="container-padding max-w-5xl">
                    {/* Header */}
                    <div className="text-center mb-16 md:mb-24 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                        <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em]">
                            Porozmawiajmy
                        </span>
                        <h1 className="heading-serif text-h1 mb-6">Skontaktuj się z nami</h1>
                        <p className="font-body text-text-secondary dark:text-gray-secondary text-xl max-w-2xl mx-auto leading-relaxed">
                            Wybierz najwygodniejszą dla siebie formę kontaktu. Jesteśmy tu, aby odpowiedzieć na Twoje pytania i pomóc w optymalizacji Twojego biznesu.
                        </p>
                    </div>

                    {/* Direct Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
                        {/* Email */}
                        <a href="mailto:kontakt@filar-ai.pl" className="flex flex-col items-center text-center p-6 bg-gray-light dark:bg-[#1A1A1A] rounded-xl border border-gray-border dark:border-white/10 hover:border-accent-500 dark:hover:border-accent-500 transition-colors group">
                            <div className="w-14 h-14 bg-white dark:bg-dark-bg rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-subtle text-accent-500 border border-gray-border dark:border-white/10">
                                <Mail size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-1">E-mail</h3>
                            <p className="text-gray-text text-sm">kontakt@filar-ai.pl</p>
                        </a>

                        {/* Phone */}
                        <a href="tel:+48123456789" className="flex flex-col items-center text-center p-6 bg-gray-light dark:bg-[#1A1A1A] rounded-xl border border-gray-border dark:border-white/10 hover:border-accent-500 dark:hover:border-accent-500 transition-colors group">
                            <div className="w-14 h-14 bg-white dark:bg-dark-bg rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-subtle text-accent-500 border border-gray-border dark:border-white/10">
                                <Phone size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-1">Telefon</h3>
                            <p className="text-gray-text text-sm">+48 123 456 789</p>
                        </a>

                        {/* WhatsApp */}
                        <a href="https://wa.me/48123456789" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center p-6 bg-gray-light dark:bg-[#1A1A1A] rounded-xl border border-gray-border dark:border-white/10 hover:border-accent-500 dark:hover:border-accent-500 transition-colors group">
                            <div className="w-14 h-14 bg-white dark:bg-dark-bg rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-subtle text-accent-500 border border-gray-border dark:border-white/10">
                                <MessageCircle size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                            <p className="text-gray-text text-sm">Szybka wiadomość</p>
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com/filar.ai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center p-6 bg-gray-light dark:bg-[#1A1A1A] rounded-xl border border-gray-border dark:border-white/10 hover:border-accent-500 dark:hover:border-accent-500 transition-colors group">
                            <div className="w-14 h-14 bg-white dark:bg-dark-bg rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-subtle text-accent-500 border border-gray-border dark:border-white/10">
                                <Instagram size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-1">Instagram</h3>
                            <p className="text-gray-text text-sm">@filar.ai</p>
                        </a>
                    </div>

                    {/* Action Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
                        {/* Form Card */}
                        <div className="card-default group hover:border-accent-500 dark:hover:border-accent-500 flex flex-col h-full bg-white dark:bg-[#1A1A1A]">
                            <div className="p-8 md:p-10 flex flex-col flex-grow items-start">
                                <div className="w-16 h-16 bg-accent-50 dark:bg-accent-500/10 rounded-2xl flex items-center justify-center text-accent-500 mb-8 group-hover:scale-105 transition-transform">
                                    <FileText size={32} />
                                </div>
                                <h3 className="heading-serif text-3xl font-bold mb-4">Wyślij zapytanie</h3>
                                <p className="font-body text-text-secondary dark:text-gray-secondary text-lg leading-relaxed mb-8 flex-grow">
                                    Opisz krótko swój projekt, wyzwanie lub problem za pomocą naszego formularza kontaktowego. Skontaktujemy się z Tobą najszybciej jak to możliwe z dopasowaną ofertą.
                                </p>
                                <a href="mailto:kontakt@filar-ai.pl?subject=Rozmowa z Filar AI - formularz kontaktowy" className="btn-secondary w-full md:w-auto text-center">
                                    Przejdź do formularza
                                </a>
                            </div>
                        </div>

                        {/* Calendar Card */}
                        <div className="card-accent group flex flex-col h-full bg-gray-light dark:bg-[#1A1A1A] relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute right-0 top-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-colors duration-700 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

                            <div className="p-8 md:p-10 flex flex-col flex-grow items-start relative z-10">
                                <div className="w-16 h-16 bg-accent-500 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform shadow-medium">
                                    <Calendar size={32} />
                                </div>
                                <h3 className="heading-serif text-3xl font-bold mb-4">Zarezerwuj spotkanie</h3>
                                <p className="font-body text-text-secondary dark:text-gray-secondary text-lg leading-relaxed mb-8 flex-grow">
                                    Wybierz dogodny dla siebie termin w naszym kalendarzu na szybką, 30-minutową i bezpłatną konsultację strategiczną online.
                                </p>
                                <a href="https://calendar.app.google/oxdocXuk5a2ohKZf9" target="_blank" rel="noopener noreferrer" className="btn-primary w-full md:w-auto text-center shadow-[0_0_20px_rgba(255,27,109,0.2)] group-hover:shadow-[0_0_30px_rgba(255,27,109,0.4)]">
                                    Wybierz termin
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
