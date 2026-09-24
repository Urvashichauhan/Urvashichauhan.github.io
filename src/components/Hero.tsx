import type { CSSProperties } from "react";
import { HERO_CAPABILITIES } from "../lib/data";
import { useInView, usePrefersReducedMotion } from "../lib/hooks";
import { ArrowIcon, Reveal } from "./shared";

/* ---------- hero workflow transformation visual ---------- */

const TRANSFORMS = [
    { from: "Excel", to: "Dashboard", color: "jade" },
    { from: "WhatsApp", to: "Customer Management", color: "copper" },
    { from: "Manual Orders", to: "Order System", color: "jade" },
    { from: "Phone Calls", to: "Automated Workflow", color: "copper" },
];

function WorkflowVisual() {
    const { ref, inView } = useInView<HTMLDivElement>(0.2);
    const reduced = usePrefersReducedMotion();

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-[540px]">
            {/* ambient glow */}
            <div
                className="glow-pulse pointer-events-none absolute -right-12 top-1/4 h-48 w-48 rounded-full bg-jade/20"
                aria-hidden="true"
            />
            <div
                className="glow-pulse pointer-events-none absolute -left-8 bottom-1/4 h-40 w-40 rounded-full bg-copper/15"
                style={{ animationDelay: "2s" }}
                aria-hidden="true"
            />

            {/* frame */}
            <div className="notch relative border border-thread bg-ink/80 p-6 md:p-8">
                {/* window header */}
                <div className="mb-6 flex items-center gap-2 border-b border-thread pb-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-copper" />
                    <span className="h-2.5 w-2.5 rounded-full bg-jade" />
                    <span className="h-2.5 w-2.5 rounded-full bg-bone/50" />
                    <span className="ml-3 font-mono text-[11px] tracking-[0.14em] text-mist">
                        workflow · transformation
                    </span>
                </div>

                {/* transformation rows */}
                <div className="space-y-4">
                    {TRANSFORMS.map((t, i) => (
                        <div
                            key={t.from}
                            className={`flex items-center gap-3 ${inView && !reduced ? "node-enter" : inView ? "" : "opacity-0"}`}
                            style={{ animationDelay: `${200 + i * 180}ms` } as CSSProperties}
                        >
                            {/* from */}
                            <div className="flex min-w-[110px] items-center gap-2 border border-thread bg-panel/60 px-3 py-2.5 sm:min-w-[130px]">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
                                <span className="font-mono text-[11px] text-bone/70 sm:text-xs">{t.from}</span>
                            </div>

                            {/* arrow */}
                            <div className="flex items-center gap-1">
                                <span className="h-px w-4 bg-thread sm:w-8" />
                                <svg viewBox="0 0 12 12" className={`h-3 w-3 text-${t.color}`} fill="currentColor" aria-hidden="true">
                                    <polygon points="0,2 12,6 0,10" />
                                </svg>
                            </div>

                            {/* to */}
                            <div className={`flex flex-1 items-center gap-2 border px-3 py-2.5 ${t.color === "jade"
                                ? "border-jade/30 bg-jade/8"
                                : "border-copper/30 bg-copper/8"
                                }`}>
                                <span className={`pulse-dot h-1.5 w-1.5 rounded-full ${t.color === "jade" ? "bg-jade" : "bg-copper"
                                    }`} />
                                <span className={`font-mono text-[11px] sm:text-xs ${t.color === "jade" ? "text-jade" : "text-copper"
                                    }`}>
                                    {t.to}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* bottom status bar */}
                <div className="mt-6 flex items-center justify-between border-t border-thread pt-4">
                    <div className="flex items-center gap-2.5 text-jade">
                        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-jade" />
                        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em]">
                            System Active
                        </span>
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.18em] text-mist">
                        4 workflows digitized
                    </span>
                </div>
            </div>

            {/* floating chips */}
            <div className="floaty absolute -right-3 top-[12%] z-10 hidden items-center gap-2 border border-thread bg-panel/90 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-jade notch-sm sm:flex">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-jade" />
                CUSTOM SOFTWARE
            </div>
            <div
                className="floaty absolute -left-4 bottom-[12%] z-10 hidden border border-copper/40 bg-panel/90 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-copper notch-sm sm:block"
                style={{ animationDelay: "1.8s" }}
            >
                BUILT FOR YOUR BUSINESS
            </div>
        </div>
    );
}

export default function Hero() {
    const { ref, inView } = useInView<HTMLDivElement>(0.1);

    return (
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32">
            {/* local glows */}
            <div
                className="pointer-events-none absolute -left-40 top-24 h-[480px] w-[480px] rounded-full opacity-[0.13]"
                style={{ background: "radial-gradient(circle, var(--color-jade), transparent 65%)" }}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full opacity-[0.1]"
                style={{ background: "radial-gradient(circle, var(--color-copper), transparent 65%)" }}
                aria-hidden="true"
            />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-6">
                    <Reveal>
                        <div className="notch-sm inline-flex items-center gap-3 border border-copper/40 bg-copper/10 px-4 py-2">
                            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-jade" />
                            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-copper">
                                Custom Software Development
                            </span>
                        </div>
                    </Reveal>

                    <div ref={ref} className={`mt-8 ${inView ? "is-in" : ""}`}>
                        <h1 className="font-display text-[clamp(2.4rem,5.8vw,4.8rem)] font-bold leading-[1.06] tracking-tight text-bone">
                            <span className="mask-line">
                                <span style={{ "--rd": "80ms" } as CSSProperties}>We Build Software</span>
                            </span>
                            <span className="mask-line">
                                <span style={{ "--rd": "220ms" } as CSSProperties}>
                                    <em className="not-italic text-jade">Around</em> Your
                                </span>
                            </span>
                            <span className="mask-line">
                                <span style={{ "--rd": "360ms" } as CSSProperties}>
                                    <span className="link-stitch text-copper">Business.</span>
                                </span>
                            </span>
                        </h1>
                    </div>

                    <Reveal delay={350}>
                        <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-mist">
                            From business dashboards and management systems to mobile apps and
                            automation — InnoweveTech turns manual workflows into software
                            designed around the way your business works.
                        </p>
                    </Reveal>

                    <Reveal delay={480}>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href="#contact"
                                className="group notch-sm inline-flex items-center gap-3 bg-copper px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-bone"
                            >
                                Start a Project
                                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </a>
                            <a
                                href="#solutions"
                                className="notch-sm inline-flex items-center gap-3 border border-thread px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:border-jade hover:text-jade"
                            >
                                See What We Build
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={620}>
                        <div className="mt-12 border-t border-thread pt-6">
                            <div className="flex flex-wrap gap-2.5">
                                {HERO_CAPABILITIES.map((cap) => (
                                    <span
                                        key={cap}
                                        className="notch-sm flex items-center gap-2 border border-thread bg-panel/60 px-3.5 py-1.5 font-mono text-xs text-bone/85 transition-colors duration-300 hover:border-jade/60 hover:text-jade"
                                    >
                                        <svg viewBox="0 0 8 8" className="h-1.5 w-1.5" aria-hidden="true">
                                            <rect x="1.5" y="1.5" width="5" height="5" transform="rotate(45 4 4)" fill="var(--color-jade)" />
                                        </svg>
                                        {cap}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="lg:col-span-6">
                    <Reveal delay={250}>
                        <WorkflowVisual />
                    </Reveal>
                </div>
            </div>

            {/* scroll cue */}
            <div className="absolute bottom-8 left-5 hidden flex-col items-center gap-4 md:flex md:left-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-mist [writing-mode:vertical-rl]">
                    Scroll
                </span>
                <span className="block h-16 w-px overflow-hidden bg-thread">
                    <span className="scroll-line-anim block h-full w-full bg-copper" />
                </span>
            </div>
        </section>
    );
}
