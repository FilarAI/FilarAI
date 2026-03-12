"use client";

import React from 'react';
import { FloatingHeader } from '@/components/FloatingHeader';
import { PortfolioHero } from '@/components/sections/PortfolioHero';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { ResultsNumbers } from '@/components/sections/ResultsNumbers';
import { Testimonials } from '@/components/sections/Testimonials';
import { Certifications } from '@/components/sections/Certifications';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Button } from '@/components/ui/Button';

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-[#F0EFEE]">
            <FloatingHeader />
            
            <PortfolioHero />
            
            <ProjectsGrid />
            
            <div className="flex justify-center py-12">
                <Button href="/kontakt" variant="primary" className="px-8 py-4 text-lg">
                    Umów konsultację
                </Button>
            </div>

            <ResultsNumbers />

            <Testimonials />

            <div className="flex justify-center py-12">
                <Button href="/kontakt" variant="primary" className="px-8 py-4 text-lg">
                    Umów konsultację
                </Button>
            </div>

            <Certifications />

            <FinalCTA />
        </main>
    );
}
