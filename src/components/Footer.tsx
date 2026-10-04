import { COMPANY_INFO, NAV_LINKS } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E8E8] bg-white py-16 sm:py-20 text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Description */}
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="InnoweaveTech Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-display text-lg font-bold tracking-tight text-[#111111]">
                Innoweave<span className="text-[#0062FF]">Tech</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm text-[#666666] leading-relaxed">
              We design and build web applications, mobile products, AI-powered systems and scalable digital platforms for ambitious businesses.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E8E8E8] text-[#666666] hover:border-[#0062FF] hover:text-[#0062FF] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74V9.93H5.06v8.57h2.8z" />
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E8E8E8] text-[#666666] hover:border-[#0062FF] hover:text-[#0062FF] transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#999999]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-[#555555] hover:text-[#0062FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#999999]">
              Direct Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-[#555555]">
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-medium text-[#111111] hover:text-[#0062FF] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex flex-col gap-1 text-xs">
                {COMPANY_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="hover:text-[#0062FF] transition-colors font-mono"
                  >
                    {phone}
                  </a>
                ))}
              </p>
              <p className="text-xs leading-relaxed text-[#666666]">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-14 pt-8 border-t border-[#E8E8E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#888888]">
          <p>{COMPANY_INFO.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-[#111111] transition-colors">
              Privacy Notice
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-[#111111] transition-colors">
              Terms of Engagement
            </a>
            <span>·</span>
            <a href="#" className="hover:text-[#111111] transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
