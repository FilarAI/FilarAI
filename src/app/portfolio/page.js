"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Testimonials } from '@/components/sections/Testimonials';
import { projectsData } from '@/data/projects';

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("Wszystkie");

    const filters = ["Wszystkie", "Automatyzacja", "Web Apps", "Strony", "Agentic Workflow"];

    const filteredProjects = activeFilter === "Wszystkie"
        ? projectsData
        : projectsData.filter(proj => proj.category === activeFilter);

    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg text-text-primary dark:text-white">
            <Header />

            {/* Hero Section Portfolio */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-light dark:bg-[#1A1A1A] border-b border-gray-border dark:border-white/10 text-center">
                <div className="container-padding max-w-4xl opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <h1 className="heading-serif text-h1 md:text-[56px] leading-tight mb-6">Portfolio & Opinie</h1>
                    <p className="font-body text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Sprawdź jakie rezultaty osiągnęli nasi dotychczasowi klienci, decydując się na wdrożenie mądrze zaprojektowanych automatyzacji.
                    </p>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="py-12 bg-white dark:bg-dark-bg">
                <div className="container-padding flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
                    {filters.map((f, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveFilter(f)}
                            className={`px-6 py-2 rounded-full font-body font-medium text-sm transition-all duration-300 ${activeFilter === f
                                ? 'bg-text-primary dark:bg-white text-white dark:text-text-primary border-none shadow-medium'
                                : 'bg-transparent text-text-secondary border border-gray-border dark:border-white/10 hover:border-accent-500 hover:text-accent-500'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </section>

            {/* Project Grid */}
            <section className="pb-24 bg-white dark:bg-dark-bg border-b border-gray-border dark:border-white/10">
                <div className="container-padding">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredProjects.map((proj, idx) => (
                            <Link
                                href={`/portfolio/${proj.id}`}
                                key={proj.id}
                                className="group card-default cursor-pointer opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] flex flex-col p-0 overflow-hidden"
                                style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                            >
                                <div className="w-full aspect-video bg-gray-light dark:bg-[#1A1A1A] border-b border-gray-border dark:border-white/10 relative flex-shrink-0 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-5xl text-gray-border dark:text-white/10 font-display font-bold group-hover:scale-105 transition-transform duration-500">
                                        {proj.imgPlaceholder}
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <h3 className="heading-serif font-bold text-2xl mb-2 group-hover:text-accent-500 transition-colors">{proj.title}</h3>
                                    <p className="font-body text-accent-500 text-xs uppercase tracking-widest font-bold mb-3">{proj.category}</p>
                                    <p className="font-body text-text-secondary dark:text-gray-secondary text-sm leading-relaxed mb-6 line-clamp-3">{proj.shortDesc}</p>

                                    <div className="mt-auto pt-4 border-t border-gray-border dark:border-white/10 flex items-center justify-between text-accent-500 font-bold group-hover:translate-x-2 transition-transform duration-300">
                                        <span className="text-sm uppercase tracking-widest">Dowiedz się więcej</span>
                                        <span className="text-lg">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* Final Mini CTA before Footer */}
            <section className="py-24 bg-gray-light dark:bg-[#1A1A1A] text-center border-t border-gray-border dark:border-white/10">
                <div className="container-padding max-w-2xl opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <h2 className="heading-serif text-h2 mb-8">Chcesz być następny?</h2>
                    <a href="https://calendar.app.google/oxdocXuk5a2ohKZf9" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                        Zarezerwuj wstępną konsultację
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
