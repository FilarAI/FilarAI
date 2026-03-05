import { Button } from '../ui/Button';
import Image from 'next/image';


export const Header = ({ logoSrc, links = [] }) => (
    <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#E2E8F0] w-full transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 h-16 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
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
                <Button variant="primary" href="#contact">Schedule Your Free Strategy Call</Button>
            </div>

            {/* Mobile Menu Toggle (Structural) */}
            <button className="md:hidden text-[#0F1B3C]" aria-label="Menu">
                ☰
            </button>
        </div>
    </header>
);
