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
      { threshold: 0.2 }
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

        .hm-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #5A5550; /* --text-3 */
          text-align: center;
          display: block;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease 0s, transform 0.4s ease 0s;
        }

        .history-section.visible .hm-label {
          opacity: 1;
          transform: translateY(0);
        }

        .opening-quote-container {
          margin: 24px 0 48px;
          text-align: center;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
        }

        .history-section.visible .opening-quote-container {
          opacity: 1;
          transform: translateY(0);
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
          transition: width 0.4s ease 0.2s, opacity 0.4s ease 0.2s;
          opacity: 0;
        }

        .history-section.visible .separator-line {
          width: 60px;
          opacity: 1;
        }

        .body-paragraphs {
          text-align: left;
        }

        .hm-p {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 17px;
          color: #9A9590; /* --text-2 */
          line-height: 1.85;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(12px);
        }

        .hm-p-1 { transition: opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s; }
        .hm-p-2 { transition: opacity 0.4s ease 0.22s, transform 0.4s ease 0.22s; }
        .hm-p-3 { transition: opacity 0.4s ease 0.29s, transform 0.4s ease 0.29s; }

        .history-section.visible .hm-p {
          opacity: 1;
          transform: translateY(0);
        }

        .pull-quote {
          margin-top: 48px;
          padding: 24px 32px;
          border-left: 3px solid #D93025; /* --red */
          background-color: rgba(217, 48, 37, 0.08); /* --red-subtle */
          border-radius: 0 8px 8px 0; /* --r-md */
          text-align: left;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease 0.35s, transform 0.4s ease 0.35s;
        }

        .history-section.visible .pull-quote {
          opacity: 1;
          transform: translateY(0);
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
      `}</style>

      <div className="history-container">
        <span className="hm-label">HISTORIA I MISJA</span>
        
        <div className="opening-quote-container">
          <span className="quote-mark">„</span>
          <p className="opening-quote-text">
            Nie interesuję się technologią dla samej technologii — interesują mnie problemy, które kosztują Cię czas i pieniądze.
          </p>
        </div>

        <div className="separator-container">
          <div className="separator-line" />
        </div>

        <div className="body-paragraphs">
          <p className="hm-p hm-p-1">
            Zawsze uważałem, że rutynowe ręczne przeklikiwanie informacji, tworzenie tych samych e-maili i ręczne zarządzanie grafikiem jest stratą ogromnego ludzkiego potencjału twórczego. Patrzyłem jak firmy próbują rosnąć pracując ciężej, a nie mądrzej.
          </p>
          <p className="hm-p hm-p-2">
            Rozpoczynałem swoją przygodę ucząc się przez wielokrotne błędy i wdrażając dziesiątki prototypów. Odkryłem w automatyzacji fascynujący nowy obszar techniczny, ale przede wszystkim – ogromną ulgę, jaką daje ona przeciążonym pracownikom i managerom na pierwszej linii. Mój cel to budować inteligentne mosty między maszynami a ludźmi.
          </p>
          <p className="hm-p hm-p-3">
            Dziś FilarAI to obietnica partnerstwa, która w samym sercu utrzymuje niezawodność najnowszych rozwiązań Agentic Workflow. Chcę sprawić, by zaawansowana technologia stała się niewidzialnym wsparciem, napędzającym zysk i obniżającym koszty każdej agencji z którą współpracuję.
          </p>
        </div>

        <div className="pull-quote">
          <p className="pull-quote-text">
            Wdrażam systemy, o których przestajesz myśleć, zaraz gdy zaczną działać bez problemu.
          </p>
          <span className="pull-quote-author">— KACPER FILAR · FOUNDER</span>
        </div>
      </div>
    </section>
  );
};
