import { ArrowIcon, Reveal, SectionTag } from "./shared";

const COST_FACTORS = [
    {
        title: "Workflow Complexity",
        desc: "A straightforward customer booking form requires different architecture than a multi-branch approval and dispatch engine.",
        tag: "Scope & Logic",
    },
    {
        title: "Platform Coverage",
        desc: "A responsive web application, dedicated admin dashboard, or native iOS/Android apps sharing unified backend APIs.",
        tag: "Web / Mobile",
    },
    {
        title: "External Integrations",
        desc: "Integrating SMS/WhatsApp notifications, payment gateways, accounting systems, hardware scanners, or custom ERPs.",
        tag: "APIs & Services",
    },
    {
        title: "Legacy Data Migration",
        desc: "Importing, cleaning, and validating historical records from Excel spreadsheets, old databases, or paper trails.",
        tag: "Data Cleanse",
    },
];

const SCOPE_PROMISES = [
    "Milestone-based delivery with clear phase approvals",
    "100% intellectual property & source code ownership",
    "Comprehensive technical documentation & handover",
    "Post-launch warranty & stabilization period",
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative bg-ink/70 py-28 md:py-36 border-t border-thread">
            <div className="weave-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <Reveal>
                            <SectionTag>Pricing &amp; Scoping</SectionTag>
                            <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                                Every Business Is Different. <span className="text-jade">So Is Every System.</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-mist">
                                We don't force you into cookie-cutter monthly subscription tiers with arbitrary limits. We quote based on the exact problem you need solved.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={150}>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 border border-copper bg-copper/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-copper transition-colors hover:bg-copper hover:text-ink"
                        >
                            Tell Us What You Need
                            <ArrowIcon className="h-3.5 w-3.5" />
                        </a>
                    </Reveal>
                </div>

                {/* 4 cost factor cards */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {COST_FACTORS.map((factor, idx) => (
                        <Reveal key={factor.title} delay={idx * 80}>
                            <div className="pricing-card flex h-full flex-col justify-between border border-thread bg-panel/30 p-6 md:p-7">
                                <div>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
                                        {factor.tag}
                                    </span>
                                    <h3 className="mt-3 font-display text-xl font-bold text-bone">
                                        {factor.title}
                                    </h3>
                                    <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                                        {factor.desc}
                                    </p>
                                </div>
                                <div className="mt-6 border-t border-thread/60 pt-4">
                                    <span className="font-mono text-[10px] text-mist/60 uppercase tracking-[0.16em]">
                                        Factor 0{idx + 1}
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* transparent commitment box */}
                <Reveal delay={250}>
                    <div className="mt-12 border border-thread bg-panel/20 p-6 md:p-10">
                        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-5">
                                <span className="font-mono text-xs uppercase tracking-[0.24em] text-jade">
                                    Our Pricing Philosophy
                                </span>
                                <h3 className="mt-3 font-display text-2xl font-bold text-bone">
                                    Transparent Scope. No Surprise Invoices.
                                </h3>
                                <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                                    Before writing code, we deliver a written specification outlining what will be built, timelines, and costs broken down by milestone.
                                </p>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {SCOPE_PROMISES.map((promise) => (
                                        <div key={promise} className="flex items-start gap-3">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-jade/15 text-jade font-mono text-xs mt-0.5">
                                                ✓
                                            </span>
                                            <span className="text-sm font-light text-bone/90">
                                                {promise}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
