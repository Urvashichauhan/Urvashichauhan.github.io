import { VALUE_PILLARS } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

export default function WhyInnoweave() {
  return (
    <section id="about" className="relative border-y border-[#E8E8E8] bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column Sticky Headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <SectionTag>Our Philosophy</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#111111] sm:text-5xl leading-[1.12]">
                Why work with us?
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#666666]">
                Most software initiatives stumble because agencies write code before understanding the physical and operational realities of the business. We engineer systems built to thrive in production.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 pt-8 border-t border-[#E8E8E8]">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md bg-[#0062FF] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#0050D8]"
                >
                  <span>Schedule Scoping Session</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Concise Pillars */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {VALUE_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 80}>
                <div className="group rounded-xl border border-[#E8E8E8] bg-[#FAFAF8] p-6 sm:p-8 transition-all duration-200 hover:border-[#0062FF]/40 hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#0062FF]">
                      {pillar.number}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-[#111111] group-hover:text-[#0062FF] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] font-mono text-[#999999]">
                    <span>Innoweave Standard</span>
                    <span className="text-[#0062FF]">✓ Verified</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
