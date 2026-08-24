import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion(): boolean {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);
    return reduced;
}

export function useInView<T extends HTMLElement>(
    threshold = 0.15,
    rootMargin = "0px 0px -6% 0px"
) {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setInView(true);
                        io.disconnect();
                        break;
                    }
                }
            },
            { threshold, rootMargin }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [threshold, rootMargin]);
    return { ref, inView };
}

export function useCountUp(target: number, start: boolean, duration = 1700) {
    const reduced = usePrefersReducedMotion();
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!start) return;
        if (reduced) {
            setValue(target);
            return;
        }
        let raf = 0;
        const t0 = performance.now();
        const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [start, target, duration, reduced]);
    return value;
}

export function useScrolled(offset = 24): boolean {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > offset);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [offset]);
    return scrolled;
}

export function useScrollSpy(ids: readonly string[]): string {
    const [active, setActive] = useState(ids[0] ?? "");
    useEffect(() => {
        const onScroll = () => {
            const probe = window.scrollY + window.innerHeight * 0.38;
            let current = ids[0] ?? "";
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= probe) current = id;
            }
            setActive(current);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [ids]);
    return active;
}
