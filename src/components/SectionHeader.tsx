import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({ eyebrow, heading, dark = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-5 md:mb-6">
        {eyebrow}
      </p>
      <div className="w-14 h-px bg-gold mb-8 md:mb-10" />
      <h2 className={`font-heading font-light text-[24px] sm:text-[30px] md:text-[36px] lg:text-[46px] leading-[1.16] max-w-[680px] ${
        dark ? 'text-cream' : 'text-navy'
      }`}>
        {heading}
      </h2>
    </div>
  );
}
