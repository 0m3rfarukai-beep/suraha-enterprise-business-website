import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Landmark, Code2, ShoppingBag, Ship } from 'lucide-react';

interface Division {
  icon: typeof Landmark;
  tag: string;
  name: string;
  description: string;
}

const divisions: Division[] = [
  {
    icon: Landmark,
    tag: 'Head Office',
    name: 'Suraha Enterprise',
    description: 'The group head office and holding company — setting strategy, upholding governance, and providing the capital discipline and shared infrastructure behind every division.',
  },
  {
    icon: Code2,
    tag: 'Technology',
    name: 'Suraha Digital',
    description: 'IT services, software development, web platforms, and digital infrastructure — built for the group\'s own ventures and for commercial clients who value substance over hype.',
  },
  {
    icon: ShoppingBag,
    tag: 'Commerce',
    name: 'Suraha Commerce',
    description: 'The group\'s online retail and eCommerce division — operating direct-to-consumer channels and digital storefronts with retail discipline and honest customer dealing.',
  },
  {
    icon: Ship,
    tag: 'Trade',
    name: 'Suraha Trade',
    description: 'Wholesale, import/export, and business-to-business supply — long-term trading relationships built on consistent quality, honest terms, and dependable delivery.',
  },
];

function DivisionCard({ division, index }: { division: Division; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <Link
        to="/divisions"
        className="group relative block h-full bg-cream border border-gold/15 p-7 sm:p-8 md:p-10 rounded-[2px] transition-all duration-400 hover:border-gold/45 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(13,27,46,0.18),0_0_28px_rgba(196,154,56,0.08)]"
      >
        {/* Gold top border sweep */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div className="h-full bg-gold transition-all duration-500 ease-out w-0 group-hover:w-full" />
        </div>

        {/* Icon + sector tag */}
        <div className="flex items-center justify-between mb-5 md:mb-6">
          <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold">
            {division.tag}
          </p>
          <span className="inline-flex items-center justify-center w-9 h-9 border border-gold/25 rounded-full transition-colors duration-300 group-hover:border-gold/50" aria-hidden="true">
            <division.icon size={17} strokeWidth={1.5} className="text-gold" />
          </span>
        </div>

        {/* Division name */}
        <h3 className="font-heading font-normal text-[22px] sm:text-[24px] md:text-[27px] text-navy mb-3 md:mb-4 leading-tight">
          {division.name}
        </h3>

        {/* Description */}
        <p className="font-body text-[15px] leading-[1.7] text-navy/75 mb-6 md:mb-8">
          {division.description}
        </p>

        {/* Explore link — fades in on hover */}
        <div className="transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Explore
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section className="bg-cream py-24 md:py-32 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-6">
            // The Group
          </p>

          {/* Gold rule */}
          <div className="w-14 h-px bg-gold mb-10 md:mb-12" />

          {/* Heading */}
          <h2 className="font-heading font-light text-[30px] sm:text-[36px] md:text-[44px] lg:text-[54px] text-navy leading-[1.12] mb-14 md:mb-20 max-w-[740px]">
            A diversified group of purposeful businesses.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {divisions.map((division, i) => (
            <DivisionCard key={division.tag} division={division} index={i} />
          ))}
        </div>

        {/* Capabilities link */}
        <div className="mt-10 md:mt-12">
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300 group"
          >
            View Group Capabilities
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
