"use client";

import { useState } from 'react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Testimonials } from '@/components/sections/Testimonials';

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("Wszystkie");

    const projects = [
        { title: "System CRM z AI", category: "Agentic Workflow", imgPlaceholder: "CRM" },
        { title: "Automatyczny Kalendarz", category: "Automatyzacja", imgPlaceholder: "KAL" },
        { title: "Aplikacja dla Gabinetu", category: "Web Apps", imgPlaceholder: "APP" },
        { title: "Wizytówka Premium", category: "Strony", imgPlaceholder: "WWW" },
        { title: "Panel Klienta", category: "Web Apps", imgPlaceholder: "B2B" },
        { title: "Bot Odpowiadający", category: "Agentic Workflow", imgPlaceholder: "BOT" },
    ];

    const filters = ["Wszystkie", "Automatyzacja", "Web Apps", "Strony", "Agentic Workflow"];

    const filteredProjects = activeFilter === "Wszystkie"
        ? projects
        : projects.filter(proj => proj.category === activeFilter);

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
                            <div key={`${proj.title}-${idx}`} className="group cursor-pointer opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
                                <div className="w-full aspect-video bg-gray-light dark:bg-[#1A1A1A] border border-gray-border dark:border-white/10 rounded-lg mb-6 overflow-hidden relative shadow-subtle group-hover:shadow-medium transition-all duration-300">
                                    <div className="w-full h-full flex items-center justify-center text-5xl text-gray-border font-display font-bold group-hover:scale-105 transition-transform duration-500">
                                        {proj.imgPlaceholder}
                                    </div>
                                    <div className="absolute inset-0 bg-dark-bg/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                        <span className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <h3 className="heading-serif font-bold text-2xl mb-2 group-hover:text-accent-500 transition-colors">{proj.title}</h3>
                                <p className="font-body text-gray-text text-xs uppercase tracking-widest font-bold">{proj.category}</p>
                            </div>
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
