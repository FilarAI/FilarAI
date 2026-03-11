import { FloatingHeader } from '@/components/FloatingHeader';
import { OfertaHero } from '@/components/sections/OfertaHero';

export const metadata = {
    title: "Oferta - Filar AI",
    description: "Rozwiązania które działają. Automatyzacje procesów, agenci AI i systemy skrojone pod potrzeby Twojej agencji.",
};

export default function OfertaPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-[#F0EFEE]">
            <FloatingHeader />

            <OfertaHero />
            
            {/* Future sections will be added here */}
        </main>
    );
}
