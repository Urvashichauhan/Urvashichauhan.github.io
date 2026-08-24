import { PROJECTS } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

function prefillContact(title: string) {
    return (e: React.MouseEvent) => {
        // keep the anchor navigation to #contact, but prefill the subject line
        window.dispatchEvent(
            new CustomEvent("innoweave:prefill", {
                detail: `Project inquiry — ${title}`,
            })
        );
        void e;
    };
}

export default function Work() {
    return (
        <section id="work" className="relative py-28 md:py-36">
            <div className="weave-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="flex flex-wrap items-end justify-between gap-8">
                    <Reveal>
                        <SectionTag index="04">Our Work</SectionTag>
                        <h2 className="mt-6 max-w-xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                            Selected projects <span className="text-copper">we're proud of.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={150}>
                        <p className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-mist">
                            <span className="stitch-x h-[2px] w-12 text-thread" aria-hidden="true" />
                            04 case files
                        </p>
                    </Reveal>
                </div>

                <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
                    {PROJECTS.map((p, i) => (
                        <Reveal key={p.title} delay={(i % 2) * 120} className={i % 2 === 1 ? "md:mt-20" : ""}>
                            <a href="#contact" onClick={prefillContact(p.title)} className="group block">
                                <figure className="notch relative aspect-[4/3] overflow-hidden border border-thread bg-panel">
                                    <div className="kenburns absolute inset-0">
                                        <img
                                            src={p.img}
                                            alt={p.alt}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
                                        />
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        aria-hidden="true"
                                    />
                                    <span className="absolute bottom-5 right-5 flex translate-y-4 items-center gap-2 bg-copper px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 notch-sm">
                                        View Details
                                        <ArrowIcon className="h-3.5 w-3.5" />
                                    </span>
                                    <span
                                        className="absolute left-5 top-5 border border-bone/25 bg-ink/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/90"
                                        aria-hidden="true"
                                    >
                                        0{i + 1}
                                    </span>
                                </figure>
                                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-copper">
                                            {p.tag}
                                        </p>
                                        <h3 className="link-stitch mt-2 w-fit font-display text-2xl font-bold tracking-tight text-bone transition-colors duration-300 group-hover:text-jade md:text-3xl">
                                            {p.title}
                                        </h3>
                                    </div>
                                    <span
                                        className="flex h-11 w-11 items-center justify-center border border-thread text-mist transition-all duration-300 group-hover:border-jade group-hover:text-jade"
                                        aria-hidden="true"
                                    >
                                        <ArrowIcon className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                                    </span>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
