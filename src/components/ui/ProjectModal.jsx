"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export const ProjectModal = ({ project, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [project]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 animate-[fadeIn_0.3s_ease-out_forwards]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-bg rounded-2xl shadow-strong animate-[fadeInUp_0.4s_ease-out_forwards] border border-gray-border dark:border-white/10 flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-light dark:bg-[#1A1A1A] text-text-primary dark:text-white hover:text-accent-500 hover:scale-110 transition-all duration-300"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>

                {/* Left Side: Image / Placeholder */}
                <div className="md:w-5/12 bg-gray-light dark:bg-[#1A1A1A] flex flex-col items-center justify-center p-12 min-h-[300px] md:min-h-full border-b md:border-b-0 md:border-r border-gray-border dark:border-white/10">
                    <div className="w-full aspect-square flex items-center justify-center text-6xl text-gray-border font-display font-bold">
                        {project.imgPlaceholder}
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="md:w-7/12 p-8 md:p-12 flex flex-col">
                    <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-4 block [letter-spacing:0.15em]">
                        {project.category}
                    </span>
                    <h2 className="heading-serif text-3xl md:text-4xl mb-6 leading-tight">
                        {project.title}
                    </h2>

                    <p className="font-body text-text-secondary dark:text-gray-secondary text-lg mb-10 leading-relaxed font-medium">
                        {project.shortDesc}
                    </p>

                    <div className="space-y-8 flex-grow">
                        {/* Problem */}
                        <div>
                            <h3 className="font-body font-bold text-text-primary dark:text-white text-lg mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded bg-gray-border dark:bg-white/10 flex items-center justify-center text-sm">⚠️</span>
                                Wyzwanie
                            </h3>
                            <p className="text-secondary text-base leading-relaxed">
                                {project.details?.problem || "Brak opisu problemu."}
                            </p>
                        </div>

                        {/* Solution */}
                        <div>
                            <h3 className="font-body font-bold text-text-primary dark:text-white text-lg mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded bg-accent-50 font-bold dark:bg-accent-500/20 text-accent-500 flex items-center justify-center text-sm">💡</span>
                                Nasze Rozwiązanie
                            </h3>
                            <p className="text-secondary text-base leading-relaxed">
                                {project.details?.solution || "Brak opisu rozwiązania."}
                            </p>
                        </div>

                        {/* Effects */}
                        <div>
                            <h3 className="font-body font-bold text-text-primary dark:text-white text-lg mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded bg-gray-border dark:bg-white/10 flex items-center justify-center text-sm">📈</span>
                                Efekty
                            </h3>
                            <p className="text-secondary text-base leading-relaxed">
                                {project.details?.effects || "Brak opisu efektów."}
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-border dark:border-white/10 text-center md:text-left">
                        <a href="https://calendar.app.google/oxdocXuk5a2ohKZf9" target="_blank" rel="noopener noreferrer" className="btn-primary w-full md:w-auto">
                            Zbudujmy coś podobnego
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};
