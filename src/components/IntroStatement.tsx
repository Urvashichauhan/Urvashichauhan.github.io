import { Reveal, SectionTag } from "./shared";

const DOMAINS = [
  { label: "Web applications", desc: "Interactive SaaS & customer portals" },
  { label: "Mobile applications", desc: "Cross-platform iOS and Android products" },
  { label: "AI systems", desc: "Intelligent agent pipelines & automated reasoning" },
  { label: "Business platforms", desc: "Custom operational backbones & admin ERPs" },
  { label: "APIs & backend", desc: "High-throughput, secure microservice architectures" },
  { label: "Automation", desc: "Event-driven background processes & ledger synchronization" },
  { label: "GIS solutions", desc: "Spatial intelligence, PostGIS mapping & parcel analysis" },
  { label: "Cloud infrastructure", desc: "Hardened Docker containers & automated CI/CD" },
];

export default function IntroStatement() {
  return (
    <section className="relative border-y border-[#E8E8E8] bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl">
          <Reveal>
            <SectionTag>Company Positioning</SectionTag>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl leading-[1.12]">
              We turn ideas into reliable digital products.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 text-lg sm:text-xl font-normal leading-relaxed text-[#666666]">
              InnoweaveTech is a software and product engineering company. We bridge business operations and modern engineering to build production-grade systems that scale with confidence.
            </p>
          </Reveal>
        </div>

        {/* Minimal Editorial Domain Grid */}
        <div className="mt-16 sm:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DOMAINS.map((domain, idx) => (
            <Reveal key={domain.label} delay={idx * 60}>
              <div className="group rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-5 sm:p-6 transition-all duration-200 hover:border-[#0062FF]/50 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <span className="font-mono text-[11px] font-semibold text-[#0062FF]">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-[#111111] group-hover:text-[#0062FF] transition-colors">
                  {domain.label}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#666666]">
                  {domain.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
