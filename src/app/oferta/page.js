import { FloatingHeader } from '@/components/FloatingHeader';
import { OfertaHero } from '@/components/sections/OfertaHero';
import { OfertaProblem } from '@/components/sections/OfertaProblem';
import { ServicesTabs } from '@/components/sections/ServicesTabs';
import { OfertaDlaKogo } from '@/components/sections/OfertaDlaKogo';

export const metadata = {
    title: "Oferta - Filar AI",
    description: "Rozwiązania które działają. Automatyzacje procesów, agenci AI i systemy skrojone pod potrzeby Twojej agencji.",
};

export default function OfertaPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-[#F0EFEE]">
            <FloatingHeader />

            <OfertaHero />

            <OfertaProblem />

            <ServicesTabs />

            <OfertaDlaKogo />
            
            {/* Future sections will be added here */}
        </main>
    );
}
