import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-deep flex items-center justify-center overflow-hidden">
      {/* Static gold radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.08)_0%,_transparent_60%)]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Left gold accent line */}
      <div className="absolute left-6 md:left-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none" />

      {/* Right gold accent line */}
      <div className="absolute right-6 md:right-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[880px] mx-auto px-6 md:px-10 lg:px-12 text-center">
        {/* Eyebrow */}
        <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-8 md:mb-10">
          Suraha Enterprise Ltd.
        </p>

        {/* Heading */}
        <h1 className="font-heading font-light text-[32px] sm:text-[44px] md:text-[60px] lg:text-[80px] xl:text-[96px] leading-[1.08] text-cream mb-8 md:mb-10">
          Building{' '}
          <span className="italic text-gold">Tomorrow's</span>
          <br />
          Businesses Today.
        </h1>

        {/* Subtitle */}
        <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-cream/60 max-w-[520px] mx-auto mb-10 md:mb-12">
          A UK-registered holding company with diversified interests across real estate, technology, investment, and strategic consultancy.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/divisions"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy-deep font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-gold-light transition-colors duration-300 rounded-[2px] w-full sm:w-auto"
          >
            Our Portfolio
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-cream/30 text-cream font-mono text-[10px] uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-all duration-300 rounded-[2px] w-full sm:w-auto"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-bounce">
        <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-cream/30">Scroll</span>
        <svg width="10" height="16" viewBox="0 0 12 18" fill="none" className="text-cream/30" aria-hidden="true">
          <path d="M6 1V17M6 17L1 12M6 17L11 12" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
