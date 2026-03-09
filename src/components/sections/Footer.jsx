"use client";

import { Button } from '../ui/Button';
import { FormInput } from '../ui/FormInput';
import { SocialIcons } from '../ui/SocialIcons';

export const Footer = () => {
    return (
        <footer className="bg-dark-bg text-white pt-24 pb-12 overflow-hidden border-t-[8px] border-accent-500">
            <div className="container-padding max-w-[1200px]">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 items-start">

                    {/* Left Column (Info & CTA) */}
                    <div className="lg:col-span-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                        <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em]">
                            Rozpocznij transformację
                        </span>
                        <h2 className="heading-serif text-h2 md:text-[48px] font-bold mb-6 leading-tight">
                            Gotów na transformację Twojej agencji?
                        </h2>
                        <p className="font-body text-gray-secondary text-lg mb-10 max-w-md">
                            Porozmawiajmy o tym, co możemy zautomatyzować. Bez zobowiązań, bez agresywnej sprzedaży. Tylko czysta wartość dla Twojego biznesu.
                        </p>

                        <Button variant="primary" href="/kontakt" className="mb-12 py-4 px-8 text-lg">
                            Zaplanuj bezpłatną konsultację
                        </Button>

                        <div className="w-full h-px bg-white dark:bg-dark-bg/10 mb-8" />

                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                            <div className="flex flex-col gap-3 font-body text-gray-secondary">
                                <a href="tel:+48534458418" className="hover:text-accent-500 transition-colors font-medium tabular-nums">+48 534 458 418</a>
                                <a href="mailto:kacperfilarkontakt@gmail.com" className="hover:text-accent-500 transition-colors font-medium">kacperfilarkontakt@gmail.com</a>
                            </div>
                            <SocialIcons className="text-white opacity-80" size="24" />
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:col-span-1" />

                    {/* Right Column (Contact Form) */}
                    <div className="lg:col-span-5 bg-white dark:bg-dark-bg rounded-xl p-8 shadow-xl opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] relative">
                        {/* Soft shadow effect behind form */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-accent-500/20 to-transparent blur-xl -z-10 rounded-xl"></div>

                        <h3 className="heading-serif text-3xl font-bold text-text-primary dark:text-white mb-2">Napisz do nas</h3>
                        <p className="text-secondary text-sm mb-8">Odpowiadamy w ciągu 24 godzin.</p>

                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            <FormInput id="name" label="Imię i nazwisko" required />
                            <FormInput id="email" type="email" label="Adres e-mail" required />

                            <div className="flex flex-col gap-2 w-full">
                                <label className="font-body text-sm font-medium text-text-primary dark:text-white">Kategoria biznesu</label>
                                <select className="w-full bg-white dark:bg-dark-bg border-2 border-gray-border dark:border-white/10 rounded px-4 py-3 font-body text-text-primary dark:text-white focus:outline-none focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 transition-all duration-300">
                                    <option>Salon / Spa</option>
                                    <option>Klinika Medyczna</option>
                                    <option>Agencja / Software House</option>
                                    <option>Inny model rezerwacyjny</option>
                                </select>
                            </div>

                            <FormInput id="message" type="textarea" label="Jak możemy Ci pomóc?" required />

                            <button type="submit" className="btn-primary w-full mt-4 justify-center py-4 bg-text-primary hover:bg-black">
                                Wyślij wiadomość
                            </button>
                        </form>
                    </div>

                </div>

                {/* Copyright Footer */}
                <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-gray text-sm font-body opacity-60">
                    <p>© 2026 Filar AI (Kacper Filar). Wszelkie prawa zastrzeżone.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
                        <a href="#" className="hover:text-white transition-colors">Regulamin</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
