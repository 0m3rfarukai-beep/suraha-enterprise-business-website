import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface CTAButtonProps {
  href?: string;
  to?: string;
  children: ReactNode;
  variant?: 'filled' | 'ghost';
}

export default function CTAButton({ href, to, children, variant = 'filled' }: CTAButtonProps) {
  const base = 'inline-flex items-center justify-center px-10 py-4.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 rounded-[2px] group';

  const style = variant === 'ghost'
    ? 'border border-gold/40 text-gold hover:border-gold hover:bg-gold/5'
    : 'bg-gold text-navy-deep hover:bg-gold-light';

  const content = (
    <>
      {children}
      <span className="ml-2.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
    </>
  );

  if (to) {
    return <Link to={to} className={`${base} ${style}`}>{content}</Link>;
  }

  return <a href={href} className={`${base} ${style}`}>{content}</a>;
}
