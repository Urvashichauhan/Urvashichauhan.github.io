import { Reveal, SectionTag } from "./shared";

const PARTNERSHIPS = [
    {
        quote: "Our field team spent hours daily reconciling receipts and WhatsApp demand messages. The custom management system gave us one single dashboard for our entire FPO supply chain.",
        role: "Operations Director",
        industry: "Agritech & Horticulture Supply",
        impact: "70% reduction in manual data entry time",
    },
    {
        quote: "Off-the-shelf SaaS tools charged per user and still didn't fit our custom appointment workflow. InnoweveTech built a system that matched how our technicians actually work.",
        role: "Managing Partner",
        industry: "Professional Services & Booking",
        impact: "Automated dispatch & zero double-bookings",
    },
    {
        quote: "Having direct access to the engineers rather than account managers made our inventory and order management rollout completely seamless.",
        role: "Founder & CEO",
        industry: "Retail & Distribution",
        impact: "Real-time stock visibility across 4 warehouses",
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-28 md:py-36 border-t border-thread">
            <div className="weave-cross pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <Reveal>
                            <SectionTag>Partnerships &amp; Trust</SectionTag>
                            <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                                Built for Long-Term <span className="text-copper">Partnerships</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-mist">
                                We measure success by business outcomes: manual hours saved, errors eliminated, and systems that run reliably day in and day out.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={150}>
                        <div className="flex items-center gap-3">
                            <span className="stitch-x h-[2px] w-12 text-thread" aria-hidden="true" />
                            <span className="font-mono text-xs uppercase tracking-[0.24em] text-jade">
                                Client Focused
                            </span>
                        </div>
                    </Reveal>
                </div>

                {/* 3 partnership testimonial cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {PARTNERSHIPS.map((item, idx) => (
                        <Reveal key={item.industry} delay={idx * 100}>
                            <div className="group relative flex h-full flex-col justify-between border border-thread bg-panel/30 p-7 md:p-8 transition-all duration-300 hover:border-jade/40 hover:bg-panel/50">
                                <div>
                                    <div className="flex items-center gap-1 text-copper">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} className="text-sm">★</span>
                                        ))}
                                    </div>
                                    <p className="mt-5 text-base font-light italic leading-relaxed text-bone/90">
                                        "{item.quote}"
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-thread pt-5">
                                    <p className="font-display font-semibold text-bone">
                                        {item.role}
                                    </p>
                                    <p className="font-mono text-xs text-mist/70 mt-0.5">
                                        {item.industry}
                                    </p>
                                    <div className="mt-3 inline-block rounded border border-jade/30 bg-jade/10 px-2.5 py-1 font-mono text-[10px] text-jade uppercase tracking-wider">
                                        {item.impact}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* bottom commitment note */}
                <Reveal delay={250}>
                    <div className="mt-12 text-center">
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist/70">
                            Zero vendor lock-in • Complete source code ownership • Dedicated post-deployment support
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
