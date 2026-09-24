import { useState } from "react";
import { PROJECTS } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

function ProjectCard({
    project,
    index,
    isExpanded,
    onToggle,
}: {
    project: typeof PROJECTS[number];
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
}) {
    return (
        <Reveal delay={index * 120}>
            <div className="project-card border border-thread bg-panel/30 overflow-hidden">
                {/* header */}
                <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <span className={`inline-block font-mono text-[10px] uppercase tracking-[0.24em] px-2.5 py-1 mb-3 ${
                                project.type === "Client Project"
                                    ? "bg-jade/10 text-jade border border-jade/30"
                                    : "bg-copper/10 text-copper border border-copper/30"
                            }`}>
                                {project.type}
                            </span>
                            <h3 className="font-display text-2xl font-bold text-bone md:text-3xl">
                                {project.title}
                            </h3>
                        </div>
                        <span className="shrink-0 font-mono text-sm text-copper/50">
                            0{index + 1}
                        </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-mist">
                        {project.desc}
                    </p>

                    {/* workflow chain */}
                    <div className="mt-6 overflow-x-auto">
                        <div className="flex items-center gap-1.5 pb-2">
                            {project.workflow.map((step, j) => (
                                <span key={step} className="flex items-center gap-1.5">
                                    <span className="whitespace-nowrap border border-jade/25 bg-jade/8 px-2.5 py-1.5 font-mono text-[11px] text-jade">
                                        {step}
                                    </span>
                                    {j < project.workflow.length - 1 && (
                                        <span className="text-mist/40 font-mono text-xs">→</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* expandable details */}
                <div className={`acc-body ${isExpanded ? "open" : ""}`}>
                    <div className="acc-inner">
                        <div className="border-t border-thread p-6 md:p-8">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-copper">
                                        Business Problem
                                    </p>
                                    <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                                        {project.problem}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-copper">
                                        Key Features
                                    </p>
                                    <ul className="mt-3 space-y-2">
                                        {project.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-sm text-bone/80">
                                                <svg viewBox="0 0 8 8" className="h-1.5 w-1.5 shrink-0" aria-hidden="true">
                                                    <rect x="1.5" y="1.5" width="5" height="5" transform="rotate(45 4 4)" fill="var(--color-jade)" />
                                                </svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* tech stack */}
                            <div className="mt-6 border-t border-thread pt-5">
                                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                    Technology Stack
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="border border-thread bg-ink/40 px-3 py-1.5 font-mono text-[11px] text-bone/70"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* toggle button */}
                <button
                    type="button"
                    onClick={onToggle}
                    className="flex w-full items-center justify-center gap-2 border-t border-thread py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-colors duration-300 hover:bg-panel/30 hover:text-jade"
                >
                    {isExpanded ? "Show Less" : "View Case Study"}
                    <ArrowIcon className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? "rotate-[-90deg]" : ""}`} />
                </button>
            </div>
        </Reveal>
    );
}

export default function Work() {
    const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

    return (
        <section id="work" className="relative py-28 md:py-36">
            <div className="weave-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="flex flex-wrap items-end justify-between gap-8">
                    <Reveal>
                        <SectionTag>Our Work</SectionTag>
                        <h2 className="mt-6 max-w-xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                            Built Around <span className="text-copper">Real Workflows</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={150}>
                        <p className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-mist">
                            <span className="stitch-x h-[2px] w-12 text-thread" aria-hidden="true" />
                            problem → workflow → solution
                        </p>
                    </Reveal>
                </div>

                <div className="mt-16 space-y-8">
                    {PROJECTS.map((p, i) => (
                        <ProjectCard
                            key={p.title}
                            project={p}
                            index={i}
                            isExpanded={expandedIdx === i}
                            onToggle={() => setExpandedIdx(expandedIdx === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
