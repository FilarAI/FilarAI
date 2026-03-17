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
    { label: 'OFERTA', href: '/oferta' },
    { label: 'PORTFOLIO', href: '/portfolio' },
    { label: 'O NAS', href: '/o-nas' },
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
          background: rgba(20, 20, 20, 0.97);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 1px 24px rgba(0, 0, 0, 0.6);
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
          transition: font-size 0.3s ease;
        }

        @media (min-width: 769px) {
          .logo-text {
            font-size: 22px;
          }
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
          font-size: 16px;
          font-weight: 500;
          color: var(--text-1);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding: 4px 0;
          text-transform: uppercase;
        }

        .nav-link:hover {
          color: #F0EFEE;
          opacity: 0.8;
        }

        .nav-link.active {
          color: #F0EFEE;
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
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
          padding: 10px 22px;
          background: #D93025;
          border: none;
          border-radius: 4px;
          transition: all 0.2s ease;
          box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
          text-transform: uppercase;
        }

        .cta-btn:hover {
          background: #A8201A;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
        }

        .cta-btn:active {
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
          <a 
            href="/" 
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
          >
            <img
              src="/logotype/logo bez tla.png"
              alt="FilarAI"
              style={{
                height: '32px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <span className="logo-text uppercase font-extrabold tracking-tighter">FILAR AI</span>
          </a>

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
            <a 
              href="/" 
              className="flex items-center gap-3 mb-12"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                window.location.href = '/';
              }}
            >
              <img
                src="/logotype/logo bez tla.png"
                alt="FilarAI"
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
              <span className="logo-text text-2xl uppercase font-extrabold tracking-tighter">FILAR AI</span>
            </a>

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
              <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '16px 0',
                borderTop: '1px solid var(--bg-4)',
                marginBottom: '16px',
              }}>
                <a href="https://api.whatsapp.com/send/?phone=48534458418&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                  style={{ color: 'var(--text-3)', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/kacperfilar_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  style={{ color: 'var(--text-3)', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/kacper-filar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  style={{ color: 'var(--text-3)', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:kacperfilarkontakt@gmail.com" aria-label="Gmail"
                  style={{ color: 'var(--text-3)', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </a>
              </div>
              <Link
                href="/kontakt"
                className="w-full bg-[#D93025] text-white font-bold py-4 rounded-sm flex items-center justify-center text-lg hover:bg-[#A8201A] transition-colors shadow-lg shadow-[#D93025]/20"
                onClick={() => setIsMenuOpen(false)}
              >
                UMÓW KONSULTACJĘ
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
