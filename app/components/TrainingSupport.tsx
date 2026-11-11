import Image from "next/image";
import { Reveal } from "./Reveal";

const services = [
  {
    label: "Training & Workshops",
    tilt: "-rotate-2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7 11.8V16c0 .6 2.2 2.2 5 2.2s5-1.6 5-2.2v-4.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M21 10v5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Marketing Support",
    tilt: "rotate-1",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 10v4h3l8 4V6L7 10H4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7 14.2v2.3A1.5 1.5 0 0 0 8.5 18H9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M18 9.5a3.5 3.5 0 0 1 0 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Maintenance",
    tilt: "-rotate-1",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.2 2.2-2.1-.6-.6-2.1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Logistical Support",
    tilt: "rotate-2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 7h11v9H3V7Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 10h4l3 3v3h-7v-6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "After-Sales Support",
    tilt: "-rotate-1",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 12a8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 12v4.5A1.5 1.5 0 0 0 5.5 18H7v-6H5.5A1.5 1.5 0 0 0 4 13.5V12Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M20 12v4.5A1.5 1.5 0 0 1 18.5 18H17v-6h1.5A1.5 1.5 0 0 1 20 13.5V12Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M17 18v.5A2.5 2.5 0 0 1 14.5 21H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

const stats = [
  {
    text: "Est. 2011 · Dubai",
    className: "top-[24%] -left-3 -rotate-3 sm:-left-7",
  },
  {
    text: "8 Global Brands",
    className: "top-[52%] -right-3 rotate-2 sm:-right-8",
  },
  {
    text: "6 Countries Served",
    className: "-bottom-4 left-10 -rotate-2",
  },
];

export function TrainingSupport() {
  return (
    <section
      id="training"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff5fa_48%,#ffffff_100%)] py-16 sm:py-20"
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-24 left-[6%] h-56 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 -bottom-28 h-64 w-80 rounded-full bg-[#ffb3d9]/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-430 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:px-16">
        {/* Collage visual: arch image + rotating badge + sticker stats */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-[380px] pt-6 sm:max-w-[400px]">
            <div className="rounded-t-[12rem] rounded-b-[2.5rem] border border-primary/15 bg-white/70 p-3 shadow-(--shadow-card) backdrop-blur-sm sm:p-3.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[11rem] rounded-b-[1.75rem]">
                <Image
                  src="/education.png"
                  alt="Hands-on product training for aesthetic professionals"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Rotating circular-text badge */}
            <div
              className="absolute -top-2 -right-2 h-24 w-24 sm:-right-6 sm:h-28 sm:w-28"
              aria-hidden="true"
            >
              <div className="relative h-full w-full rounded-full bg-white shadow-(--shadow-card) ring-1 ring-(--color-border-accent)">
                <svg
                  viewBox="0 0 100 100"
                  className="animate-spin-slow absolute inset-0 h-full w-full"
                >
                  <defs>
                    <path
                      id="ts-badge-circle"
                      d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                      fill="none"
                    />
                  </defs>
                  <text className="fill-primary text-[9px] font-semibold tracking-[0.22em] uppercase">
                    <textPath href="#ts-badge-circle" textLength="224">
                      Training · Support · Success ·
                    </textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 grid place-items-center text-lg text-primary">
                  ✦
                </span>
              </div>
            </div>

            {/* Sticker stat pills */}
            {stats.map((stat) => (
              <span
                key={stat.text}
                className={`absolute flex items-center gap-2 rounded-full border border-(--color-border-accent) bg-white/90 px-4 py-2 text-[12px] font-semibold whitespace-nowrap text-foreground shadow-(--shadow-card) backdrop-blur-sm ${stat.className}`}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {stat.text}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Content */}
        <div className="max-w-xl">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Training & Support
              <span
                className="hidden h-px w-12 bg-primary/40 sm:block"
                aria-hidden="true"
              />
            </p>

            <h2 className="mt-4 font-display text-[clamp(1.9rem,3vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-foreground">
              More Than Products.
              <br />
              <span className="font-medium italic text-primary">
                A Partner in Your Success.
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-secondary sm:text-base">
              Product orientation, hands-on training, and round-table
              workshops, with marketing, device installation, warehousing, and
              technical assistance after the sale.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-8 flex list-none flex-wrap gap-x-3 gap-y-3.5">
              {services.map((service) => (
                <li
                  key={service.label}
                  className={`${service.tilt} transition-transform duration-300 ease-out hover:rotate-0`}
                >
                  <span className="flex items-center gap-2 rounded-full border border-(--color-border-accent) bg-white px-4 py-2.5 text-[13px] font-semibold text-foreground shadow-[0_2px_12px_rgba(184,11,105,0.08)] transition-colors duration-300 hover:border-primary/50 hover:bg-primary-light">
                    <span className="text-primary">{service.icon}</span>
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <a
              href="/#contact"
              className="mt-9 inline-flex w-fit items-center gap-1.5 rounded-full bg-(--color-button-primary) px-6 py-3 text-[13px] font-semibold text-white transition-all hover:bg-(--color-button-primary-hover) hover:shadow-(--shadow-hover)"
            >
              Explore Our Support Services
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
