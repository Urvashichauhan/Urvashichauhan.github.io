import { CAPABILITIES } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-[#FAFAF8] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-[#E8E8E8] pb-10">
          <div>
            <Reveal>
              <SectionTag>Core Capabilities</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#111111] sm:text-5xl">
                From idea → to production
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 max-w-xl text-base text-[#666666]">
                We don’t build generic agency templates. We engineer specialized, production-ready platforms built around your core workflows.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#0062FF] hover:text-[#0050D8] transition-colors"
            >
              <span>Explore Custom Scoping</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>

        {/* Sophisticated Editorial Grid Layout */}
        <div className="mt-12 divide-y divide-[#E8E8E8] border-b border-[#E8E8E8]">
          {CAPABILITIES.map((cap, idx) => (
            <Reveal key={cap.id} delay={idx * 50}>
              <div className="group py-8 sm:py-10 transition-colors duration-200 hover:bg-white px-4 sm:px-6 rounded-lg -mx-4 sm:-mx-6">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                  {/* Number & Title */}
                  <div className="lg:col-span-5 flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs font-semibold text-[#0062FF] shrink-0">
                      {cap.number}
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111111] tracking-tight group-hover:text-[#0062FF] transition-colors">
                        {cap.title}
                      </h3>
                      <span className="mt-1 block font-mono text-[11px] text-[#999999] uppercase tracking-wider">
                        {cap.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-sm sm:text-base font-normal leading-relaxed text-[#555555]">
                      {cap.description}
                    </p>
                  </div>

                  {/* Tech Indicators */}
                  <div className="lg:col-span-3 flex flex-wrap gap-1.5 lg:justify-end">
                    {cap.techIndicators.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[#E8E8E8] bg-[#FAFAF8] px-2.5 py-1 font-mono text-[11px] text-[#666666] group-hover:border-[#0062FF]/20 group-hover:bg-[#0062FF]/5 group-hover:text-[#0062FF] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
