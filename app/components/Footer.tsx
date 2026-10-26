import { Logo } from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Story", href: "#about" },
      { label: "Regional Presence", href: "#about" },
      { label: "Partner With Us", href: "#contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Injectables", href: "#injectables" },
      { label: "Skincare", href: "#skincare" },
      { label: "Devices", href: "#devices" },
      { label: "Training & Support", href: "#training" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Our Brands", href: "#brands" },
      { label: "Neauvia", href: "#brands" },
      { label: "Janssen Cosmetics", href: "#brands" },
      { label: "LC Cell", href: "#brands" },
      { label: "Nithya", href: "#brands" },
      { label: "FineMEC", href: "#brands" },
      { label: "ShenB", href: "#brands" },
      { label: "Enerjet", href: "#brands" },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.7 9.2H7.6V19.5H4.7V9.2ZM6.15 4.5c.95 0 1.7.76 1.7 1.7s-.75 1.72-1.7 1.72-1.7-.77-1.7-1.72.75-1.7 1.7-1.7ZM9.4 9.2h2.75v1.41h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.91 3.45 4.4v5.97h-2.88v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79v5.39H9.4V9.2Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.2 20.5v-7.1h2.4l.36-2.76h-2.76V8.9c0-.8.22-1.34 1.37-1.34H17V5.08c-.24-.03-1.05-.1-2-.1-1.98 0-3.33 1.2-3.33 3.42v1.24H9.2v2.76h2.47v7.1h2.53Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.2 8.2a2.7 2.7 0 0 0-1.9-1.91C17.7 5.9 12 5.9 12 5.9s-5.7 0-7.3.39A2.7 2.7 0 0 0 2.8 8.2 28.3 28.3 0 0 0 2.4 12a28.3 28.3 0 0 0 .4 3.8 2.7 2.7 0 0 0 1.9 1.91c1.6.39 7.3.39 7.3.39s5.7 0 7.3-.39a2.7 2.7 0 0 0 1.9-1.91c.27-1.24.4-2.51.4-3.8a28.3 28.3 0 0 0-.4-3.8ZM10.4 14.85V9.15L15.3 12l-4.9 2.85Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-(--color-background-white)">
      <div className="mx-auto max-w-430 px-6 py-12 sm:px-10 sm:py-14 xl:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,0.8fr))_minmax(0,0.85fr)] lg:gap-8">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[13.5px] leading-relaxed text-secondary">
              Dubai-based distributor of aesthetic injectables, professional
              skincare, and medical devices for clinics across the Middle East.
            </p>
            <ul className="mt-5 flex list-none gap-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-primary hover:text-primary"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[14px] font-semibold text-foreground">{column.title}</h2>
              <ul className="mt-4 flex list-none flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13.5px] text-secondary transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-[14px] font-semibold text-foreground">Contact</h2>
            <ul className="mt-4 flex list-none flex-col gap-3 text-[13.5px] text-secondary">
              <li className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                  <path
                    d="M12 21s6.5-5.2 6.5-10.1A6.5 6.5 0 0 0 12 4.4a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="10.8" r="2.1" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <span>Dubai, UAE</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="m4.5 7 7.5 6L19.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a href="mailto:info@laesthetics.com" className="transition-colors hover:text-primary">
                  info@laesthetics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-5 text-[12.5px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Lifestyle Aesthetics. All Rights Reserved.</p>
          <p className="flex gap-4">
            <a href="#privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-primary">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
