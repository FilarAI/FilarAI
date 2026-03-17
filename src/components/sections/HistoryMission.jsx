"use client";
import React, { useEffect, useState, useRef } from 'react';

export const HistoryMission = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`history-section ${isVisible ? 'visible' : ''}`}
    >
      <style>{`
        .history-section {
          width: 100%;
          background-color: #0F0F0F; /* --bg-1 */
          padding: 96px 0;
        }

        .history-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* --- Animations --- */
        .fade-up {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .history-section.visible .fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        .anim-group-1 { transition-delay: 0s; }
        .anim-group-2 { transition-delay: 0.1s; }
        .anim-group-3 { transition-delay: 0.2s; }
        .anim-group-4 { transition-delay: 0.3s; }
        .anim-group-5 { transition-delay: 0.4s; }

        /* --- Top Section --- */
        .hm-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--red);
          text-align: center;
          display: block;
        }

        .founder-round-photo {
          display: block;
          margin: 0 auto 48px;
          width: 280px;
          height: 280px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid rgba(217, 48, 37, 0.25); /* --red-border */
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .opening-quote-container {
          margin: 24px 0 48px;
          text-align: center;
        }

        .quote-mark {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 96px;
          line-height: 0.8;
          color: #D93025; /* --red */
          display: block;
          margin-bottom: 16px;
        }

        .opening-quote-text {
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: 28px;
          line-height: 1.4;
          color: #F0EFEE; /* --text-1 */
          text-align: center;
          letter-spacing: -0.01em;
        }

        .separator-container {
          margin: 40px auto;
          display: flex;
          justify-content: center;
        }

        .separator-line {
          height: 1px;
          width: 0;
          background-color: #D93025; /* --red */
          transition: width 0.4s ease 0.15s, opacity 0.4s ease 0.15s;
          opacity: 0;
        }

        .history-section.visible .separator-line {
          width: 60px;
          opacity: 1;
        }

        /* --- Body Paragraphs --- */
        .hm-block {
          margin-bottom: 40px;
        }

        .hm-prefix {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #D93025; /* --red */
          margin-bottom: 10px;
          display: block;
        }

        .hm-p {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 17px;
          color: #9A9590; /* --text-2 */
          line-height: 1.85;
          text-align: left;
        }

        .hm-p .highlight {
          color: #F0EFEE; /* --text-1 */
          font-weight: 500;
        }

        /* --- Inline Stats --- */
        .inline-stats {
          margin: 8px 0 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
        }

        .stat-item {
          padding: 0 28px;
          text-align: center;
        }

        .stat-divider {
          width: 1px;
          height: 32px;
          background-color: #222222; /* --bg-4 */
        }

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #F0EFEE; /* --text-1 */
          display: block;
        }

        .stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #5A5550; /* --text-3 */
          margin-top: 2px;
          display: block;
        }

        /* --- Pull Quote --- */
        .pull-quote {
          margin-top: 48px;
          padding: 24px 32px;
          border-left: 3px solid #D93025; /* --red */
          background-color: rgba(217, 48, 37, 0.08); /* --red-subtle */
          border-radius: 0 8px 8px 0; /* --r-md */
          text-align: left;
        }

        .pull-quote-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: 17px;
          color: #F0EFEE; /* --text-1 */
          line-height: 1.7;
        }

        .pull-quote-author {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #D93025; /* --red */
          display: block;
          margin-top: 10px;
        }

        @media (max-width: 767px) {
          .inline-stats {
            flex-direction: column;
            gap: 24px;
          }
          .stat-divider {
            display: none;
          }
          .stat-item {
            padding: 0;
          }
          .opening-quote-text {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="history-container">
        {/* Founder Photo at the very top */}
        <div className="fade-up anim-group-1">
          <img 
            src="/images/about/kacper.jpg" 
            alt="Kacper Filar — założyciel FilarAI" 
            className="founder-round-photo"
          />
        </div>

        {/* Label & Quote animate together */}
        <div className="fade-up anim-group-1" style={{ transitionDelay: '0.1s' }}>
          <span className="hm-label">HISTORIA I MISJA</span>
          
          <div className="opening-quote-container">
            <span className="quote-mark">„</span>
            <p className="opening-quote-text">
              Nie interesuję się technologią dla samej technologii — interesują mnie problemy, które kosztują Cię czas i pieniądze.
            </p>
          </div>
        </div>

        <div className="separator-container">
          <div className="separator-line" />
        </div>

        {/* P1 */}
        <div className="hm-block fade-up anim-group-2">
          <span className="hm-prefix">01 ·</span>
          <p className="hm-p">
            Zawsze uważałem, że rutynowe ręczne przeklikiwanie informacji, tworzenie tych samych e-maili i ręczne zarządzanie grafikiem jest stratą <span className="highlight">ogromnego ludzkiego potencjału twórczego</span>. Patrzyłem jak firmy próbują rosnąć pracując ciężej, a nie <span className="highlight">mądrzej</span>.
          </p>
        </div>

        {/* P2 */}
        <div className="hm-block fade-up anim-group-3">
          <span className="hm-prefix">02 ·</span>
          <p className="hm-p">
            Rozpoczynałem swoją przygodę ucząc się przez wielokrotne błędy i wdrażając dziesiątki prototypów. Odkryłem w automatyzacji fascynujący nowy obszar techniczny, ale przede wszystkim — <span className="highlight">ogromną ulgę, jaką daje ona przeciążonym pracownikom</span> i managerom na pierwszej linii.
          </p>
        </div>

        {/* Inline Stats */}
        <div className="inline-stats fade-up anim-group-4">
          <div className="stat-item">
            <span className="stat-num">6+</span>
            <span className="stat-label">WDROŻEŃ</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">48h</span>
            <span className="stat-label">DO DEMO</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Z DOKUMENTACJĄ</span>
          </div>
        </div>

        {/* P3 */}
        <div className="hm-block fade-up anim-group-5">
          <span className="hm-prefix">03 ·</span>
          <p className="hm-p">
            Dziś FilarAI to obietnica partnerstwa, która w samym sercu utrzymuje niezawodność najnowszych rozwiązań <span className="highlight">Agentic Workflow</span>. Chcę sprawić, by zaawansowana technologia stała się niewidzialnym wsparciem, <span className="highlight">napędzającym zysk i obniżającym koszty</span> każdej firmy z którą współpracuję.
          </p>
        </div>

        {/* Pull quote */}
        <div className="pull-quote fade-up anim-group-5" style={{ transitionDelay: '0.4s' }}>
          <p className="pull-quote-text">
            „Wdrażam systemy, o których przestajesz myśleć, zaraz gdy zaczną działać bez problemu."
          </p>
          <span className="pull-quote-author">— KACPER FILAR · FOUNDER</span>
        </div>
      </div>
    </section>
  );
};

