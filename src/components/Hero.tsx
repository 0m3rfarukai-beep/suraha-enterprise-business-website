import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.22, 0.61, 0.36, 1] as const;

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
      <div className="relative z-10 max-w-[920px] mx-auto px-6 md:px-10 lg:px-12 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-8 md:mb-10"
        >
          Suraha Enterprise Ltd.
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
          className="font-heading font-light text-[36px] sm:text-[48px] md:text-[64px] lg:text-[84px] xl:text-[100px] leading-[1.06] text-cream mb-8 md:mb-10"
        >
          Building{' '}
          <span className="italic text-gold">Tomorrow's</span>
          <br />
          Businesses Today.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease }}
          className="font-body text-[16px] md:text-[17px] leading-relaxed text-cream/75 max-w-[560px] mx-auto mb-10 md:mb-12"
        >
          A UK-registered holding company building and operating businesses across technology, commerce, and international trade.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/divisions"
            className="inline-flex items-center justify-center px-9 py-4 bg-gold text-navy-deep font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-gold-light transition-colors duration-300 rounded-[2px] w-full sm:w-auto"
          >
            Our Divisions
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-9 py-4 border border-cream/30 text-cream font-mono text-[11px] uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-all duration-300 rounded-[2px] w-full sm:w-auto"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-bounce">
        <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-cream/55">Scroll</span>
        <svg width="10" height="16" viewBox="0 0 12 18" fill="none" className="text-cream/55" aria-hidden="true">
          <path d="M6 1V17M6 17L1 12M6 17L11 12" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
