"use client";

import React from 'react';
import { FloatingHeader } from '@/components/FloatingHeader';
import { PortfolioHero } from '@/components/sections/PortfolioHero';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-[#F0EFEE]">
            <FloatingHeader />
            
            <PortfolioHero />
            
            <ProjectsGrid />

            <Testimonials />

            <FinalCTA />
        </main>
    );
}
