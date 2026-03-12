"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * FilarAI Portfolio Section
 * Layout: 3-card grid on desktop, 1 column on mobile.
 * Features: Branded cards, image areas with hover scale, case study details, and staggered on-scroll animations.
 */
export const Portfolio = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            slug: "faktury-ai",
            tag: "Biuro rachunkowe",
            title: "System faktur AI",
            problem: "Faktury zapisywane ręcznie ze skanów — chaos i ryzyko zgubienia",
            solution: "OCR + AI wyciąga dane ze zdjęcia i zapisuje do bazy automatycznie",
            effect: "Zero ręcznego przepisywania danych",
            number: "−3h",
            label: "dziennie oszczędności",
            dataSrc: "portfolio/faktury.jpg"
        },
        {
            slug: "dashboard-zapasow",
            tag: "Zarządzanie",
            title: "Dashboard zapasów",
            problem: "Zarządzanie zapasami w Excelu — błędy i brak dostępu mobilnego",
            solution: "Dedykowana aplikacja z logowaniem, koszykami i fakturomatem",
            effect: "Czas obsługi zamówień skrócony o ponad połowę",
            number: "−50%",
            label: "czas obsługi zamówień",
            dataSrc: "portfolio/dashboard.jpg"
        },
        {
            slug: "rag-agent",
            tag: "HR / Onboarding",
            title: "RAG Agent firmowy",
            problem: "Pytania do managera kilkanaście razy dziennie zaburzały jego pracę",
            solution: "Agent AI z bazą wiedzy firmy odpowiada zamiast managera",
            effect: "Manager odzyskuje kilka godzin tygodniowo",
            number: "+4h",
            label: "tygodniowo dla managera",
            dataSrc: "portfolio/rag-agent.jpg"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-transparent py-[96px] overflow-hidden"
            style={{ '--bg-0': '#080808' }}
        >
            <style>{`
        .portfolio-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .portfolio-header {
          margin-bottom: 56px;
        }

        .section-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-3, #5A5550);
          display: block;
          margin-bottom: 12px;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .portfolio-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-1, #F0EFEE);
          line-height: 1.1;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.1s;
        }

        .portfolio-title span.accent {
          color: var(--red, #D93025);
        }

        .portfolio-subtitle {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 17px;
          color: var(--text-2, #9A9590);
          max-width: 520px;
          margin-top: 16px;
          line-height: 1.75;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.2s;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .portfolio-card {
          background-color: var(--bg-2, #141414);
          border: 1px solid var(--bg-4, #222222);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.2s ease;
        }

        .portfolio-card:hover {
          border-color: var(--red, #D93025);
          box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
          transform: translateY(-1px);
        }

        .image-area {
          position: relative;
          width: 100%;
          height: 200px;
          background-color: var(--bg-3, #1A1A1A);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-area .placeholder-icon {
          color: var(--bg-4, #222222);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .portfolio-card:hover .project-image {
          transform: scale(1.03);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(8, 8, 8, 0.6) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .image-overlay {
          opacity: 1;
        }

        .industry-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background-color: rgba(8, 8, 8, 0.8);
          border: 1px solid var(--red-border, rgba(217, 48, 37, 0.25));
          color: var(--red, #D93025);
          border-radius: 100px;
          padding: 3px 10px;
          backdrop-filter: blur(4px);
          z-index: 2;
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        .project-card-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 20px;
          font-weight: 600;
          color: var(--text-1, #F0EFEE);
          margin-bottom: 16px;
        }

        .detail-line {
          display: flex;
          gap: 16px;
          margin-bottom: 8px;
        }

        .detail-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          text-transform: uppercase;
          color: var(--text-3, #5A5550);
          min-width: 88px;
          flex-shrink: 0;
        }

        .detail-text {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 13px;
          color: var(--text-2, #9A9590);
          line-height: 1.6;
        }

        .card-divider {
          height: 1px;
          background-color: var(--bg-4, #222222);
          margin: 16px 0;
        }

        .result-block {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .result-number {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 32px;
          font-weight: 800;
          color: var(--red, #D93025);
          line-height: 1;
        }

        .result-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-3, #5A5550);
        }

        .card-footer-btn {
          margin-top: 20px;
          width: 100%;
          background: transparent;
          border: 1px solid var(--bg-4, #222222);
          border-radius: 8px;
          padding: 10px 20px;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-2, #9A9590);
          text-align: center;
          cursor: pointer;
          transition: all 0.15s ease;
          text-decoration: none;
        }

        .card-footer-btn:hover {
          border-color: var(--red, #D93025);
          color: var(--red, #D93025);
        }

        .portfolio-footer {
          margin-top: 48px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.4s;
        }

        .footer-text {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 15px;
          color: var(--text-2, #9A9590);
        }

        .btn-view-all {
          margin-top: 16px;
          background-color: var(--red, #D93025);
          color: #FFFFFF;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 15px;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-view-all:hover {
          background-color: var(--red-dim, #A8201A);
          box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
        }

        /* Animation Triggered States */
        .is-active .section-label,
        .is-active .portfolio-title,
        .is-active .portfolio-subtitle,
        .is-active .portfolio-footer {
          opacity: 1;
          transform: translateY(0);
        }

        .is-active .portfolio-card {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s ease, transform 0.4s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .is-active .card-1 { transition-delay: 0s; }
        .is-active .card-2 { transition-delay: 0.1s; }
        .is-active .card-3 { transition-delay: 0.2s; }

        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

            <div className={`portfolio-container ${isVisible ? 'is-active' : ''}`}>
                <header className="portfolio-header">
                    <span className="section-label">REALIZACJE</span>
                    <h2 className="portfolio-title">
                        Wybrane projekty. Każdy to konkretny problem i konkretny <span className="accent">wynik</span>.
                    </h2>
                    <p className="portfolio-subtitle">
                        Podejście oparte na danych i automatyzacji, które przekłada się na mierzalne korzyści biznesowe.
                    </p>
                </header>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div key={index} className={`portfolio-card card-${index + 1}`}>
                            <div className="image-area">
                                <span className="industry-tag">{project.tag}</span>
                                {/* Placeholder for real images */}
                                <div className="image-overlay"></div>
                                <svg className="placeholder-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                    <circle cx="9" cy="9" r="2" />
                                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                </svg>
                            </div>

                            <div className="card-content">
                                <h3 className="project-card-title">{project.title}</h3>

                                <div className="detail-line">
                                    <span className="detail-label">PROBLEM</span>
                                    <span className="detail-text">{project.problem}</span>
                                </div>
                                <div className="detail-line">
                                    <span className="detail-label">ROZWIĄZANIE</span>
                                    <span className="detail-text">{project.solution}</span>
                                </div>
                                <div className="detail-line">
                                    <span className="detail-label">EFEKT</span>
                                    <span className="detail-text">{project.effect}</span>
                                </div>

                                <div className="card-divider" />

                                <div className="result-block">
                                    <span className="result-number">{project.number}</span>
                                    <span className="result-label">{project.label}</span>
                                </div>

                                <a href={`/portfolio/${project.slug}`} className="card-footer-btn">Dowiedz się więcej →</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="portfolio-footer">
                    <p className="footer-text">To tylko 3 z naszych realizacji.</p>
                    <a href="/portfolio" className="btn-view-all">Zobacz wszystkie realizacje →</a>
                </div>
            </div>
        </section>
    );
};
