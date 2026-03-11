"use client";
import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ endValue, suffix, label, sublabel, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 1800; // 1.8s

    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      const currentVal = Math.floor(endValue * easeOutCubic(percent));
      setCount(currentVal);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [endValue, isVisible]);

  return (
    <div className="counter-item">
      <div className="counter-value-wrapper">
        <span className="counter-number">{count}</span>
        <span className="counter-suffix">{suffix}</span>
      </div>
      <div className="counter-label">{label}</div>
      <div className="counter-sublabel">{sublabel}</div>
    </div>
  );
};

export const ResultsNumbers = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const countersData = [
    {
      endValue: 6,
      suffix: "+",
      label: "Wdrożeń zrealizowanych",
      sublabel: "aktywnie używanych przez klientów"
    },
    {
      endValue: 48,
      suffix: "h",
      label: "Do działającego demo",
      sublabel: "od pierwszej rozmowy"
    },
    {
      endValue: 100,
      suffix: "%",
      label: "Projektów z dokumentacją",
      sublabel: "klient zawsze wie jak obsługiwać system"
    },
    {
      endValue: 0,
      suffix: "",
      label: "Projektów do szuflady",
      sublabel: "każde wdrożenie jest aktywnie używane"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`results-section ${isVisible ? 'visible' : ''}`}
    >
      <style>{`
        .results-section {
          width: 100%;
          background-color: #080808; /* --bg-0 */
          padding: 96px 0;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        
        .results-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .results-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .results-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .results-section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #5A5550; /* --text-3 */
          display: block;
        }

        .results-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 42px;
          letter-spacing: -0.02em;
          color: #F0EFEE; /* --text-1 */
          margin-top: 12px;
          line-height: 1.1;
        }

        .red-separator {
          width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D93025, transparent);
          margin: 0 auto;
          margin-bottom: 64px;
        }

        .counters-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0; border: 1px solid #222222; border-radius: 12px; overflow: hidden;
        }

        .counter-item {
          padding: 40px 48px;
          text-align: center;
          border-right: 1px solid #222222; /* --bg-4 */
          transition: background-color 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .counters-grid .counter-item:last-child {
          border-right: none;
        }

        .counter-item:hover {
          background-color: #0F0F0F; /* --bg-1 */
        }

        .counter-value-wrapper {
          display: flex;
          align-items: baseline;
          justify-content: center;
        }

        .counter-number, .counter-suffix {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 72px;
          line-height: 1.0;
        }
        
        .counter-number {
          color: #F0EFEE; /* --text-1 */
        }

        .counter-suffix {
          color: #D93025; /* --red */
        }

        .counter-label {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 17px;
          color: #F0EFEE; /* --text-1 */
          margin-top: 12px;
          line-height: 1.4;
        }

        .counter-sublabel {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #5A5550; /* --text-3 */
          margin-top: 6px;
        }

        @media (max-width: 1023px) {
          .counters-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .counters-grid .counter-item:nth-child(2) {
            border-right: none;
          }
           .counters-grid .counter-item:nth-child(1), .counters-grid .counter-item:nth-child(2) {
            border-bottom: 1px solid #222222;
          }
          .counter-number, .counter-suffix {
             font-size: 56px;
          }
           .counter-item {
            padding: 32px 24px;
          }
        }
        @media (max-width: 639px) {
           .results-title {
             font-size: 32px;
           }
           .counter-number, .counter-suffix {
             font-size: 48px;
          }
          .counter-item {
            padding: 24px 16px;
          }
        }
      `}</style>

      <div className="results-container">
        <div className="results-header">
          <span className="results-section-label">WYNIKI W LICZBACH</span>
          <h2 className="results-title">Konkretne efekty, nie obietnice</h2>
        </div>
        
        <div className="red-separator" />

        <div className="counters-grid">
          {countersData.map((data, index) => (
            <AnimatedCounter
              key={index}
              {...data}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
