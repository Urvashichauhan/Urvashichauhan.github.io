import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../lib/hooks";

export function Reveal({
    children,
    className = "",
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    const { ref, inView } = useInView<HTMLDivElement>();
    return (
        <div
            ref={ref}
            data-reveal
            className={`${className} ${inView ? "is-in" : ""}`}
            style={{ "--rd": `${delay}ms` } as CSSProperties}
        >
            {children}
        </div>
    );
}

export function SectionTag({
    index,
    children,
    className = "",
}: {
    index?: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 shrink-0" aria-hidden="true">
                <rect
                    x="1.8"
                    y="1.8"
                    width="6.4"
                    height="6.4"
                    transform="rotate(45 5 5)"
                    fill="var(--color-copper)"
                />
            </svg>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-copper">
                {children}
            </span>
            {index && (
                <span className="font-mono text-[11px] tracking-[0.2em] text-mist/70">
                    / {index}
                </span>
            )}
            <span className="stitch-x h-[2px] w-16 text-thread" aria-hidden="true" />
        </div>
    );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M4 12h15M13 6l6 6-6 6" />
        </svg>
    );
}

export function PlusIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
        >
            <path d="M12 5v14M5 12h14" />
        </svg>
    );
}
