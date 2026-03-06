import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { Problem } from '@/components/sections/Problem';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Solution } from '@/components/sections/Solution';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Expertise } from '@/components/sections/Expertise';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-text-primary">
      <Header />
      <Hero />
      <Benefits />
      <Problem />
      <ClientLogos />
      <Solution />
      <HowItWorks />
      <Expertise />
      <PortfolioPreview />
      <Testimonials />
      <Footer />
    </main>
  );
}
