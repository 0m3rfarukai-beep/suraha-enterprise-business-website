export default function Stats() {
  const stats = [
    { number: '04', label: 'Active Divisions' },
    { number: '3+', label: 'Sectors' },
    { number: 'UK', label: 'Registered' },
    { number: '∞', label: 'Investment Horizon' },
  ];

  return (
    <section className="bg-cream-dark py-24 md:py-32 lg:py-40" aria-label="Company statistics">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Grid with gold gap lines */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-gold/15 gap-px border border-gold/15">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative py-10 md:py-14 px-4 md:px-8 text-center bg-cream-dark transition-colors duration-300 hover:bg-gold/[0.04]"
            >
              <p className="font-heading font-light text-[44px] md:text-[64px] text-gold leading-none mb-3 relative z-10">
                {stat.number}
              </p>
              <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-navy/60 relative z-10">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
