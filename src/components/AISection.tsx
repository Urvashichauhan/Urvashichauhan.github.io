import { useState } from "react";
import { AI_WORKFLOW_STEPS } from "../lib/data";
import { ArrowIcon, Reveal, SectionTag } from "./shared";

export default function AISection() {
  const [activeStepIndex, setActiveStepIndex] = useState(1); // default to "AI Agent" step
  const activeStep = AI_WORKFLOW_STEPS[activeStepIndex];

  return (
    <section id="ai" className="relative border-y border-[#E8E8E8] bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <SectionTag>AI &amp; Automation Architecture</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl leading-[1.1]">
              Software is changing. <br />
              <span className="text-[#0062FF]">Your business should too.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-lg sm:text-xl font-normal leading-relaxed text-[#666666]">
              We build AI-powered workflows, intelligent agents and automation systems that reduce repetitive work and help teams make better decisions.
            </p>
          </Reveal>
        </div>

        {/* Product-Style AI Pipeline Visualization */}
        <div className="mt-16 sm:mt-20">
          <Reveal delay={200}>
            <div className="rounded-xl border border-[#E8E8E8] bg-[#FAFAF8] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              {/* Pipeline Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E8E8] gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded border border-[#E8E8E8] bg-white font-mono text-xs font-bold text-[#0062FF]">
                    AI
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#111111]">
                      Autonomous Agent &amp; Workflow Execution Pipeline
                    </h3>
                    <span className="font-mono text-[11px] text-[#666666]">
                      Deterministic business verification · Zero hallucinatory actions
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[11px] text-emerald-700 font-semibold">
                    PIPELINE ACTIVE · STATE MACHINE READY
                  </span>
                </div>
              </div>

              {/* Workflow Nodes Grid / Timeline */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
                {AI_WORKFLOW_STEPS.map((step, idx) => {
                  const isSelected = activeStepIndex === idx;

                  return (
                    <button
                      key={step.step}
                      type="button"
                      onClick={() => setActiveStepIndex(idx)}
                      className={`group relative flex flex-col justify-between rounded-lg border p-4 text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-[#0062FF] bg-white shadow-sm ring-1 ring-[#0062FF]"
                          : "border-[#E8E8E8] bg-white/70 hover:border-[#CCCCCC] hover:bg-white"
                      }`}
                    >
                      {/* Node Header */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span
                            className={`font-mono text-[10px] font-bold ${
                              isSelected ? "text-[#0062FF]" : "text-[#999999]"
                            }`}
                          >
                            STAGE {step.step}
                          </span>
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isSelected ? "bg-[#0062FF]" : "bg-[#DDDDDD]"
                            }`}
                          />
                        </div>

                        <h4
                          className={`mt-3 font-display text-sm font-bold ${
                            isSelected ? "text-[#0062FF]" : "text-[#111111]"
                          }`}
                        >
                          {step.label}
                        </h4>
                      </div>

                      <p className="mt-2 text-[11px] leading-relaxed text-[#666666]">
                        {step.sublabel}
                      </p>

                      {idx < AI_WORKFLOW_STEPS.length - 1 && (
                        <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                          <span className="block h-1 w-1 rounded-full bg-[#CCCCCC]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Step Terminal Inspection Console */}
              <div className="mt-8 rounded-lg border border-[#E8E8E8] bg-white p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E8E8E8] pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-[#111111]">
                      Stage {activeStep.step}: {activeStep.label}
                    </span>
                    <span className="font-mono text-[11px] text-[#666666]">
                      — Execution Inspector
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#0062FF] bg-blue-50 px-2.5 py-0.5 rounded">
                    INTERACTIVE INSPECTION
                  </span>
                </div>

                <div className="mt-4 grid gap-6 md:grid-cols-12 items-center">
                  <div className="md:col-span-7">
                    <p className="text-sm text-[#444444] leading-relaxed">
                      {activeStep.sublabel}. Every step logs structured JSON payloads to an immutable audit trail, ensuring zero unvetted actions are committed to production databases.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono">
                      <span className="rounded border border-[#E8E8E8] bg-[#FAFAF8] px-2 py-1 text-[#666666]">
                        Role-based tool boundaries
                      </span>
                      <span className="rounded border border-[#E8E8E8] bg-[#FAFAF8] px-2 py-1 text-[#666666]">
                        Structured JSON outputs
                      </span>
                      <span className="rounded border border-[#E8E8E8] bg-[#FAFAF8] px-2 py-1 text-emerald-600">
                        Verified Execution
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-5 rounded bg-[#FAFAF8] border border-[#E8E8E8] p-3 font-mono text-xs text-[#333333] overflow-x-auto">
                    <div className="text-[10px] text-[#999999] mb-1.5">// Live Pipeline Payload Trace</div>
                    <pre className="text-xs text-[#0062FF]">
                      <code>{activeStep.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-[#E8E8E8] gap-4">
                <p className="text-xs text-[#666666]">
                  Looking to automate a repetitive workflow or embed AI agents into your product?
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#0062FF] hover:text-[#0050D8] transition-colors"
                >
                  <span>Discuss AI Integration</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
