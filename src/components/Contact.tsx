import { useEffect, useState } from "react";
import { CONTACT_ICONS } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

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
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [sentName, setSentName] = useState("");

    useEffect(() => {
        const onPrefill = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            if (typeof detail === "string") {
                setSubject(detail);
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
        setEmail("");
        setSubject("");
        setMessage("");
        setSent(false);
    };

    return (
        <section id="contact" className="relative bg-ink py-28 md:py-36">
            <div className="weave-cross pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <SectionTag index="05">Get In Touch</SectionTag>
                            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bone md:text-5xl">
                                Let's build something <span className="text-jade">great</span> together.
                            </h2>
                        </Reveal>
                        <Reveal delay={140}>
                            <p className="mt-7 max-w-md text-lg font-light leading-relaxed text-mist">
                                Have a project in mind? We'd love to hear about it. Drop us a
                                message and we'll get back to you within 24 hours.
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
                                            Address
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
                                            Phone
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
                                            Email
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
                                REPLIES WITHIN 24 HOURS
                            </p>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-7">
                        <Reveal delay={200}>
                            <div className="notch relative border border-thread bg-panel/50 p-7 md:p-10">
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 stitch-x text-copper" aria-hidden="true" />
                                {sent ? (
                                    <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                                        <SuccessCheck />
                                        <h3 className="mt-7 font-display text-3xl font-bold text-bone">
                                            Message received.
                                        </h3>
                                        <p className="mt-3 max-w-sm font-light text-mist">
                                            Thanks{sentName ? `, ${sentName}` : ""} — your message is
                                            woven into our inbox. We'll get back to you within 24
                                            hours.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={reset}
                                            className="notch-sm mt-8 border border-thread px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-jade hover:text-jade"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} id="contactForm">
                                        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="field"
                                                    placeholder="Your name"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="field"
                                                    placeholder="your@email.com"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    className="field"
                                                    placeholder="Project discussion"
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    className="field resize-none"
                                                    placeholder="Tell us about your project..."
                                                    rows={5}
                                                    required
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <button
                                                    type="submit"
                                                    className="group notch-sm flex w-full items-center justify-center gap-3 bg-copper px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-bone"
                                                >
                                                    Send Message
                                                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                                                </button>
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
