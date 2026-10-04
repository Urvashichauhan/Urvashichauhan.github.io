import { ArrowIcon, Reveal } from "./shared";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36 border-t border-[#E8E8E8]">
      <div className="bg-tech-dots pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-1.5 font-mono text-xs text-[#666666]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0062FF]" />
            <span>Ready for Production</span>
          </div>

          <h2 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
            Have a product in mind?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl font-normal text-[#666666]">
            Let’s turn your idea into something real.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#0062FF] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-[#0050D8] hover:shadow-lg hover:translate-y-[-1px]"
            >
              <span>Start a Project</span>
              <ArrowIcon className="h-4 w-4" />
            </a>

            <a
              href="mailto:support@innoweavetech.in"
              className="inline-flex items-center gap-2 rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] transition-all duration-200 hover:border-[#111111] hover:bg-white"
            >
              <span>Email Engineering Directly</span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 font-mono text-xs text-[#999999]">
            <span>✓ Response within 24 hours</span>
            <span>·</span>
            <span>✓ Technical scoping included</span>
            <span>·</span>
            <span>✓ Non-disclosure protected</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
