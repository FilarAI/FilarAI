"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const projects = [
  {
    slug: "faktury-ai",
    image: "portfolio/faktury.jpg",
    tag: "Biuro rachunkowe",
    category: "Automatyzacje",
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
    category: "Aplikacje AI",
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
    category: "Aplikacje AI",
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
    category: "Automatyzacje",
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
    category: "Aplikacje AI",
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
    category: "Strony internetowe",
    title: "Chatbot i strona firmowa",
    problem: "Brak strony — zero widoczności poza godzinami pracy",
    rozwiazanie: "Strona z animacjami i chatbot AI z bazą wiedzy i zapisem na spotkania",
    efekt: "Pierwsze zapytania w ciągu tygodnia od uruchomienia",
    number: "7dni",
    numberLabel: "DO ZAPYTAŃ"
  }
];

const categories = ["Wszystkie", "Automatyzacje", "Aplikacje AI", "Strony internetowe", "Audyt"];

export const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState("Wszystkie");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
          color: #5A5550;
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

        .project-card {
          background: #141414;
          border: 1px solid #222222;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(12px) scale(0.95);
          display: flex;
          flex-direction: column;
        }
        .project-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .project-card:hover {
          border-color: #D93025;
          box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
          transform: translateY(-2px);
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
        .project-card:hover .card-image {
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
        }

        .result-group {
          position: absolute;
          bottom: 12px;
          right: 12px;
          text-align: right;
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
          color: #5A5550;
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
              className={`project-card ${isVisible && isMatched ? 'visible' : ''} ${!isMatched ? 'card-hidden' : ''}`}
              style={{ transitionDelay: isVisible ? staggerDelay : '0s' }}
            >
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};
