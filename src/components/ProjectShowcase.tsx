import { useState } from "react";
import { type ProjectItem, SHOWCASE_PROJECTS } from "../lib/data";
import { ArrowIcon, CheckIcon, CloseIcon, Reveal, SectionTag } from "./shared";

/* ------------------------------------------------------------------ */
/*  Project 01 Visual: Environmental Compliance Platform              */
/* ------------------------------------------------------------------ */

function ComplianceVisual() {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between border-b border-[#E8E8E8] bg-[#FAFAF8] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="ml-2 font-mono text-[11px] font-medium text-[#111111]">
            sensor-mesh // facility-04-effluent
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] text-emerald-700 font-semibold">
            TELEMETRY LIVE
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Real-time Parameter Readings */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-3">
            <span className="font-mono text-[10px] text-[#666666] uppercase">pH Balance</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-mono text-xl font-bold text-[#111111]">7.35</span>
              <span className="text-[10px] text-emerald-600 font-medium">Optimal</span>
            </div>
            <div className="mt-2 h-1 w-full bg-[#E8E8E8] rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "52%" }} />
            </div>
          </div>

          <div className="rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-3">
            <span className="font-mono text-[10px] text-[#666666] uppercase">COD Level</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-mono text-xl font-bold text-[#111111]">164</span>
              <span className="text-[10px] text-[#666666]">mg/L</span>
            </div>
            <div className="mt-2 h-1 w-full bg-[#E8E8E8] rounded-full overflow-hidden">
              <div className="h-full bg-[#0062FF] rounded-full" style={{ width: "65%" }} />
            </div>
          </div>

          <div className="rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-3">
            <span className="font-mono text-[10px] text-[#666666] uppercase">BOD Sensor</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-mono text-xl font-bold text-[#111111]">26.8</span>
              <span className="text-[10px] text-emerald-600 font-medium">&lt; 30 mg/L</span>
            </div>
            <div className="mt-2 h-1 w-full bg-[#E8E8E8] rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "42%" }} />
            </div>
          </div>

          <div className="rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-3">
            <span className="font-mono text-[10px] text-[#666666] uppercase">Stack PM2.5</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-mono text-xl font-bold text-[#111111]">38.2</span>
              <span className="text-[10px] text-[#666666]">µg/m³</span>
            </div>
            <div className="mt-2 h-1 w-full bg-[#E8E8E8] rounded-full overflow-hidden">
              <div className="h-full bg-[#0062FF] rounded-full" style={{ width: "45%" }} />
            </div>
          </div>
        </div>

        {/* Verification & Compliance Audit Table */}
        <div className="rounded-lg border border-[#E8E8E8] bg-white overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-2 text-xs font-mono text-[#666666]">
            <span>REGULATORY LOG AUDIT STREAM</span>
            <span>AUTO-SYNC ENABLED</span>
          </div>

          <div className="divide-y divide-[#E8E8E8] text-xs">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#999999]">04:12:08</span>
                <span className="font-medium text-[#111111]">Effluent Discharge Line B — Assay Sample #891</span>
              </div>
              <span className="rounded bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-700">
                VERIFIED &amp; COMPLIANT
              </span>
            </div>

            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#999999]">03:58:30</span>
                <span className="font-medium text-[#111111]">Air Emissions Scrubber Telemetry Packet</span>
              </div>
              <span className="rounded bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#0062FF]">
                CERTIFIED SHA-256
              </span>
            </div>

            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#999999]">03:45:12</span>
                <span className="font-medium text-[#111111]">Statutory SPCB Quarterly Filing Submission</span>
              </div>
              <span className="rounded bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-700">
                DISPATCHED
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Project 02 Visual: Business Management Platform                   */
/* ------------------------------------------------------------------ */

function BusinessMgmtVisual() {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between border-b border-[#E8E8E8] bg-[#FAFAF8] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="ml-2 font-mono text-[11px] font-medium text-[#111111]">
            erp.innoweavetech.in // operations-hub
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded border border-[#E8E8E8] bg-white px-2 py-0.5 font-mono text-[10px] text-[#666666]">
            MULTI-TENANT V2.4
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* KPI Strip */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-3">
            <span className="font-mono text-[10px] text-[#666666] uppercase">Monthly Orders</span>
            <p className="mt-1 font-mono text-xl font-bold text-[#111111]">1,842</p>
            <span className="text-[10px] text-emerald-600 font-medium">+18.4% vs last period</span>
          </div>

          <div className="rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-3">
            <span className="font-mono text-[10px] text-[#666666] uppercase">Inventory Turn</span>
            <p className="mt-1 font-mono text-xl font-bold text-[#111111]">98.2%</p>
            <span className="text-[10px] text-[#0062FF] font-medium">Optimal stock flow</span>
          </div>

          <div className="rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] p-3">
            <span className="font-mono text-[10px] text-[#666666] uppercase">Invoice Health</span>
            <p className="mt-1 font-mono text-xl font-bold text-[#111111]">0 Errors</p>
            <span className="text-[10px] text-emerald-600 font-medium">Automated GST match</span>
          </div>
        </div>

        {/* Live Operations Ledger Table */}
        <div className="rounded-lg border border-[#E8E8E8] bg-white overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-2 text-xs font-mono text-[#666666]">
            <span>ACTIVE DISPATCH PIPELINE</span>
            <span>FILTER: ALL FACILITIES</span>
          </div>

          <div className="divide-y divide-[#E8E8E8] text-xs">
            <div className="flex items-center justify-between p-3">
              <div>
                <span className="font-mono text-[10px] text-[#999999] mr-2">PO-8491</span>
                <span className="font-medium text-[#111111]">Bulk Chemical Reagents #420</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-[#666666]">₹1,84,000</span>
                <span className="rounded bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#0062FF]">
                  DISPATCHED
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3">
              <div>
                <span className="font-mono text-[10px] text-[#999999] mr-2">PO-8492</span>
                <span className="font-medium text-[#111111]">Automated Sensor Enclosures (Batch 3)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-[#666666]">₹64,500</span>
                <span className="rounded bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-700">
                  RECONCILED
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3">
              <div>
                <span className="font-mono text-[10px] text-[#999999] mr-2">PO-8493</span>
                <span className="font-medium text-[#111111]">Industrial Valve Assemblies x 12</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-[#666666]">₹3,12,000</span>
                <span className="rounded bg-amber-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-700">
                  INSPECTION PENDING
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Project 03 Visual: GIS / Mapping Platform                         */
/* ------------------------------------------------------------------ */

function GISVisual() {
  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between border-b border-[#E8E8E8] bg-[#FAFAF8] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="ml-2 font-mono text-[11px] font-medium text-[#111111]">
            gis.spatial // postgis-vector-tile
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded border border-[#E8E8E8] bg-white px-2 py-0.5 font-mono text-[10px] text-[#666666]">
            EPSG:4326 · LAT 28.6139° N
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Spatial Map Vector Canvas */}
        <div className="relative h-56 sm:h-64 rounded-lg border border-[#E8E8E8] bg-[#FAFAF8] overflow-hidden flex items-center justify-center">
          {/* Spatial Grid Lines */}
          <div className="bg-tech-grid absolute inset-0 opacity-60" />

          {/* Demarcated Vector Polygons */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 240">
            {/* Parcel Polygon 1 */}
            <polygon
              points="60,40 190,30 220,110 90,130"
              fill="rgba(0, 98, 255, 0.08)"
              stroke="#0062FF"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <text x="110" y="80" fill="#0062FF" fontSize="10" fontFamily="monospace" fontWeight="bold">
              PARCEL #DL-402 (14.8 HA)
            </text>

            {/* Parcel Polygon 2 (Adjacent) */}
            <polygon
              points="190,30 340,45 370,140 220,110"
              fill="rgba(16, 185, 129, 0.08)"
              stroke="#10B981"
              strokeWidth="2"
            />
            <text x="250" y="90" fill="#059669" fontSize="10" fontFamily="monospace" fontWeight="bold">
              PARCEL #DL-403 (18.2 HA)
            </text>

            {/* Parcel Polygon 3 */}
            <polygon
              points="90,130 220,110 240,210 110,215"
              fill="rgba(245, 158, 11, 0.08)"
              stroke="#F59E0B"
              strokeWidth="2"
            />
            <text x="130" y="165" fill="#D97706" fontSize="10" fontFamily="monospace" fontWeight="bold">
              PARCEL #DL-404 (9.4 HA)
            </text>

            {/* Waypoint Coordinates Marker */}
            <circle cx="220" cy="110" r="5" fill="#0062FF" />
            <circle cx="220" cy="110" r="9" fill="none" stroke="#0062FF" strokeWidth="1.5" className="animate-ping" />
          </svg>

          {/* Floating Spatial HUD */}
          <div className="absolute bottom-3 left-3 rounded border border-[#E8E8E8] bg-white/95 backdrop-blur-sm px-3 py-1.5 font-mono text-[10px] text-[#111111] shadow-sm">
            <span className="text-[#0062FF] font-bold">NODE INTERSECT:</span> 28°36'48"N, 77°03'12"E · 0.00% ERROR
          </div>

          <div className="absolute top-3 right-3 rounded border border-[#E8E8E8] bg-white/95 backdrop-blur-sm px-2.5 py-1 font-mono text-[10px] text-[#666666] shadow-sm">
            LAYER: CADASTRAL OVERLAY
          </div>
        </div>

        {/* Spatial Attribute Inspector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="rounded border border-[#E8E8E8] bg-[#FAFAF8] p-2.5">
            <span className="font-mono text-[10px] text-[#666666] uppercase">Query Speed</span>
            <p className="font-mono font-bold text-[#111111] mt-0.5">14ms</p>
          </div>
          <div className="rounded border border-[#E8E8E8] bg-[#FAFAF8] p-2.5">
            <span className="font-mono text-[10px] text-[#666666] uppercase">Spatial Engine</span>
            <p className="font-mono font-bold text-[#0062FF] mt-0.5">PostGIS v3.4</p>
          </div>
          <div className="rounded border border-[#E8E8E8] bg-[#FAFAF8] p-2.5">
            <span className="font-mono text-[10px] text-[#666666] uppercase">Coordinate Sys</span>
            <p className="font-mono font-bold text-[#111111] mt-0.5">WGS84 / EPSG:4326</p>
          </div>
          <div className="rounded border border-[#E8E8E8] bg-[#FAFAF8] p-2.5">
            <span className="font-mono text-[10px] text-[#666666] uppercase">Topology State</span>
            <p className="font-mono font-bold text-emerald-600 mt-0.5">Valid Polygons</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Project Showcase Component                                   */
/* ------------------------------------------------------------------ */

export default function ProjectShowcase() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const getVisual = (id: string) => {
    switch (id) {
      case "compliance":
        return <ComplianceVisual />;
      case "business-mgmt":
        return <BusinessMgmtVisual />;
      case "gis-mapping":
        return <GISVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="relative bg-[#FAFAF8] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="border-b border-[#E8E8E8] pb-10">
          <Reveal>
            <SectionTag>Featured Work</SectionTag>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
              Things we’ve built
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 max-w-2xl text-lg text-[#666666]">
              Real products, platforms and systems built to solve real problems.
            </p>
          </Reveal>
        </div>

        {/* Project Showcases */}
        <div className="mt-16 sm:mt-24 space-y-24 sm:space-y-36">
          {SHOWCASE_PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className="grid gap-12 lg:grid-cols-12 lg:items-center"
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
                  }`}
                >
                  <Reveal>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#0062FF]">
                        {project.number}
                      </span>
                      <span className="h-px w-6 bg-[#E8E8E8]" />
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#999999]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
                      {project.title}
                    </h3>

                    <div className="mt-3 inline-block rounded border border-[#E8E8E8] bg-white px-2.5 py-1 font-mono text-xs font-medium text-[#0062FF]">
                      {project.tech}
                    </div>

                    <p className="mt-6 text-base leading-relaxed text-[#555555]">
                      {project.summary}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 space-y-2.5">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2.5 text-xs text-[#444444]">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0062FF]/10 text-[#0062FF]">
                            <CheckIcon className="h-2.5 w-2.5" />
                          </span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore CTA */}
                    <div className="mt-8 pt-6 border-t border-[#E8E8E8]">
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#0062FF] hover:text-[#0050D8] transition-colors cursor-pointer"
                      >
                        <span>Explore project</span>
                        <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </Reveal>
                </div>

                {/* Dominant Product Visual */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Reveal delay={150}>
                    {getVisual(project.id)}
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Drawer */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-[#E8E8E8] bg-white p-6 sm:p-10 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#E8E8E8] pb-6">
              <div>
                <span className="font-mono text-xs font-bold text-[#0062FF]">
                  CASE STUDY // {activeModalProject.number}
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-[#111111]">
                  {activeModalProject.title}
                </h3>
                <span className="mt-1 inline-block font-mono text-xs text-[#666666]">
                  {activeModalProject.tech}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E8E8E8] text-[#666666] hover:bg-[#FAFAF8] hover:text-[#111111] transition-colors"
                aria-label="Close case study"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-8">
              {/* Problem */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#999999]">
                  Business Problem
                </h4>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#444444]">
                  {activeModalProject.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#999999]">
                  Engineering Solution
                </h4>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#444444]">
                  {activeModalProject.solution}
                </p>
              </div>

              {/* Architecture Highlights */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#999999]">
                  Architecture &amp; System Decisions
                </h4>
                <ul className="mt-3 space-y-2">
                  {activeModalProject.architecture.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#333333]">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0062FF] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#999999]">
                  Technology Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-[#E8E8E8] bg-[#FAFAF8] px-3 py-1 font-mono text-xs text-[#333333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-[#E8E8E8] flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#contact"
                  onClick={() => setActiveModalProject(null)}
                  className="inline-flex items-center gap-2 rounded-md bg-[#0062FF] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#0050D8] transition-colors"
                >
                  <span>Build Similar System</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="font-mono text-xs uppercase tracking-wider text-[#666666] hover:text-[#111111]"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
