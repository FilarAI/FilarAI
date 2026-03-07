"use client";

import { useState } from 'react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { label: "Rozwiązania", href: "/oferta" },
        { label: "O nas", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-dark-bg border-b border-gray-border dark:border-white/10 w-full transition-all duration-300">
            <div className="container-padding h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    {/* Logo Hexagon placeholder */}
                    <div className="w-10 h-10 bg-dark-bg text-white flex items-center justify-center font-bold text-xl rounded">F</div>
                    <span className="font-display font-bold text-text-primary dark:text-white text-xl">Filar AI</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link, idx) => (
                        <a key={idx} href={link.href} className="font-body text-base font-medium text-text-primary dark:text-white hover:text-accent-500 transition-colors duration-300">
                            {link.label}
                        </a>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button variant="primary" href="https://calendar.app.google/oxdocXuk5a2ohKZf9" target="_blank" rel="noopener noreferrer">
                        Zaplanuj konsultację
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-text-primary dark:text-white text-2xl"
                    aria-label="Menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-dark-bg border-b border-gray-border dark:border-white/10 px-4 py-6 shadow-medium absolute w-full left-0 top-20 flex flex-col gap-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-body text-sm font-bold uppercase tracking-widest text-gray-text">Menu</span>
                        <ThemeToggle />
                    </div>
                    {links.map((link, idx) => (
                        <a key={idx} href={link.href} className="font-body text-lg font-medium text-text-primary dark:text-white hover:text-accent-500">
                            {link.label}
                        </a>
                    ))}
                    <Button variant="primary" href="https://calendar.app.google/oxdocXuk5a2ohKZf9" target="_blank" rel="noopener noreferrer" className="w-full">
                        Zaplanuj konsultację
                    </Button>
                </div>
            )}
        </header>
    );
};
