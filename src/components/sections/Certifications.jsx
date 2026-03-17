"use client";
import React, { useState, useEffect, useRef } from 'react';

const certs = [
  {
    issuer: "ANTHROPIC",
    title: "Kurs Anthropic",
    year: "2024",
    logo: "/images/logos/anthropic.svg",
    description: "Projektowanie i wdrażanie systemów opartych o modele Claude. Prompt engineering, API, agenci AI.",
  },
  {
    issuer: "GOOGLE",
    title: "Kurs Google",
    year: "2024",
    logo: "/images/logos/google.svg",
    description: "Praktyczne zastosowanie narzędzi AI Google w procesach biznesowych i automatyzacji pracy.",
  },
  {
    issuer: "OPENAI",
    title: "Kurs OpenAI",
    year: "2024",
    logo: "/images/logos/openai.svg",
    description: "Wykorzystanie modeli GPT w zaawansowanych rozwiązaniach biznesowych i asystentach AI.",
  },
  {
    issuer: "GEMINI",
    title: "Kurs Gemini",
    year: "2024",
    logo: "/images/logos/gemini.svg",
    description: "Integracja multimodalnych modeli Google Gemini w systemach automatyzacji i analizy danych.",
  },
  {
    issuer: "UDEMY",
    title: "Kurs Udemy",
    year: "2023",
    logo: "/images/logos/udemy.svg",
    description: "Zaawansowane techniki programowania i integracji systemów w ekosystemach cyfrowych.",
  },
  {
    issuer: "YOUTUBE",
    title: "Kurs YouTube",
    year: "2024",
    logo: "/images/logos/yt.svg",
    description: "Specjalistyczna wiedza z zakresu technologii AI i automatyzacji przekazywana przez ekspertów.",
  }
];

export const Certifications = () => {
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

  return (
    <section 
      ref={sectionRef}
      className={`cert-section ${isVisible ? 'visible' : ''}`}
    >
      <style>{`
        .cert-section {
          width: 100%;
          background-color: transparent; /* --bg-1 */
          padding: 96px 0;
        }

        .cert-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .cert-header {
          text-align: center;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .cert-section.visible .cert-header {
          opacity: 1;
          transform: translateY(0);
        }

        .cert-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #5A5550; /* --text-3 */
          display: block;
        }

        .cert-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 42px;
          letter-spacing: -0.02em;
          color: #F0EFEE; /* --text-1 */
          margin-top: 12px;
          line-height: 1.1;
        }

        .cert-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 17px;
          color: #9A9590; /* --text-2 */
          max-width: 540px;
          margin: 16px auto 0;
          line-height: 1.75;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1023px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 639px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }

        .cert-card-wrapper {
          position: relative;
          border-radius: 12px; /* --r-lg */
          overflow: visible;
          --active: 0;
          --start: 0;
          width: 100%;
          height: 100%;
          min-height: 0;
          opacity: 0;
          transform: translateY(16px);
          transition: transform 0.2s ease, opacity 0.4s ease;
        }

        .cert-section.visible .cert-card-wrapper {
          opacity: 1;
          transform: translateY(0);
        }

        .cert-card-wrapper:hover {
          transform: translateY(-2px);
          transition: transform 0.2s ease !important; /* Force immediate hover transition */
        }

        /* Prevent transition-delay from sticky parent affecting interactive properties */
        .cert-card-wrapper:hover::before,
        .cert-card-wrapper:hover .cert-card-glow {
          transition-delay: 0s !important;
        }

        .cert-card-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid #222222; /* --bg-4 */
          pointer-events: none;
          z-index: 2;
          opacity: calc(1 - var(--active));
          transition: opacity 0.4s ease;
        }

        .cert-card-glow {
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

        .cert-card-inner {
          position: relative;
          z-index: 1;
          background-color: #141414; /* --bg-2 */
          border-radius: 11px; /* calc(var(--r-lg) - 1px) */
          margin: 1px;
          padding: 28px 24px;
          height: calc(100% - 2px);
          border: none;
          box-sizing: border-box;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .logo-placeholder {
          width: 48px;
          height: 48px;
          background-color: #1A1A1A; /* --bg-3 */
          border: 1px solid #222222; /* --bg-4 */
          border-radius: 4px; /* --r-sm */
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          padding: 8px;
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.7);
          transition: all 0.3s ease;
        }

        .cert-card-wrapper:hover .logo-img {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.1);
        }

        .card-top-content {
          display: flex;
          flex-direction: column;
        }

        .issuer-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #D93025; /* --red */
          margin-bottom: 4px;
        }

        .card-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #F0EFEE; /* --text-1 */
          line-height: 1.3;
        }

        .card-divider {
          height: 1px;
          background-color: #222222; /* --bg-4 */
          margin-bottom: 16px;
        }

        .card-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          color: #9A9590; /* --text-2 */
          line-height: 1.7;
        }

        .card-bottom {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .year-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          color: #5A5550; /* --text-3 */
          background-color: #1A1A1A; /* --bg-3 */
          padding: 3px 10px;
          border-radius: 9999px; /* --r-full */
        }

        .status-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          background-color: rgba(217, 48, 37, 0.08); /* --red-subtle */
          border: 1px solid rgba(217, 48, 37, 0.25); /* --red-border */
          color: #D93025; /* --red */
          padding: 3px 10px;
          border-radius: 9999px; /* --r-full */
        }
      `}</style>

      <div className="cert-container">
        <div className="cert-header">
          <span className="cert-label">KOMPETENCJE</span>
          <h2 className="cert-title">Certyfikowane umiejętności</h2>
          <p className="cert-subtitle">
            Każde narzędzie którego używam — znam od środka. Poniżej certyfikaty potwierdzające kompetencje w obszarach AI, automatyzacji i budowania systemów.
          </p>
        </div>

        <div className="cert-grid">
          {certs.map((cert, index) => {
            // Animacja stagger (opóźnienie)
            const staggerDelay = `${index * 0.08}s`;

            return (
              <div 
                key={index} 
                ref={(el) => (cardRefs.current[index] = el)}
                className="cert-card-wrapper"
                style={{ transitionDelay: isVisible ? staggerDelay : '0s' }}
              >
                <div className="cert-card-glow" />
                <div className="cert-card-inner">
                  <div className="card-top">
                    <div className="logo-placeholder">
                      {cert.logo ? (
                        <img 
                          src={cert.logo} 
                          alt={`${cert.issuer} logo`} 
                          className="logo-img"
                        />
                      ) : (
                        <span className="issuer-initials">{cert.issuer.charAt(0)}</span>
                      )}
                    </div>
                    <div className="card-top-content">
                      <span className="issuer-name">{cert.issuer}</span>
                      <span className="card-title">{cert.title}</span>
                    </div>
                  </div>
                  
                  <div className="card-divider" />
                  
                  <p className="card-desc">
                    {cert.description}
                  </p>
                  
                  <div className="card-bottom">
                    <span className="year-tag">{cert.year}</span>
                    <span className="status-badge">AKTYWNY</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
