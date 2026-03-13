"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import AnimatedGradient from '@/components/AnimatedGradient';

/**
 * FilarAI Hero Section Rebuilt
 * Layout: Full viewport, centered, video background.
 */
export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const videoRef = React.useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    // Explicit play trigger for mobile/Safari reliability
    if (videoRef.current) {
        videoRef.current.play().catch(error => {
            console.log("Autoplay blocked or failed:", error);
        });
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-[#080808]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Outfit:wght@400;700&family=JetBrains+Mono:wght@500&display=swap');

        :root {
          --red: #D93025;
          --red-dim: #A8201A;
          --text-1: #F0EFEE;
          --text-2: #9A9590;
          --text-3: #5A5550;
          --bg-0: #080808;
          --r-md: 8px;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(8,8,8,0.55) 0%,
            rgba(8,8,8,0.70) 50%,
            rgba(8,8,8,0.90) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
          padding: 0 40px;
          margin: 0 auto;
        }

        .label-mono {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-1);
          background: rgba(18, 18, 18, 0.75);
          border: 1px solid rgba(217, 48, 37, 0.4);
          padding: 6px 16px;
          border-radius: 999px;
          display: inline-block;
          margin-bottom: 20px;
          backdrop-filter: blur(8px);
          width: fit-content;
        }

        .heading-syne {
          font-family: 'Syne', sans-serif;
          font-size: 72px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-1);
          line-height: 1.0;
          margin-bottom: 24px;
        }

        .heading-syne .accent {
          color: var(--red);
        }

        .subtitle-outfit {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: var(--text-2);
          line-height: 1.75;
          max-width: 560px;
          margin: 0 auto 40px;
        }

        .hero-btns {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: var(--r-md);
          transition: all 0.15s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .btn-primary {
          background: var(--red);
          color: white;
          box-shadow: 0 0 16px rgba(217,48,37,0.3);
        }

        .btn-primary:hover {
          background: var(--red-dim);
          box-shadow: 0 0 28px rgba(217,48,37,0.4);
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: var(--text-1);
        }

        .btn-secondary:hover {
          border-color: var(--red);
          color: var(--red);
        }

        .scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          color: var(--red);
          animation: bounceScroll 2s ease-in-out infinite;
          cursor: pointer;
          background: none;
          border: none;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .scroll-hint:hover {
          transform: translateX(-50%) scale(1.2);
          opacity: 0.8;
        }

        @keyframes bounceScroll {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 8px); }
        }

        .fade-up-init {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-up-init.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .heading-syne {
            font-size: 42px;
          }
          .subtitle-outfit {
            font-size: 16px;
            padding: 0 24px;
          }
          .hero-btns {
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
          }
          .hero-btns .btn {
            width: 100%;
          }
          .scroll-hint {
            bottom: 24px;
          }
          
          section#hero {
            background: transparent !important;
          }

          .hero-video {
            display: none;
          }

          .hero-overlay {
            background: linear-gradient(
              180deg,
              rgba(8,8,8,0.3) 0%,
              rgba(8,8,8,0.5) 50%,
              rgba(8,8,8,0.85) 100%
            );
          }
        }

        /* Hide browser-specific media overlays and controls */
        video::-webkit-media-controls {
            display: none !important;
        }
        video::-webkit-media-controls-enclosure {
            display: none !important;
        }
        video::-webkit-media-controls-panel {
            display: none !important;
        }
        /* Suppression for modern browsers media-overlay extensions */
        #hero video {
            pointer-events: none;
            user-select: none;
            visual-search: hidden;
            -webkit-user-drag: none;
        }

        .interaction-blocker {
            position: absolute;
            inset: 0;
            z-index: 1;
            background: transparent;
            pointer-events: auto;
        }
      `}</style>

      {/* Video Background or Fallback */}
      {!videoError ? (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          data-visual-search="disable"
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          onError={() => setVideoError(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      ) : (
        <AnimatedGradient />
      )}

      {/* Invisible Interatcion Blocker to prevent browser overlays */}
      <div className="interaction-blocker" />

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Centered Content */}
      <div className="hero-content">
        <span 
          className={`label-mono fade-up-init ${isLoaded ? 'visible' : ''}`}
          style={{ transitionDelay: '0.1s' }}
        >
          AUTOMATYZACJA · AI · SYSTEMY CYFROWE
        </span>
        
        <h1 
          className={`heading-syne fade-up-init ${isLoaded ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          Przyszłość biznesu<br />
          oparta na <span className="accent">inteligencji</span>.
        </h1>
        
        <p 
          className={`subtitle-outfit fade-up-init ${isLoaded ? 'visible' : ''}`}
          style={{ transitionDelay: '0.3s' }}
        >
          Projektujemy i wdrażamy zaawansowane systemy automatyzacji, które uwalniają Twój zespół od powtarzalnych zadań i skalują zyski.
        </p>
        
        <div 
          className={`hero-btns fade-up-init ${isLoaded ? 'visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <a 
            href="https://calendar.app.google/BtxhP1NN7bvTtwX57" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Bezpłatna konsultacja →
          </a>
          <Link href="/oferta" className="btn btn-secondary">
            Nasze rozwiązania
          </Link>
        </div>
      </div>

      {/* Scroll Hint */}
      <button 
        onClick={() => {
          const nextSection = document.getElementById('challenge');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="scroll-hint"
        aria-label="Przewiń do następnej sekcji"
      >
        <ChevronDown size={32} strokeWidth={3} />
      </button>
    </section>
  );
};
