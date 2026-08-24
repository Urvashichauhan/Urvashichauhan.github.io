import { useEffect, useState } from "react";
import { NAV_LINKS, SECTION_IDS, WeaveMark } from "../lib/data";
import { useScrolled, useScrollSpy } from "../lib/hooks";

export default function Header() {
    const scrolled = useScrolled(30);
    const active = useScrollSpy(SECTION_IDS);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
                        ? "border-b border-thread bg-ink/90 backdrop-blur-md"
                        : "border-b border-transparent bg-transparent"
                    }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
                    <a href="#home" className="group flex items-center gap-3" aria-label="Innoweave Tech — home">
                        <WeaveMark className="h-10 w-10 transition-transform duration-500 group-hover:rotate-90" />
                        <span className="font-display text-xl font-bold tracking-tight text-bone">
                            Innoweave<span className="text-copper">Tech</span>
                        </span>
                    </a>

                    <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={`relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${active === link.id ? "text-copper" : "text-mist hover:text-bone"
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`stitch-x absolute -bottom-1.5 left-0 h-[2px] w-full text-copper transition-opacity duration-300 ${active === link.id ? "opacity-100" : "opacity-0"
                                        }`}
                                    aria-hidden="true"
                                />
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href="#contact"
                            className="notch-sm hidden bg-copper px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-bone sm:inline-block"
                        >
                            Start a Project
                        </a>
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-thread lg:hidden"
                        >
                            <span
                                className={`h-[1.5px] w-5 bg-bone transition-all duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`h-[1.5px] w-5 bg-copper transition-all duration-300 ${open ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`h-[1.5px] w-5 bg-bone transition-all duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* mobile overlay */}
            <div
                className={`fixed inset-0 z-[60] flex flex-col justify-center bg-ink px-8 transition-all duration-500 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"
                    }`}
            >
                <div className="weave-cross pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                <nav className="relative flex flex-col gap-2" aria-label="Mobile">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setOpen(false)}
                            className={`group flex items-baseline gap-4 border-b border-thread py-4 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                                }`}
                            style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                        >
                            <span className="font-mono text-xs text-copper">0{i + 1}</span>
                            <span className="font-display text-4xl font-bold text-bone transition-colors group-hover:text-jade">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </nav>
                <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="notch-sm relative mt-10 inline-block w-fit bg-copper px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink"
                >
                    Start a Project
                </a>
            </div>
        </>
    );
}
