import { Button } from '../ui/Button';
import { SocialIcons } from '../ui/SocialIcons';

export const Hero = () => (
  <section className="bg-[#FFFFFF] py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
    <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
      <h1 className="font-heading font-bold text-[32px] md:text-[48px] text-[#0F1B3C] mb-6 tracking-tight animate-[fadeInUp_0.6s_ease-out_forwards]">
        Save 15+ Hours Weekly on Admin & Scheduling
      </h1>
      <p className="font-body text-[16px] md:text-[18px] text-[#64748B] mb-10 max-w-2xl leading-[1.6] opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
        AI Automation for Salons, Spas & Clinics
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
        <Button variant="primary" href="https://calendar.app.google/oxdocXuk5a2ohKZf9" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-[16px] px-8 py-4">
          Schedule Your Free Strategy Call
        </Button>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
        <span className="font-body text-[14px] text-[#64748B]">Follow us</span>
        <SocialIcons size="32" />
      </div>
    </div>
  </section>
);
