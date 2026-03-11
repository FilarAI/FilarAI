import { FloatingHeader } from '@/components/FloatingHeader';
import { Footer } from '@/components/sections/Footer';
import { AboutHero } from '@/components/sections/AboutHero';
import { HistoryMission } from '@/components/sections/HistoryMission';
import { TechStack } from '@/components/sections/TechStack';
import { WorkingPrinciples } from '@/components/sections/WorkingPrinciples';
import { Certifications } from '@/components/sections/Certifications';
import { ResultsNumbers } from '@/components/sections/ResultsNumbers';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata = {
    title: "O Nas - Filar AI",
    description: "Kim jesteśmy, w co wierzymy i jakie kompetencje stawiamy do dyspozycji Twojej agencji. Dowiedz się więcej o Kacperze Filar i naszym podejściu do automatyzacji.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-[#F0EFEE]">
            <FloatingHeader />

            <AboutHero />

            <HistoryMission />

            <TechStack />

            <WorkingPrinciples />

            <Certifications />

            <ResultsNumbers />

            <FinalCTA />

            <Footer hideCTA={true} />
        </main>
    );
}
