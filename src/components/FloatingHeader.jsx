"use client";
import React, { useState, useEffect, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Grid2x2Plus, Menu, X } from 'lucide-react';

const SheetContext = createContext({ open: false, onOpenChange: () => { } });

const Sheet = ({ open, onOpenChange, children }) => (
  <SheetContext.Provider value={{ open, onOpenChange }}>
    {children}
  </SheetContext.Provider>
);

const SheetContent = ({ children }) => {
  const { open, onOpenChange } = useContext(SheetContext);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[10000] flex">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="fixed inset-y-0 right-0 z-[10001] w-full max-w-[320px] bg-[#080808] border-l border-[#222222] p-8 flex flex-col shadow-2xl transition-transform duration-300">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-6 top-6 p-2 text-[#F0EFEE] hover:text-[#D93025] transition-colors"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export function FloatingHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Oferta', href: '/oferta' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'O nas', href: '/o-nas' },
  ];

  return (
    <>
      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 64px;
          z-index: 9999;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .navbar-container.scrolled {
          background: rgba(8, 8, 8, 0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid #222222;
        }

        .navbar-inner {
          width: 100%;
          max-width: 1200px;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          position: relative;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          z-index: 10;
        }

        .logo-text {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #F0EFEE;
          letter-spacing: -0.02em;
        }

        .navbar-links {
          display: flex;
          gap: 32px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .nav-link {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #9A9590;
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
          padding: 4px 0;
        }

        .nav-link:hover {
          color: #F0EFEE;
        }

        .nav-link.active {
          color: #F0EFEE;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #D93025;
        }

        .navbar-cta {
          z-index: 10;
        }

        .cta-btn {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          text-decoration: none;
          padding: 10px 20px;
          background: #D93025;
          border-radius: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
          letter-spacing: -0.01em;
        }

        .cta-btn:hover {
          background: #A8201A;
          box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
          transform: translateY(-1px);
        }

        .cta-btn:active {
          background: #7A1510;
          transform: translateY(0);
        }

        /* Red gradient line */
        .gradient-line {
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D93025, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .scrolled .gradient-line {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .navbar-links, .navbar-cta {
            display: none;
          }
          .navbar-inner {
            padding: 0 24px;
          }
        }
      `}</style>

      <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link href="/#hero" className="navbar-logo">
            <Grid2x2Plus size={22} color="#D93025" strokeWidth={2.5} />
            <span className="logo-text">FilarAI</span>
          </Link>

          {/* Desktop Links */}
          <nav className="navbar-links">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="navbar-cta">
            <Link href="/kontakt" className="cta-btn">
              Umów konsultację
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-[#9A9590] hover:text-[#F0EFEE] transition-colors"
            style={{ display: isScrolled || true ? 'block' : 'none' }} // Ensure it's responsive
          >
            <Menu size={24} className="md:hidden" />
          </button>
          
          <style>{`
            @media (min-width: 769px) {
               .md\\:hidden { display: none !important; }
            }
          `}</style>

          {/* Scroll Gradient Line */}
          <div className="gradient-line" />
        </div>
      </header>

      {/* Mobile Drawer */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent>
          <div className="flex flex-col h-full pt-12">
            <Link 
              href="/#hero" 
              className="flex items-center gap-3 mb-12"
              onClick={() => setIsMenuOpen(false)}
            >
              <Grid2x2Plus size={28} color="#D93025" />
              <span className="logo-text text-2xl">FilarAI</span>
            </Link>

            <nav className="flex flex-col gap-6">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#5A5550] mb-2">Nawigacja</span>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-2xl font-body ${pathname === link.href ? 'text-[#F0EFEE]' : 'text-[#9A9590]'} hover:text-[#F0EFEE] transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <Link
                href="/kontakt"
                className="w-full bg-[#D93025] text-white font-bold py-4 rounded-xl flex items-center justify-center text-lg hover:bg-[#A8201A] transition-colors shadow-lg shadow-[#D93025]/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Umów konsultację
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
