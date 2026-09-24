import { ArrowIcon, Reveal, SectionTag } from "./shared";

export default function FinalCTA() {
    return (
        <section className="relative overflow-hidden py-28 md:py-36 border-t border-thread bg-ink">
            {/* background radial aura and weave grid */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
                style={{
                    background: "radial-gradient(circle, var(--color-jade) 0%, var(--color-copper) 60%, transparent 80%)",
                }}
                aria-hidden="true"
            />
            <div className="weave-cross pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

            <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
                <Reveal>
                    <SectionTag>Let's Get Started</SectionTag>
                    <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-6xl">
                        Have a Business Problem That Should Be <span className="text-copper">Software?</span>
                    </h2>
                </Reveal>

                <Reveal delay={100}>
                    <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-mist md:text-xl">
                        Stop losing hours to manual spreadsheets, double entries, and disjointed WhatsApp threads. Let’s build a modern, dependable system tailored to your team.
                    </p>
                </Reveal>

                <Reveal delay={180}>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 border border-copper bg-copper px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-ink font-semibold transition-all hover:bg-copper/90 hover:shadow-[0_0_24px_rgba(232,162,75,0.4)]"
                        >
                            Start Your Project
                            <ArrowIcon className="h-4 w-4" />
                        </a>
                        <a
                            href="#solutions"
                            className="inline-flex items-center gap-2 border border-thread bg-panel/40 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:border-jade hover:text-jade"
                        >
                            Explore Solutions
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={250}>
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-mist/70 font-mono text-xs uppercase tracking-[0.18em]">
                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-jade" />
                            No Sales Pressure
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                            Direct Engineer Discussion
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-jade" />
                            Free Initial Scoping Call
                        </span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
