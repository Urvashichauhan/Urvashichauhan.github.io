import { STATS } from "../lib/data";
import { useCountUp, useInView } from "../lib/hooks";
import { Reveal, SectionTag } from "./shared";

function StatItem({
    value,
    suffix,
    label,
    delay,
}: {
    value: number;
    suffix: string;
    label: string;
    delay: number;
}) {
    const { ref, inView } = useInView<HTMLDivElement>(0.4);
    const count = useCountUp(value, inView);
    return (
        <div
            ref={ref}
            data-reveal
            className={`${inView ? "is-in" : ""}`}
            style={{ "--rd": `${delay}ms` } as React.CSSProperties}
        >
            <div className="font-display text-5xl font-bold leading-none text-bone md:text-6xl">
                {count}
                <span className="text-copper">{suffix}</span>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                {label}
            </p>
        </div>
    );
}

const WEAVE_ROWS = [
    {
        tag: "Warp",
        text: "Deep engineering expertise",
        glyph: <path d="M6 3v18M12 3v18M18 3v18" stroke="var(--color-jade)" strokeWidth="2" />,
    },
    {
        tag: "Weft",
        text: "Artificial intelligence",
        glyph: <path d="M3 8h18M3 16h18" stroke="var(--color-copper)" strokeWidth="2" />,
    },
    {
        tag: "Fabric",
        text: "Systems that think, adapt & evolve",
        glyph: (
            <>
                <path d="M6 3v18M12 3v18M18 3v18" stroke="var(--color-jade)" strokeWidth="2" />
                <path d="M3 8h18M3 16h18" stroke="var(--color-copper)" strokeWidth="2" />
                <path d="M12 5v6M6 13v6M18 13v6" stroke="var(--color-jade)" strokeWidth="2" />
            </>
        ),
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-28 md:py-36">
            <div className="weave-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
                    {/* sticky left column */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-28">
                            <Reveal>
                                <SectionTag index="01">About Us</SectionTag>
                                <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                                    We{" "}
                                    <span className="relative inline-block text-copper">
                                        weave
                                        <svg
                                            viewBox="0 0 120 12"
                                            className="absolute -bottom-2 left-0 w-full"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M2 8 q 10 -7 20 0 t 20 0 t 20 0 t 20 0 t 20 0"
                                                fill="none"
                                                stroke="var(--color-copper)"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                opacity="0.7"
                                            />
                                        </svg>
                                    </span>{" "}
                                    innovation into every system we build.
                                </h2>
                            </Reveal>

                            <Reveal delay={180}>
                                <div className="mt-12 border border-thread bg-panel/40">
                                    <p className="border-b border-thread px-5 py-3 font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
                                        Anatomy of the weave
                                    </p>
                                    {WEAVE_ROWS.map((row, i) => (
                                        <div
                                            key={row.tag}
                                            className={`group flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-panel ${i > 0 ? "border-t border-thread" : ""
                                                }`}
                                        >
                                            <svg viewBox="0 0 24 24" className="h-9 w-9 shrink-0" fill="none" aria-hidden="true">
                                                {row.glyph}
                                            </svg>
                                            <div>
                                                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
                                                    {row.tag}
                                                </p>
                                                <p className="mt-0.5 text-sm font-medium text-bone/90">{row.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* right column */}
                    <div className="lg:col-span-7 lg:pl-10">
                        <Reveal>
                            <p className="text-xl font-light leading-relaxed text-bone/90 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-copper md:text-2xl">
                                Innoweave Tech is a technology company specializing in building
                                custom software systems for diverse clients. We combine deep
                                engineering expertise with artificial intelligence to create
                                solutions that don't just work — they think, adapt, and evolve.
                            </p>
                        </Reveal>
                        <Reveal delay={140}>
                            <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-mist">
                                From AI-powered school report systems to complex enterprise
                                platforms, we build technology that transforms how organizations
                                operate.
                            </p>
                        </Reveal>

                        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-thread pt-10 sm:grid-cols-3 sm:gap-6">
                            {STATS.map((s, i) => (
                                <StatItem key={s.label} {...s} delay={i * 130} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
