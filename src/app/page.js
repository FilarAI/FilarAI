import { FloatingHeader } from '@/components/sections/FloatingHeader';
import { Hero } from '@/components/sections/Hero';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg text-text-primary dark:text-white">
      <FloatingHeader />
      <Hero />
      <FinalCTA />
    </main>
  );
}
