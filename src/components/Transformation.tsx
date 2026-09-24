import type { CSSProperties } from "react";
import { WORKFLOW_BEFORE, WORKFLOW_AFTER } from "../lib/data";
import { useInView, usePrefersReducedMotion } from "../lib/hooks";
import { Reveal, SectionTag } from "./shared";

function WorkflowColumn({
    items,
    label,
    variant,
    inView,
    reduced,
}: {
    items: string[];
    label: string;
    variant: "before" | "after";
    inView: boolean;
    reduced: boolean;
}) {
    const isBefore = variant === "before";
    return (
        <div className="flex-1">
            <p className={`mb-6 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.3em] ${
                isBefore ? "text-copper" : "text-jade"
            }`}>
                {label}
            </p>
            <div className="flex flex-col items-center gap-1">
                {items.map((item, i) => (
                    <div key={item} className="flex flex-col items-center">
                        <div
                            className={`w-full max-w-[200px] border px-4 py-3 text-center font-mono text-xs transition-all sm:text-sm ${
                                isBefore
                                    ? "border-thread bg-panel/40 text-bone/70"
                                    : "border-jade/30 bg-jade/8 text-jade"
                            } ${inView && !reduced ? "node-enter" : inView ? "" : "opacity-0"}`}
                            style={{
                                animationDelay: `${(isBefore ? 0 : 400) + i * 120}ms`,
                            } as CSSProperties}
                        >
                            {item}
                        </div>
                        {i < items.length - 1 && (
                            <div className={`h-4 w-px ${
                                isBefore ? "bg-thread" : "bg-jade/30"
                            }`} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Transformation() {
    const { ref, inView } = useInView<HTMLDivElement>(0.15);
    const reduced = usePrefersReducedMotion();

    return (
        <section id="solutions" className="relative bg-ink py-28 md:py-36">
            <div className="weave-cross pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-40" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <Reveal>
                        <SectionTag className="justify-center">The Transformation</SectionTag>
                        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                            From Manual Workflows to{" "}
                            <span className="text-jade">One Connected System</span>
                        </h2>
                    </Reveal>
                </div>

                <div ref={ref} className="mt-16">
                    <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-6">
                        <WorkflowColumn
                            items={WORKFLOW_BEFORE}
                            label="Before"
                            variant="before"
                            inView={inView}
                            reduced={reduced}
                        />

                        {/* center arrow */}
                        <div className="flex flex-col items-center justify-center self-center md:pt-12">
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-copper bg-copper/10 ${
                                    inView && !reduced ? "counter-pop" : inView ? "" : "opacity-0"
                                }`}
                                style={{ animationDelay: "600ms" } as CSSProperties}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-6 w-6 text-copper md:rotate-0 rotate-90"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M4 12h15M13 6l6 6-6 6" />
                                </svg>
                            </div>
                        </div>

                        <WorkflowColumn
                            items={WORKFLOW_AFTER}
                            label="After"
                            variant="after"
                            inView={inView}
                            reduced={reduced}
                        />
                    </div>
                </div>

                <Reveal delay={600}>
                    <div className="mt-16 text-center">
                        <p className="font-display text-2xl font-bold text-bone md:text-3xl">
                            One system. One workflow.{" "}
                            <span className="text-copper">One source of truth.</span>
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
