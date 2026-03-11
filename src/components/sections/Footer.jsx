"use client";

import { Button } from '../ui/Button';
import { FormInput } from '../ui/FormInput';
import { SocialIcons } from '../ui/SocialIcons';

export const Footer = ({ hideCTA = false }) => {
    return (
        <footer className="bg-dark-bg text-white pt-24 pb-12 overflow-hidden border-t-[8px] border-accent-500">
            <div className="container-padding max-w-[1200px]">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 items-start">

                    <div className="lg:col-span-12 flex flex-col items-center text-center opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                        {hideCTA ? null : (
                            <>
                                <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em]">
                                    Rozpocznij transformację
                                </span>
                                <h2 className="heading-serif text-h2 md:text-[48px] font-bold mb-6 leading-tight max-w-2xl">
                                    Gotów na transformację Twojej agencji?
                                </h2>
                                <p className="font-body text-gray-secondary text-lg mb-10 max-w-md">
                                    Porozmawiajmy o tym, co możemy zautomatyzować. Bez zobowiązań, bez agresywnej sprzedaży. Tylko czysta wartość dla Twojego biznesu.
                                </p>

                                <Button variant="primary" href="/kontakt" className="mb-12 py-4 px-8 text-lg">
                                    Zaplanuj bezpłatną konsultację
                                </Button>

                                <div className="w-full max-w-2xl h-px bg-white dark:bg-dark-bg/10 mb-8" />
                            </>
                        )}

                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center">
                            <div className="flex flex-col gap-3 font-body text-gray-secondary text-center sm:text-left">
                                <a href="tel:+48534458418" className="hover:text-accent-500 transition-colors font-medium tabular-nums">+48 534 458 418</a>
                                <a href="mailto:kacperfilarkontakt@gmail.com" className="hover:text-accent-500 transition-colors font-medium">kacperfilarkontakt@gmail.com</a>
                            </div>
                            <SocialIcons className="text-white opacity-80" size="24" />
                        </div>
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
