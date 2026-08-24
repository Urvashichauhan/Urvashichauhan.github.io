import type { CSSProperties } from "react";
import { useInView, usePrefersReducedMotion } from "../lib/hooks";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

const WARP_XS = Array.from({ length: 13 }, (_, i) => 52.5 + i * 37);
const WEFT_YS = [130, 195, 260, 325, 390, 455, 520];

function weavePath(y: number) {
    let d = `M 34 ${y}`;
    for (let x = 34; x < 500; x += 37) {
        d += " q 9.25 -11 18.5 0 q 9.25 11 18.5 0";
    }
    return d;
}

function Loom() {
    const reduced = usePrefersReducedMotion();
    const shuttlePath = weavePath(325);

    return (
        <div className="relative mx-auto w-full max-w-[560px]">
            {/* floating data chips */}
            <div className="floaty absolute -right-3 top-[16%] z-10 hidden items-center gap-2 border border-thread bg-panel/90 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-jade notch-sm sm:flex">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-jade" />
                AI ANALYTICS — LIVE
            </div>
            <div
                className="floaty absolute -left-4 top-[48%] z-10 hidden border border-thread bg-panel/90 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-bone/85 notch-sm sm:block"
                style={{ animationDelay: "1.2s" }}
            >
                99.9% UPTIME
            </div>
            <div
                className="floaty absolute -bottom-4 right-[10%] z-10 hidden border border-copper/40 bg-panel/90 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-copper notch-sm sm:block"
                style={{ animationDelay: "2.1s" }}
            >
                PREDICTIVE INSIGHTS
            </div>

            <svg
                viewBox="0 0 560 600"
                className="w-full"
                role="img"
                aria-label="Animated loom: engineering warp threads interlaced with intelligent weft threads"
            >
                {/* frame + corner ticks */}
                <rect x="16" y="16" width="528" height="568" fill="rgba(4,33,27,0.55)" stroke="var(--color-thread)" />
                {[
                    "M16 40 V16 H40",
                    "M520 16 H544 V40",
                    "M544 560 V584 H520",
                    "M40 584 H16 V560",
                ].map((d) => (
                    <path key={d} d={d} fill="none" stroke="var(--color-copper)" strokeWidth="2" />
                ))}

                {/* corner labels */}
                <text x="30" y="44" fill="var(--color-mist)" fontSize="10" letterSpacing="3" fontFamily="JetBrains Mono, monospace">
                    FIG. 01 — THE LOOM
                </text>
                <text x="530" y="44" fill="var(--color-mist)" fontSize="10" letterSpacing="3" textAnchor="end" fontFamily="JetBrains Mono, monospace">
                    WEFT / AI
                </text>
                <text x="30" y="566" fill="var(--color-mist)" fontSize="10" letterSpacing="3" fontFamily="JetBrains Mono, monospace">
                    WARP / ENGINEERING
                </text>
                <text x="530" y="566" fill="var(--color-copper)" fontSize="10" letterSpacing="3" textAnchor="end" fontFamily="JetBrains Mono, monospace">
                    OUTPUT / YOUR SYSTEM
                </text>

                {/* warp threads */}
                {WARP_XS.map((x, i) => (
                    <line
                        key={x}
                        x1={x}
                        y1={64}
                        x2={x}
                        y2={536}
                        pathLength={1}
                        className="thread-draw"
                        style={{ animationDelay: `${i * 65}ms` } as CSSProperties}
                        stroke="var(--color-jade)"
                        strokeWidth={i % 3 === 0 ? 1.6 : 1}
                        opacity={i % 3 === 0 ? 0.55 : 0.3}
                    />
                ))}

                {/* weft threads */}
                {WEFT_YS.map((y, i) => (
                    <path
                        key={y}
                        d={weavePath(y)}
                        pathLength={1}
                        className="thread-draw"
                        style={{ animationDelay: `${900 + i * 210}ms` } as CSSProperties}
                        fill="none"
                        stroke={i % 2 === 0 ? "var(--color-copper)" : "var(--color-bone)"}
                        strokeWidth={i % 2 === 0 ? 1.8 : 1.2}
                        opacity={i % 2 === 0 ? 0.85 : 0.4}
                    />
                ))}

                {/* glowing active row */}
                <path
                    d={shuttlePath}
                    className="weft-glow"
                    fill="none"
                    stroke="var(--color-jade)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    filter="blur(4px)"
                    opacity="0.2"
                />

                {/* shuttle riding the middle thread */}
                {!reduced && (
                    <g>
                        <animateMotion dur="7s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
                            <mpath href="#shuttle-path" />
                        </animateMotion>
                        <rect x="-8" y="-8" width="16" height="16" transform="rotate(45)" fill="var(--color-copper)" />
                        <rect x="-8" y="-8" width="16" height="16" transform="rotate(45)" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />
                        <circle r="2.6" fill="var(--color-ink)" />
                    </g>
                )}
                <path id="shuttle-path" d={shuttlePath} fill="none" stroke="none" />
            </svg>
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
                                Systems That Think
                            </span>
                        </div>
                    </Reveal>

                    <div ref={ref} className={`mt-8 ${inView ? "is-in" : ""}`}>
                        <h1 className="font-display text-[clamp(2.6rem,6.3vw,5.3rem)] font-bold leading-[1.03] tracking-tight text-bone">
                            <span className="mask-line">
                                <span style={{ "--rd": "80ms" } as CSSProperties}>We Build</span>
                            </span>
                            <span className="mask-line">
                                <span style={{ "--rd": "220ms" } as CSSProperties}>
                                    <em className="not-italic text-jade">Intelligent</em> Systems
                                </span>
                            </span>
                            <span className="mask-line">
                                <span style={{ "--rd": "360ms" } as CSSProperties}>
                                    <span className="link-stitch text-copper">For Your Business.</span>
                                </span>
                            </span>
                        </h1>
                    </div>

                    <Reveal delay={350}>
                        <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-mist">
                            We design and develop custom software systems with AI integration —
                            from school management platforms with AI-driven analytics to
                            enterprise-grade solutions that scale.
                        </p>
                    </Reveal>

                    <Reveal delay={480}>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href="#contact"
                                className="group notch-sm inline-flex items-center gap-3 bg-copper px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-bone"
                            >
                                Get Started
                                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </a>
                            <a
                                href="#work"
                                className="notch-sm inline-flex items-center gap-3 border border-thread px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:border-jade hover:text-jade"
                            >
                                View Our Work
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={620}>
                        <div className="mt-12 border-t border-thread pt-6">
                            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist/80">
                                Trusted by organizations across
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2.5">
                                {["Education", "Healthcare", "Enterprise"].map((sector) => (
                                    <span
                                        key={sector}
                                        className="notch-sm flex items-center gap-2 border border-thread bg-panel/60 px-3.5 py-1.5 font-mono text-xs text-bone/85 transition-colors duration-300 hover:border-jade/60 hover:text-jade"
                                    >
                                        <svg viewBox="0 0 8 8" className="h-1.5 w-1.5" aria-hidden="true">
                                            <rect x="1.5" y="1.5" width="5" height="5" transform="rotate(45 4 4)" fill="var(--color-jade)" />
                                        </svg>
                                        {sector}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="lg:col-span-6">
                    <Reveal delay={250}>
                        <Loom />
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
