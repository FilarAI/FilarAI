import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Challenge } from '@/components/sections/Challenge';
import { Fomo } from '@/components/sections/Fomo';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Clients } from '@/components/sections/Clients';
import { Testimonials } from '@/components/sections/Testimonials';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { Benefits } from '@/components/sections/Benefits';
import { Problem } from '@/components/sections/Problem';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Solution } from '@/components/sections/Solution';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Expertise } from '@/components/sections/Expertise';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg text-text-primary dark:text-white">
      <Header />
      <Hero />
      <Challenge />
      <Fomo />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Process />
      <About />
      <ClientLogos />
      <Benefits />
      <Problem />
      <Solution />
      <HowItWorks />
      <Expertise />
      <PortfolioPreview />
      <Footer />
    </main>
  );
}
