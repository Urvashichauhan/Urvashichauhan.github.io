import { PROCESS_STEPS } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

const STEP_DELIVERABLES = [
    "Initial discovery call & problem framing",
    "Workflow diagrams & bottleneck identification",
    "Clickable prototypes & architectural specs",
    "Sprint demos & staging environment testing",
    "Production release, team training & ongoing SLAs",
];

export default function Process() {
    return (
        <section id="process" className="relative py-28 md:py-36">
            <div className="weave-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <Reveal>
                            <SectionTag>Our Methodology</SectionTag>
                            <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                                From Business Problem to <span className="text-copper">Working Software</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-mist">
                                A structured, transparent engineering process. No black boxes — you see progress, prototypes, and milestones at every stage.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={150}>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 border border-jade bg-jade/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-jade transition-colors hover:bg-jade hover:text-ink"
                        >
                            Start a Conversation
                            <ArrowIcon className="h-3.5 w-3.5" />
                        </a>
                    </Reveal>
                </div>

                {/* 5-step horizontal/vertical timeline */}
                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                    {PROCESS_STEPS.map((step, idx) => (
                        <Reveal key={step.n} delay={idx * 100}>
                            <div className="group relative flex flex-col justify-between border border-thread bg-panel/30 p-6 md:p-7 transition-all duration-300 hover:border-copper/50 hover:bg-panel/60">
                                <div>
                                    <div className="flex items-center justify-between border-b border-thread pb-4">
                                        <span className="font-mono text-2xl font-bold text-copper/80">
                                            {step.n}
                                        </span>
                                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
                                            Stage 0{idx + 1}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 font-display text-xl font-bold text-bone group-hover:text-copper transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="mt-6 border-t border-thread/60 pt-4">
                                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-jade">
                                        Deliverable:
                                    </span>
                                    <p className="mt-1 text-xs text-bone/70 font-mono">
                                        {STEP_DELIVERABLES[idx]}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* timeline guarantee banner */}
                <Reveal delay={300}>
                    <div className="mt-14 border border-thread bg-ink/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-jade/40 bg-jade/10 text-jade font-mono text-sm">
                                ✓
                            </span>
                            <div>
                                <h4 className="font-display text-base font-bold text-bone">
                                    Agile Sprints with Direct Developer Access
                                </h4>
                                <p className="text-sm font-light text-mist">
                                    No endless account manager middlemen. You talk directly with the engineers building your system.
                                </p>
                            </div>
                        </div>
                        <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-copper">
                            Weekly Demos &amp; Updates
                        </span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
