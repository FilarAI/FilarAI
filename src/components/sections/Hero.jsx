import { Button } from '../ui/Button';
import { SocialIcons } from '../ui/SocialIcons';

export const Hero = ({
  headline = "Automatyzacja AI na miarę Twojej agencji",
  subheadline = "Oszczędzaj czas, zwiększaj przychody, skaluj biznes bez dodatkowych kosztów personelu.",
  ctaText = "Zaplanuj bezpłatną konsultację",
  ctaLink = "https://calendar.app.google/oxdocXuk5a2ohKZf9",
  showSocials = true
}) => {
  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      {/* Background subtle diagonal lines pattern representing "Superplan style" */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}
      ></div>

      <div className="container-padding relative z-10 text-center flex flex-col items-center">
        <h1 className="heading-serif text-h1 md:text-[56px] text-text-primary mb-6 max-w-4xl mx-auto leading-tight animate-[fadeInUp_0.6s_ease-out_forwards]">
          {headline}
        </h1>

        <p className="font-body text-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
          <Button variant="primary" href={ctaLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-lg px-8 py-4">
            {ctaText}
          </Button>
        </div>

        {showSocials && (
          <div className="mt-16 flex flex-col items-center gap-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
            <span className="font-body text-sm font-medium text-gray-text tracking-wider uppercase">
              Bądźmy w kontakcie
            </span>
            <SocialIcons size="24" className="text-gray-text" />
          </div>
        )}
      </div>
    </section>
  );
};
