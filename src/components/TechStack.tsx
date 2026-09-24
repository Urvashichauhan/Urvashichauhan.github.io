import { useState } from "react";
import { TECH_STACK } from "../lib/data";
import { Reveal, SectionTag } from "./shared";

const CATEGORIES = ["All", "Frontend", "Mobile", "Backend", "Database", "Integration", "DevOps"] as const;

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const filtered = activeCategory === "All"
        ? TECH_STACK
        : TECH_STACK.filter((item) => item.category === activeCategory);

    return (
        <section id="technology" className="relative bg-ink/70 py-28 md:py-36 border-t border-thread">
            <div className="weave-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <Reveal>
                            <SectionTag>Stack &amp; Architecture</SectionTag>
                            <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                                Technology That Powers <span className="text-jade">Our Solutions</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-mist">
                                We choose technology based on the problem, not the other way around. No hype-driven development — just stable, maintainable stacks.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={150}>
                        <div className="flex items-center gap-3">
                            <span className="stitch-x h-[2px] w-12 text-thread" aria-hidden="true" />
                            <span className="font-mono text-xs uppercase tracking-[0.24em] text-copper">
                                Production Grade
                            </span>
                        </div>
                    </Reveal>
                </div>

                {/* category filter tabs */}
                <Reveal delay={200}>
                    <div className="mt-12 flex flex-wrap gap-2 border-b border-thread pb-4">
                        {CATEGORIES.map((cat) => {
                            const isSelected = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer ${
                                        isSelected
                                            ? "border border-jade bg-jade/10 text-jade"
                                            : "border border-transparent text-mist hover:text-bone hover:border-thread"
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                {/* tech items grid */}
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {filtered.map((item, idx) => (
                        <Reveal key={item.name} delay={idx * 40}>
                            <div className="group relative flex flex-col justify-between border border-thread bg-panel/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-jade/40 hover:bg-panel/60">
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60 group-hover:text-copper transition-colors">
                                    {item.category}
                                </span>
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="font-display text-base font-semibold text-bone group-hover:text-jade transition-colors">
                                        {item.name}
                                    </span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-thread group-hover:bg-jade transition-colors" />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* bottom callout banner */}
                <Reveal delay={300}>
                    <div className="mt-12 border border-thread bg-panel/20 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h4 className="font-display text-lg font-bold text-bone">
                                Have an existing legacy stack or database?
                            </h4>
                            <p className="mt-1 text-sm font-light text-mist">
                                We regularly audit, refactor, and modernize existing Laravel, PHP, Node.js, and SQL environments without disrupting daily operations.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex shrink-0 items-center gap-2 border border-copper px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-copper transition-colors hover:bg-copper hover:text-ink"
                        >
                            Discuss Stack Migration
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
