import { useState } from "react";
import { FAQ_ITEMS } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative bg-[#FAFAF8] py-28 sm:py-36 border-t border-[#E8E8E8]">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="border-b border-[#E8E8E8] pb-10">
          <Reveal>
            <SectionTag>Common Inquiries</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#111111] sm:text-5xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 max-w-xl text-base text-[#666666]">
              Clear answers regarding technical architecture, engagement models, and engineering standards.
            </p>
          </Reveal>
        </div>

        {/* Minimal Accordion List */}
        <div className="mt-12 divide-y divide-[#E8E8E8] border-b border-[#E8E8E8]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Reveal key={item.q} delay={idx * 40}>
                <div className="py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 text-left cursor-pointer group"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold text-[#0062FF] shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="font-display text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#0062FF] transition-colors">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded border border-[#E8E8E8] bg-white font-mono text-base font-medium text-[#666666] transition-transform duration-200 ${
                        isOpen ? "rotate-45 text-[#0062FF] border-[#0062FF]" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pl-8 sm:pl-9 pr-6 text-sm sm:text-base leading-relaxed text-[#555555] animate-fade-in">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Direct question prompt */}
        <Reveal delay={250}>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#666666]">
            <span>Have a technical question not answered here?</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[#0062FF] hover:text-[#0050D8] uppercase tracking-wider"
            >
              <span>Ask our engineering team</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
