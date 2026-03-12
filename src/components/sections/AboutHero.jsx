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
          background-color: #080808; /* --bg-0 */
          padding-top: 140px; /* navbar offset */
          padding-bottom: 96px;
        }

        .about-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 80px;
        }

        /* --- STYLES FOR LEFT COLUMN (PHOTO) --- */
        .about-photo-col {
          flex: 0 0 45%;
          max-width: 45%;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease 0s, transform 0.5s ease 0s;
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
          flex: 0 0 55%;
          max-width: 55%;
        }

        .about-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #5A5550; /* --text-3 */
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
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 52px;
          letter-spacing: -0.03em;
          color: #F0EFEE; /* --text-1 */
          line-height: 1.05;
          margin-top: 12px;
          margin-bottom: 24px;
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
          margin-bottom: 16px;
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
          margin-bottom: 32px;
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
          border-radius: 8px; /* --r-md */
          box-shadow: 0 0 12px rgba(217, 48, 37, 0.2);
          transition: all 0.15s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-primary:hover {
          background-color: #B3251D; /* --red-dim */
          box-shadow: 0 0 24px rgba(217, 48, 37, 0.3);
        }

        .btn-secondary {
          background-color: transparent;
          border: 1px solid #222222; /* --bg-4 */
          color: #F0EFEE; /* --text-1 */
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          padding: 11px 22px;
          border-radius: 8px; /* --r-md */
          transition: all 0.15s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-secondary:hover {
          border-color: #D93025; /* --red */
          color: #D93025; /* --red */
        }

        /* --- RESPONSIVE DESIGN --- */
        @media (max-width: 767px) {
          .about-hero-section {
            padding-top: 100px;
          }

          .about-hero-container {
            flex-direction: column;
            gap: 48px;
            padding: 0 24px;
          }

          .about-photo-col {
            flex: 1 1 auto;
            max-width: 100%;
            width: 100%;
            order: 1; /* Photo on top */
          }

          .photo-container {
            aspect-ratio: 3/2;
            max-width: 100%;
          }

          .about-content-col {
            flex: 1 1 auto;
            max-width: 100%;
            order: 2; /* Content below */
            text-align: center;
          }

          .about-h1 {
            font-size: 36px;
          }
          
          .about-buttons {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          
          .btn-primary, .btn-secondary {
             width: 100%;
             justify-content: center;
             padding: 14px 20px;
          }
        }
      `}</style>

      <div className="about-hero-container">
        
        {/* LEFT COLUMN: PHOTO */}
        <div className="about-photo-col">
          <div className="photo-container">
            {/* img zamiast unoptimized Image, zgodnie z instrukcją "data-src on img tag" lub po prostu "<img>" jeśli nie ma next/image w poleceniu,
                Jednak użyję elementu <img> bo w specyfikacji było literalnie "img tag" */}
            <img 
              src="/images/about/kacper.jpg" 
              alt="Kacper Filar - FilarAI Founder" 
              className="photo-img" 
              onError={(e) => {
                // fall-back dla placeholdera, gdyby zdjęcie nie istniało jeszcze w odpowiednim folderze
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

        {/* RIGHT COLUMN: CONTENT */}
        <div className="about-content-col">
          <span className="about-label">O MNIE</span>
          <h1 className="about-h1">
            Buduję <span className="accent-red">systemy</span> które odzyskują Ci czas
          </h1>
          
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
            <Link href="/kontakt" className="btn-secondary">
              Zobacz realizacje
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
