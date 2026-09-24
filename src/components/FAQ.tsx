import { useState } from "react";
import { FAQ_ITEMS } from "../lib/data";
import { ArrowIcon, PlusIcon, Reveal, SectionTag } from "./shared";

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <section id="faq" className="relative bg-ink/70 py-28 md:py-36 border-t border-thread">
            <div className="weave-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative mx-auto max-w-5xl px-5 md:px-8">
                <div className="text-center">
                    <Reveal>
                        <SectionTag>Common Inquiries</SectionTag>
                        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                            Questions &amp; <span className="text-jade">Answers</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="mx-auto mt-5 max-w-xl text-lg font-light leading-relaxed text-mist">
                            Straightforward answers about our engineering capabilities, tech stack, and project engagement.
                        </p>
                    </Reveal>
                </div>

                {/* FAQ accordion list */}
                <div className="mt-16 divide-y divide-thread border-y border-thread">
                    {FAQ_ITEMS.map((item, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                            <Reveal key={item.q} delay={idx * 50}>
                                <div className="faq-card bg-panel/10">
                                    <button
                                        type="button"
                                        onClick={() => toggle(idx)}
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center justify-between gap-6 py-6 px-4 md:px-6 text-left transition-colors hover:bg-panel/30 cursor-pointer"
                                    >
                                        <span className="flex items-center gap-4">
                                            <span className="font-mono text-xs text-copper shrink-0">
                                                0{idx + 1}
                                            </span>
                                            <span className="font-display text-lg font-semibold text-bone md:text-xl">
                                                {item.q}
                                            </span>
                                        </span>
                                        <PlusIcon
                                            className={`h-5 w-5 shrink-0 text-mist transition-transform duration-300 ${
                                                isOpen ? "rotate-45 text-jade" : ""
                                            }`}
                                        />
                                    </button>

                                    <div className={`acc-body ${isOpen ? "open" : ""}`}>
                                        <div className="acc-inner">
                                            <div className="px-4 pb-6 pt-2 md:px-6 md:pb-7">
                                                <p className="max-w-3xl pl-8 text-base font-light leading-relaxed text-mist border-l border-thread">
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* bottom help prompt */}
                <Reveal delay={250}>
                    <div className="mt-12 text-center">
                        <p className="text-sm font-light text-mist">
                            Have a specific requirement or architecture question?
                        </p>
                        <a
                            href="#contact"
                            className="mt-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-copper transition-colors hover:text-jade"
                        >
                            Ask us directly
                            <ArrowIcon className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
