import { PROCESS_STEPS } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

export default function Process() {
  return (
    <section id="process" className="relative bg-[#FAFAF8] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-[#E8E8E8] pb-10">
          <div>
            <Reveal>
              <SectionTag>Execution Methodology</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#111111] sm:text-5xl">
                How we build together
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 max-w-xl text-base text-[#666666]">
                A disciplined, transparent delivery framework designed to minimize risk and accelerate production deployment.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#0062FF] hover:text-[#0050D8] transition-colors"
            >
              <span>Start Stage 01</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>

        {/* Minimal Process List (Typography & Spacing First) */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 75}>
              <div className="flex flex-col justify-between border-t-2 border-[#111111] pt-6 h-full">
                <div>
                  <span className="font-mono text-2xl font-bold text-[#0062FF]">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-[#111111]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E8E8]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#999999] block">
                    Key Deliverable
                  </span>
                  <p className="mt-1 font-mono text-xs font-medium text-[#111111]">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process Guarantee Strip */}
        <Reveal delay={300}>
          <div className="mt-16 rounded-xl border border-[#E8E8E8] bg-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0062FF]/10 font-mono text-xs font-bold text-[#0062FF]">
                ✓
              </span>
              <div>
                <h4 className="font-display text-base font-bold text-[#111111]">
                  Direct Engineering Collaboration
                </h4>
                <p className="text-xs sm:text-sm text-[#666666]">
                  Weekly sprint demos, direct developer communication, and complete source code transparency from day one.
                </p>
              </div>
            </div>

            <span className="shrink-0 font-mono text-xs text-[#999999] uppercase tracking-wider">
              Two-Week Agile Cycles
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
