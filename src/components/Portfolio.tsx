import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Division {
  tag: string;
  name: string;
  description: string;
}

const divisions: Division[] = [
  {
    tag: 'Real Estate',
    name: 'Suraha Properties',
    description: 'Strategic acquisition and management of premium commercial and residential real estate assets across the United Kingdom and select international markets.',
  },
  {
    tag: 'Technology',
    name: 'Suraha Digital',
    description: 'Building and scaling digital infrastructure, SaaS platforms, and emerging technology ventures that shape the future of commerce and connectivity.',
  },
  {
    tag: 'Investment',
    name: 'Suraha Ventures',
    description: 'Patient capital deployment into high-conviction opportunities — from early-stage ventures to established enterprises seeking strategic growth partners.',
  },
  {
    tag: 'Consultancy',
    name: 'Suraha Advisory',
    description: 'Providing institutional-grade strategic counsel to boards, executive teams, and family offices navigating complex commercial decisions.',
  },
];

function DivisionCard({ division }: { division: Division }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/divisions"
      className={`group relative block bg-cream border border-gold/15 p-7 sm:p-8 md:p-10 transition-all duration-300 rounded-[2px] ${
        hovered ? 'border-gold/40 shadow-[0_0_24px_rgba(196,154,56,0.06)]' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gold top border sweep */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div
          className={`h-full bg-gold transition-all duration-500 ease-out ${
            hovered ? 'w-full' : 'w-0'
          }`}
        />
      </div>

      {/* Sector tag */}
      <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-5 md:mb-6">
        {division.tag}
      </p>

      {/* Division name */}
      <h3 className="font-heading font-light text-[20px] sm:text-[22px] md:text-[24px] text-navy mb-3 md:mb-4 leading-tight">
        {division.name}
      </h3>

      {/* Description */}
      <p className="font-body font-light text-[13px] leading-relaxed text-navy/55 mb-6 md:mb-8">
        {division.description}
      </p>

      {/* Explore link — fades in on hover */}
      <div
        className={`transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
        }`}
      >
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
          Explore
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <section className="bg-cream py-24 md:py-32 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Eyebrow */}
        <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-6">
          // Our Portfolio
        </p>

        {/* Gold rule */}
        <div className="w-14 h-px bg-gold mb-10 md:mb-12" />

        {/* Heading */}
        <h2 className="font-heading font-light text-[28px] sm:text-[32px] md:text-[40px] lg:text-[52px] text-navy leading-[1.15] mb-14 md:mb-20 max-w-[700px]">
          A diversified group of purposeful businesses.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {divisions.map((division) => (
            <DivisionCard key={division.tag} division={division} />
          ))}
        </div>
      </div>
    </section>
  );
}
