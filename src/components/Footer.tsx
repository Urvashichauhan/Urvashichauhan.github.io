import { useState } from "react";
import { FOOTER_SERVICES, NAV_LINKS, SOCIALS, WeaveMark } from "../lib/data";
import { ArrowIcon } from "./shared";

function WatermarkMarquee() {
    const line = (ariaHidden: boolean) => (
        <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
            {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="flex items-center">
                    <span
                        className="whitespace-nowrap px-8 font-display text-6xl font-bold tracking-tight md:text-8xl"
                        style={{
                            color: "transparent",
                            WebkitTextStroke: "1px rgba(236,231,216,0.14)",
                        }}
                    >
                        INNOWEVE TECH
                    </span>
                    <svg viewBox="0 0 12 12" className="h-4 w-4 shrink-0" aria-hidden="true">
                        <rect x="2.5" y="2.5" width="7" height="7" transform="rotate(45 6 6)" fill="var(--color-copper)" opacity="0.6" />
                    </svg>
                </span>
            ))}
        </div>
    );
    return (
        <div className="marquee overflow-hidden border-y border-thread py-6">
            <div className="marquee-track" style={{ animationDuration: "55s" }}>
                {line(false)}
                {line(true)}
            </div>
        </div>
    );
}

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const onSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) setSubscribed(true);
    };

    return (
        <footer className="relative overflow-hidden border-t border-thread bg-ink">
            <WatermarkMarquee />

            <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
                    {/* brand & socials */}
                    <div className="lg:col-span-4">
                        <a href="#home" className="flex w-fit items-center gap-3">
                            <WeaveMark className="h-10 w-10" />
                            <span className="font-display text-xl font-bold text-bone">
                                Innoweve<span className="text-copper">Tech</span>
                            </span>
                        </a>
                        <p className="mt-5 max-w-xs font-light leading-relaxed text-mist">
                            Custom software for businesses that want to work smarter. We turn manual workflows into connected systems.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center border border-thread text-mist transition-all duration-300 hover:-translate-y-1 hover:border-copper hover:bg-copper hover:text-ink notch-sm"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* navigation */}
                    <div className="lg:col-span-2">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-copper">
                            Navigation
                        </h4>
                        <ul className="mt-5 space-y-3">
                            {NAV_LINKS.map((l) => (
                                <li key={l.id}>
                                    <a
                                        href={`#${l.id}`}
                                        className="link-stitch font-medium text-bone/80 transition-colors hover:text-jade"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* what we build */}
                    <div className="lg:col-span-3">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-copper">
                            What We Build
                        </h4>
                        <ul className="mt-5 space-y-3">
                            {FOOTER_SERVICES.map((s) => (
                                <li key={s}>
                                    <a
                                        href="#services"
                                        className="link-stitch font-medium text-bone/80 transition-colors hover:text-jade"
                                    >
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* newsletter */}
                    <div className="lg:col-span-3">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-copper">
                            Stay Updated
                        </h4>
                        <p className="mt-5 font-light text-mist">
                            Subscribe for insights on custom software, workflow automation, and technology strategy.
                        </p>
                        {subscribed ? (
                            <p className="mt-5 flex items-center gap-2.5 font-mono text-xs text-jade">
                                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-jade" />
                                Subscribed — thank you.
                            </p>
                        ) : (
                            <form className="mt-5 flex items-end gap-3" onSubmit={onSubscribe}>
                                <label htmlFor="newsletter-email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    required
                                    placeholder="Your work email"
                                    className="field text-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="notch-sm flex h-11 w-11 shrink-0 items-center justify-center bg-copper text-ink transition-colors duration-300 hover:bg-bone cursor-pointer"
                                >
                                    <ArrowIcon className="h-4 w-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* bottom copyright & policies */}
                <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-thread py-7">
                    <p className="font-mono text-[11px] tracking-[0.14em] text-mist">
                        © 2026 InnoweveTech. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
                        <a href="#contact" className="hover:text-bone transition-colors">Privacy Policy</a>
                        <span>·</span>
                        <a href="#contact" className="hover:text-bone transition-colors">Terms of Service</a>
                    </div>
                    <a
                        href="#home"
                        aria-label="Back to top"
                        className="flex h-10 w-10 items-center justify-center border border-thread text-mist transition-all duration-300 hover:-translate-y-1 hover:border-copper hover:text-copper"
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 19V5M6 11l6-6 6 6" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
