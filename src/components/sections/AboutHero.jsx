"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const AboutHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Proste wyzwolenie animacji "on load" po pierwszym renderze
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`about-hero-section ${isLoaded ? 'loaded' : ''}`}>
      <style>{`
        .about-hero-section {
          width: 100%;
          min-height: 100vh;
          background-color: #080808; /* --bg-0 */
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 64px; /* navbar height */
        }

        .about-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
        }

        /* --- STYLES FOR LEFT COLUMN (PHOTO) --- */
        @media (min-width: 768px) {
          .about-photo-col {
            display: none;
          }
        }

        .about-hero-section.loaded .about-photo-col {
          opacity: 1;
          transform: translateY(0);
        }

        .photo-container {
          aspect-ratio: 4/5;
          max-width: 420px;
          border-radius: 24px; /* --r-xl */
          overflow: hidden;
          position: relative;
          background-color: #141414; /* --bg-2 */
          border: 1px solid rgba(217, 48, 37, 0.25); /* --red-border */
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
        }

        .photo-img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .photo-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, transparent 50%, rgba(8, 8, 8, 0.7) 100%);
          pointer-events: none;
        }

        .photo-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background-color: rgba(8, 8, 8, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid #222222; /* --bg-4 */
          border-radius: 8px; /* --r-md */
          padding: 12px 16px;
        }

        .badge-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #F0EFEE; /* --text-1 */
          display: block;
          line-height: 1.2;
        }

        .badge-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #D93025; /* --red */
          display: block;
          margin-top: 4px;
        }

        /* --- STYLES FOR RIGHT COLUMN (CONTENT) --- */
        .about-content-col {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--red);
          display: block;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s;
        }

        .about-hero-section.loaded .about-label {
          opacity: 1;
          transform: translateY(0);
        }

        .about-h1 {
          font-family: var(--font-display); /* Syne */
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-align: center;
          max-width: 800px;
          margin: 16px auto 32px;
          color: var(--text-1);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s;
        }

        .about-hero-section.loaded .about-h1 {
          opacity: 1;
          transform: translateY(0);
        }

        .accent-red {
          color: #D93025; /* --red */
        }

        .about-p1 {
          font-family: 'Outfit', sans-serif;
          font-size: 17px;
          color: #9A9590; /* --text-2 */
          line-height: 1.75;
          margin-bottom: 20px;
          max-width: 640px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s;
        }

        .about-hero-section.loaded .about-p1 {
          opacity: 1;
          transform: translateY(0);
        }

        .about-p2 {
          font-family: 'Outfit', sans-serif;
          font-size: 17px;
          color: #9A9590; /* --text-2 */
          line-height: 1.75;
          margin-bottom: 40px;
          max-width: 640px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease 0.35s, transform 0.5s ease 0.35s;
        }

        .about-hero-section.loaded .about-p2 {
          opacity: 1;
          transform: translateY(0);
        }

        .about-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s;
        }

        .about-hero-section.loaded .about-buttons {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary {
          background-color: #D93025; /* --red */
          color: white;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          padding: 11px 22px;
          border-radius: 4px; /* --r-sm */
          box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
          transition: all 0.15s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-primary:hover {
          background-color: #B3251D; /* --red-dim */
          box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
          text-transform: uppercase;
        }

        .btn-secondary {
          background-color: transparent;
          border: 1px solid #222222; /* --bg-4 */
          color: #F0EFEE; /* --text-1 */
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          padding: 11px 22px;
          border-radius: 4px; /* --r-sm */
          transition: all 0.15s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-secondary:hover {
          border-color: #D93025; /* --red */
          color: #D93025; /* --red */
          text-transform: uppercase;
        }

        /* --- RESPONSIVE DESIGN --- */
        /* --- RESPONSIVE DESIGN --- */
        @media (max-width: 767px) {
          .about-hero-section {
            min-height: auto;
            padding-top: 120px;
            padding-bottom: 80px;
          }

          .about-hero-container {
            padding: 0 24px;
            gap: 24px;
          }

          .about-photo-col {
            display: flex !important;
            margin: 32px 0;
            max-width: 300px;
            order: 2;
            opacity: 1;
            transform: none;
          }

          .photo-container {
            aspect-ratio: 1/1;
            max-width: 100%;
          }

          .about-h1 {
            font-size: clamp(2rem, 8vw, 2.8rem);
            max-width: 100%;
            padding: 0 16px;
            word-break: break-word;
            margin-bottom: 0;
            order: 1;
          }

          .about-content-col {
             display: contents;
          }

          .about-header-group { order: 1; }
          .about-text-group { 
            order: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .about-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .btn-primary, .btn-secondary {
             width: 100%;
          }
        }
      `}</style>

      <div className="about-hero-container">
        
        {/* HEADER GROUP: LABEL & TITLE */}
        <div className="about-header-group">
          <span className="about-label">O MNIE</span>
          <h1 className="about-h1">
            Buduję <span className="accent-red">systemy</span> które odzyskują Ci czas
          </h1>
        </div>

        {/* PHOTO SECTION */}
        <div className="about-photo-col">
          <div className="photo-container">
            <img 
              src="/images/about/kacper.jpg" 
              alt="Kacper Filar - FilarAI Founder" 
              className="photo-img" 
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="photo-overlay" />
            
            <div className="photo-badge">
              <span className="badge-name">Kacper Filar</span>
              <span className="badge-role">FOUNDER · FILARAI</span>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION: P1, P2, BUTTONS */}
        <div className="about-content-col">
          <div className="about-text-group">
            <p className="about-p1">
              Jestem Kacper — założyciel FilarAI. Specjalizuję się we wdrażaniu AI i automatyzacji dla małych i średnich firm. Nie interesuję się technologią dla samej technologii — interesują mnie problemy, które kosztują Cię czas i pieniądze.
            </p>
            
            <p className="about-p2">
              FilarAI powstała bo widziałem jak wiele firm traci dziesiątki godzin miesięcznie na rzeczy które maszyna może zrobić lepiej, szybciej i bez błędów. Moją rolą jest to zmienić.
            </p>

            <div className="about-buttons">
              <Link href="/kontakt" className="btn-primary">
                Porozmawiajmy →
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                Zobacz realizacje
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
