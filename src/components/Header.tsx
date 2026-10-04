import { useEffect, useState } from "react";
import { NAV_LINKS } from "../lib/data";
import { useScrolled, useScrollSpy } from "../lib/hooks";
import { ArrowIcon } from "./shared";

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function Header() {
  const scrolled = useScrolled(20);
  const activeSection = useScrollSpy(SECTION_IDS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E8E8] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "bg-[#FAFAF8]/80 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3"
            aria-label="InnoweaveTech — Home"
          >
            <img
              src="/images/logo.png"
              alt="InnoweaveTech Logo"
              className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-[#111111]">
                Innoweave<span className="text-[#0062FF]">Tech</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-[#0062FF]"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0062FF] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[#0062FF] px-4.5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:bg-[#0050D8] hover:shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E8E8E8] bg-white text-[#111111] transition-colors hover:border-[#111111] lg:hidden"
            >
              <div className="flex flex-col gap-1.25">
                <span
                  className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "translate-y-1.75 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-[#FAFAF8] px-8 pt-28 pb-12 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-5 border-t border-[#E8E8E8] pt-6">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-2xl font-display font-semibold tracking-tight text-[#111111] transition-colors hover:text-[#0062FF]"
            >
              <span>{link.label}</span>
              <span className="font-mono text-xs text-[#999999]">0{idx + 1}</span>
            </a>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#E8E8E8] flex flex-col gap-4">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0062FF] py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#0050D8]"
          >
            <span>Start a Project</span>
            <ArrowIcon className="h-4 w-4" />
          </a>
          <p className="text-center font-mono text-xs text-[#666666]">
            support@innoweavetech.in
          </p>
        </div>
      </div>
    </>
  );
}
