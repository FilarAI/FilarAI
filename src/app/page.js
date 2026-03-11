import { FloatingHeader } from '@/components/FloatingHeader';
import { Hero } from '@/components/sections/Hero';
import { Challenge } from '@/components/sections/Challenge';
import { Fomo } from '@/components/sections/Fomo';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Clients } from '@/components/sections/Clients';
import { Testimonials } from '@/components/sections/Testimonials';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg text-text-primary dark:text-white">
      <FloatingHeader />
      <Hero />
      <Challenge />
      <Fomo />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Process />
      <About />
      <FinalCTA />
    </main>
  );
}
