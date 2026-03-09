import Link from 'next/link';
import { projectsData } from '@/data/projects';

export const PortfolioPreview = () => {
    const projects = projectsData.slice(0, 3);

    return (
        <section className="section-spacing bg-gray-light dark:bg-[#1A1A1A] border-y border-gray-border dark:border-white/10">
            <div className="container-padding">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                    <div>
                        <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em] border-l-2 border-accent-500 pl-4 py-1">
                            Portfolio
                        </span>
                        <h2 className="heading-serif text-h2 md:text-[42px] leading-tight">
                            Sprawdź co robimy
                        </h2>
                    </div>
                    <a href="/portfolio" className="hidden md:inline-flex items-center text-text-primary dark:text-white border-b-2 border-transparent hover:border-accent-500 hover:text-accent-500 transition-all duration-300 font-bold pb-1">
                        Więcej prac <span className="ml-2">→</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {projects.map((proj, idx) => (
                        <Link
                            href={`/portfolio/${proj.id}`}
                            key={proj.id}
                            className="group card-default cursor-pointer opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] flex flex-col p-0 overflow-hidden"
                            style={{ animationDelay: `${(idx + 1) * 0.15}s` }}
                        >
                            <div className="w-full aspect-video bg-gray-light dark:bg-[#1A1A1A] border-b border-gray-border dark:border-white/10 relative flex-shrink-0">
                                <div className="w-full h-full flex items-center justify-center text-4xl text-gray-border dark:text-white/10 font-display font-bold group-hover:scale-105 transition-transform duration-500">
                                    {proj.imgPlaceholder}
                                </div>
                                <div className="absolute inset-0 bg-dark-bg/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                    <span className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-all duration-400 pointer-events-none">
                                        Zobacz projekt
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="heading-serif font-bold text-xl mb-2 group-hover:text-accent-500 transition-colors">{proj.title}</h3>
                                <p className="font-body text-accent-500 text-xs uppercase tracking-wider font-bold mb-3">{proj.category}</p>
                                <p className="font-body text-text-secondary dark:text-gray-secondary text-sm leading-relaxed mb-6 line-clamp-3">{proj.shortDesc}</p>

                                <div className="mt-auto pt-4 border-t border-gray-border dark:border-white/10 flex items-center justify-between text-accent-500 font-bold group-hover:translate-x-2 transition-transform duration-300">
                                    <span className="text-sm uppercase tracking-widest">Dowiedz się więcej</span>
                                    <span className="text-lg">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="md:hidden text-center opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
                    <a href="/portfolio" className="btn-secondary w-full">Więcej prac</a>
                </div>

            </div>
        </section>
    );
};
