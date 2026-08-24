import { TICKER_ITEMS } from "../lib/data";

function Row() {
    return (
        <>
            {TICKER_ITEMS.map((item) => (
                <span key={item} className="flex items-center">
                    <span className="whitespace-nowrap px-7 font-display text-lg font-semibold text-bone/80 md:text-xl">
                        {item}
                    </span>
                    <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 shrink-0" aria-hidden="true">
                        <rect x="2" y="2" width="6" height="6" transform="rotate(45 5 5)" fill="var(--color-copper)" />
                    </svg>
                </span>
            ))}
        </>
    );
}

export default function Marquee() {
    return (
        <section
            className="marquee relative overflow-hidden border-y border-thread bg-ink/70 py-5"
            aria-label="Disciplines ticker"
        >
            <div className="weave-cross pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="marquee-track relative">
                <div className="flex items-center">
                    <Row />
                </div>
                <div className="flex items-center" aria-hidden="true">
                    <Row />
                </div>
            </div>
        </section>
    );
}
