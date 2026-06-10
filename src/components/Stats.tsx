import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { number: '04', label: 'Commercial Pillars' },
    { number: '03', label: 'Operating Divisions' },
    { number: 'UK', label: 'Registered' },
    { number: '∞', label: 'Long-Term Horizon' },
  ];

  return (
    <section className="bg-cream-dark py-24 md:py-32 lg:py-40" aria-label="Company statistics">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Grid with gold gap lines */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-gold/15 gap-px border border-gold/15">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              className="group relative py-10 md:py-16 px-4 md:px-8 text-center bg-cream-dark transition-colors duration-300 hover:bg-gold/[0.04]"
            >
              <p className="font-heading font-light text-[48px] md:text-[72px] text-gold leading-none mb-3 relative z-10">
                {stat.number}
              </p>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-navy/60 relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
