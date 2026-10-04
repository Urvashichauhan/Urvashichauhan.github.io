/* ------------------------------------------------------------------ */
/*  InnoweaveTech — Modern Minimal Product & Engineering Platform       */
/* ------------------------------------------------------------------ */

export interface NavLink {
  id: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: "work", label: "Work" },
  { id: "capabilities", label: "Capabilities" },
  { id: "ai", label: "AI & Automation" },
  // { id: "technology", label: "Technology" },
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export const COMPANY_INFO = {
  name: "InnoweaveTech",
  domain: "innoweavetech.in",
  headline: "Build software that moves your business forward.",
  subheadline:
    "We design and build web applications, mobile products, AI-powered systems and scalable digital platforms for ambitious businesses.",
  statement: "We turn ideas into reliable digital products.",
  statementDesc:
    "InnoweaveTech partners with business leaders and product teams to engineer resilient web applications, mobile products, AI systems, business platforms, APIs, GIS solutions, and cloud infrastructure.",
  email: "support@innoweavetech.in",
  phones: ["+91 9760296577", "+91 6397548014"],
  address: "D-238,239 2nd Floor, Nawada Housing Complex, Dwarka Mod, New Delhi - 110059",
  founded: "2024",
  copyright: `© ${new Date().getFullYear()} InnoweaveTech. All rights reserved.`,
};

/* ---------- Capabilities ("From idea → to production") ---------- */

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  techIndicators: string[];
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "web",
    number: "01",
    title: "WEB APPLICATIONS",
    tagline: "High-performance digital products",
    description: "Scalable, responsive web platforms designed around real business workflows.",
    techIndicators: ["React", "Next.js", "TypeScript", "Modern Web Architecture"],
  },
  {
    id: "ai",
    number: "02",
    title: "AI & AUTOMATION",
    tagline: "Autonomous workflows & agents",
    description: "Intelligent workflows, AI agents and automation systems that reduce repetitive work.",
    techIndicators: ["LLM Agents", "RAG Pipelines", "Tool Calling", "Workflow Automation"],
  },
  {
    id: "mobile",
    number: "03",
    title: "MOBILE APPLICATIONS",
    tagline: "Native-grade iOS & Android",
    description: "Fast, reliable mobile experiences for iOS and Android.",
    techIndicators: ["React Native", "Cross-Platform", "Offline Sync", "Push Architecture"],
  },
  {
    id: "business-systems",
    number: "04",
    title: "BUSINESS SYSTEMS",
    tagline: "Core operational backbones",
    description: "Custom dashboards, management systems and internal platforms built around your operations.",
    techIndicators: ["ERP Platforms", "RBAC Security", "Audit Ledgers", "Operations Hubs"],
  },
  {
    id: "apis",
    number: "05",
    title: "APIs & BACKEND",
    tagline: "Resilient backend services",
    description: "Secure, scalable APIs and backend systems that power modern digital products.",
    techIndicators: ["FastAPI", "Python", "Laravel", "REST & WebSockets"],
  },
  {
    id: "cloud",
    number: "06",
    title: "CLOUD & DEVOPS",
    tagline: "Zero-downtime reliability",
    description: "Production-ready infrastructure, deployment pipelines and cloud environments.",
    techIndicators: ["Docker", "CI/CD Pipelines", "Containerization", "Cloud Deployments"],
  },
  {
    id: "gis",
    number: "07",
    title: "GIS & DATA PLATFORMS",
    tagline: "Geospatial & location intelligence",
    description: "Location intelligence, mapping systems and spatial data platforms powered by modern GIS technologies.",
    techIndicators: ["PostGIS", "Spatial Querying", "Boundary Mapping", "Vector Tiles"],
  },
];

/* ---------- Projects Showcase ---------- */

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  tech: string;
  techStack: string[];
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
  architecture: string[];
}

export const SHOWCASE_PROJECTS: ProjectItem[] = [
  {
    id: "compliance",
    number: "01",
    category: "ENVIRONMENTAL & SENSOR TELEMETRY",
    title: "Environmental Compliance Platform",
    tech: "Web + Mobile + API",
    techStack: ["React", "TypeScript", "FastAPI / Python", "PostgreSQL", "WebSockets", "IoT Telemetry"],
    summary:
      "A multi-facility compliance and verification platform monitoring industrial effluent parameters, emission thresholds, laboratory assays, and statutory regulatory filings in real time.",
    problem:
      "Plant managers and environmental officers tracked pollution parameters using paper registers and disconnected Excel spreadsheets, causing delayed breach warnings and high regulatory audit risk.",
    solution:
      "Engineered an automated monitoring platform connecting facility IoT sensors directly to an alerting engine, supporting multi-tier laboratory approvals and automated statutory report compilation.",
    highlights: [
      "Real-time sensor telemetry with automatic threshold breach alerts",
      "Multi-role audit workflow with digital sign-off and tamper-evident logs",
      "Automated environmental agency statutory report generation (PDF & CSV)",
      "Mobile companion app for field inspectors conducting on-site sampling",
    ],
    architecture: [
      "FastAPI streaming ingestion endpoint with 99.98% uptime",
      "Time-series sensor telemetry storage optimized for rapid historical queries",
      "WebSocket push channel for instant emergency parameter notifications",
      "Strict role-based access control (Operator, Lab Tech, Auditor, Officer)",
    ],
  },
  {
    id: "business-mgmt",
    number: "02",
    category: "ENTERPRISE OPERATIONS & ERP",
    title: "Business Management Platform",
    tech: "Laravel + React + PostgreSQL",
    techStack: ["Laravel", "React", "PostgreSQL", "Redis", "REST APIs", "Tailwind CSS"],
    summary:
      "A centralized enterprise platform unifying customer accounts, multi-warehouse inventory, purchase & sales dispatch pipelines, automated billing, and live executive analytics.",
    problem:
      "Operational friction was bottlenecking growth: customer requests arrived via phone calls and WhatsApp, inventory status had zero live visibility, and invoices were compiled manually at month-end.",
    solution:
      "Built a unified operational dashboard connecting order intake, automated inventory allocation, role-based approvals, dispatch tracking, and financial reconciliation in real time.",
    highlights: [
      "Multi-tier dashboard for administrators, warehouse operators, and sales",
      "Automated stock level tracking with predictive reorder notifications",
      "Integrated invoice generation, payment reconciliation, and GST compliance",
      "Real-time business performance analytics and dispatch velocity metrics",
    ],
    architecture: [
      "Robust Laravel backend service with automated queue processing",
      "PostgreSQL database with indexed relational data integrity",
      "Redis caching layer ensuring sub-100ms dashboard load times",
      "Audit trail logging every status change, dispatch, and financial event",
    ],
  },
  {
    id: "gis-mapping",
    number: "03",
    category: "SPATIAL INTELLIGENCE & GIS",
    title: "GIS / Mapping Platform",
    tech: "PostGIS + GIS + APIs",
    techStack: ["PostGIS", "Leaflet / MapLibre", "Python", "Spatial SQL", "GeoJSON", "REST APIs"],
    summary:
      "A high-precision geospatial data platform engineered for land parcel demarcation, cadastral boundary verification, coordinate spatial queries, and multi-layer agricultural and asset telemetry.",
    problem:
      "Field teams and surveyors struggled with manual survey maps, inaccurate plot boundary demarcation, and slow GIS desktop software incapable of real-time web collaboration.",
    solution:
      "Architected a cloud-native spatial intelligence web console leveraging PostGIS for polygon boundary calculations, coordinate projection conversions, and instantaneous plot queries.",
    highlights: [
      "Interactive vector map interface with precise parcel boundary polygon overlays",
      "Sub-second spatial queries calculating area, perimeter, and boundary overlap",
      "Multi-layer map controls (Satellite imagery, cadastral grid, soil telemetry)",
      "Field coordinate inspector with GPS waypoint collection and export",
    ],
    architecture: [
      "PostGIS spatial database indexing thousands of multi-polygon geometries",
      "Dynamic GeoJSON vector tile serving for seamless browser panning and zooming",
      "Custom spatial query microservice executing boundary intersection tests",
      "Coordinate transformation engine supporting EPSG:4326 and national projections",
    ],
  },
];

/* ---------- AI Workflow Nodes ---------- */

export interface AIWorkflowStep {
  step: string;
  label: string;
  sublabel: string;
  codeSnippet: string;
}

export const AI_WORKFLOW_STEPS: AIWorkflowStep[] = [
  {
    step: "01",
    label: "Input / Trigger",
    sublabel: "Customer request, document upload, or system webhook",
    codeSnippet: 'trigger: { type: "inbound_event", source: "erp_api", payload: "audit_request" }',
  },
  {
    step: "02",
    label: "AI Agent",
    sublabel: "Autonomous agent parses intent, schema & validation bounds",
    codeSnippet: 'agent: { role: "compliance_evaluator", model: "reasoning-v2", confidence: 0.992 }',
  },
  {
    step: "03",
    label: "Knowledge Retrieval",
    sublabel: "Retrieves context from internal vector database & policies",
    codeSnippet: 'context: { embeddings: "matched_4_chunks", policy_id: "sec-2026-c4", score: 0.94 }',
  },
  {
    step: "04",
    label: "Business API Execution",
    sublabel: "Executes verified tool calls against internal databases & APIs",
    codeSnippet: 'tool_call: { endpoint: "api/v1/compliance/verify", params: { facility_id: "F-108" } }',
  },
  {
    step: "05",
    label: "Automated Action",
    sublabel: "Updates system state, dispatches notifications & syncs logs",
    codeSnippet: 'action: { status: "dispatched", notify: ["ops_lead", "auditor"], ledger: "committed" }',
  },
  {
    step: "06",
    label: "Result & Response",
    sublabel: "Verified structured outcome delivered to users & stakeholders",
    codeSnippet: 'output: { success: true, latency_ms: 184, audit_token: "tx_0x9b4a2e" }',
  },
];

/* ---------- Tech Stack Matrix ---------- */

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Data" | "Infrastructure" | "AI & Automation";
  description: string;
}

export const TECH_ITEMS: TechItem[] = [
  { name: "React", category: "Frontend", description: "Modern component-driven web interfaces" },
  { name: "Next.js", category: "Frontend", description: "SSR, edge delivery & production routing" },
  { name: "TypeScript", category: "Frontend", description: "Type-safe robust frontend & backend code" },
  { name: "React Native", category: "Frontend", description: "Cross-platform iOS & Android mobile apps" },

  { name: "Python", category: "Backend", description: "High-performance services & data processing" },
  { name: "FastAPI", category: "Backend", description: "Modern, asynchronous high-throughput APIs" },
  { name: "Laravel", category: "Backend", description: "Enterprise PHP framework for complex operations" },
  { name: "Node.js", category: "Backend", description: "Event-driven microservices & real-time sockets" },

  { name: "PostgreSQL", category: "Data", description: "Primary relational database with high ACID integrity" },
  { name: "PostGIS", category: "Data", description: "Industry-standard spatial database engine" },
  { name: "Redis", category: "Data", description: "In-memory caching & low-latency message queues" },
  { name: "MySQL", category: "Data", description: "Battle-tested relational operational data stores" },

  { name: "Docker", category: "Infrastructure", description: "Containerized reproducible application environments" },
  { name: "Cloud (AWS / GCP)", category: "Infrastructure", description: "Scalable compute, storage & VPC networks" },
  { name: "CI / CD Pipelines", category: "Infrastructure", description: "Automated test suites & zero-downtime deploys" },
  { name: "Linux / Nginx", category: "Infrastructure", description: "Hardened production server architecture" },

  { name: "LLM Orchestration", category: "AI & Automation", description: "Multi-step reasoning & structured outputs" },
  { name: "AI Agents", category: "AI & Automation", description: "Autonomous task execution with tool calling" },
  { name: "Workflow Automation", category: "AI & Automation", description: "Event-driven background sync & pipeline automation" },
  { name: "Embedding & RAG", category: "AI & Automation", description: "Contextual business search & vector retrieval" },
];

/* ---------- Why InnoweaveTech Pillars ---------- */

export const VALUE_PILLARS = [
  {
    number: "01",
    title: "Product thinking",
    description: "We don't just write code. We think about the product, users and business problem.",
  },
  {
    number: "02",
    title: "Modern engineering",
    description: "We use modern frontend, backend, cloud and AI technologies.",
  },
  {
    number: "03",
    title: "Built for real workflows",
    description: "Our systems are designed around how businesses actually operate.",
  },
  {
    number: "04",
    title: "From idea to production",
    description: "We can help move a product from concept through development and deployment.",
  },
];

/* ---------- Process Steps ---------- */

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business problem, map current workflows, and isolate friction points.",
    deliverable: "Problem analysis & scoping roadmap",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the product, architecture, data schemas, and sprint roadmap.",
    deliverable: "System architecture & interface wireframes",
  },
  {
    number: "03",
    title: "Build",
    description: "Design, develop and test the product in rapid, transparent two-week agile iterations.",
    deliverable: "Working staging builds with test coverage",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploy to production cloud infrastructure, monitor performance, and continuously improve.",
    deliverable: "Production deployment & ongoing SLA support",
  },
];

/* ---------- Project Inquiries ---------- */

export const PROJECT_TYPES = [
  "Web Application",
  "AI & Automation System",
  "Mobile Application",
  "Business Management Platform / ERP",
  "API & Backend System",
  "GIS / Mapping Platform",
  "Cloud & DevOps Migration",
  "Codebase Audit / Modernization",
  "Not sure yet / Exploratory",
];

export const BUDGET_TIERS = [
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹3,50,000",
  "₹3,50,000 – ₹7,00,000",
  "₹7,00,000+",
  "Flexible / Scoping needed",
];

export const TIMELINE_OPTIONS = [
  "Next 2 to 4 weeks (Urgent)",
  "1 to 2 Months",
  "3+ Months",
  "Flexible / Research Phase",
];

/* ---------- Frequently Asked Questions ---------- */

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Can you build software around our existing business workflow?",
    a: "Yes. We always map your existing physical and digital operations first. Our goal is to digitize and automate your exact workflow rather than forcing your team into rigid, off-the-shelf software templates.",
  },
  {
    q: "Can you build both web platforms and mobile applications?",
    a: "Yes. We engineer web applications using React and Next.js, and mobile applications using React Native. Both platforms share a unified backend, PostgreSQL database, and authenticated API layer.",
  },
  {
    q: "Can you modernize or maintain an existing Laravel, Python, or SQL codebase?",
    a: "Yes. We regularly take over existing legacy codebases, conduct structural security and architecture audits, fix performance bottlenecks, and add modern features without interrupting daily business operations.",
  },
  {
    q: "How do you ensure AI agents and automation execute reliably?",
    a: "We design deterministic state machines around LLM reasoning. Tool executions and database updates are verified against strict schema boundaries, role permissions, and immutable audit logs before execution.",
  },
  {
    q: "Can you build specialized GIS mapping and spatial analysis platforms?",
    a: "Yes. We work directly with PostGIS, spatial SQL, vector tiling, and boundary polygon analysis to deliver sub-second geographic calculations and parcel telemetry overlays.",
  },
  {
    q: "How do we initiate a project scoping engagement?",
    a: "Submit the project scoping form or email us directly. A senior software engineer will review your requirements, schedule a technical discovery call, and provide an architectural roadmap.",
  },
];

