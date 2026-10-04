import { useState } from "react";
import { BUDGET_TIERS, COMPANY_INFO, PROJECT_TYPES, TIMELINE_OPTIONS } from "../lib/data";
import { ArrowIcon, CheckIcon, Reveal, SectionTag } from "./shared";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [budget, setBudget] = useState(BUDGET_TIERS[1]);
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[1]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <section id="contact" className="relative bg-[#FAFAF8] py-28 sm:py-36 border-t border-[#E8E8E8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column: Direct Info & Office Details */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionTag>Get In Touch</SectionTag>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#111111] sm:text-5xl leading-[1.12]">
                Start your project with InnoweaveTech.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#666666]">
                Tell us about your product goals, workflow bottlenecks, or system requirements. An engineer will review your inquiry and schedule a scoping conversation.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {/* Office Address */}
              <Reveal delay={200}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#E8E8E8] bg-white text-[#0062FF]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[#999999]">
                      Engineering Office
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-[#111111] leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Direct Phones */}
              <Reveal delay={250}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#E8E8E8] bg-white text-[#0062FF]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[#999999]">
                      Direct Telephone &amp; WhatsApp
                    </h3>
                    <div className="mt-1.5 flex flex-col gap-1 text-sm font-medium text-[#111111]">
                      {COMPANY_INFO.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="hover:text-[#0062FF] transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Email Address */}
              <Reveal delay={300}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#E8E8E8] bg-white text-[#0062FF]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[#999999]">
                      Direct Email
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-[#111111]">
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="hover:text-[#0062FF] transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Project Scoping Form */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="rounded-xl border border-[#E8E8E8] bg-white p-6 sm:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.03)]">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <CheckIcon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-[#111111]">
                      Project Inquiry Received
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-sm text-[#666666] leading-relaxed">
                      Thank you, {name}. A senior engineer from InnoweaveTech will review your system specifications and reply within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-8 inline-flex items-center gap-2 rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#111111] hover:bg-white hover:border-[#111111] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-[#E8E8E8] pb-4">
                      <h3 className="font-display text-lg font-bold text-[#111111]">
                        Project Scoping Form
                      </h3>
                      <p className="mt-1 text-xs text-[#666666]">
                        Fill in as much detail as you can to help us tailor our initial architectural discussion.
                      </p>
                    </div>

                    {/* Name & Company */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Alex Morgan"
                          className="w-full rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-2.5 text-sm text-[#111111] placeholder:text-[#999999] focus:border-[#0062FF] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Acme Corp"
                          className="w-full rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-2.5 text-sm text-[#111111] placeholder:text-[#999999] focus:border-[#0062FF] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@company.com"
                          className="w-full rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-2.5 text-sm text-[#111111] placeholder:text-[#999999] focus:border-[#0062FF] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-2.5 text-sm text-[#111111] placeholder:text-[#999999] focus:border-[#0062FF] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                        Primary System / Product Type
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#0062FF] focus:bg-white focus:outline-none transition-colors"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                          Anticipated Budget
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#0062FF] focus:bg-white focus:outline-none transition-colors"
                        >
                          {BUDGET_TIERS.map((tier) => (
                            <option key={tier} value={tier}>
                              {tier}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                          Target Timeline
                        </label>
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#0062FF] focus:bg-white focus:outline-none transition-colors"
                        >
                          {TIMELINE_OPTIONS.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Problem Description */}
                    <div>
                      <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                        Describe the business problem or system requirements
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about the current manual workflow, what you want to automate, or what product you want to build..."
                        className="w-full rounded-md border border-[#E8E8E8] bg-[#FAFAF8] px-3.5 py-2.5 text-sm text-[#111111] placeholder:text-[#999999] focus:border-[#0062FF] focus:bg-white focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0062FF] py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#0050D8] transition-colors cursor-pointer"
                      >
                        <span>Submit Project Scoping Request</span>
                        <ArrowIcon className="h-4 w-4" />
                      </button>
                      <p className="mt-2.5 text-center font-mono text-[11px] text-[#999999]">
                        🔒 Direct review by software engineers · Non-disclosure protected
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
