"use client";
import React, { useEffect, useRef, useState } from 'react';

/**
 * FilarAI Process Section
 * Features: Vertical timeline with bidirectional scroll-based activation logic.
 * No IntersectionObserver for steps, uses scroll listener for precise control.
 */
export const Process = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const containerRef = useRef(null);
  const stepsRef = useRef([]);

  const steps = [
    {
      label: "KROK 01",
      title: "Bezpłatna konsultacja",
      description: "30 minut rozmowy o Twoich procesach i problemach. Bez zobowiązań. Wychodzisz z konkretnymi wnioskami nawet jeśli nie współpracujemy."
    },
    {
      label: "KROK 02",
      title: "Analiza i wycena",
      description: "Dokładniej analizujemy wybrane procesy. Przygotowujemy wycenę z zakresem prac, harmonogramem i oczekiwanymi efektami. Wiesz z góry ile zapłacisz."
    },
    {
      label: "KROK 03",
      title: "Wdrożenie",
      description: "Budujemy system. Na bieżąco informujemy o postępach. Typowy czas: 1–3 tygodnie zależnie od złożoności."
    },
    {
      label: "KROK 04",
      title: "Testy i odbiór",
      description: "Testujemy razem z Tobą. Wprowadzamy poprawki. Dbamy o to żeby wszystko działało dokładnie tak jak ustalono."
    },
    {
      label: "KROK 05",
      title: "Dokumentacja i szkolenie",
      description: "Przekazujemy pełną dokumentację i szkolimy Ciebie lub Twój zespół z obsługi systemu. Nie jesteś uzależniony od nas."
    },
    {
      label: "KROK 06",
      title: "Wsparcie i rozwój",
      description: "Opcjonalny abonament utrzymaniowy: monitoring, aktualizacje, drobny rozwój. Stały kontakt i priorytetowe wsparcie gdy potrzebujesz."
    }
  ];

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const threshold = window.innerHeight * 0.55;
      let currentActive = -1;

      stepsRef.current.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();

        // Activation Logic: top < 55% AND bottom > 10%
        if (rect.top < threshold && rect.bottom > window.innerHeight * 0.1) {
          currentActive = index;
        }
      });

      setActiveStep(currentActive);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    // Initial check
    updateScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [steps.length]);

  return (
    <section className="relative w-full bg-[var(--bg-0)] py-[96px] overflow-hidden">
      <style>{`
        .process-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .process-header {
          margin-bottom: 80px;
        }

        .section-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-3, #5A5550);
          display: block;
          margin-bottom: 12px;
        }

        .process-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-1, #F0EFEE);
          line-height: 1.1;
        }

        .process-title span {
          color: var(--red, #D93025);
        }

        .process-subtitle {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 17px;
          color: var(--text-2, #9A9590);
          max-width: 480px;
          margin-top: 16px;
          line-height: 1.75;
        }

        /* Timeline Structure */
        .steps-wrapper {
          max-width: 680px;
          margin: 80px auto 0;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--bg-3, #1A1A1A);
          z-index: 1;
        }

        .step-item {
          position: relative;
          padding-left: 64px;
          padding-bottom: 96px;
        }

        .step-item:last-child {
          padding-bottom: 0;
        }

        /* Timeline Dot */
        .step-dot {
          position: absolute;
          left: -7px;
          top: 4px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: var(--bg-4, #222222);
          border: 3px solid #080808;
          z-index: 5;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          will-change: transform;
        }

        .step-item.active .step-dot {
          background-color: var(--red, #D93025);
          box-shadow: 0 0 16px rgba(217, 48, 37, 0.6);
          transform: scale(1.4);
        }

        /* Progress Line segment */
        .step-progress-line {
          position: absolute;
          left: 0;
          top: 4px;
          width: 2px;
          height: 0;
          background-color: var(--red, #D93025);
          opacity: 0;
          z-index: 2;
          transition: height 0.6s ease-out, opacity 0.3s ease;
        }

        .step-item.active .step-progress-line {
          height: 100%;
          opacity: 1;
        }

        /* Content Area */
        .step-content {
          max-width: 480px;
        }

        .step-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--red);
          transition: color 0.4s ease, transform 0.4s ease;
          display: block;
        }

        .step-item.active .step-label {
          color: var(--red, #D93025);
          transform: translateX(4px);
        }

        .step-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 32px;
          font-weight: 700;
          color: var(--text-3, #5A5550);
          margin-top: 8px;
          transition: color 0.4s ease;
        }

        .step-item.active .step-title {
          color: var(--text-1, #F0EFEE);
        }

        .step-description {
          font-family: var(--font-body, 'Outfit', sans-serif);
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-2, #9A9590);
          margin-top: 8px;
          opacity: 0.3;
          transition: opacity 0.5s ease;
        }

        .step-item.active .step-description {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .step-title {
            font-size: 24px;
          }
          .process-container {
            padding: 0 20px;
          }
          .step-item {
            padding-left: 48px;
          }
        }
      `}</style>

      <div className="process-container">
        <header className="process-header">
          <span className="section-label">PROCES WSPÓŁPRACY</span>
          <h2 className="process-title">Od pierwszej rozmowy do działającego <span>systemu</span>.</h2>
          <p className="process-subtitle">Działamy według przejrzystego planu, eliminując niepewność na każdym etapie wdrożenia.</p>
        </header>

        <div className="steps-wrapper" ref={containerRef}>
          <div className="timeline-line" />
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => (stepsRef.current[idx] = el)}
              className={`step-item ${idx <= activeStep ? 'active' : ''}`}
            >
              <div className="step-dot" />
              <div className="step-progress-line" />

              <div className="step-content">
                <span className="step-label">{step.label}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
