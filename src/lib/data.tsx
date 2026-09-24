import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  All site copy — InnoweveTech: client acquisition website           */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
    { id: "home", label: "Home" },
    { id: "solutions", label: "Solutions" },
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "process", label: "Process" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
] as const;

export const SECTION_IDS = NAV_LINKS.map((l) => l.id);

/* ---------- hero trust line ---------- */

export const HERO_CAPABILITIES = [
    "Web Applications",
    "Mobile Apps",
    "Business Systems",
    "Automation",
    "APIs",
];

/* ---------- marquee / ticker ---------- */

export const TICKER_ITEMS = [
    "Web Applications",
    "Mobile Apps",
    "Business Dashboards",
    "Automation",
    "APIs",
    "Custom Software",
];

/* ---------- problem section ---------- */

export const PROBLEMS = [
    {
        icon: "repeat",
        title: "Too Much Manual Work",
        desc: "Employees repeatedly enter and transfer the same information across tools.",
    },
    {
        icon: "scatter",
        title: "Disconnected Data",
        desc: "Important information is spread across Excel, WhatsApp, emails and paper.",
    },
    {
        icon: "dashboard",
        title: "No Central Dashboard",
        desc: "Managers don't have one place to see what's happening across the business.",
    },
    {
        icon: "report",
        title: "Difficult Reporting",
        desc: "Reports require manual compilation from multiple disconnected sources.",
    },
    {
        icon: "comm",
        title: "Communication Gaps",
        desc: "Customers and employees don't have a clear workflow or status tracking.",
    },
    {
        icon: "scale",
        title: "Growing Complexity",
        desc: "The process worked when the business was small but doesn't scale anymore.",
    },
];

/* ---------- transformation / before-after ---------- */

export const WORKFLOW_BEFORE = [
    "WhatsApp",
    "Excel",
    "Phone Calls",
    "Paper",
    "Manual Reports",
];

export const WORKFLOW_AFTER = [
    "Customer",
    "Dashboard",
    "Assignment",
    "Status",
    "Payment",
    "Reports",
];

/* ---------- solutions (what we can build) ---------- */

export const SOLUTIONS = [
    {
        n: "01",
        title: "Business Management Systems",
        desc: "Centralize customers, employees, operations, approvals, payments and reports in one system.",
        examples: ["CRM", "Employee management", "Operations management", "Internal business portals"],
    },
    {
        n: "02",
        title: "Admin Dashboards",
        desc: "Give your team one place to manage and monitor the business.",
        examples: ["Analytics dashboards", "Management dashboards", "Reporting systems", "Role-based administration"],
    },
    {
        n: "03",
        title: "Booking & Appointment Systems",
        desc: "Replace phone calls and WhatsApp bookings with structured digital workflows.",
        examples: ["Service bookings", "Appointment systems", "Scheduling", "Employee assignment", "Customer notifications"],
    },
    {
        n: "04",
        title: "Inventory & Order Management",
        desc: "Track products, stock, orders, dispatch and reports from one centralized system.",
        examples: ["Inventory", "Purchase orders", "Sales orders", "Dispatch", "Stock reports"],
    },
    {
        n: "05",
        title: "Web Applications",
        desc: "Custom web applications designed specifically for your business.",
        examples: ["Customer portals", "SaaS applications", "Internal tools", "Workflow systems"],
    },
    {
        n: "06",
        title: "Mobile Applications",
        desc: "Bring your business workflow to your customers and employees through mobile apps.",
        examples: ["Customer apps", "Employee apps", "Delivery apps", "Booking apps", "React Native"],
    },
    {
        n: "07",
        title: "APIs & Integrations",
        desc: "Connect your existing systems and services.",
        examples: ["Payment gateways", "WhatsApp/API integrations", "Third-party APIs", "Email/SMS", "Database integrations"],
    },
    {
        n: "08",
        title: "Business Automation",
        desc: "Automate repetitive tasks and reduce manual work.",
        examples: ["Notifications", "Automated reports", "Workflow automation", "Data synchronization", "Approval workflows"],
    },
];

/* ---------- industries / use cases ---------- */

export const INDUSTRIES = [
    {
        name: "Service Businesses",
        flow: ["Booking", "Employee Assignment", "Service", "Payment", "Reports"],
    },
    {
        name: "Education",
        flow: ["Students", "Admissions", "Attendance", "Fees", "Reports"],
    },
    {
        name: "Retail & Distribution",
        flow: ["Customers", "Orders", "Inventory", "Dispatch", "Payment"],
    },
    {
        name: "Manufacturing",
        flow: ["Inventory", "Production", "Orders", "Dispatch", "Reports"],
    },
    {
        name: "Logistics",
        flow: ["Orders", "Routing", "Tracking", "Delivery", "Reports"],
    },
    {
        name: "Healthcare",
        flow: ["Patients", "Appointments", "Records", "Billing", "Reports"],
    },
    {
        name: "Hospitality",
        flow: ["Bookings", "Rooms/Tables", "Services", "Payment", "Feedback"],
    },
    {
        name: "Startups",
        flow: ["MVP", "Users", "Analytics", "Iteration", "Scale"],
    },
    {
        name: "Professional Services",
        flow: ["Clients", "Projects", "Tracking", "Invoicing", "Reports"],
    },
];

/* ---------- featured projects ---------- */

export const PROJECTS = [
    {
        title: "Horticulture Management System",
        type: "Client Project",
        desc: "A multi-role management platform connecting farmer registration, item verification, buyer demands, FPO processing, dispatch, payments and reporting.",
        problem: "Manual coordination between farmers, buyers and FPOs across multiple regions with paper-based tracking.",
        workflow: ["Farmer", "Registration", "Verification", "Buyer Demand", "FPO Processing", "Dispatch", "Payment", "Reports"],
        features: ["Multi-role access", "Farmer registration & verification", "Demand matching", "Dispatch tracking", "Payment management", "Automated reports"],
        tech: ["React", "Laravel", "MySQL", "REST API"],
    },
    {
        title: "Business Booking Platform",
        type: "Concept / Demo Project",
        desc: "A complete service booking system with automated employee assignment, real-time status tracking and payment integration.",
        problem: "Service businesses managing bookings through phone calls and WhatsApp with no visibility into employee schedules.",
        workflow: ["Customer", "Booking", "Employee Assignment", "Service", "Payment", "Reports"],
        features: ["Online booking", "Auto-assignment", "Real-time status", "Payment integration", "Service history", "Analytics"],
        tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    },
    {
        title: "Inventory Management Platform",
        type: "Concept / Demo Project",
        desc: "Centralized inventory tracking with purchase orders, sales orders, dispatch management and automated stock reports.",
        problem: "Businesses tracking stock in spreadsheets with no real-time visibility into inventory levels or order status.",
        workflow: ["Products", "Stock", "Orders", "Dispatch", "Reports"],
        features: ["Stock tracking", "Purchase orders", "Sales orders", "Dispatch management", "Low-stock alerts", "Reports"],
        tech: ["React", "Laravel", "MySQL", "REST API"],
    },
];

/* ---------- tech stack ---------- */

export const TECH_STACK = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "React Native", category: "Mobile" },
    { name: "Laravel", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "CodeIgniter", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "REST APIs", category: "Integration" },
    { name: "Docker", category: "DevOps" },
    { name: "Git / GitHub", category: "DevOps" },
];

/* ---------- why us ---------- */

export const WHY_US = [
    {
        title: "Built Around Your Workflow",
        desc: "We understand the process first and build the software around it.",
    },
    {
        title: "Scalable Architecture",
        desc: "Build systems that can grow with your business.",
    },
    {
        title: "Web + Mobile",
        desc: "Build connected experiences across web and mobile.",
    },
    {
        title: "Clear Communication",
        desc: "Keep requirements, milestones and deliverables clear.",
    },
    {
        title: "Long-Term Support",
        desc: "Continue supporting and improving the system after launch.",
    },
    {
        title: "Practical Technology",
        desc: "Use technology that solves the problem rather than adding unnecessary complexity.",
    },
];

/* ---------- process steps ---------- */

export const PROCESS_STEPS = [
    {
        n: "01",
        title: "Discover",
        desc: "Tell us about your business and the problem.",
    },
    {
        n: "02",
        title: "Understand",
        desc: "We map your current workflow and identify what can be improved.",
    },
    {
        n: "03",
        title: "Design",
        desc: "We create the solution structure, screens and technical plan.",
    },
    {
        n: "04",
        title: "Build",
        desc: "We develop, test and iterate with you.",
    },
    {
        n: "05",
        title: "Launch & Support",
        desc: "We deploy the system and provide ongoing support.",
    },
];

/* ---------- FAQ ---------- */

export const FAQ_ITEMS = [
    {
        q: "Can you build software around our existing workflow?",
        a: "Yes. We first understand the existing workflow and then design the solution around it. The goal is to digitize and improve the way your business already works — not force you into a generic template.",
    },
    {
        q: "Can you build both web and mobile applications?",
        a: "Yes. We build web applications using React and Next.js, and mobile applications using React Native. Both can share a single backend and API.",
    },
    {
        q: "Can you integrate payment gateways?",
        a: "Yes, depending on the required payment provider. We've worked with Razorpay, Stripe and other payment systems.",
    },
    {
        q: "Can you integrate APIs and third-party services?",
        a: "Yes. We can integrate any service that provides an API — including payment gateways, WhatsApp, SMS/email services, maps, analytics and more.",
    },
    {
        q: "Can you maintain an existing Laravel/PHP/React application?",
        a: "Yes. We can take over existing projects, fix issues, add features and modernize the codebase.",
    },
    {
        q: "Do you work with startups?",
        a: "Yes. We can help with MVPs as well as production systems. We understand the importance of speed and iterative development for startups.",
    },
    {
        q: "How do we start a project?",
        a: "Contact us and tell us about the business problem. We'll discuss the requirements, understand your workflow, and outline the next steps — no commitment required for the initial conversation.",
    },
];

/* ---------- contact form options ---------- */

export const PROJECT_TYPES = [
    "Business Dashboard",
    "Web Application",
    "Mobile Application",
    "E-commerce",
    "Booking System",
    "Inventory System",
    "CRM",
    "API / Integration",
    "Automation",
    "Existing Application Support",
    "Not sure yet",
];

/* ---------- footer ---------- */

export const FOOTER_SOLUTIONS = [
    "Business Systems",
    "Admin Dashboards",
    "Booking Systems",
    "Web Applications",
    "Mobile Apps",
    "APIs & Automation",
];

export const FOOTER_SERVICES = FOOTER_SOLUTIONS;

/* ---------- SVG icons ---------- */

const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

export const PROBLEM_ICONS: Record<string, ReactNode> = {
    repeat: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M17 1l4 4-4 4" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <path d="M7 23l-4-4 4-4" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
    ),
    scatter: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
    ),
    dashboard: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
        </svg>
    ),
    report: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
    ),
    comm: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    ),
    scale: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    ),
};

export const SOLUTION_ICONS: Record<string, ReactNode> = {
    "01": (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
        </svg>
    ),
    "02": (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M3.5 4v16h17" />
            <path d="m6.5 15.5 4-4.5 3.2 2.8 5-6" />
        </svg>
    ),
    "03": (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
        </svg>
    ),
    "04": (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
    ),
    "05": (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M8.5 6.5 3 12l5.5 5.5" />
            <path d="M15.5 6.5 21 12l-5.5 5.5" />
            <path d="m13.2 4.5-2.4 15" />
        </svg>
    ),
    "06": (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M11 18h2" />
        </svg>
    ),
    "07": (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    ),
    "08": (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
    ),
};

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
    whatsapp: (
        <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" {...stroke} aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    ),
};

export const SOCIALS: { label: string; href: string; icon: ReactNode }[] = [
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" {...stroke} aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
                <path d="M8 11v6M8 7.7v.1M12 17v-3.6a2.3 2.3 0 0 1 4.6 0V17" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" {...stroke} aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="3.8" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
                />
            </svg>
        ),
    },
];

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

