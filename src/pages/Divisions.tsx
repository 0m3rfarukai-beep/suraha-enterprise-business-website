import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';
import { usePageTitle } from '../hooks/usePageTitle';

interface DivisionDetail {
  tag: string;
  name: string;
  paragraphs: string[];
  focus: string[];
}

const divisions: DivisionDetail[] = [
  {
    tag: 'Head Office',
    name: 'Suraha Enterprise',
    paragraphs: [
      'At the centre of the group sits Suraha Enterprise Ltd. — the head office and holding company. It owns and directs the operating divisions, sets group strategy, and maintains the governance standards that every part of the enterprise is held to.',
      'The head office is deliberately lean. Its role is not to duplicate what the divisions do, but to provide what they cannot provide for themselves: long-term direction, capital discipline, shared infrastructure, and a single standard of conduct across the group.',
      'This structure gives each operating division the freedom to focus entirely on its market, while the group carries responsibility for strategy, compliance, and the patient ownership that allows businesses to be built properly.',
    ],
    focus: ['Group Strategy', 'Governance & Compliance', 'Capital Discipline', 'Shared Services'],
  },
  {
    tag: 'Technology',
    name: 'Suraha Digital',
    paragraphs: [
      'Suraha Digital is the technology division of the group — delivering IT services, software development, web platforms, and digital infrastructure for the group\'s own ventures and for commercial clients.',
      'Our approach favours substance over hype. We build systems that are maintainable, secure, and commercially useful — from business websites and eCommerce platforms to automation and bespoke software. We are not interested in technology for its own sake; we are interested in technology that makes businesses measurably better.',
      'Suraha Digital also serves as the technical backbone of the wider group, building and operating the platforms on which Suraha Commerce and Suraha Trade run.',
    ],
    focus: ['IT & Software Services', 'Web Development', 'Digital Infrastructure', 'Business Automation'],
  },
  {
    tag: 'Commerce',
    name: 'Suraha Commerce',
    paragraphs: [
      'Suraha Commerce is the group\'s online retail and eCommerce division. It develops and operates direct-to-consumer retail channels, online storefronts, and digital trading operations.',
      'We approach retail with the same discipline we bring to every part of the enterprise: careful product selection, honest customer dealing, and operational rigour in fulfilment and service. We would rather build a small number of trusted retail operations than a large number of forgettable ones.',
      'The division benefits directly from the group\'s structure — technology from Suraha Digital, supply relationships through Suraha Trade, and the governance standards of the head office.',
    ],
    focus: ['Online Retail', 'eCommerce Operations', 'Direct-to-Consumer', 'Digital Storefronts'],
  },
  {
    tag: 'Trade',
    name: 'Suraha Trade',
    paragraphs: [
      'Suraha Trade is the wholesale and international trading division of the group — engaged in import, export, and business-to-business supply across selected product categories.',
      'Trade is a discipline of relationships and reliability. We build long-term arrangements with suppliers and buyers, founded on consistent quality, honest terms, and dependable delivery. Our UK registration and governance standards give counterparties the confidence of dealing with a properly run British enterprise.',
      'The division focuses on selected categories where the group has genuine knowledge and dependable supply relationships, and it grows deliberately — one sound trading relationship at a time.',
    ],
    focus: ['Wholesale Supply', 'Import & Export', 'B2B Distribution', 'International Sourcing'],
  },
];

export default function Divisions() {
  usePageTitle('Divisions');

  return (
    <>
      <PageHero
        eyebrow="Our Divisions"
        heading={<>Four pillars. One <span className="italic text-gold">enterprise</span>.</>}
        subtitle="A group head office and three operating divisions — technology, commerce, and trade — each with focused intent, held to a single standard."
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
                <Reveal>
                  <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-3">
                    {div.tag}
                  </p>
                  <h2 className="font-heading font-light text-[26px] sm:text-[30px] md:text-[36px] text-navy leading-tight">
                    {div.name}
                  </h2>
                </Reveal>
              </div>

              {/* Right — body + focus + CTA */}
              <div className="lg:col-span-8">
                <Reveal delay={0.1}>
                  <div className="space-y-5 mb-8">
                    {div.paragraphs.map((p, pi) => (
                      <p key={pi} className="font-body text-[16px] md:text-[17px] leading-[1.75] text-navy/80">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Focus areas */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {div.focus.map((item) => (
                      <span
                        key={item}
                        className="inline-block px-3.5 py-1.5 border border-gold/20 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-navy/70 rounded-[2px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Enquire link */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300 group"
                  >
                    Enquire about this division
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                  </Link>
                </Reveal>
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
          <Reveal delay={0.1}>
            <div className="mt-8 md:mt-10 max-w-[700px] space-y-5">
              <p className="font-body text-[16px] md:text-[17px] leading-[1.75] text-cream/75">
                The divisions of Suraha Enterprise are not isolated silos. They are complementary capabilities, each reinforcing the others through shared infrastructure, commercial insight, and institutional knowledge.
              </p>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.75] text-cream/75">
                Suraha Digital builds and maintains the platforms on which the group's commerce operations run. Suraha Trade secures the supply relationships that feed Suraha Commerce. And the head office holds all three to a single standard of governance, capital discipline, and long-term intent.
              </p>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.75] text-cream/75">
                This integrated approach allows us to move quickly without losing coherence — every division strengthens the others, and the group is more resilient than any single line of business could be alone.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
