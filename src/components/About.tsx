import { WHY_US } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

const WHY_US_ICONS = [
    // Workflow
    <svg key="1" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <path d="M10 6.5h4M17.5 10v4M14 17.5h-4M6.5 14v-4" />
    </svg>,
    // Scalable
    <svg key="2" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9M8 17l4-4 4 4" />
    </svg>,
    // Web + Mobile
    <svg key="3" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </svg>,
    // Clear Communication
    <svg key="4" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8M8 13h5" />
    </svg>,
    // Long-Term Support
    <svg key="5" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>,
    // Practical Technology
    <svg key="6" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
    </svg>,
];

export default function About() {
    return (
        <section id="about" className="relative py-28 md:py-36">
            <div className="weave-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
                    {/* sticky left column */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-28">
                            <Reveal>
                                <SectionTag>Why InnoweveTech</SectionTag>
                                <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                                    Software built around{" "}
                                    <span className="text-jade">how your team actually works.</span>
                                </h2>
                            </Reveal>

                            <Reveal delay={120}>
                                <p className="mt-6 text-base font-light leading-relaxed text-mist">
                                    Most custom software projects fail because developers jump to code before understanding the business. We map the physical and digital bottlenecks first, then build the exact system needed.
                                </p>
                            </Reveal>

                            <Reveal delay={200}>
                                <div className="mt-8 border-t border-thread pt-6">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 border border-jade bg-jade/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-jade transition-colors hover:bg-jade hover:text-ink"
                                    >
                                        Schedule Discovery Call
                                        <ArrowIcon className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* right column: 6 concrete value pillars */}
                    <div className="lg:col-span-7">
                        <div className="grid gap-6 sm:grid-cols-2">
                            {WHY_US.map((item, idx) => (
                                <Reveal key={item.title} delay={idx * 80}>
                                    <div className="group relative flex h-full flex-col justify-between border border-thread bg-panel/30 p-6 md:p-7 transition-all duration-300 hover:border-jade/40 hover:bg-panel/60">
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-copper group-hover:text-jade transition-colors">
                                                    {WHY_US_ICONS[idx % WHY_US_ICONS.length]}
                                                </span>
                                                <span className="font-mono text-xs text-mist/50">
                                                    0{idx + 1}
                                                </span>
                                            </div>

                                            <h3 className="mt-5 font-display text-xl font-bold text-bone">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div className="mt-6 border-t border-thread/50 pt-3">
                                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-jade">
                                                Core Standard
                                            </span>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
