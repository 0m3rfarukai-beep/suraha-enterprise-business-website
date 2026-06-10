import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';

const values = [
  {
    title: 'Integrity',
    body: 'We conduct ourselves with honesty and transparency, maintaining the trust placed in us by partners, stakeholders, and the communities in which we operate.',
  },
  {
    title: 'Discipline',
    body: 'We deploy capital with care and conviction, avoiding speculation and resisting the temptation to pursue growth for its own sake.',
  },
  {
    title: 'Patience',
    body: 'We think in years and decades, not quarters. Our time horizon allows us to support businesses through cycles and make decisions that compound value over time.',
  },
  {
    title: 'Stewardship',
    body: 'We take seriously our responsibility as owners. Every business in the group receives the strategic attention and operational support it needs to endure.',
  },
];

const facts = [
  { label: 'Founded', value: 'United Kingdom' },
  { label: 'Structure', value: 'Private Holding Company' },
  { label: 'Jurisdiction', value: 'England & Wales' },
  { label: 'Pillars', value: 'Head Office, Technology, Commerce, Trade' },
  { label: 'Approach', value: 'Patient, Conviction-Led' },
];

export default function About() {
  usePageTitle('About');

  return (
    <>
      <PageHero
        eyebrow="About Suraha Enterprise"
        heading={<>A British enterprise built on <span className="italic text-gold">conviction</span> and capital discipline.</>}
        subtitle="Established as a private holding company registered in England & Wales, Suraha Enterprise builds and operates businesses across technology, commerce, and international trade."
      />

      {/* Company Overview */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// Who We Are"
            heading={<>A holding company of <span className="italic text-gold">purpose</span> and substance.</>}
          />
          <div className="mt-8 md:mt-10 max-w-[720px] space-y-5">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              Suraha Enterprise Ltd. is a private holding company registered in England & Wales. The group is structured around four commercial pillars — a head office providing strategic direction and governance, and operating divisions in technology, commerce, and international trade.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              Our structure is deliberate. Each division operates with focused intent, while the group provides strategic oversight, shared resources, and the capital patience that only a privately held enterprise can offer.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              We are not a fund with a mandated exit timeline. We are not a conglomerate chasing scale. We are a holding company that takes disciplined, long-term positions in businesses we understand — and supports them with the patience and rigour they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="bg-navy py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <SectionHeader
            eyebrow="// Our Purpose"
            heading={<>Enduring value through <span className="italic text-gold">disciplined</span> ownership.</>}
            dark
          />
          <div className="mt-8 md:mt-10 max-w-[680px] space-y-5">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-cream/75">
              We exist to build and back businesses that create enduring commercial value. Our purpose is not to maximise short-term returns, but to compound long-term worth through disciplined ownership, operational clarity, and strategic patience.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-cream/75">
              Every decision we make — from the sectors we enter to the partners we choose — is guided by this commitment to lasting value creation. We believe the most resilient businesses are built over years, not quarters, and we structure our approach accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* British Enterprise Values */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// British Enterprise Values"
            heading={<>Principles that <span className="italic text-gold">endure</span>.</>}
          />
          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/10 border border-gold/10 rounded-[2px]">
            {values.map((v, i) => (
              <div key={i} className="bg-cream p-8 md:p-10">
                <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-heading font-normal text-[20px] md:text-[22px] text-navy leading-tight mb-3">
                  {v.title}
                </h3>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-navy/70">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Term Ownership */}
      <section className="bg-cream-dark py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// Long-Term Ownership"
            heading={<>Freedom to think in <span className="italic text-gold">decades</span>.</>}
          />
          <div className="mt-8 md:mt-10 max-w-[720px] space-y-5">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              As a privately held enterprise, Suraha Enterprise has the freedom to think beyond the constraints of quarterly reporting and short-term market expectations. This independence is central to our approach.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              We take concentrated positions in businesses where we have genuine conviction, and we maintain those positions for as long as the fundamentals remain sound. We do not rotate capital based on market sentiment. We do not pursue opportunistic exits. We invest with intent and hold with discipline.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              This long-term orientation benefits not only our enterprise but the businesses we back. It allows management teams to focus on building sustainable competitive advantages rather than meeting near-term targets, and it provides the stability that enduring businesses require.
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="// At a Glance"
                heading={<>The enterprise in <span className="italic text-gold">summary</span>.</>}
              />
              <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80 mt-8 md:mt-10 max-w-[600px]">
                Suraha Enterprise operates through a group head office and divisions in technology, commerce, and international trade — each with distinct expertise and a shared commitment to long-term value creation. Our structure provides both focus and resilience.
              </p>
              <div className="mt-8">
                <Link
                  to="/divisions"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300 group"
                >
                  Explore Our Divisions
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-gold/15 p-8 md:p-10 rounded-[2px]">
                <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-8">
                  Company Facts
                </p>
                <div className="space-y-0">
                  {facts.map((fact, i) => (
                    <div
                      key={i}
                      className={`flex items-baseline justify-between py-4 ${
                        i < facts.length - 1 ? 'border-b border-gold/10' : ''
                      }`}
                    >
                      <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-navy/60">
                        {fact.label}
                      </span>
                      <span className="font-body text-[15px] md:text-[16px] text-navy/80 text-right">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
