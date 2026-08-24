import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  All site copy — kept identical to the original Innoweave Tech site */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
] as const;

export const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export const STATS = [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 10, suffix: "+", label: "Years Experience" },
];

const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

export const SERVICE_ICONS: Record<string, ReactNode> = {
    code: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M8.5 6.5 3 12l5.5 5.5" />
            <path d="M15.5 6.5 21 12l-5.5 5.5" />
            <path d="m13.2 4.5-2.4 15" />
        </svg>
    ),
    brain: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <circle cx="12" cy="4.6" r="1.9" />
            <circle cx="4.6" cy="12" r="1.9" />
            <circle cx="19.4" cy="12" r="1.9" />
            <circle cx="12" cy="19.4" r="1.9" />
            <rect x="9.4" y="9.4" width="5.2" height="5.2" />
            <path d="M12 6.5v2.9M6.5 12h2.9M14.6 12h2.9M12 14.6v2.9" />
        </svg>
    ),
    devices: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <rect x="2.5" y="4.5" width="14.5" height="10.5" rx="1" />
            <path d="M2.5 7.6h14.5M6.5 19.5h6" />
            <rect x="15" y="9.5" width="6.5" height="11" rx="1.2" />
            <path d="M17.4 17.8h1.7" />
        </svg>
    ),
    cloud: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M7 18.5a4.4 4.4 0 1 1 .9-8.7A5.8 5.8 0 0 1 19.2 11a3.8 3.8 0 0 1-.9 7.5H7z" />
            <path d="M12 15.8v-4.3M9.9 13.4l2.1-2 2.1 2" />
        </svg>
    ),
    pen: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M3.5 20.5 5 16 16.5 4.5a1.9 1.9 0 0 1 2.7 0l.3.3a1.9 1.9 0 0 1 0 2.7L8 19l-4.5 1.5z" />
            <path d="m13.5 7.5 3 3M6.5 14.5l3 3" />
        </svg>
    ),
    chart: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M3.5 4v16h17" />
            <path d="m6.5 15.5 4-4.5 3.2 2.8 5-6" />
            <path d="M18.7 6.5v3.3M18.7 6.5h-3.3" />
        </svg>
    ),
};

export const SERVICES = [
    {
        n: "01",
        icon: "code",
        title: "Custom System Development",
        desc: "End-to-end software systems tailored to your business — from architecture to deployment. We build platforms that scale with you.",
    },
    {
        n: "02",
        icon: "brain",
        title: "AI Integration",
        desc: "We embed artificial intelligence into your systems — automated reports, smart analytics, predictive insights, and intelligent workflows.",
    },
    {
        n: "03",
        icon: "devices",
        title: "Web & Mobile Applications",
        desc: "Modern, responsive web apps and native mobile applications built with the latest frameworks for optimal performance.",
    },
    {
        n: "04",
        icon: "cloud",
        title: "Cloud & Infrastructure",
        desc: "Scalable cloud architecture, DevOps automation, and infrastructure that ensures your systems run reliably 24/7.",
    },
    {
        n: "05",
        icon: "pen",
        title: "UI/UX Design",
        desc: "Clean, intuitive interfaces designed with user experience at the center. We make complex systems feel simple.",
    },
    {
        n: "06",
        icon: "chart",
        title: "Consulting & Strategy",
        desc: "Technology consulting to help you make the right decisions — from tech stack selection to digital transformation roadmaps.",
    },
];

export const CASE_FEATURES = [
    "AI-Generated Student Reports",
    "Automated Performance Analytics",
    "Smart Attendance Tracking",
    "Predictive Student Insights",
];

export const CHART_DATA = [
    { label: "Math", v: 65 },
    { label: "Sci", v: 80 },
    { label: "Eng", v: 55 },
    { label: "Art", v: 90 },
    { label: "Hist", v: 72 },
];

export const PROJECTS = [
    {
        title: "E-Commerce Platform",
        tag: "Full-Stack Development",
        img: "https://image.qwenlm.ai/generated-images/c53f9d84-3dbe-4674-8cc5-66c0843aa585/_result.png",
        alt: "E-Commerce Platform",
    },
    {
        title: "Healthcare App",
        tag: "Mobile Development",
        img: "https://image.qwenlm.ai/generated-images/dec07fda-0c43-46d1-98d5-4c74001c1cae/_result.png",
        alt: "Healthcare App",
    },
    {
        title: "Analytics Dashboard",
        tag: "AI + Data Visualization",
        img: "https://image.qwenlm.ai/generated-images/fa6e21fc-d2af-496c-815c-c07cf5c6f782/_result.png",
        alt: "Analytics Dashboard",
    },
    {
        title: "SaaS Platform",
        tag: "Cloud Application",
        img: "https://image.qwenlm.ai/generated-images/e006223b-612f-4101-bd98-8c4999f6aa38/_result.png",
        alt: "SaaS Platform",
    },
];

export const TICKER_ITEMS = [
    "Custom System Development",
    "AI Integration",
    "Web & Mobile Applications",
    "Cloud & Infrastructure",
    "UI/UX Design",
    "Consulting & Strategy",
];

export const FOOTER_SERVICES = [
    "System Development",
    "AI Integration",
    "Web & Mobile Apps",
    "Cloud Solutions",
    "UI/UX Design",
];

export const SOCIALS: { label: string; icon: ReactNode }[] = [
    {
        label: "LinkedIn",
        icon: (
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" {...stroke} aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
                <path d="M8 11v6M8 7.7v.1M12 17v-3.6a2.3 2.3 0 0 1 4.6 0V17" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        icon: (
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" {...stroke} aria-hidden="true">
                <path d="m5 5 14 14M19 5 5 19" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        icon: (
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
                />
            </svg>
        ),
    },
    {
        label: "Instagram",
        icon: (
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" {...stroke} aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="3.8" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
];

export const CONTACT_ICONS = {
    pin: (
        <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" {...stroke} aria-hidden="true">
            <path d="M12 21.5S5.2 15.8 5.2 10.7a6.8 6.8 0 1 1 13.6 0c0 5.1-6.8 10.8-6.8 10.8z" />
            <circle cx="12" cy="10.7" r="2.4" />
        </svg>
    ),
    phone: (
        <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" {...stroke} aria-hidden="true">
            <path d="M5.5 3.5h3.6L10.8 8 8.4 9.9a12.8 12.8 0 0 0 5.7 5.7l1.9-2.4 4.5 1.7v3.6a1.9 1.9 0 0 1-2.1 1.9A16.9 16.9 0 0 1 3.6 5.6a1.9 1.9 0 0 1 1.9-2.1z" />
        </svg>
    ),
    mail: (
        <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" {...stroke} aria-hidden="true">
            <rect x="3" y="5.5" width="18" height="13" rx="1.2" />
            <path d="m3.6 7 8.4 6 8.4-6" />
        </svg>
    ),
};

export function KnotCheck({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
            <rect
                x="4.1"
                y="4.1"
                width="11.8"
                height="11.8"
                transform="rotate(45 10 10)"
                fill="none"
                stroke="var(--color-copper)"
                strokeWidth="1.3"
            />
            <path
                d="m6.6 10.4 2.4 2.4 4.6-5.2"
                fill="none"
                stroke="var(--color-jade)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function RobotIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
            <rect x="5" y="9" width="14" height="10" rx="2" />
            <path d="M12 9V5.8" />
            <circle cx="12" cy="4.4" r="1.3" />
            <circle cx="9.2" cy="13.4" r="1.1" fill="currentColor" stroke="none" />
            <circle cx="14.8" cy="13.4" r="1.1" fill="currentColor" stroke="none" />
            <path d="M9.4 16.4h5.2" />
            <path d="M2.8 12.5v3M21.2 12.5v3" />
        </svg>
    );
}

export function WeaveMark({ className = "h-9 w-9" }: { className?: string }) {
    return (
        <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
            <rect x="0.75" y="0.75" width="38.5" height="38.5" fill="var(--color-ink)" stroke="var(--color-panel2)" strokeWidth="1.5" />
            {/* warp */}
            <path d="M12 7v26M20 7v26M28 7v26" stroke="var(--color-jade)" strokeWidth="2.4" />
            {/* weft */}
            <path d="M7 15h26M7 25h26" stroke="var(--color-copper)" strokeWidth="2.4" />
            {/* over/under passes */}
            <path d="M20 11.5v7" stroke="var(--color-jade)" strokeWidth="2.4" />
            <path d="M12 21.5v7M28 21.5v7" stroke="var(--color-jade)" strokeWidth="2.4" />
        </svg>
    );
}
