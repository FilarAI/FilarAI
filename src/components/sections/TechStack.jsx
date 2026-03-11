"use client";
import React, { useEffect, useState, useRef } from 'react';

const ROW_1_TOOLS = [
  { name: 'n8n', isMain: true },
  { name: 'Make', isMain: true },
  { name: 'Claude (Anthropic)', isMain: true },
  { name: 'React', isMain: true },
  { name: 'Supabase', isMain: true },
  { name: 'Next.js', isMain: true },
  { name: 'GPT-4', isMain: false },
  { name: 'Tailwind CSS', isMain: false },
  { name: 'Webhooks & REST API', isMain: false },
  { name: 'Vercel', isMain: false },
];

const ROW_2_TOOLS = [
  { name: 'Zapier', isMain: false },
  { name: 'Airtable', isMain: false },
  { name: 'Gemini', isMain: false },
  { name: 'PostgreSQL', isMain: false },
  { name: 'Notion API', isMain: false },
  { name: 'Google Workspace', isMain: false },
  { name: 'Calendly', isMain: false },
  { name: 'WhatsApp API', isMain: false },
  { name: 'Slack API', isMain: false },
  { name: 'Ollama', isMain: false },
];

export const TechStack = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const renderTool = (tool, index) => {
    const logoLetters = tool.name.substring(0, 2).toUpperCase();
    return (
      <div key={`${tool.name}-${index}`} className="tool-pill">
        <div className="tool-logo-box">
          <span className="tool-logo-text">{logoLetters}</span>
        </div>
        {tool.isMain && <div className="tool-main-dot" />}
        <span className="tool-name">{tool.name}</span>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef} 
      className={`tech-stack-section ${isVisible ? 'visible' : ''}`}
    >
      <style>{`
        .tech-stack-section {
          width: 100%;
          background-color: #080808; /* --bg-0 */
          padding: 96px 0;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .tech-stack-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-top-block {
          text-align: center;
          max-width: 1200px;
          margin: 0 auto 64px;
          padding: 0 40px;
        }

        .tech-section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #5A5550; /* --text-3 */
          display: block;
        }

        .tech-h2 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 42px;
          letter-spacing: -0.02em;
          color: #F0EFEE; /* --text-1 */
          margin-top: 12px;
        }

        .tech-h2-accent {
          color: #D93025; /* --red */
        }

        .tech-subtitle {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 17px;
          color: #9A9590; /* --text-2 */
          max-width: 540px;
          margin: 16px auto 0;
          line-height: 1.75;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .marquee-row {
          display: flex;
          width: fit-content;
        }

        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-track {
          display: flex;
        }

        .marquee-row-1 .marquee-track {
          animation: scrollLeft 30s linear infinite;
        }

        .marquee-row-2 .marquee-track {
          animation: scrollRight 35s linear infinite;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }

        .tool-pill {
          background-color: #141414; /* --bg-2 */
          border: 1px solid #222222; /* --bg-4 */
          border-radius: 9999px; /* --r-full */
          padding: 10px 20px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          flex-shrink: 0;
          margin-right: 12px;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        .tool-pill:hover {
          border-color: #D93025; /* --red */
          background-color: #1A1A1A; /* --bg-3 */
        }

        .tool-logo-box {
          width: 20px;
          height: 20px;
          background-color: #1A1A1A; /* --bg-3 */
          border-radius: 4px; /* --r-sm */
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tool-logo-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 7px;
          color: #5A5550; /* --text-3 */
        }

        .tool-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #9A9590; /* --text-2 */
        }

        .tool-main-dot {
          width: 6px;
          height: 6px;
          background-color: #D93025; /* --red */
          border-radius: 50%;
          flex-shrink: 0;
        }
      `}</style>

      <div className="tech-top-block">
        <span className="tech-section-label">TECHNOLOGIE</span>
        <h2 className="tech-h2">
          Narzędzia których <span className="tech-h2-accent">używam</span>
        </h2>
        <p className="tech-subtitle">
          Każde narzędzie na tej liście znam od środka — nie z tutoriali, ale z dziesiątek godzin wdrożeń w realnych projektach.
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-row marquee-row-1">
          {/* Track 1 */}
          <div className="marquee-track">
            {ROW_1_TOOLS.map((tool, i) => renderTool(tool, i))}
          </div>
          {/* Duplicate Track 1 for infinite scroll */}
          <div className="marquee-track" aria-hidden="true">
            {ROW_1_TOOLS.map((tool, i) => renderTool(tool, `dup-${i}`))}
          </div>
        </div>

        <div className="marquee-row marquee-row-2">
          {/* Track 2 */}
          <div className="marquee-track">
            {ROW_2_TOOLS.map((tool, i) => renderTool(tool, i))}
          </div>
          {/* Duplicate Track 2 for infinite scroll */}
          <div className="marquee-track" aria-hidden="true">
            {ROW_2_TOOLS.map((tool, i) => renderTool(tool, `dup-${i}`))}
          </div>
        </div>
      </div>
    </section>
  );
};
