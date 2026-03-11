"use client";
import React, { useEffect, useState, useRef } from 'react';

// Data for technology stack
const TECH_CATEGORIES = [
  {
    name: 'AUTOMATYZACJE',
    tools: [
      { name: 'n8n', isMain: true },
      { name: 'Make (Integromat)', isMain: true },
      { name: 'Zapier', isMain: false },
      { name: 'Webhooks & REST API', isMain: false }
    ]
  },
  {
    name: 'MODELE AI',
    tools: [
      { name: 'Claude (Anthropic)', isMain: true },
      { name: 'GPT-4 (OpenAI)', isMain: false },
      { name: 'Gemini (Google)', isMain: false },
      { name: 'Ollama (local models)', isMain: false }
    ]
  },
  {
    name: 'APLIKACJE I FRONTEND',
    tools: [
      { name: 'React', isMain: true },
      { name: 'Next.js', isMain: true },
      { name: 'Tailwind CSS', isMain: false },
      { name: 'Vercel', isMain: false }
    ]
  },
  {
    name: 'BAZY DANYCH I BACKEND',
    tools: [
      { name: 'Supabase', isMain: true },
      { name: 'Airtable', isMain: false },
      { name: 'PostgreSQL', isMain: false },
      { name: 'Notion API', isMain: false }
    ]
  },
  {
    name: 'NARZĘDZIA BIZNESOWE',
    tools: [
      { name: 'Google Workspace', isMain: false },
      { name: 'Calendly', isMain: false },
      { name: 'WhatsApp Business API', isMain: false },
      { name: 'Slack API', isMain: false }
    ]
  }
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
      className={`tech-stack-section ${isVisible ? 'visible' : ''}`}
    >
      <style>{`
        .tech-stack-section {
          width: 100%;
          background-color: #080808; /* --bg-0 */
          padding: 96px 0;
        }
        
        .tech-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* --- Animations --- */
        .fade-up {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .tech-stack-section.visible .fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Top Section --- */
        .tech-top-block {
          text-align: center;
          margin-bottom: 64px;
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

        .tech-separator {
          height: 1px;
          width: 60px;
          background-color: #D93025; /* --red */
          margin: 40px auto 0;
        }

        /* --- Categories --- */
        .tech-categories {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .category-accent {
          width: 4px;
          height: 20px;
          background-color: #D93025; /* --red */
          border-radius: 2px;
        }

        .category-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #5A5550; /* --text-3 */
        }

        /* --- Tools Grid --- */
        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tool-pill {
          background-color: #141414; /* --bg-2 */
          border: 1px solid #222222; /* --bg-4 */
          border-radius: 8px; /* --r-md */
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
        }

        .tool-pill:hover {
          border-color: #D93025; /* --red */
          background-color: #1A1A1A; /* --bg-3 */
          transform: translateY(-1px);
        }

        .tool-logo-box {
          width: 24px;
          height: 24px;
          background-color: #1A1A1A; /* --bg-3 */
          border-radius: 4px; /* --r-sm */
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tool-logo-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          color: #5A5550; /* --text-3 */
        }

        .tool-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #F0EFEE; /* --text-1 */
          white-space: nowrap;
        }

        .tool-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          text-transform: uppercase;
          color: #D93025; /* --red */
          background-color: rgba(217, 48, 37, 0.08); /* --red-subtle */
          border: 1px solid rgba(217, 48, 37, 0.25); /* --red-border */
          border-radius: 9999px; /* --r-full */
          padding: 2px 8px;
          margin-left: 4px;
          white-space: nowrap;
        }

        @media (max-width: 767px) {
          .tech-container {
            padding: 0 24px;
          }

          .tools-grid {
            gap: 10px;
          }

          .tool-pill {
            width: 100%;
            justify-content: flex-start;
          }
          
          .tool-name {
            white-space: normal;
          }
        }
      `}</style>

      <div className="tech-container">
        {/* Top Heading Block (0s delay) */}
        <div className="tech-top-block fade-up" style={{ transitionDelay: '0s' }}>
          <span className="tech-section-label">TECHNOLOGIE</span>
          <h2 className="tech-h2">
            Narzędzia których <span className="tech-h2-accent">używam</span>
          </h2>
          <p className="tech-subtitle">
            Każde narzędzie na tej liście znam od środka — nie z tutoriali, ale z dziesiątek godzin wdrożeń w realnych projektach.
          </p>
          <div className="tech-separator" />
        </div>

        {/* Categories Stack */}
        <div className="tech-categories">
          {TECH_CATEGORIES.map((category, catIndex) => {
            // category delay: stagger 0.12s per category, starting after 0.1s
            const catDelay = 0.1 + (catIndex * 0.12);

            return (
              <div 
                key={category.name} 
                className="category-block fade-up"
                style={{ transitionDelay: `${catDelay}s` }}
              >
                {/* Category Header */}
                <div className="category-header">
                  <div className="category-accent" />
                  <span className="category-name">{category.name}</span>
                </div>

                {/* Tools Grid */}
                <div className="tools-grid">
                  {category.tools.map((tool, toolIndex) => {
                    // tool pill delay: category delay + stagger 0.04s per tool
                    const toolDelay = catDelay + (toolIndex * 0.04);
                    // generate 2 letter logo text
                    const logoLetters = tool.name.substring(0, 2).toUpperCase();

                    return (
                      <div 
                        key={tool.name} 
                        className="tool-pill fade-up"
                        style={{ transitionDelay: `${toolDelay}s` }}
                      >
                        <div className="tool-logo-box">
                          <span className="tool-logo-text">{logoLetters}</span>
                        </div>
                        <span className="tool-name">{tool.name}</span>
                        {tool.isMain && (
                          <span className="tool-tag">GŁÓWNE</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
