import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Results } from "@/components/sections/Results";
import { Expertise } from "@/components/sections/Expertise";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Rozwiązanie", href: "#solution" },
    { label: "Proces", href: "#process" },
    { label: "Rezultaty", href: "#results" },
    { label: "O nas", href: "#expertise" },
  ];

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Header links={navLinks} />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Results />
      <Expertise />
      <Footer />
    </main>
  );
}
