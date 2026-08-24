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
                        INNOWEAVE TECH
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
                    <div className="lg:col-span-4">
                        <a href="#home" className="flex w-fit items-center gap-3">
                            <WeaveMark className="h-10 w-10" />
                            <span className="font-display text-xl font-bold text-bone">
                                Innoweave<span className="text-copper">Tech</span>
                            </span>
                        </a>
                        <p className="mt-5 max-w-xs font-light leading-relaxed text-mist">
                            Weaving innovation into technology to empower businesses
                            worldwide.
                        </p>
                        <div className="mt-7 flex gap-3">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href="#home"
                                    aria-label={s.label}
                                    className="flex h-11 w-11 items-center justify-center border border-thread text-mist transition-all duration-300 hover:-translate-y-1 hover:border-copper hover:bg-copper hover:text-ink notch-sm"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-copper">
                            Quick Links
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

                    <div className="lg:col-span-3">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-copper">
                            Services
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

                    <div className="lg:col-span-3">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-copper">
                            Stay Updated
                        </h4>
                        <p className="mt-5 font-light text-mist">
                            Subscribe for insights on technology and AI.
                        </p>
                        {subscribed ? (
                            <p className="mt-5 flex items-center gap-2.5 font-mono text-xs text-jade">
                                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-jade" />
                                Subscribed — welcome to the weave.
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
                                    placeholder="Your email"
                                    className="field text-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="notch-sm flex h-11 w-11 shrink-0 items-center justify-center bg-copper text-ink transition-colors duration-300 hover:bg-bone"
                                >
                                    <ArrowIcon className="h-4 w-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-thread py-7">
                    <p className="font-mono text-[11px] tracking-[0.14em] text-mist">
                        © 2025 Innoweave Tech. All rights reserved.
                    </p>
                    <p className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-mist/60 md:block">
                        Warp · Weft · System
                    </p>
                    <a
                        href="#home"
                        aria-label="Back to top"
                        className="flex h-11 w-11 items-center justify-center border border-thread text-mist transition-all duration-300 hover:-translate-y-1 hover:border-copper hover:text-copper"
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
