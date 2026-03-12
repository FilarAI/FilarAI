"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Filar AI Logo" width={40} height={40} className="w-10 h-10 object-contain dark:invert transition-all duration-300" priority />
                    <span className="font-body font-bold text-text-primary dark:text-white text-xl">Filar AI</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link, idx) => (
                        <Link key={idx} href={link.href} className="font-body text-base font-medium text-text-primary dark:text-white hover:text-accent-500 transition-colors duration-300">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA & Theme */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Button variant="primary" href="/kontakt">
                        Zaplanuj konsultację
                    </Button>
                </div>

                {/* Mobile Menu Toggle & Theme */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="text-text-primary dark:text-white text-2xl"
                        aria-label="Menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-dark-bg border-b border-gray-border dark:border-white/10 px-4 py-6 shadow-medium absolute w-full left-0 top-20 flex flex-col gap-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-body text-sm font-bold uppercase tracking-widest text-gray-text">Menu</span>
                    </div>
                    {links.map((link, idx) => (
                        <Link key={idx} href={link.href} className="font-body text-lg font-medium text-text-primary dark:text-white hover:text-accent-500">
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="primary" href="/kontakt" className="w-full">
                        Zaplanuj konsultację
                    </Button>
                </div>
            )}
        </header>
    );
};
