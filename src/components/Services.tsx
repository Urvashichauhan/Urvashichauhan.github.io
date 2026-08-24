import { useState } from "react";
import { SERVICES, SERVICE_ICONS } from "../lib/data";
import { PlusIcon, Reveal, SectionTag } from "./shared";

export default function Services() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section id="services" className="relative bg-ink py-28 md:py-36">
            <div className="weave-cross pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-40" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="grid items-end gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <Reveal>
                            <SectionTag index="02">What We Do</SectionTag>
                            <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                                Services built around <span className="text-jade">your needs.</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={150} className="lg:col-span-4">
                        <div className="flex items-center gap-4 lg:justify-end">
                            <span className="stitch-x h-[2px] w-12 text-thread" aria-hidden="true" />
                            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mist">
                                06 disciplines / one fabric
                            </p>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-16 border-t border-thread">
                    {SERVICES.map((s, i) => {
                        const open = openIdx === i;
                        return (
                            <Reveal key={s.n} delay={i * 60}>
                                <div
                                    className={`border-b border-thread transition-colors duration-400 ${open ? "bg-panel/50" : "hover:bg-panel/30"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIdx(open ? null : i)}
                                        aria-expanded={open}
                                        className="group grid w-full grid-cols-[2.6rem_1fr_auto] items-center gap-4 py-7 text-left md:grid-cols-[4.5rem_1fr_3.5rem_2.5rem] md:gap-8"
                                    >
                                        <span
                                            className={`font-mono text-sm transition-colors duration-300 ${open ? "text-copper" : "text-copper/50 group-hover:text-copper"
                                                }`}
                                        >
                                            {s.n}
                                        </span>
                                        <span
                                            className={`font-display text-xl font-bold tracking-tight transition-all duration-500 sm:text-2xl md:text-4xl ${open ? "translate-x-2 text-jade" : "text-bone group-hover:translate-x-2 group-hover:text-bone"
                                                }`}
                                        >
                                            {s.title}
                                        </span>
                                        <span
                                            className={`notch-sm hidden h-14 w-14 items-center justify-center border transition-colors duration-300 sm:flex ${open
                                                    ? "border-copper text-copper"
                                                    : "border-thread text-mist group-hover:border-copper group-hover:text-copper"
                                                }`}
                                        >
                                            {SERVICE_ICONS[s.icon]}
                                        </span>
                                        <span
                                            className={`flex h-9 w-9 items-center justify-center border transition-all duration-400 ${open
                                                    ? "rotate-45 border-jade text-jade"
                                                    : "border-thread text-mist group-hover:border-jade group-hover:text-jade"
                                                }`}
                                        >
                                            <PlusIcon className="h-3.5 w-3.5" />
                                        </span>
                                    </button>

                                    <div className={`acc-body ${open ? "open" : ""}`}>
                                        <div className="acc-inner">
                                            <div className="pb-9 pl-[2.6rem] pr-4 md:pl-[4.5rem] md:pr-24">
                                                <p className="max-w-2xl text-lg font-light leading-relaxed text-mist">
                                                    {s.desc}
                                                </p>
                                                <a
                                                    href="#contact"
                                                    className="link-stitch mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.24em] text-copper"
                                                >
                                                    Discuss this capability →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
