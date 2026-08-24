import { useEffect, useState } from "react";
import { CASE_FEATURES, CHART_DATA, KnotCheck, RobotIcon } from "../lib/data";
import { useInView, usePrefersReducedMotion } from "../lib/hooks";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

const AI_LINES = [
    "Synthesizing 1,248 grade records…",
    "Trend detected: Science +12% vs last term.",
    "Flagging 3 students for early intervention.",
    "Term report compiled in 2.4s — ready.",
];

function Typewriter() {
    const reduced = usePrefersReducedMotion();
    const [text, setText] = useState("");

    useEffect(() => {
        if (reduced) {
            setText(AI_LINES[0]);
            return;
        }
        let line = 0;
        let chars = 0;
        let timer = 0;
        const step = () => {
            const current = AI_LINES[line];
            if (chars <= current.length) {
                setText(current.slice(0, chars));
                chars += 1;
                timer = window.setTimeout(step, 34);
            } else {
                timer = window.setTimeout(() => {
                    line = (line + 1) % AI_LINES.length;
                    chars = 0;
                    step();
                }, 2000);
            }
        };
        step();
        return () => window.clearTimeout(timer);
    }, [reduced]);

    return (
        <div className="mt-5 flex min-h-[2.6rem] items-center border border-thread bg-panel/70 px-4 py-3 font-mono text-xs text-bone/85">
            <span className="mr-2 text-jade">&gt;</span>
            <span>{text}</span>
            <span className="caret-blink ml-1 inline-block h-3.5 w-[7px] bg-jade" aria-hidden="true" />
        </div>
    );
}

function ReportCard() {
    const { ref, inView } = useInView<HTMLDivElement>(0.3);

    return (
        <div ref={ref} className="relative">
            <div className="notch border border-thread bg-ink">
                {/* window header */}
                <div className="flex items-center gap-2 border-b border-thread px-5 py-3.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-copper" />
                    <span className="h-2.5 w-2.5 rounded-full bg-jade" />
                    <span className="h-2.5 w-2.5 rounded-full bg-bone/50" />
                    <span className="ml-3 font-mono text-[11px] tracking-[0.14em] text-mist">
                        innoweave · class-report.ai
                    </span>
                </div>

                <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-baseline justify-between">
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                            Subject performance
                        </p>
                        <p className="font-mono text-[10px] tracking-[0.2em] text-jade">AVG 72.4</p>
                    </div>

                    {/* bars */}
                    <div className="flex items-end gap-4 md:gap-6">
                        {CHART_DATA.map((d, i) => (
                            <div key={d.label} className="flex flex-1 flex-col items-center gap-2.5">
                                <span
                                    className={`font-mono text-[10px] ${i % 2 === 0 ? "text-jade" : "text-copper"}`}
                                >
                                    {d.v}
                                </span>
                                <div className="flex h-36 w-full items-end md:h-44">
                                    <div
                                        className={`w-full transition-all duration-1000 ease-out ${i % 2 === 0 ? "bg-jade/85" : "bg-copper/85"
                                            }`}
                                        style={{
                                            height: inView ? `${d.v}%` : "0%",
                                            transitionDelay: `${i * 130}ms`,
                                        }}
                                    />
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist">
                                    {d.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* AI badge */}
                    <div className="mt-6 flex items-center justify-between border-t border-thread pt-5">
                        <div className="flex items-center gap-2.5 text-jade">
                            <RobotIcon className="h-5 w-5" />
                            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
                                AI Report Generated
                            </span>
                        </div>
                        <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-mist">
                            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-jade" />
                            SYNCED
                        </span>
                    </div>

                    <Typewriter />
                </div>
            </div>
        </div>
    );
}

export default function CaseStudy() {
    return (
        <section className="relative overflow-hidden bg-panel py-28 md:py-36">
            <span
                className="pointer-events-none absolute -top-6 right-4 hidden select-none font-display text-[11rem] font-bold leading-none text-bone/[0.04] lg:block"
                aria-hidden="true"
            >
                01
            </span>
            <div className="weave-cross pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-50" aria-hidden="true" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
                <div>
                    <Reveal>
                        <SectionTag index="03">Featured Project</SectionTag>
                        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                            AI-Powered School <span className="text-copper">Management System</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={140}>
                        <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-mist">
                            We built a comprehensive school management platform with AI-driven
                            report generation, automated analytics, and intelligent insights
                            that help educators make data-driven decisions.
                        </p>
                    </Reveal>
                    <div className="mt-9 grid gap-3.5 sm:grid-cols-2">
                        {CASE_FEATURES.map((f, i) => (
                            <Reveal key={f} delay={200 + i * 90}>
                                <div className="group flex items-center gap-3 border border-thread bg-ink/40 px-4 py-3.5 transition-colors duration-300 hover:border-copper/60 hover:bg-ink/70">
                                    <KnotCheck className="h-5 w-5 shrink-0" />
                                    <span className="text-sm font-medium text-bone/90">{f}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={550}>
                        <a
                            href="#contact"
                            className="group notch-sm mt-10 inline-flex items-center gap-3 bg-copper px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-bone"
                        >
                            Discuss Your Project
                            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </a>
                    </Reveal>
                </div>

                <Reveal delay={200}>
                    <ReportCard />
                </Reveal>
            </div>
        </section>
    );
}
