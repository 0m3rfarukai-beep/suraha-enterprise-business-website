import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  heading: ReactNode;
  subtitle?: string;
}

export default function PageHero({ eyebrow, heading, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-navy-deep flex items-center justify-center overflow-hidden" style={{ minHeight: 'clamp(280px, 44vh, 500px)' }}>
      {/* Gold radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.07)_0%,_transparent_60%)]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Left gold accent line */}
      <div className="absolute left-6 md:left-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none" />

      {/* Right gold accent line */}
      <div className="absolute right-6 md:right-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[780px] mx-auto px-6 text-center pt-28 pb-14 md:pt-32 md:pb-20">
        <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-6 md:mb-8">
          {eyebrow}
        </p>

        <h1 className="font-heading font-light text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.12] text-cream mb-5 md:mb-7">
          {heading}
        </h1>

        {subtitle && (
          <p className="font-body font-light text-[14px] md:text-[15px] leading-relaxed text-cream/50 max-w-[500px] mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
