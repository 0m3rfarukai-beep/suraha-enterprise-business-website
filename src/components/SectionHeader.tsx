import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({ eyebrow, heading, dark = false, className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-5 md:mb-6">
        {eyebrow}
      </p>
      <div className="w-14 h-px bg-gold mb-8 md:mb-10" />
      <h2 className={`font-heading font-light text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] leading-[1.14] max-w-[720px] ${
        dark ? 'text-cream' : 'text-navy'
      }`}>
        {heading}
      </h2>
    </motion.div>
  );
}
