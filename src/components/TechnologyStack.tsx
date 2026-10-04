import { useState } from "react";
import { TECH_ITEMS, type TechItem } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

const CATEGORIES = ["All", "Frontend", "Backend", "Data", "Infrastructure", "AI & Automation"] as const;

export default function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems: TechItem[] =
    activeCategory === "All"
      ? TECH_ITEMS
      : TECH_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="technology" className="relative bg-[#FAFAF8] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-[#E8E8E8] pb-10">
          <div>
            <Reveal>
              <SectionTag>Engineering Ecosystem</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#111111] sm:text-5xl">
                Built with modern technology.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 max-w-2xl text-base text-[#666666]">
                We choose technologies engineered for long-term stability, rapid performance, and maintainable product evolution.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="flex items-center gap-2 rounded border border-[#E8E8E8] bg-white px-3 py-1.5 font-mono text-xs text-[#666666]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0062FF]" />
              <span>Production-Grade Stacks</span>
            </div>
          </Reveal>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-md px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#0062FF] text-white font-semibold shadow-sm"
                    : "border border-[#E8E8E8] bg-white text-[#666666] hover:border-[#111111] hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((tech, idx) => (
            <Reveal key={tech.name} delay={idx * 30}>
              <div className="group rounded-lg border border-[#E8E8E8] bg-white p-5 transition-all duration-200 hover:border-[#0062FF]/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#999999] group-hover:text-[#0062FF] transition-colors">
                    {tech.category}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E5E5E5] group-hover:bg-[#0062FF] transition-colors" />
                </div>

                <h3 className="mt-3 font-display text-lg font-bold text-[#111111]">
                  {tech.name}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#666666]">
                  {tech.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stack Modernization Callout Banner */}
        <Reveal delay={250}>
          <div className="mt-14 rounded-xl border border-[#E8E8E8] bg-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-lg font-bold text-[#111111]">
                Have an existing legacy stack or database?
              </h3>
              <p className="mt-1 text-sm text-[#666666] max-w-2xl">
                We regularly audit, refactor, and modernize existing Laravel, PHP, Node.js, and SQL environments without disrupting daily business operations.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#111111] hover:border-[#111111] hover:bg-white transition-colors"
            >
              <span>Discuss Stack Migration</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
