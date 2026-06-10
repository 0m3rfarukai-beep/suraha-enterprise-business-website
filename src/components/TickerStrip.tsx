export default function TickerStrip() {
  const items = [
    'Suraha Enterprise',
    'Head Office',
    'Technology',
    'Commerce',
    'International Trade',
    'United Kingdom',
    'Long-term Value',
    'Built to Endure',
  ];

  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-5 sm:gap-6 whitespace-nowrap">
      <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.12em] sm:tracking-[0.15em] text-cream/55 uppercase">
        {item}
      </span>
      <span className="text-gold/40 text-[6px] sm:text-[8px]" aria-hidden="true">◆</span>
    </span>
  ));

  return (
    <section className="bg-navy border-y border-gold/10 py-4 sm:py-5 overflow-hidden" aria-label="Company keywords">
      <div className="animate-marquee flex items-center gap-5 sm:gap-6 w-max">
        {content}
        {content}
        {content}
        {content}
      </div>
    </section>
  );
}
