import { INDUSTRIES } from "../lib/data";
import { Reveal, SectionTag } from "./shared";

export default function Industries() {
    return (
        <section className="relative bg-ink py-28 md:py-36">
            <div className="weave-cross pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-40" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <Reveal>
                        <SectionTag className="justify-center">Industries</SectionTag>
                        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                            Software for <span className="text-copper">Real Business Problems</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={120}>
                        <p className="mt-5 text-lg font-light leading-relaxed text-mist">
                            These are examples of workflows we can build — not claims that we
                            already serve every industry.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {INDUSTRIES.map((ind, i) => (
                        <Reveal key={ind.name} delay={i * 60}>
                            <div className="industry-card group h-full border border-thread bg-panel/30 p-6 md:p-7">
                                <h3 className="font-display text-xl font-bold text-bone transition-colors duration-300 group-hover:text-copper">
                                    {ind.name}
                                </h3>
                                <div className="mt-5 flex flex-wrap items-center gap-1.5">
                                    {ind.flow.map((step, j) => (
                                        <span key={step} className="flex items-center gap-1.5">
                                            <span className="font-mono text-[11px] text-jade/90">
                                                {step}
                                            </span>
                                            {j < ind.flow.length - 1 && (
                                                <span className="font-mono text-[11px] text-mist/50">
                                                    →
                                                </span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
