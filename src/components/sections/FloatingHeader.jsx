"use client";
import { useState, useEffect, createContext, useContext } from 'react';
import { Grid2x2Plus, Menu, X } from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const navStyles = `
  .filar-btn-primary {
    background: var(--red);
    color: #ffffff;
    border: none;
    border-radius: var(--r-md);
    padding: 10px 20px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 0 15px rgba(217,48,37,0.3), 0 0 12px rgba(217,48,37,0.25);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  .filar-btn-primary:hover {
    background: var(--red-dim);
    box-shadow: 0 0 25px rgba(217,48,37,0.5), 0 0 24px rgba(217,48,37,0.4);
    transform: translateY(-1px);
  }
  .filar-nav-link {
    color: var(--text-2);
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 400;
    padding: 8px 16px;
    border-radius: var(--r-md);
    transition: all 0.2s ease;
    text-decoration: none;
    cursor: pointer;
  }
  .filar-nav-link:hover {
    color: var(--text-1);
    background: var(--bg-3);
  }
  .filar-nav-link[data-active="true"] {
    color: var(--text-1);
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: var(--red);
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
  }
  .filar-icon-btn {
    background: transparent;
    color: var(--text-2);
    border: 1px solid var(--bg-4);
    border-radius: var(--r-md);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .filar-icon-btn:hover {
    background: var(--bg-3);
    color: var(--text-1);
    border-color: var(--red);
  }
`;

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
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex' }}>
            <div
                style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
                onClick={() => onOpenChange(false)}
            />
            <div style={{
                position: 'fixed', inset: '0 0 0 auto', zIndex: 10000,
                width: '100%', maxWidth: '320px',
                background: 'var(--bg-2)', borderLeft: '1px solid var(--bg-4)',
                padding: '24px', display: 'flex', flexDirection: 'column',
                boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                '--bg-0': '#080808', '--bg-1': '#0F0F0F', '--bg-2': '#141414',
                '--bg-3': '#1A1A1A', '--bg-4': '#222222',
                '--text-1': '#F0EFEE', '--text-2': '#9A9590', '--text-3': '#5A5550',
            }}>
                <button
                    onClick={() => onOpenChange(false)}
                    style={{ position: 'absolute', right: '16px', top: '16px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-1)', padding: '8px' }}
                >
                    <X size={24} />
                </button>
                {children}
            </div>
        </div>
    );
};

export function FloatingHeader() {
    const [activePath, setActivePath] = useState('/');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setActivePath(window.location.pathname);
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const links = [
        { label: 'Rozwiązania', href: '/oferta' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'O nas', href: '/o-nas' },
    ];

    const headerStyle = {
        position: 'sticky', top: '24px', zIndex: 50,
        transition: 'all 0.3s ease',
        margin: '0 auto', width: '100%',
        borderRadius: 'var(--r-lg)',
        border: '1px solid var(--red-border, #D93025)',
        background: 'rgba(15,15,15,0.95)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
        maxWidth: isScrolled ? 'calc(100% - 64px)' : '768px',
        '--bg-0': '#080808', '--bg-1': '#0F0F0F', '--bg-2': '#141414',
        '--bg-3': '#1A1A1A', '--bg-4': '#222222',
        '--text-1': '#F0EFEE', '--text-2': '#9A9590', '--text-3': '#5A5550',
    };

    return (
        <>
            <style>{navStyles}</style>
            <header style={headerStyle}>
                <nav style={{ display: 'flex', alignItems: 'center', padding: '0 16px', height: '56px', justifyContent: 'space-between', position: 'relative' }}>

                    {/* LOGO */}
                    <div
                        onClick={scrollToTop}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', zIndex: 20, userSelect: 'none' }}
                    >
                        <Grid2x2Plus size={20} color="var(--red)" />
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-1)' }}>
                            Filar<span style={{ color: 'var(--text-3)' }}>AI</span>
                        </span>
                    </div>

                    {/* DESKTOP NAV LINKS — centered */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                        className="desktop-nav">
                        {links.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="filar-nav-link"
                                data-active={activePath === link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* DESKTOP CTA */}
                    <div className="desktop-cta" style={{ zIndex: 20 }}>
                        <a href="/kontakt" className="filar-btn-primary">Kontakt</a>
                    </div>

                    {/* MOBILE BURGER */}
                    <div className="mobile-menu" style={{ zIndex: 20 }}>
                        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="filar-icon-btn"
                                style={{ border: 'none', background: 'transparent' }}
                            >
                                <Menu size={24} />
                            </button>
                            <SheetContent>
                                <div
                                    onClick={() => { scrollToTop(); setIsMenuOpen(false); }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', marginBottom: '40px', marginTop: '8px' }}
                                >
                                    <Grid2x2Plus size={24} color="var(--red)" />
                                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: 'var(--text-1)' }}>FilarAI</span>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '8px' }}>Nawigacja</span>
                                    {links.map(link => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="filar-nav-link"
                                            style={{ fontSize: '18px', padding: '10px 0', borderRadius: 0 }}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>

                                <div style={{ marginTop: 'auto', paddingTop: '32px', borderTop: '1px solid var(--bg-3)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-3)' }}>Gotowy na automatyzację?</span>
                                    <a href="/kontakt" className="filar-btn-primary" style={{ width: '100%', padding: '14px 20px', fontSize: '15px' }} onClick={() => setIsMenuOpen(false)}>
                                        Kontakt
                                    </a>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>

                {/* RESPONSIVE STYLES */}
                <style>{`
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-menu { display: none !important; }
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .desktop-cta { display: none !important; }
            .mobile-menu { display: flex !important; }
          }
        `}</style>
            </header>
        </>
    );
}
