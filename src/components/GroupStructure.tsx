import { Link } from 'react-router-dom';
import { Landmark, Code2, ShoppingBag, Ship } from 'lucide-react';
import Reveal from './Reveal';

interface BranchNode {
  icon: typeof Code2;
  tag: string;
  name: string;
  line: string;
}

const branches: BranchNode[] = [
  {
    icon: Code2,
    tag: 'Technology',
    name: 'Suraha Digital',
    line: 'IT, software, web & digital infrastructure',
  },
  {
    icon: ShoppingBag,
    tag: 'Commerce',
    name: 'Suraha Commerce',
    line: 'eCommerce, online retail & direct trading',
  },
  {
    icon: Ship,
    tag: 'Trade',
    name: 'Suraha Trade',
    line: 'Wholesale, import/export & B2B supply',
  },
];

/**
 * A simple, honest visualisation of the group structure:
 * head office above, three operating divisions beneath.
 * Pure CSS hairlines — no imagery, no decoration beyond the brand system.
 */
export default function GroupStructure() {
  return (
    <div>
      {/* Screen-reader description of the diagram (links below remain interactive) */}
      <p className="sr-only">
        Group structure: Suraha Enterprise Ltd. is the head office and holding company, with three
        operating divisions — Suraha Digital for technology, Suraha Commerce for eCommerce, and
        Suraha Trade for wholesale and international trade.
      </p>
      {/* Head office node */}
      <Reveal>
        <div className="max-w-[420px] mx-auto border border-gold/40 bg-cream rounded-[2px] px-8 py-7 text-center transition-colors duration-300 hover:border-gold/70">
          <span className="inline-flex items-center justify-center w-10 h-10 border border-gold/30 rounded-full mb-4" aria-hidden="true">
            <Landmark size={18} strokeWidth={1.5} className="text-gold" />
          </span>
          <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-gold mb-2">
            Head Office &amp; Holding
          </p>
          <p className="font-heading font-normal text-[22px] md:text-[24px] text-navy leading-tight">
            Suraha Enterprise Ltd.
          </p>
          <p className="font-body text-[14px] text-navy/70 mt-2">
            Strategy, governance &amp; capital discipline
          </p>
        </div>
      </Reveal>

      {/* Connectors — desktop */}
      <div className="hidden md:block" aria-hidden="true">
        <div className="w-px h-10 bg-gold/30 mx-auto" />
        <div className="max-w-[1140px] mx-auto">
          <div className="h-px bg-gold/30 mx-auto w-2/3" />
        </div>
        <div className="max-w-[1140px] mx-auto grid grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex justify-center">
              <div className="w-px h-10 bg-gold/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Connector — mobile */}
      <div className="md:hidden w-px h-8 bg-gold/30 mx-auto" aria-hidden="true" />

      {/* Division nodes */}
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
        {branches.map((b, i) => (
          <Reveal key={b.name} delay={0.1 + i * 0.08}>
            <Link
              to="/divisions"
              className="group block h-full border border-gold/20 bg-cream rounded-[2px] px-7 py-7 text-center transition-all duration-300 hover:border-gold/50 hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 border border-gold/25 rounded-full mb-4 transition-colors duration-300 group-hover:border-gold/50" aria-hidden="true">
                <b.icon size={18} strokeWidth={1.5} className="text-gold" />
              </span>
              <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-gold mb-2">
                {b.tag}
              </p>
              <p className="font-heading font-normal text-[20px] md:text-[22px] text-navy leading-tight">
                {b.name}
              </p>
              <p className="font-body text-[14px] text-navy/70 mt-2">
                {b.line}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
