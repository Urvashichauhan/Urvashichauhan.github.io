import { PROBLEMS, PROBLEM_ICONS } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

export default function Problem() {
    return (
        <section className="relative py-28 md:py-36">
            <div className="weave-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <Reveal>
                        <SectionTag className="justify-center">The Problem</SectionTag>
                        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                            Still Running Your Business Through{" "}
                            <span className="text-copper">Excel + WhatsApp?</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={140}>
                        <p className="mt-6 text-lg font-light leading-relaxed text-mist">
                            Most businesses start with simple tools. But as the business grows,
                            the gaps become painful.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PROBLEMS.map((p, i) => (
                        <Reveal key={p.title} delay={i * 80}>
                            <div className="group h-full border border-thread bg-panel/30 p-6 transition-all duration-400 hover:border-copper/40 hover:bg-panel/60 md:p-8">
                                <span className="flex h-12 w-12 items-center justify-center border border-thread text-copper transition-colors duration-300 group-hover:border-copper/60 group-hover:bg-copper/10 notch-sm">
                                    {PROBLEM_ICONS[p.icon]}
                                </span>
                                <h3 className="mt-5 font-display text-xl font-bold text-bone">
                                    {p.title}
                                </h3>
                                <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                                    {p.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={500}>
                    <div className="mt-16 text-center">
                        <p className="mx-auto max-w-xl text-xl font-medium leading-relaxed text-bone/90">
                            Your business doesn't necessarily need more tools.{" "}
                            <span className="text-jade">It needs the right system.</span>
                        </p>
                        <a
                            href="#contact"
                            className="group notch-sm mt-8 inline-flex items-center gap-3 bg-copper px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-bone"
                        >
                            Let's Build It
                            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
