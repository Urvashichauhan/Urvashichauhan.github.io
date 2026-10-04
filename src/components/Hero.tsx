import { ArrowIcon, Reveal } from "./shared";

function HeroProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Product Mockup Container */}
      <div className="rounded-xl border border-[#E8E8E8] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Window Chrome Header */}
        <div className="flex h-11 items-center justify-between border-b border-[#E8E8E8] bg-[#FAFAF8] px-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#E5E5E5] border border-[#D4D4D4]" />
            <span className="h-3 w-3 rounded-full bg-[#E5E5E5] border border-[#D4D4D4]" />
            <span className="h-3 w-3 rounded-full bg-[#E5E5E5] border border-[#D4D4D4]" />
            <span className="ml-3 font-mono text-[11px] text-[#666666] hidden sm:inline">
              innoweave-core · runtime architecture
            </span>
          </div>

          <div className="flex items-center gap-2 rounded border border-[#E8E8E8] bg-white px-3 py-1 font-mono text-[11px] text-[#666666]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0062FF]" />
            <span>app.innoweavetech.in/live</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              99.98% UPTIME
            </span>
          </div>
        </div>

        {/* Dashboard Content Mockup */}
        <div className="p-5 sm:p-7 grid gap-6 lg:grid-cols-12 bg-white">
          {/* Left Summary & KPIs */}
          <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8E8E8] pb-6 lg:pb-0 lg:pr-6 gap-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#999999]">
                System Deployment Active
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">
                Enterprise Operations Engine
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#666666]">
                Real-time synchronization between web interfaces, mobile clients, PostGIS spatial layers, and automated event pipelines.
              </p>
            </div>

            {/* Micro Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-3">
                <span className="font-mono text-[10px] uppercase text-[#666666]">Sync Latency</span>
                <p className="mt-1 font-mono text-base font-bold text-[#111111]">18ms</p>
                <span className="text-[10px] text-emerald-600 font-medium">Sub-second API</span>
              </div>
              <div className="rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-3">
                <span className="font-mono text-[10px] uppercase text-[#666666]">Data Pipelines</span>
                <p className="mt-1 font-mono text-base font-bold text-[#111111]">100%</p>
                <span className="text-[10px] text-[#0062FF] font-medium">Zero Drop Rate</span>
              </div>
            </div>

            {/* Architecture Stack Badges */}
            <div className="flex flex-wrap gap-1.5">
              {["FastAPI", "React", "PostGIS", "Redis", "TypeScript"].map((t) => (
                <span
                  key={t}
                  className="rounded border border-[#E8E8E8] bg-white px-2 py-1 font-mono text-[10px] text-[#444444]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Live Stream View */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Live Operational Feed */}
            <div className="rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0062FF]" />
                  <span className="font-mono text-xs font-semibold text-[#111111]">
                    Live Telemetry &amp; Verification Stream
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#999999]">
                  EVENT FEED
                </span>
              </div>

              {/* Event rows */}
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between rounded bg-white p-2.5 border border-[#E8E8E8] text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#0062FF] font-medium">01</span>
                    <span className="font-medium text-[#111111]">Environmental Sensor Telemetry Stream</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    COMPLIANT · 22.4 PPM
                  </span>
                </div>

                <div className="flex items-center justify-between rounded bg-white p-2.5 border border-[#E8E8E8] text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#0062FF] font-medium">02</span>
                    <span className="font-medium text-[#111111]">GIS Cadastral Boundary Query (PostGIS)</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#0062FF] bg-blue-50 px-2 py-0.5 rounded">
                    POLYGON VERIFIED · 14.8 HA
                  </span>
                </div>

                <div className="flex items-center justify-between rounded bg-white p-2.5 border border-[#E8E8E8] text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#0062FF] font-medium">03</span>
                    <span className="font-medium text-[#111111]">Multi-Tenant Operations Ledger Batch</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    COMMITTED · 1,420 RECORDS
                  </span>
                </div>
              </div>
            </div>

            {/* Pipeline Step Indicator */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                <span className="font-mono text-[10px] text-[#999999] uppercase">Stage 01</span>
                <p className="mt-0.5 text-xs font-semibold text-[#111111]">Ingest &amp; Validation</p>
              </div>
              <div className="rounded-lg border border-[#0062FF]/30 bg-[#0062FF]/5 p-3 text-center">
                <span className="font-mono text-[10px] text-[#0062FF] uppercase font-semibold">Stage 02</span>
                <p className="mt-0.5 text-xs font-semibold text-[#0062FF]">Automated Processing</p>
              </div>
              <div className="rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                <span className="font-mono text-[10px] text-[#999999] uppercase">Stage 03</span>
                <p className="mt-0.5 text-xs font-semibold text-[#111111]">Client Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-42 md:pb-32 bg-[#FAFAF8]">
      {/* Background Subtle Tech Dots */}
      <div className="bg-tech-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Main Editorial Hero Text */}
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E8E8] bg-white px-3.5 py-1.5 text-xs font-mono text-[#666666] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <span className="h-2 w-2 rounded-full bg-[#0062FF]" />
              <span>Software &amp; Product Engineering Company</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl leading-[1.06]">
              Build software that moves your business forward.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl font-normal leading-relaxed text-[#666666]">
              We design and build web applications, mobile products, AI-powered systems and scalable digital platforms for ambitious businesses.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#0062FF] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-[#0050D8] hover:shadow-md hover:translate-y-[-1px]"
              >
                <span>Start a Project</span>
                <ArrowIcon className="h-4 w-4" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-md border border-[#E8E8E8] bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] transition-all duration-200 hover:border-[#111111] hover:bg-[#FAFAF8]"
              >
                <span>See What We Build</span>
                <ArrowIcon className="h-4 w-4 text-[#666666]" />
              </a>
            </div>
          </Reveal>

          {/* Micro capabilities row */}
          <Reveal delay={400}>
            <div className="mt-14 pt-8 border-t border-[#E8E8E8]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#999999] block mb-3">
                Core Domains
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#444444]">
                {[
                  "Web Applications",
                  "AI Workflows & Agents",
                  "Mobile Applications",
                  "Business Systems & ERP",
                  "APIs & Microservices",
                  "GIS & Spatial Data",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded border border-[#E8E8E8] bg-white px-3 py-1.5 text-xs text-[#555555]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#0062FF]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Product Visual Container */}
        <div className="mt-16 sm:mt-20">
          <Reveal delay={350}>
            <HeroProductVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
