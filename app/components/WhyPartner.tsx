import { Reveal } from "./Reveal";

const reasons = [
  {
    title: "Marketing Support",
    description: "Social, open days, events, exhibitions, and print.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

/* Fanned "hand of cards" poses, applied from lg upward */
const poses = [
  { pose: "lg:[transform:rotate(-9deg)_translateY(48px)]", z: 1 },
  { pose: "lg:[transform:rotate(-4.5deg)_translateY(13px)]", z: 2 },
  { pose: "", z: 3 },
  { pose: "lg:[transform:rotate(4.5deg)_translateY(13px)]", z: 2 },
  { pose: "lg:[transform:rotate(9deg)_translateY(48px)]", z: 1 },
];

export function WhyPartner() {
  return (
    <section className="relative overflow-hidden bg-(--color-background-white) py-16 sm:py-20">
      {/* Ambient glow behind the fan */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <Reveal>
          <header className="mx-auto max-w-3xl text-center">
            <p className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-primary uppercase">
              <span
                className="hidden h-px w-14 bg-gradient-to-r from-transparent to-primary/60 sm:block"
                aria-hidden="true"
              />
              Why Partner With Us
              <span
                className="hidden h-px w-14 bg-gradient-to-l from-transparent to-primary/60 sm:block"
                aria-hidden="true"
              />
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.85rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-foreground">
              More Than Products.{" "}
              <span className="font-medium italic text-primary">
                Complete Partnership.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-secondary sm:text-base">
              Five pillars behind every supply agreement — so your team can
              stock, operate, and sell with confidence.
            </p>
          </header>
        </Reveal>

        {/* The dealt hand */}
        <div className="relative mt-12 sm:mt-14 lg:mt-10">
          {/* Dashed guide arc */}
          <svg
            viewBox="0 0 1200 260"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-2 hidden w-full text-primary/35 lg:block"
          >
            <path
              d="M30 225 Q 600 -95 1170 225"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 9"
              strokeLinecap="round"
            />
          </svg>

          <ul className="relative grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-0 lg:-space-x-5 lg:pt-6 lg:pb-16 xl:-space-x-4">
            {reasons.map((reason, index) => (
              <li
                key={reason.title}
                className={`${index === reasons.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""} lg:w-[228px] lg:shrink-0 xl:w-[248px]`}
                style={{ zIndex: poses[index].z }}
              >
                <Reveal delay={index * 110} className="h-full">
                  <article
                    className={`group relative h-full rounded-[1.5rem] border border-(--color-border-accent)/60 bg-white p-5 shadow-(--shadow-card) transition-[transform,box-shadow,border-color] duration-500 ease-out hover:z-20 hover:border-primary/50 hover:shadow-(--shadow-hover) sm:p-6 ${poses[index].pose} lg:hover:[transform:rotate(0deg)_translateY(-14px)_scale(1.03)]`}
                  >
                    {/* Suit-style corner marks, like a playing card */}
                    <span
                      aria-hidden="true"
                      className="font-display absolute top-4 right-5 text-sm font-semibold text-primary/30 transition-colors duration-500 group-hover:text-primary"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute right-5 bottom-4 text-[10px] text-primary/30 transition-colors duration-500 group-hover:text-primary"
                    >
                      ✦
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary ring-1 ring-(--color-border-accent) transition-colors duration-500 group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                      {reason.icon}
                    </span>

                    <h3 className="mt-5 text-[15px] font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                      {reason.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
