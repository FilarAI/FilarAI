"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const projects = [
  {
    slug: "faktury-ai",
    image: "portfolio/faktury.jpg",
    tag: "Biuro rachunkowe",
    category: "Oszczędność czasu",
    title: "System faktur AI",
    problem: "Faktury zapisywane ręcznie ze skanów — chaos i ryzyko zgubienia",
    rozwiazanie: "OCR + AI wyciąga dane ze zdjęcia i zapisuje do bazy automatycznie",
    efekt: "Zero ręcznego przepisywania danych",
    number: "−3h",
    numberLabel: "DZIENNIE"
  },
  {
    slug: "dashboard-zapasow",
    image: "portfolio/dashboard.jpg",
    tag: "Zarządzanie",
    category: "Narzędzia dla zespołu",
    title: "Dashboard zapasów",
    problem: "Zarządzanie zapasami w Excelu — błędy i brak dostępu mobilnego",
    rozwiazanie: "Dedykowana aplikacja z logowaniem, koszykami i fakturomatem",
    efekt: "Czas obsługi zamówień skrócony o ponad połowę",
    number: "−50%",
    numberLabel: "CZAS OBSŁUGI"
  },
  {
    slug: "rag-agent",
    image: "portfolio/rag-agent.jpg",
    tag: "HR / Onboarding",
    category: "Narzędzia dla zespołu",
    title: "RAG Agent firmowy",
    problem: "Pytania do managera kilkanaście razy dziennie zaburzały jego pracę",
    rozwiazanie: "Agent AI z bazą wiedzy firmy odpowiada zamiast managera",
    efekt: "Manager odzyskuje kilka godzin tygodniowo",
    number: "+4h",
    numberLabel: "TYGODNIOWO"
  },
  {
    slug: "fast-lead",
    image: "portfolio/fast-lead.jpg",
    tag: "Sprzedaż B2B",
    category: "Oszczędność czasu",
    title: "System Fast Lead",
    problem: "Czas tracony na rozmowy z klientami którzy nie pasują do oferty",
    rozwiazanie: "AI kwalifikuje leada, generuje ofertę i umawia spotkanie automatycznie",
    efekt: "Koniec rozmów z niekwalifikowanymi leadami",
    number: "−100%",
    numberLabel: "ZŁYCH LEADÓW"
  },
  {
    slug: "intencje-online",
    image: "portfolio/intencje.jpg",
    tag: "Sektor publiczny",
    category: "Narzędzia dla zespołu",
    title: "System intencji online",
    problem: "Intencje przyjmowane wyłącznie stacjonarnie — kolejki i błędy",
    rozwiazanie: "Platforma online z panelem dla kancelarii bez doświadczenia technicznego",
    efekt: "Obsługa 24/7 bez potrzeby obecności w biurze",
    number: "24/7",
    numberLabel: "DOSTĘPNOŚĆ"
  },
  {
    slug: "chatbot-strona",
    image: "portfolio/chatbot.jpg",
    tag: "Usługi lokalne",
    category: "Strony WWW",
    title: "Chatbot i strona firmowa",
    problem: "Brak strony — zero widoczności poza godzinami pracy",
    rozwiazanie: "Strona z animacjami i chatbot AI z bazą wiedzy i zapisem na spotkania",
    efekt: "Pierwsze zapytania w ciągu tygodnia od uruchomienia",
    number: "7dni",
    numberLabel: "DO ZAPYTAŃ"
  },
  {
    slug: "audyt-ai-roadmapa",
    image: "portfolio/audyt.jpg",
    tag: "Usługi B2B",
    category: "Audyty",
    title: "Audyt AI + Roadmapa",
    problem: "Firma nie wiedziała od czego zacząć z AI — czas i budżet przepalany na złe rzeczy",
    rozwiazanie: "Analiza procesów, quick wins, roadmapa 6 miesięcy + pierwsze narzędzia od razu",
    efekt: "Jasny plan działania i pierwsze oszczędności w ciągu tygodnia",
    number: "1 tydzień",
    numberLabel: "DO PIERWSZYCH WYNIKÓW"
  },
  {
    slug: "filarai-strona-fast-lead",
    image: "portfolio/filarai-web.jpg",
    tag: "Agencja AI / Usługi B2B",
    category: "Strony WWW",
    title: "Strona FilarAI + System Fast Lead",
    problem: "Brak strony i systemu który kwalifikuje klientów — firma niewidoczna, każda rozmowa od zera",
    rozwiazanie: "Next.js landing page przedstawiający firmę + formularz Fast Lead jako część funnela sprzedażowego",
    efekt: "Strona pozyskuje, przedstawia firmę i kwalifikuje klientów 24/7 bez angażowania właściciela",
    number: "24/7",
    numberLabel: "KWALIFIKACJA LEADÓW"
  },
  {
    slug: "strona-firmowa-chatbot",
    image: "portfolio/handel-web.jpg",
    tag: "Usługi / Handel",
    category: "Strony WWW",
    title: "Strona firmowa + Chatbot AI",
    problem: "Firma bez strony — niewidoczna i niedostępna poza godzinami pracy",
    rozwiazanie: "Strona z animacjami + chatbot AI z bazą wiedzy firmy i zapisem na spotkanie",
    efekt: "Pierwsze zapytania od klientów w ciągu tygodnia od uruchomienia",
    number: "7 dni",
    numberLabel: "DO PIERWSZYCH ZAPYTAŃ"
  }
];

const categories = ["Wszystkie", "Oszczędność czasu", "Narzędzia dla zespołu", "Strony WWW", "Audyty"];

export const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState("Wszystkie");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMove = (e) => {
      cardRefs.current.forEach((element) => {
        if (!element) return;
        const { left, top, width, height } = element.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const center = [left + width * 0.5, top + height * 0.5];
        const isActive =
          mouseX > left - 80 && mouseX < left + width + 80 &&
          mouseY > top - 80 && mouseY < top + height + 80;
        element.style.setProperty("--active", isActive ? "1" : "0");
        if (!isActive) return;
        const currentAngle = parseFloat(element.style.getPropertyValue("--start")) || 0;
        let targetAngle =
          (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;
        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
        const newAngle = currentAngle + angleDiff * 0.15;
        element.style.setProperty("--start", String(newAngle));
      });
    };

    document.body.addEventListener("pointermove", handleMove);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      document.body.removeEventListener("pointermove", handleMove);
    };
  }, []);

  const filteredProjects = projects.filter(p => 
    activeFilter === "Wszystkie" || p.category === activeFilter
  );

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#0F0F0F] py-24 px-6 md:px-12"
    >
      <style>{`
        .grid-header {
          text-align: center;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .grid-header.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .grid-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--red, #D93025);
          display: block;
          margin-bottom: 12px;
        }
        .grid-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 700;
          color: #F0EFEE;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .grid-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          color: #9A9590;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .cta-row {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          transition-delay: 0.15s;
        }
        .cta-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary {
          background: var(--red, #D93025);
          color: #ffffff;
          border-radius: 4px;
          padding: 11px 22px;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-primary:hover {
          background: var(--red-dim, #A8201A);
          box-shadow: var(--shadow-red, 0 0 24px rgba(217, 48, 37, 0.3));
          text-transform: uppercase;
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-1, #F0EFEE);
          border: 1px solid var(--bg-4, #222222);
          border-radius: 4px;
          padding: 11px 22px;
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-secondary:hover {
          border-color: var(--red, #D93025);
          color: var(--red, #D93025);
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .cta-row {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding: 0 16px;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 320px;
          }
        }

        .filter-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .filter-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .filter-btn {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 20px;
          border-radius: 9999px;
          border: 1px solid #222222;
          background: transparent;
          color: #9A9590;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .filter-btn:hover {
          border-color: #5A5550;
          color: #F0EFEE;
        }
        .filter-btn.active {
          background: rgba(217, 48, 37, 0.08);
          border-color: rgba(217, 48, 37, 0.25);
          color: #D93025;
          font-weight: 600;
        }

        .grid-container {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .grid-container { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .grid-container { grid-template-columns: repeat(3, 1fr); }
        }

        .portfolio-card-wrapper {
          position: relative;
          border-radius: 12px; /* var(--r-lg) */
          overflow: visible;
          --active: 0;
          --start: 0;
          width: 100%;
          cursor: pointer;
          opacity: 0;
          transform: translateY(12px) scale(0.95);
          transition: transform 0.3s ease, opacity 0.3s ease;
          text-decoration: none;
        }

        .portfolio-card-wrapper.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .portfolio-card-wrapper:hover {
          transform: translateY(-2px);
          transition: transform 0.2s ease !important;
        }

        .portfolio-card-wrapper:hover::before,
        .portfolio-card-wrapper:hover .portfolio-card-glow {
          transition-delay: 0s !important;
        }

        .portfolio-card-glow {
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: conic-gradient(
            from calc((var(--start) - 45) * 1deg),
            transparent 0deg,
            var(--red, #D93025) 60deg,
            var(--red-dim, #A8201A) 120deg,
            transparent 180deg
          );
          opacity: var(--active);
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 0;
        }

        .portfolio-card-inner {
          position: relative;
          z-index: 1;
          background: #141414; /* var(--bg-2) */
          border-radius: 11px; /* calc(var(--r-lg) - 1px) */
          margin: 1px;
          height: calc(100% - 2px);
          box-sizing: border-box;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .portfolio-card-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid #222222; /* var(--bg-4) */
          pointer-events: none;
          z-index: 2;
          opacity: calc(1 - var(--active));
          transition: opacity 0.4s ease;
        }

        .card-image-area {
          position: relative;
          width: 100%;
          height: 220px;
          background: #1A1A1A;
          overflow: hidden;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .portfolio-card-wrapper:hover .card-image {
          transform: scale(1.04);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(8,8,8,0.85) 100%);
        }

        .industry-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          background: rgba(8, 8, 8, 0.85);
          border: 1px solid rgba(217, 48, 37, 0.25);
          color: #D93025;
          border-radius: 9999px;
          padding: 4px 12px;
          backdrop-filter: blur(4px);
          z-index: 2;
        }

        .result-group {
          position: absolute;
          bottom: 12px;
          right: 12px;
          text-align: right;
          z-index: 2;
        }
        .result-number {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #F0EFEE;
          line-height: 1;
        }
        .result-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          text-transform: uppercase;
          color: rgba(240, 239, 238, 0.6);
          margin-top: 2px;
        }

        .card-content {
          padding: 24px;
          flex-grow: 1;
        }
        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #F0EFEE;
          margin-bottom: 16px;
        }

        .detail-row {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }
        .detail-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          color: var(--red);
          min-width: 88px;
        }
        .detail-text {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          color: #9A9590;
          line-height: 1.6;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #222222;
        }
        .category-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          color: #5A5550;
        }
        .see-more {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #D93025;
          text-transform: uppercase;
        }

        .card-hidden {
          display: none;
        }
      `}</style>

      {/* Section Header */}
      <div className={`grid-header ${isVisible ? 'visible' : ''}`}>
        <span className="grid-label">NASZE REALIZACJE</span>
        <h2 className="grid-title">Zobacz systemy, które już działają.</h2>
        <p className="grid-subtitle">
          Przekształcamy wąskie gardła biznesowe w płynne i niezawodne procesy. Poznaj rozwiązania, dzięki którym nasi klienci oszczędzają czas i skalują swoje firmy.
        </p>
      </div>

      {/* CTA Section */}
      <div className={`cta-row ${isVisible ? 'visible' : ''}`}>
        <a href="https://calendar.app.google/BtxhP1NN7bvTtwX57" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Umów konsultację →
        </a>
        <a href="/oferta" className="btn-secondary">
          Zobacz ofertę
        </a>
      </div>

      {/* Filter Bar */}
      <div className={`filter-container ${isVisible ? 'visible' : ''}`}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid-container max-w-[1240px] mx-auto">
        {projects.map((project, index) => {
          const isMatched = activeFilter === "Wszystkie" || project.category === activeFilter;
          const staggerDelay = `${(index % 3) * 0.1}s`; // Stagger based on column index for simplicity
          
          return (
            <Link 
              key={project.slug} 
              href={`/portfolio/${project.slug}`}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`portfolio-card-wrapper ${isVisible && isMatched ? 'visible' : ''} ${!isMatched ? 'card-hidden' : ''}`}
              style={{ transitionDelay: isVisible ? staggerDelay : '0s' }}
            >
              <div className="portfolio-card-glow" />
              <div className="portfolio-card-inner">
                <div className="card-image-area">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="card-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="image-overlay" />
                  <span className="industry-tag">{project.tag}</span>
                  <div className="result-group">
                    <div className="result-number">{project.number}</div>
                    <div className="result-label">{project.numberLabel}</div>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{project.title}</h3>
                  <div className="detail-row">
                    <span className="detail-label">PROBLEM</span>
                    <span className="detail-text">{project.problem}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">ROZWIĄZANIE</span>
                    <span className="detail-text">{project.rozwiazanie}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">EFEKT</span>
                    <span className="detail-text">{project.efekt}</span>
                  </div>

                  <div className="card-footer">
                    <span className="category-tag">{project.category}</span>
                    <span className="see-more">Zobacz projekt →</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
