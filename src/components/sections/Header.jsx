"use client";

import { useState } from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';

export const Header = ({ logoSrc, links = [] }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#E2E8F0] w-full transition-all duration-300">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 z-50 relative">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image src="/logo-black.png" alt="Filar AI Logo" fill className="object-contain" priority />
                    </div>
                    <span className="font-heading font-bold text-[#0F1B3C] text-[20px] md:text-[24px]">Filar AI</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link, idx) => (
                        <a key={idx} href={link.href} className="font-body text-[16px] font-medium text-[#0F1B3C] hover:text-[#06B6D4] transition-colors duration-300">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button variant="primary" href="https://calendar.app.google/oxdocXuk5a2ohKZf9" target="_blank" rel="noopener noreferrer">
                        Schedule Your Free Strategy Call
                    </Button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`block w-6 h-0.5 bg-[#0F1B3C] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#0F1B3C] my-1 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#0F1B3C] transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#FFFFFF] z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <nav className="flex flex-col items-center gap-8 w-full px-6">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className="font-heading text-[24px] font-bold text-[#0F1B3C] hover:text-[#06B6D4] transition-colors duration-300 w-full text-center py-4 border-b border-[#E2E8F0] last:border-b-0"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="mt-8 w-full font-body">
                        <Button
                            variant="primary"
                            href="https://calendar.app.google/oxdocXuk5a2ohKZf9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-[16px] py-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Schedule Your Free Strategy Call
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};
