import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';

interface DivisionDetail {
  tag: string;
  name: string;
  paragraphs: string[];
  focus: string[];
}

const divisions: DivisionDetail[] = [
  {
    tag: 'Real Estate',
    name: 'Suraha Properties',
    paragraphs: [
      'Suraha Properties acquires and manages premium real estate assets across the United Kingdom. Our portfolio spans commercial offices, residential developments, and mixed-use properties in established and emerging markets.',
      'We take a hands-on approach to asset management — identifying value through operational improvement, repositioning, and patient capital deployment rather than speculative turnover. Every acquisition is evaluated with a long-term perspective, and every asset is managed with the discipline expected of a serious institutional owner.',
      'Our real estate practice is built on deep market knowledge, conservative financing principles, and a commitment to creating lasting value in the properties we own and the communities they serve.',
    ],
    focus: ['Commercial Real Estate', 'Residential Development', 'Asset Management', 'Strategic Repositioning'],
  },
  {
    tag: 'Technology',
    name: 'Suraha Digital',
    paragraphs: [
      'Suraha Digital builds and invests in technology ventures that address genuine commercial needs. We focus on digital infrastructure, enterprise software, and platforms that improve how businesses operate and scale.',
      'Our approach favours substance over hype. We back technologies with clear unit economics, defensible positions, and the potential to become essential infrastructure within their markets. We are not interested in vanity metrics or speculative growth — we look for businesses building durable competitive advantages through genuine product value.',
      'Where we take an active role, we contribute strategic oversight, operational rigour, and access to our broader network of institutional relationships. Our goal is to help technology businesses grow sustainably, not recklessly.',
    ],
    focus: ['Digital Infrastructure', 'Enterprise Software', 'SaaS Platforms', 'Technology Ventures'],
  },
  {
    tag: 'Investment',
    name: 'Suraha Ventures',
    paragraphs: [
      'Suraha Ventures is the investment arm of Suraha Enterprise, deploying patient capital into high-conviction opportunities across sectors and stages. From early-stage ventures with exceptional founders to established businesses seeking a strategic growth partner, we invest where our capital, patience, and operational involvement can meaningfully accelerate long-term value creation.',
      'We do not follow investment fashions or allocate capital based on sector momentum. Each opportunity is evaluated on its own merits — the quality of the business, the strength of its leadership, and the durability of its competitive position.',
      'Our investment horizon is deliberately long. We are comfortable with the time it takes to build genuinely valuable businesses, and we structure our commitments accordingly.',
    ],
    focus: ['Growth Equity', 'Venture Investment', 'Strategic Partnerships', 'Patient Capital Deployment'],
  },
  {
    tag: 'Consultancy',
    name: 'Suraha Advisory',
    paragraphs: [
      'Suraha Advisory provides institutional-grade strategic counsel to boards, executive teams, and family offices navigating complex commercial decisions. Our advisory practice draws on deep operational experience across our four divisions.',
      'We advise on capital allocation, organisational design, market entry, and strategic positioning — always with a focus on long-term, sustainable outcomes. Our counsel is direct, considered, and free from the conflicts of interest that affect many advisory practices.',
      'We do not offer generic frameworks or templated solutions. Every engagement is tailored to the specific circumstances and objectives of our clients, drawing on our direct experience as operators and owners.',
    ],
    focus: ['Strategic Counsel', 'Capital Advisory', 'Governance Support', 'Market Strategy'],
  },
];

export default function Divisions() {
  usePageTitle('Divisions');

  return (
    <>
      <PageHero
        eyebrow="Our Divisions"
        heading={<>Four disciplines. One <span className="italic text-gold">enterprise</span>.</>}
        subtitle="Each division operates with focused intent, supported by the strategic oversight and capital patience of the group."
      />

      {/* Division Sections */}
      {divisions.map((div, i) => (
        <section
          key={div.tag}
          className={`${i % 2 === 0 ? 'bg-cream' : 'bg-cream-dark'} py-24 md:py-32 lg:py-40`}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left — tag + name */}
              <div className="lg:col-span-4">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-3">
                  {div.tag}
                </p>
                <h2 className="font-heading font-light text-[22px] sm:text-[26px] md:text-[32px] text-navy leading-tight">
                  {div.name}
                </h2>
              </div>

              {/* Right — body + focus + CTA */}
              <div className="lg:col-span-8">
                <div className="space-y-5 mb-8">
                  {div.paragraphs.map((p, pi) => (
                    <p key={pi} className="font-body font-light text-[14px] md:text-[15px] leading-[1.7] text-navy/65">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Focus areas */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {div.focus.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-3.5 py-1.5 border border-gold/15 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-navy/50 rounded-[2px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Enquire link */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300 group"
                >
                  Enquire about this division
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How the Divisions Work Together */}
      <section className="bg-navy py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <SectionHeader
            eyebrow="// Integrated Approach"
            heading={<>How the divisions work <span className="italic text-gold">together</span>.</>}
            dark
          />
          <div className="mt-8 md:mt-10 max-w-[680px] space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-cream/55">
              The four divisions of Suraha Enterprise are not isolated silos. They are complementary capabilities, each reinforcing the others through shared insight, cross-sector perspective, and institutional knowledge.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-cream/55">
              Our real estate practice informs our investment decisions. Our technology ventures benefit from our strategic advisory capabilities. Our consultancy draws on operational experience from every division. And our investment arm identifies opportunities that strengthen the entire group.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-cream/55">
              This integrated approach allows us to see patterns across sectors, identify opportunities others might miss, and provide our portfolio businesses with a depth of support that goes beyond capital alone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
