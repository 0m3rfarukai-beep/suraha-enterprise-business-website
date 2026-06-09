import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';

const principles = [
  {
    number: '01',
    title: 'Patient Capital',
    body: 'We deploy capital with a multi-year horizon, allowing businesses the time and stability to build enduring competitive advantages. Short-term optimisation is not our discipline.',
    extended: 'In a market environment that increasingly rewards speed and immediacy, we choose patience. We believe that the most valuable businesses — those with genuine defensible positions and sustainable growth trajectories — are built over years, not months. Our capital structure and private ownership allow us to make commitments that time-starved investors cannot.',
    extended2: 'Patient capital does not mean passive capital. We are actively engaged with the businesses we back, contributing strategic oversight and operational support. But we provide the most valuable resource a growing business can have: time to execute without the pressure of premature optimisation.',
  },
  {
    number: '02',
    title: 'Disciplined Diversification',
    body: 'Our four divisions provide structural resilience, but each operates with focused intent. We diversify to protect — never to dilute.',
    extended: 'Every business we enter is chosen because we have genuine conviction in its long-term potential, not because it fills a gap in our portfolio. We would rather have four deeply understood positions than twenty superficial ones. Our diversification is strategic, not decorative.',
    extended2: 'This discipline extends to how we allocate attention and resources within each division. Focus creates depth, and depth creates the kind of commercial insight that drives better decisions over time.',
  },
  {
    number: '03',
    title: 'Operational Alignment',
    body: 'We take an active interest in the operational trajectory of our portfolio. Where appropriate, we contribute strategic oversight, governance support, and access to our network of institutional relationships.',
    extended: 'Our involvement is calibrated to the needs of each business. Some require hands-on strategic partnership; others benefit from a lighter touch. What remains constant is our commitment to ensuring that operational execution aligns with long-term strategic intent.',
    extended2: 'We believe that good governance and operational rigour are not constraints on growth — they are the foundations upon which sustainable growth is built.',
  },
];

export default function Philosophy() {
  usePageTitle('Investment Philosophy');

  return (
    <>
      <PageHero
        eyebrow="Investment Philosophy"
        heading={<>Patient capital. <span className="italic text-gold">Permanent</span> interests.</>}
        subtitle="Our investment philosophy is built on conviction, discipline, and the belief that enduring value is created through patient, purposeful capital deployment."
      />

      {/* Core Principles */}
      {principles.map((p, i) => (
        <section
          key={p.number}
          className={`${i % 2 === 0 ? 'bg-cream' : 'bg-cream-dark'} py-24 md:py-32 lg:py-40`}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="font-heading font-light text-[48px] md:text-[64px] text-gold/20 leading-none mb-3">
                  {p.number}
                </p>
                <h2 className="font-heading font-light text-[22px] sm:text-[26px] md:text-[32px] text-navy leading-tight">
                  {p.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-5">
                  <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-navy/70">
                    {p.body}
                  </p>
                  <p className="font-body font-light text-[14px] md:text-[15px] leading-[1.7] text-navy/60">
                    {p.extended}
                  </p>
                  <p className="font-body font-light text-[14px] md:text-[15px] leading-[1.7] text-navy/60">
                    {p.extended2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Risk & Governance */}
      <section className="bg-navy py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <SectionHeader
            eyebrow="// Risk & Governance"
            heading={<>Risk as a <span className="italic text-gold">strategic</span> discipline.</>}
            dark
          />
          <div className="mt-8 md:mt-10 max-w-[680px] space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-cream/55">
              Risk management at Suraha Enterprise is not a compliance exercise. It is a strategic discipline embedded in every decision we make.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-cream/55">
              We evaluate risk through the lens of long-term value preservation, not short-term volatility mitigation. This means we are comfortable with illiquidity and extended time horizons, but we are intolerant of concentrated risks that could permanently impair capital.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-cream/55">
              Our governance framework ensures that risk decisions are made with full information, appropriate challenge, and clear accountability. Every material commitment is subject to board-level review and rigorous due diligence.
            </p>
          </div>
        </div>
      </section>

      {/* Long-Term Value Creation */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// Long-Term Value Creation"
            heading={<>The measure that <span className="italic text-gold">matters</span>.</>}
          />
          <div className="mt-8 md:mt-10 max-w-[720px] space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-navy/70">
              Our ultimate measure of success is not the speed of our returns, but the durability of the value we create. We seek to build businesses that can withstand cycles, adapt to change, and compound value over decades.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-navy/70">
              This philosophy informs every aspect of our enterprise — from the opportunities we pursue to the partners we choose, from the governance we practice to the patience we bring. Long-term value creation is not merely our strategy. It is our identity.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-navy/70">
              We believe that businesses built to endure are the most rewarding to own, the most valuable to society, and the most likely to generate exceptional returns over time. This conviction is the foundation of everything we do.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
