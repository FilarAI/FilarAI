"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { FloatingHeader } from '@/components/FloatingHeader';
import { Footer } from '@/components/sections/Footer';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const ProjectPageTemplate = ({ project }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade ups
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-up-section').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  if (!project) return null;

  // Render text replacing the highlight word with red span
  const renderTitle = (title, matchWord) => {
    if (!matchWord) return title;
    const parts = title.split(new RegExp(`(${matchWord})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === matchWord.toLowerCase() 
        ? <span key={i} className="text-[#D93025]">{part}</span> 
        : part
    );
  };

  return (
    <main className="min-h-screen bg-[#080808] text-[#F0EFEE] overflow-x-hidden">
      <FloatingHeader />

      <style>{`
        /* Custom Colors matching BRAND.md implicitly */
        :root {
          --bg-0: #080808;
          --bg-1: #0A0A0A;
          --bg-2: #141414;
          --bg-3: #1A1A1A;
          --bg-4: #222222;
          --text-1: #F0EFEE;
          --text-2: #9A9590;
          --text-3: #5A5550;
          --red: #D93025;
          --red-border: rgba(217, 48, 37, 0.4);
          --red-subtle: rgba(217, 48, 37, 0.05);
          --success: #2E8B57; /* using a standard green for success if needed */
        }

        .fade-up-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-up-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Initial Hero Fade Sequence */
        .hero-elem {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUpHero 0.8s ease-out forwards;
        }
        @keyframes fadeUpHero {
          to { opacity: 1; transform: translateY(0); }
        }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }

        /* Flow Diagram Animation */
        .flow-diagram-line {
          position: relative;
        }
        .flow-diagram-line::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: rgba(217, 48, 37, 0.4);
          transform: translateX(-50%);
          z-index: 0;
        }
        .flow-diagram-dot {
          position: absolute;
          left: 50%;
          top: 0;
          width: 6px;
          height: 6px;
          background-color: var(--red);
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 10;
          animation: travelLine 2.5s linear infinite;
        }
        @keyframes travelLine {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* Pill Reuse Styles */
        .tool-pill {
          background-color: #141414;
          border: 1px solid #222222;
          border-radius: 9999px;
          padding: 10px 20px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }
        .tool-pill:hover {
          border-color: #D93025;
          background-color: #1A1A1A;
        }
        .tool-logo-box {
          width: 20px;
          height: 20px;
          background-color: #1A1A1A;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tool-logo-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 7px;
          color: #5A5550;
        }
      `}</style>

      {/* Back Button */}
      <div className="flex fixed top-[80px] md:top-[88px] left-6 md:left-[40px] z-50">
        <Link href="/portfolio" className="group flex items-center gap-2 text-[#5A5550]/80 md:text-[#5A5550] bg-black/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 px-3 py-1.5 md:p-0 rounded-full md:rounded-none border border-white/5 md:border-none hover:text-[#F0EFEE] transition-all duration-150">
          <ArrowLeft size={16} />
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.08em]">Portfolio</span>
        </Link>
      </div>

      {/* SECTION 01: Hero */}
      <section className="w-full bg-[#080808] pt-[140px] pb-0">
        <div className="max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <span className="hero-elem delay-1 font-mono text-[10px] uppercase bg-[rgba(217,48,37,0.05)] border border-[rgba(217,48,37,0.4)] text-[#D93025] rounded-full px-[14px] py-1 inline-block mb-5">
              {project.industry}
            </span>
            <h1 className="hero-elem delay-2 font-display font-[800] text-[42px] md:text-[52px] tracking-[-0.03em] text-[#F0EFEE] leading-[1.05] mb-5">
              {renderTitle(project.title, project.highlightWord)}
            </h1>
            <p className="hero-elem delay-3 font-body font-[400] text-[17px] text-[#9A9590] leading-[1.75] mb-8">
              {project.intro}
            </p>
            <div className="hero-elem delay-4 flex items-center gap-4 py-5 px-6 bg-[#141414] border border-[#222222] rounded-xl inline-flex shadow-sm">
              <span className="font-display font-[800] text-[42px] text-[#F0EFEE] leading-none">
                {project.result.number}
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-[#5A5550] mb-[2px]">
                  {project.result.label}
                </span>
                <span className="font-body font-[400] text-[13px] text-[#9A9590]">
                  {project.result.descriptor}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 hero-elem delay-3">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#222222] bg-[#141414] shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(217,48,37,0.1)] relative">
              {/* Fallback image style as requested (bg-2 placeholder if no actual image loads) */}
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(/${project.image})` }}
                aria-label={project.title}
              />
            </div>
          </div>
        </div>
        
        {/* Red separator line */}
        <div 
          className="w-full h-[1px] mt-[80px] opacity-30"
          style={{ background: 'linear-gradient(90deg, transparent, #D93025 30%, #D93025 70%, transparent)' }}
        />
      </section>

      {/* SECTION 02: Problem */}
      <section className="w-full bg-[#0A0A0A] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row gap-16 items-start fade-up-section">
          <div className="w-full md:w-[40%]">
            <div className="font-display font-[800] text-[80px] text-[#1A1A1A] leading-none mb-[-16px]">01</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#D93025]">Wyzwanie</div>
            <h2 className="font-display font-[700] text-[32px] text-[#F0EFEE] mt-2">Problem</h2>
          </div>
          <div className="w-full md:w-[60%] pt-2">
            <p className="font-body font-[500] text-[18px] text-[#F0EFEE] leading-[1.6] mb-6">
              {project.problem.lead}
            </p>
            <div className="flex flex-col gap-4">
              {project.problem.bullets.map((bullet, idx) => (
                <div key={idx} className="flex flex-row gap-[14px]">
                  <div className="w-2 h-2 bg-[#D93025] flex-shrink-0 mt-2" />
                  <p className="font-body font-[400] text-[15px] text-[#9A9590] leading-[1.7]">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Rozwiązanie */}
      <section className="w-full bg-[#080808] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row gap-16 items-start fade-up-section">
          <div className="w-full md:w-[40%]">
            <div className="font-display font-[800] text-[80px] text-[#1A1A1A] leading-none mb-[-16px]">02</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#D93025]">Podejście</div>
            <h2 className="font-display font-[700] text-[32px] text-[#F0EFEE] mt-2">Rozwiązanie</h2>
            <p className="font-body font-[400] text-[15px] text-[#9A9590] leading-[1.75] mt-4">
              {project.solution.description}
            </p>
          </div>
          <div className="w-full md:w-[60%] pt-2">
            {project.solution.hasFlowDiagram ? (
              <div className="flex flex-col gap-8 flow-diagram-line py-4 relative">
                <div className="flow-diagram-dot" />
                {project.solution.flowSteps.map((step, idx) => (
                  <div key={idx} className="relative z-10 w-fit mx-auto bg-[#141414] border border-[#222222] rounded-md px-4 py-2 text-center shadow-lg">
                    <span className="font-body font-[500] text-[13px] text-[#F0EFEE]">{step}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {project.solution.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-row gap-[14px]">
                    <div className="w-4 h-4 flex-shrink-0 mt-1 flex items-center justify-center rounded-full bg-[#2E8B57]/20">
                      <Check size={10} color="#2E8B57" strokeWidth={3} />
                    </div>
                    <p className="font-body font-[400] text-[15px] text-[#9A9590] leading-[1.7]">{feature}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 04: Wyniki */}
      <section className="w-full bg-[#0A0A0A] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-10 fade-up-section">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-[40%]">
              <div className="font-display font-[800] text-[80px] text-[#1A1A1A] leading-none mb-[-16px]">03</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#D93025]">Rezultaty</div>
              <h2 className="font-display font-[700] text-[32px] text-[#F0EFEE] mt-2">Wyniki</h2>
            </div>
            <div className="w-full md:w-[60%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((res, idx) => (
                  <div key={idx} className="bg-[#141414] border border-[#222222] rounded-xl p-6 shadow-sm hover:border-[#D93025]/30 transition-colors">
                    <div className="font-display font-[800] text-[36px] text-[#F0EFEE] leading-none mb-1">{res.number}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#5A5550]">{res.label}</div>
                    <div className="font-body font-[400] text-[13px] text-[#9A9590] mt-2 leading-[1.6]">
                      {res.description}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 px-7 border-l-[3px] border-[#D93025] bg-[rgba(217,48,37,0.05)] rounded-r-md">
                <p className="font-body font-[400] italic text-[16px] text-[#F0EFEE] leading-[1.7]">
                  "{project.testimonial.quote}"
                </p>
                <div className="font-mono text-[10px] uppercase tracking-[0.05em] text-[#D93025] mt-[10px]">
                  {project.testimonial.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: Tech Stack */}
      <section className="w-full bg-[#080808] py-[64px]">
        <div className="max-w-[1200px] mx-auto px-10 text-center fade-up-section">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#5A5550] block mb-6">TECHNOLOGIE W PROJEKCIE</span>
          <div className="flex flex-wrap justify-center gap-3">
            {project.techStack.map((tech, idx) => {
              const logoLetters = tech.substring(0, 2).toUpperCase();
              return (
                <div key={idx} className="tool-pill shadow-sm">
                  <div className="tool-logo-box">
                    <span className="tool-logo-text">{logoLetters}</span>
                  </div>
                  <span className="font-body font-[500] text-[14px] text-[#9A9590]">{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 06: CTA */}
      <FinalCTA />
    </main>
  );
};
