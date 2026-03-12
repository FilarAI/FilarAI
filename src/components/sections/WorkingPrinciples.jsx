"use client";
import React, { useEffect, useState, useRef } from 'react';

const PRINCIPLES = [
  {
    num: "01",
    title: "Nie biorę projektu jeśli nie wiem że go dowiozę",
    description: "Zanim powiem tak — analizuję czy Twój problem mieści się w tym co robię dobrze. Wolę odmówić niż wziąć pieniądze za coś co nie przyniesie efektu.",
    implication: "Jeśli zaczniemy współpracę — wiem co robię."
  },
  {
    num: "02",
    title: "Mówię wprost co działa, a co nie",
    description: "Nie sprzedam Ci rozwiązania które wygląda dobrze w prezentacji ale nie rozwiązuje problemu. Jeśli widzę że coś nie ma sensu — mówię to przed wdrożeniem.",
    implication: "Dostajesz szczerą ocenę, nie to co chcesz usłyszeć."
  },
  {
    num: "03",
    title: "Dokumentuję wszystko żebyś nie był uzależniony ode mnie",
    description: "Każde wdrożenie kończy się dokumentacją i szkoleniem. Możesz obsługiwać system sam lub z kimkolwiek innym. Zależy mi na tym żebyś miał kontrolę.",
    implication: "Zero vendor lock-in. System jest Twój."
  },
  {
    num: "04",
    title: "Działam szybko i informuję na bieżąco",
    description: "Pierwsze wdrożenia w 1–3 tygodnie. Nie znikam na tydzień bez odpowiedzi — wiesz co się dzieje na każdym etapie projektu.",
    implication: "Żadnych niespodzianek. Żadnego czekania w ciemno."
  }
];

export const WorkingPrinciples = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      document.body.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`principles-section ${isVisible ? 'visible' : ''}`}
    >
      <style>{`
        .principles-section {
          width: 100%;
          background-color: #0F0F0F; /* --bg-1 */
          padding: 96px 0;
        }

        .principles-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* --- Animations --- */
        .fade-up {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .principles-section.visible .fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Top Section --- */
        .wp-top-block {
          text-align: center;
          margin-bottom: 64px;
        }

        .wp-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #5A5550; /* --text-3 */
          display: block;
        }

        .wp-h2 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 42px;
          letter-spacing: -0.02em;
          color: #F0EFEE; /* --text-1 */
          margin-top: 12px;
        }

        .wp-h2-accent {
          color: #D93025; /* --red */
        }

        .wp-subtitle {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 17px;
          color: #9A9590; /* --text-2 */
          text-align: center;
          max-width: 500px;
          margin: 16px auto 0;
          line-height: 1.75;
        }

        .principle-card-wrapper {
          position: relative;
          border-radius: 12px; /* --r-lg */
          overflow: visible;
          --active: 0;
          --start: 0;
          height: 100%;
          transition: transform 0.2s ease;
        }

        .principle-card-wrapper:hover {
          transform: translateY(-2px);
        }

        .principle-card-wrapper::before {
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

        /* The rotating gradient — sits BEHIND the card */
        .principle-card-glow {
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

        /* The card itself — sits ON TOP, slightly inset to reveal glow border */
        .principle-card-inner {
          position: relative;
          z-index: 1;
          background-color: #141414; /* --bg-2 */
          border-radius: 11px; /* calc(var(--r-lg) - 1px) */
          margin: 1px;
          padding: 32px;
          height: calc(100% - 2px);
          border: none;
          overflow: hidden;
        }

        .card-bg-number {
          position: absolute;
          top: -16px;
          right: 16px;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 120px;
          line-height: 1;
          color: #1A1A1A; /* --bg-3 */
          z-index: 0;
          user-select: none;
          pointer-events: none;
        }

        .card-content {
          position: relative;
          z-index: 1;
        }

        /* --- Card Top Row --- */
        .card-top-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .card-number-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #D93025; /* --red */
          background-color: rgba(217, 48, 37, 0.08); /* --red-subtle */
          border: 1px solid rgba(217, 48, 37, 0.25); /* --red-border */
          border-radius: 9999px; /* --r-full */
          padding: 3px 12px;
        }

        .card-divider {
          flex: 1;
          height: 1px;
          background-color: #222222; /* --bg-4 */
        }

        /* --- Card Texts --- */
        .card-title {
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 22px;
          color: #F0EFEE; /* --text-1 */
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .card-desc {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 15px;
          color: #9A9590; /* --text-2 */
          line-height: 1.75;
        }

        /* --- Card Bottom --- */
        .card-bottom {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #222222; /* --bg-4 */
        }

        .card-implication-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #5A5550; /* --text-3 */
          display: block;
        }

        .card-implication-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 13px;
          color: #9A9590; /* --text-2 */
          margin-top: 6px;
          display: block;
        }

        @media (max-width: 767px) {
          .principles-container {
            padding: 0 24px;
          }
          
          .principles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="principles-container">
        {/* Top Block (0s delay) */}
        <div className="wp-top-block fade-up" style={{ transitionDelay: '0s' }}>
          <span className="wp-label">JAK PRACUJĘ</span>
          <h2 className="wp-h2">
            Zasady których <span className="wp-h2-accent">nie łamię</span>
          </h2>
          <p className="wp-subtitle">
            Nie wartości z korporacyjnego broszury — konkretne deklaracje, które poczujesz w każdym etapie współpracy.
          </p>
        </div>

        {/* Grid Block */}
        <div className="principles-grid">
          {PRINCIPLES.map((principle, index) => {
            // card delay: stagger 0.1s per card, starting after 0.1s to allow heading first
            const cardDelay = 0.1 + (index * 0.1);

            return (
              <div 
                key={principle.num} 
                ref={(el) => (cardRefs.current[index] = el)}
                className="principle-card-wrapper fade-up"
                style={{ transitionDelay: `${cardDelay}s` }}
              >
                <div className="principle-card-glow" />
                <div className="principle-card-inner">
                  <span className="card-bg-number">{principle.num}</span>
                  
                  <div className="card-content">
                    <div className="card-top-row">
                      <span className="card-number-badge">{principle.num}</span>
                      <div className="card-divider" />
                    </div>
                    
                    <h3 className="card-title">{principle.title}</h3>
                    <p className="card-desc">{principle.description}</p>
                    
                    <div className="card-bottom">
                      <span className="card-implication-label">CO TO OZNACZA DLA CIEBIE &rarr;</span>
                      <span className="card-implication-text">{principle.implication}</span>
                    </div>
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
