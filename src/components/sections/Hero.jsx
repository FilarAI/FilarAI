"use client";
import React, { useEffect, useState } from 'react';
import { Mail, MessageSquare, Calendar, Database, ArrowRight } from 'lucide-react';

/**
 * FilarAI Hero Section
 * Layout: Full viewport height, 60/40 split.
 * Features: Animated flow diagram, staggered on-load animations, branded styling.
 */
export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]" style={{ '--bg-0': '#080808' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Outfit:wght@400;600&family=JetBrains+Mono:wght@500&display=swap');

        :root {
          --red: #D93025;
          --red-dim: #A8201A;
          --red-glow: rgba(217, 48, 37, 0.3);
          --text-1: #F0EFEE;
          --text-2: #9A9590;
          --text-3: #5A5550;
          --bg-2: #141414;
          --bg-4: #222222;
          --font-display: 'Syne', sans-serif;
          --font-body: 'Outfit', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        .hero-container {
          display: flex;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 80px;
          gap: 40px;
          z-index: 10;
        }

        .hero-left {
          flex: 0 0 60%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-right {
          flex: 0 0 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* Typography */
        .section-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-3);
          margin-bottom: 24px;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: 64px;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--text-1);
          margin-bottom: 28px;
        }

        .hero-title span.accent {
          color: var(--red);
        }

        .hero-subtitle {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 400;
          line-height: 1.75;
          color: var(--text-2);
          max-width: 480px;
          margin-bottom: 40px;
        }

        /* Buttons */
        .hero-actions {
          display: flex;
          gap: 16px;
        }

        .btn {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .btn-primary {
          background: var(--red);
          color: white;
          border: none;
        }

        .btn-primary:hover {
          background: var(--red-dim);
          box-shadow: 0 0 24px var(--red-glow);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-1);
          border: 1px solid var(--bg-4);
        }

        .btn-secondary:hover {
          border-color: var(--red);
          color: var(--red);
        }

        /* Diagram */
        .diagram-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .node {
          position: absolute;
          background: var(--bg-2);
          border: 1px solid var(--bg-4);
          border-radius: 8px;
          padding: 12px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          width: 100px;
          animation: float 6s ease-in-out infinite;
        }

        .node-icon {
          color: var(--red);
          opacity: 0.8;
        }

        .node-label {
          font-family: var(--font-mono);
          font-size: 10px;
          text-transform: uppercase;
          color: var(--text-2);
          letter-spacing: 0.05em;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Connections */
        .connections-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .connection-line {
          stroke: var(--red);
          stroke-width: 1;
          stroke-opacity: 0.3;
        }

        .flow-dot {
          fill: var(--red);
          filter: drop-shadow(0 0 4px var(--red));
        }

        /* Load Animations */
        .fade-up {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .is-loaded .fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.25s; }
        .stagger-3 { transition-delay: 0.4s; }
        .stagger-4 { transition-delay: 0.55s; }

        .diagram-fade {
          opacity: 0;
          transition: opacity 0.6s ease;
          transition-delay: 0.8s;
        }

        .is-loaded .diagram-fade {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column;
            padding: 80px 24px;
            text-align: center;
          }
          .hero-left {
            flex: 1;
            align-items: center;
          }
          .hero-subtitle {
            margin-right: auto;
            margin-left: auto;
          }
          .hero-title {
            font-size: 48px;
          }
          .hero-right {
            display: none;
          }
        }
      `}</style>

      <div className={`hero-container ${isLoaded ? 'is-loaded' : ''}`}>
        <div className="hero-left">
          <div className="section-label fade-up stagger-1">
            AUTOMATYZACJA · AI · SYSTEMY CYFROWE
          </div>
          <h1 className="hero-title fade-up stagger-2">
            Przyszłość biznesu<br />
            oparta na <span className="accent">inteligencji</span>.
          </h1>
          <p className="hero-subtitle fade-up stagger-3">
            Projektujemy i wdrażamy zaawansowane systemy automatyzacji, które uwalniają Twój zespół od powtarzalnych zadań i skalują zyski.
          </p>
          <div className="hero-actions fade-up stagger-4">
            <a href="#kontakt" className="btn btn-primary">
              Bezpłatna konsultacja
              <ArrowRight size={18} />
            </a>
            <a href="#oferta" className="btn btn-secondary">
              Nasze rozwiązania
            </a>
          </div>
        </div>

        <div className="hero-right diagram-fade">
          <div className="diagram-wrapper">
            <svg className="connections-svg" viewBox="0 0 400 400">
              {/* Lines linking nodes */}
              <path className="connection-line" d="M200 80 L100 200" />
              <path className="connection-line" d="M200 80 L300 200" />
              <path className="connection-line" d="M100 200 L200 320" />
              <path className="connection-line" d="M300 200 L200 320" />

              {/* Animated Dots */}
              <circle r="2.5" className="flow-dot">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M200 80 L100 200"
                />
              </circle>
              <circle r="2.5" className="flow-dot">
                <animateMotion
                  dur="3s"
                  begin="1s"
                  repeatCount="indefinite"
                  path="M100 200 L200 320"
                />
              </circle>
              <circle r="2.5" className="flow-dot">
                <animateMotion
                  dur="5s"
                  begin="0.5s"
                  repeatCount="indefinite"
                  path="M200 80 L300 200"
                />
              </circle>
              <circle r="2.5" className="flow-dot">
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  path="M300 200 L200 320"
                />
              </circle>
            </svg>

            {/* Nodes */}
            <div className="node" style={{ top: '30px', left: '150px', animationDelay: '0s' }}>
              <Mail className="node-icon" size={24} />
              <span className="node-label">Email</span>
            </div>

            <div className="node" style={{ top: '160px', left: '40px', animationDelay: '-1.5s' }}>
              <MessageSquare className="node-icon" size={24} />
              <span className="node-label">ChatGPT</span>
            </div>

            <div className="node" style={{ top: '160px', right: '40px', animationDelay: '-3s' }}>
              <Calendar className="node-icon" size={24} />
              <span className="node-label">Kalendarz</span>
            </div>

            <div className="node" style={{ bottom: '30px', left: '150px', animationDelay: '-4.5s' }}>
              <Database className="node-icon" size={24} />
              <span className="node-label">CRM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background glow per BRAND.md */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 70% 20%, rgba(217,48,37,0.12) 0%, transparent 70%)'
        }}
      />
    </section>
  );
};
