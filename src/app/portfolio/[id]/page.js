import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { projectsData } from '@/data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id,
    }));
}

export function generateMetadata({ params }) {
    const project = projectsData.find((p) => p.id === params.id);

    if (!project) return { title: 'Projekt nie znaleziony - Filar AI' };

    return {
        title: `${project.title} - Case Study | Filar AI`,
        description: project.shortDesc,
    };
}

export default function ProjectPage({ params }) {
    const project = projectsData.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    // Find next and previous projects for the footer navigation
    const currentIndex = projectsData.findIndex(p => p.id === project.id);
    const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
    const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

    return (
        <main className="min-h-screen bg-white dark:bg-dark-bg text-text-primary dark:text-white flex flex-col">
            <Header />

            {/* Back Button */}
            <div className="container-padding pt-12 pb-6 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
                <Link href="/portfolio" className="inline-flex items-center text-text-secondary dark:text-gray-secondary hover:text-accent-500 dark:hover:text-accent-500 font-medium transition-colors">
                    <ArrowLeft size={18} className="mr-2" />
                    Wróć do Portfolio
                </Link>
            </div>

            {/* Hero Section */}
            <section className="pt-8 pb-16 md:pb-24">
                <div className="container-padding flex flex-col md:flex-row gap-12 lg:gap-24 items-center">

                    {/* Image / Placeholder */}
                    <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-gray-light dark:bg-[#1A1A1A] rounded-2xl border border-gray-border dark:border-white/10 flex items-center justify-center shadow-strong overflow-hidden opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                        <div className="text-7xl text-gray-border font-display font-bold">
                            {project.imgPlaceholder}
                        </div>
                    </div>

                    {/* Meta Data */}
                    <div className="w-full md:w-1/2 text-left opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
                        <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em] border-l-2 border-accent-500 pl-4 py-1">
                            {project.category}
                        </span>
                        <h1 className="heading-serif text-h2 md:text-[56px] leading-tight mb-6">
                            {project.title}
                        </h1>
                        <p className="font-body text-text-secondary dark:text-gray-secondary text-lg md:text-xl leading-relaxed font-medium mb-12">
                            {project.shortDesc}
                        </p>

                        {/* Metrics */}
                        {project.metrics && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-border dark:border-white/10">
                                {project.metrics.map((metric, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <span className="text-3xl md:text-4xl font-display font-bold text-text-primary dark:text-white mb-1">
                                            {metric.value}
                                        </span>
                                        <span className="text-xs uppercase tracking-wider font-bold text-gray-text">
                                            {metric.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Case Study Details */}
            <section className="py-24 bg-gray-light dark:bg-[#1A1A1A] border-t border-gray-border dark:border-white/10">
                <div className="container-padding max-w-4xl opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
                    <div className="space-y-16">
                        {/* Problem */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                            <div className="md:w-1/3">
                                <h3 className="heading-serif text-2xl mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-white dark:bg-dark-bg border border-gray-border dark:border-white/10 flex items-center justify-center text-lg shadow-sm">⚠️</span>
                                    Wyzwanie
                                </h3>
                            </div>
                            <div className="md:w-2/3">
                                <p className="font-body text-text-secondary dark:text-gray-secondary text-lg leading-relaxed">
                                    {project.details.problem}
                                </p>
                            </div>
                        </div>

                        {/* Solution */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                            <div className="md:w-1/3">
                                <h3 className="heading-serif text-2xl mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-accent-50 dark:bg-accent-500/10 border border-accent-100 dark:border-accent-500/20 text-accent-500 flex items-center justify-center text-lg shadow-sm">💡</span>
                                    Rozwiązanie
                                </h3>
                            </div>
                            <div className="md:w-2/3">
                                <p className="font-body text-text-secondary dark:text-gray-secondary text-lg leading-relaxed">
                                    {project.details.solution}
                                </p>
                            </div>
                        </div>

                        {/* Effects */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                            <div className="md:w-1/3">
                                <h3 className="heading-serif text-2xl mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-white dark:bg-dark-bg border border-gray-border dark:border-white/10 flex items-center justify-center text-lg shadow-sm">📈</span>
                                    Efekty
                                </h3>
                            </div>
                            <div className="md:w-2/3">
                                <p className="font-body text-text-secondary dark:text-gray-secondary text-lg leading-relaxed">
                                    {project.details.effects}
                                </p>
                            </div>
                        </div>

                        {/* Additional Reference Images Gallery */}
                        <div className="pt-16 border-t border-gray-border dark:border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="w-full aspect-[4/3] bg-white dark:bg-[#222222] border border-gray-border dark:border-white/10 rounded-xl flex items-center justify-center text-3xl text-gray-border dark:text-gray-dark font-display shadow-subtle hover:scale-[1.02] transition-transform">
                                🖼️ Detal 1
                            </div>
                            <div className="w-full aspect-[4/3] bg-white dark:bg-[#222222] border border-gray-border dark:border-white/10 rounded-xl flex items-center justify-center text-3xl text-gray-border dark:text-gray-dark font-display shadow-subtle hover:scale-[1.02] transition-transform">
                                🖼️ Detal 2
                            </div>
                            <div className="w-full aspect-[4/3] bg-white dark:bg-[#222222] border border-gray-border dark:border-white/10 rounded-xl flex items-center justify-center text-3xl text-gray-border dark:text-gray-dark font-display shadow-subtle hover:scale-[1.02] transition-transform hidden lg:flex">
                                🖼️ Detal 3
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next / Prev Project Integration */}
            <section className="py-16 bg-white dark:bg-dark-bg border-t border-gray-border dark:border-white/10">
                <div className="container-padding flex flex-col sm:flex-row justify-between items-center gap-8">
                    {prevProject ? (
                        <Link href={`/portfolio/${prevProject.id}`} className="group flex items-center gap-4 w-full sm:w-auto p-4 rounded-xl border border-transparent hover:border-gray-border dark:hover:border-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-gray-light dark:bg-[#1A1A1A] flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                                <ArrowLeft size={16} />
                            </div>
                            <div className="text-left">
                                <span className="text-xs uppercase font-bold text-gray-text block">Poprzedni Projekt</span>
                                <span className="font-serif font-bold text-lg group-hover:text-accent-500 transition-colors">{prevProject.title}</span>
                            </div>
                        </Link>
                    ) : <div></div>}

                    {/* Center CTA */}
                    <div className="text-center order-first sm:order-none w-full sm:w-auto">
                        <Link href="/portfolio" className="btn-secondary whitespace-nowrap">
                            Wszystkie realizacje
                        </Link>
                    </div>

                    {nextProject ? (
                        <Link href={`/portfolio/${nextProject.id}`} className="group flex items-center gap-4 w-full sm:w-auto justify-end p-4 rounded-xl border border-transparent hover:border-gray-border dark:hover:border-white/10 transition-colors text-right">
                            <div className="text-right">
                                <span className="text-xs uppercase font-bold text-gray-text block">Następny Projekt</span>
                                <span className="font-serif font-bold text-lg group-hover:text-accent-500 transition-colors">{nextProject.title}</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-light dark:bg-[#1A1A1A] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                    ) : <div></div>}
                </div>
            </section>

            {/* Floating Contact CTA */}
            <section className="py-24 bg-dark-bg text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-accent-500/10"></div>
                <div className="container-padding relative z-10">
                    <h2 className="heading-serif text-h2 mb-6">Gotowy na podobne efekty?</h2>
                    <p className="font-body text-gray-text text-lg max-w-2xl mx-auto mb-10">Porozmawiajmy o tym, jak możemy zoptymalizować i zautomatyzować Twoje procesy B2B.</p>
                    <Link href="/kontakt" className="btn-primary text-lg px-10 py-4 shadow-[0_0_30px_rgba(255,27,109,0.3)] hover:shadow-[0_0_40px_rgba(255,27,109,0.5)]">
                        Zarezerwuj darmową rozmowę
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
