const reasons = [
  {
    title: "Marketing Support",
    description: "Social, open days, events, exhibitions, and print.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 10v4h3.2L16 18.5V5.5L7.2 10H4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7.2 14v2.2c0 .7.7 1.3 1.6 1.3h.7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18.2 9.2a3.6 3.6 0 0 1 0 5.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Training & Workshops",
    description: "Orientation, product training, and round tables.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 9.2 12 5l9 4.2-9 4.2L3 9.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7.2 11.5V16c0 .7 2.1 2.4 4.8 2.4s4.8-1.7 4.8-2.4v-4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M21 10.2V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Maintenance",
    description: "Installation, calibration, safety checks, and warranties.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.7 6.3a3.8 3.8 0 0 0-5 5L4.2 16.8l3 3 5.5-5.5a3.8 3.8 0 0 0 5-5l-2.1 2.1-2-.6-.6-2 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Logistical Support",
    description: "Warehousing and delivery across the region.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 7.2h11v8.6H3V7.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 10.2h3.6L21 13v2.8h-7V10.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="7.2" cy="17.6" r="1.45" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="17.6" r="1.45" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "After-Sales Support",
    description: "General and technical assistance after the sale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 12.2a8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 12.2v3.8A1.6 1.6 0 0 0 5.6 17.6H7v-5.4H5.6A1.6 1.6 0 0 0 4 13.8v-1.6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M20 12.2v3.8a1.6 1.6 0 0 1-1.6 1.6H17v-5.4h1.4A1.6 1.6 0 0 1 20 13.8v-1.6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M17 17.6v.6a2.2 2.2 0 0 1-2.2 2.2H13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function WhyPartner() {
  return (
    <section className="bg-(--color-background-white) py-16 sm:py-20 lg:py-14">
      <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            Why Partner With Us
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.85rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-foreground">
            More Than Products. Complete Partnership.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-secondary sm:text-base">
            Distribution plus the support clinics need to adopt, operate, and
            market each aesthetic solution.
          </p>
        </header>

        <ul className="mt-12 grid list-none grid-cols-2 gap-x-6 gap-y-10 sm:mt-14 lg:grid-cols-5 lg:gap-x-8">
          {reasons.map((reason, index) => (
            <li
              key={reason.title}
              className={`flex flex-col items-center text-center ${
                index === reasons.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="text-primary">{reason.icon}</span>
              <h3 className="mt-4 text-[14.5px] font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 max-w-[22ch] text-[13px] leading-relaxed text-secondary">
                {reason.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
