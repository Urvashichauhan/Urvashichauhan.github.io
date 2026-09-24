import { useEffect, useState } from "react";
import { CONTACT_ICONS, PROJECT_TYPES } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

const BUDGET_RANGES = [
    "Under ₹50,000",
    "₹50,000 - ₹1,50,000",
    "₹1,50,000 - ₹3,50,000",
    "₹3,50,000+",
    "Not sure yet",
];

const TIMELINE_OPTIONS = [
    "Immediately (Next 2-4 weeks)",
    "1 - 2 Months",
    "3+ Months",
    "Flexible / Research Phase",
];

function SuccessCheck() {
    return (
        <svg viewBox="0 0 72 72" className="h-16 w-16" aria-hidden="true">
            <circle
                cx="36"
                cy="36"
                r="32"
                fill="none"
                stroke="var(--color-thread)"
                strokeWidth="2"
            />
            <circle
                cx="36"
                cy="36"
                r="32"
                pathLength={1}
                className="thread-draw"
                fill="none"
                stroke="var(--color-jade)"
                strokeWidth="2"
                strokeLinecap="round"
                transform="rotate(-90 36 36)"
            />
            <path
                d="M22 37.5 32 47l18-21"
                pathLength={1}
                className="thread-draw"
                style={{ animationDelay: "450ms" }}
                fill="none"
                stroke="var(--color-copper)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Contact() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [projectType, setProjectType] = useState<string>(PROJECT_TYPES[0]);
    const [budget, setBudget] = useState<string>(BUDGET_RANGES[1]);
    const [timeline, setTimeline] = useState<string>(TIMELINE_OPTIONS[0]);
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [sentName, setSentName] = useState("");

    useEffect(() => {
        const onPrefill = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            if (typeof detail === "string") {
                const matched = PROJECT_TYPES.find((t) =>
                    detail.toLowerCase().includes(t.toLowerCase())
                );
                if (matched) setProjectType(matched);
                setSent(false);
            }
        };
        window.addEventListener("innoweave:prefill", onPrefill);
        return () => window.removeEventListener("innoweave:prefill", onPrefill);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSentName(name);
        setSent(true);
    };

    const reset = () => {
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setProjectType(PROJECT_TYPES[0]);
        setBudget(BUDGET_RANGES[1]);
        setTimeline(TIMELINE_OPTIONS[0]);
        setMessage("");
        setSent(false);
    };

    return (
        <section id="contact" className="relative bg-ink py-28 md:py-36">
            <div className="weave-cross pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="grid gap-16 lg:grid-cols-12">
                    {/* left column: business context & direct details */}
                    <div className="lg:col-span-5">
                        <Reveal>
                            <SectionTag>Get In Touch</SectionTag>
                            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                                Let's build your <span className="text-jade">system</span>.
                            </h2>
                        </Reveal>
                        <Reveal delay={140}>
                            <p className="mt-7 max-w-md text-lg font-light leading-relaxed text-mist">
                                Tell us about your current manual workflow or business problem. An engineer will review your inquiry and schedule a detailed scoping call within 24 hours.
                            </p>
                        </Reveal>

                        <div className="mt-12 space-y-8">
                            <Reveal delay={200}>
                                <div className="flex gap-5">
                                    <span className="notch-sm flex h-12 w-12 shrink-0 items-center justify-center border border-thread text-copper">
                                        {CONTACT_ICONS.pin}
                                    </span>
                                    <div>
                                        <h4 className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                            Office Location
                                        </h4>
                                        <p className="mt-2 font-medium leading-relaxed text-bone/90">
                                            D-238,239 2nd Floor, Nawada Housing Complex
                                            <br />
                                            Dwarka Mod, New Delhi - 110059
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={280}>
                                <div className="flex gap-5">
                                    <span className="notch-sm flex h-12 w-12 shrink-0 items-center justify-center border border-thread text-copper">
                                        {CONTACT_ICONS.phone}
                                    </span>
                                    <div>
                                        <h4 className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                            Direct Phone / WhatsApp
                                        </h4>
                                        <p className="mt-2">
                                            <a href="tel:+919760296577" className="link-stitch font-medium text-bone/90 hover:text-jade">
                                                +91 9760296577
                                            </a>
                                        </p>
                                        <p className="mt-1">
                                            <a href="tel:+916397548014" className="link-stitch font-medium text-bone/90 hover:text-jade">
                                                +91 6397548014
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={360}>
                                <div className="flex gap-5">
                                    <span className="notch-sm flex h-12 w-12 shrink-0 items-center justify-center border border-thread text-copper">
                                        {CONTACT_ICONS.mail}
                                    </span>
                                    <div>
                                        <h4 className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                            Email Address
                                        </h4>
                                        <p className="mt-2">
                                            <a
                                                href="mailto:support@innoweavetech.in"
                                                className="link-stitch font-medium text-bone/90 hover:text-jade"
                                            >
                                                support@innoweavetech.in
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <Reveal delay={440}>
                            <p className="mt-12 flex items-center gap-3 border-t border-thread pt-6 font-mono text-[11px] tracking-[0.18em] text-mist">
                                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-jade" />
                                DIRECT REPLIES WITHIN 24 HOURS
                            </p>
                        </Reveal>
                    </div>

                    {/* right column: comprehensive project inquiry form */}
                    <div className="lg:col-span-7">
                        <Reveal delay={200}>
                            <div className="notch relative border border-thread bg-panel/50 p-7 md:p-10">
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 stitch-x text-copper" aria-hidden="true" />
                                {sent ? (
                                    <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                                        <SuccessCheck />
                                        <h3 className="mt-7 font-display text-3xl font-bold text-bone">
                                            Project Inquiry Received.
                                        </h3>
                                        <p className="mt-3 max-w-md font-light text-mist">
                                            Thanks{sentName ? `, ${sentName}` : ""} — our engineering team is reviewing your requirements and will reach out with initial thoughts and scheduling within 24 hours.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={reset}
                                            className="notch-sm mt-8 border border-thread px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-jade hover:text-jade cursor-pointer"
                                        >
                                            Submit Another Inquiry
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} id="contactForm">
                                        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                                            {/* Name */}
                                            <div>
                                                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Your Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="field"
                                                    placeholder="e.g. Rahul Sharma"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>

                                            {/* Company */}
                                            <div>
                                                <label htmlFor="company" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Company / Business
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    className="field"
                                                    placeholder="e.g. Apex Agro Logistics"
                                                    value={company}
                                                    onChange={(e) => setCompany(e.target.value)}
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Work Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="field"
                                                    placeholder="rahul@company.com"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Phone / WhatsApp *
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    className="field"
                                                    placeholder="+91 98765 43210"
                                                    required
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>

                                            {/* Project Type */}
                                            <div className="sm:col-span-2">
                                                <label htmlFor="projectType" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    What are you looking to build? *
                                                </label>
                                                <select
                                                    id="projectType"
                                                    className="field"
                                                    value={projectType}
                                                    onChange={(e) => setProjectType(e.target.value)}
                                                >
                                                    {PROJECT_TYPES.map((t) => (
                                                        <option key={t} value={t}>
                                                            {t}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Budget & Timeline */}
                                            <div>
                                                <label htmlFor="budget" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Estimated Budget
                                                </label>
                                                <select
                                                    id="budget"
                                                    className="field"
                                                    value={budget}
                                                    onChange={(e) => setBudget(e.target.value)}
                                                >
                                                    {BUDGET_RANGES.map((b) => (
                                                        <option key={b} value={b}>
                                                            {b}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="timeline" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Target Timeline
                                                </label>
                                                <select
                                                    id="timeline"
                                                    className="field"
                                                    value={timeline}
                                                    onChange={(e) => setTimeline(e.target.value)}
                                                >
                                                    {TIMELINE_OPTIONS.map((t) => (
                                                        <option key={t} value={t}>
                                                            {t}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Message */}
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Current Workflow or Problem Description *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    className="field resize-none"
                                                    placeholder="Describe your current manual process (e.g. We use Excel for tracking orders and WhatsApp for customer updates, but things get lost...)"
                                                    rows={4}
                                                    required
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                            </div>

                                            {/* Submit button */}
                                            <div className="sm:col-span-2 mt-2">
                                                <button
                                                    type="submit"
                                                    className="group notch-sm flex w-full items-center justify-center gap-3 bg-copper px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-bone cursor-pointer"
                                                >
                                                    Send Project Inquiry
                                                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                                                </button>
                                                <p className="mt-3 text-center font-mono text-[10px] text-mist/60 uppercase tracking-[0.16em]">
                                                    100% Confidential • No Spam Guarantee
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
