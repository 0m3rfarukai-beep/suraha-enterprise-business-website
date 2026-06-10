import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  heading: ReactNode;
  subtitle?: string;
}

export default function PageHero({ eyebrow, heading, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-navy-deep flex items-center justify-center overflow-hidden" style={{ minHeight: 'clamp(300px, 48vh, 540px)' }}>
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
      <div className="relative z-10 max-w-[820px] mx-auto px-6 text-center pt-28 pb-14 md:pt-32 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-6 md:mb-8"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-heading font-light text-[30px] sm:text-[38px] md:text-[48px] lg:text-[58px] leading-[1.1] text-cream mb-5 md:mb-7"
        >
          {heading}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-body text-[16px] md:text-[17px] leading-relaxed text-cream/75 max-w-[540px] mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
