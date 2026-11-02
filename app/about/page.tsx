import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Lifestyle Aesthetics",
  description:
    "Since 2011, Lifestyle Aesthetics has been a leading distributor of world-class aesthetic products, devices, and professional solutions across the Middle East.",
};

const pillars = [
  {
    title: "Our Vision",
    description:
      "To work tirelessly to bring our clients the best aesthetic solutions, powered by innovative technology, for a more confident and beautiful world.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2.2 12S5.8 5.5 12 5.5 21.8 12 21.8 12 18.2 18.5 12 18.5 2.2 12 2.2 12Z" />
        <circle cx="12" cy="12" r="3.2" />
      </svg>
    ),
  },
  {
    title: "Our Mission",
    description:
      "To be the pioneers in the region, delivering safe, effective and advanced aesthetic solutions that drive real results for professionals and their clients.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.8" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        <path d="m16 8 4.5-4.5" />
        <path d="M17.5 3.5h3v3" />
      </svg>
    ),
  },
  {
    title: "Our Values",
    values: [
      "Improvement",
      "Quality",
      "Passion",
      "Integrity",
      "Customer Focus",
    ],
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6.5 4.5h11l3.5 5-9 10.5L3 9.5l3.5-5Z" />
        <path d="M3 9.5h18" />
        <path d="m12 20-3.5-10.5L11 4.5" />
        <path d="m12 20 3.5-10.5L13 4.5" />
      </svg>
    ),
  },
];

const stats = [
  {
    value: "Since 2011",
    label: "Founded in Dubai, UAE",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
        <path d="M8 3.5v3" />
        <path d="M16 3.5v3" />
        <path d="M3.5 9.5h17" />
        <circle cx="8.5" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="12" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="15.5" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="8.5" cy="16.8" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="12" cy="16.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    value: "7+",
    label: "Global Brands",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="9.5" r="5.5" />
        <circle cx="12" cy="9.5" r="2.5" />
        <path d="m9 14.2-1.5 6.3 4.5-2.3 4.5 2.3-1.5-6.3" />
      </svg>
    ),
  },
  {
    value: "6",
    label: "Countries",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8.5" />
        <ellipse cx="12" cy="12" rx="3.8" ry="8.5" />
        <path d="M3.8 9.5h16.4" />
        <path d="M3.8 14.5h16.4" />
      </svg>
    ),
  },
  {
    value: "1000+",
    label: "Practitioners Supported",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8.5" r="3" />
        <path d="M6.8 18.5c.6-2.7 2.6-4.3 5.2-4.3s4.6 1.6 5.2 4.3" />
        <circle cx="6.2" cy="9.8" r="2.2" />
        <path d="M2.8 17.8c.4-1.9 1.7-3.1 3.5-3.2" />
        <circle cx="17.8" cy="9.8" r="2.2" />
        <path d="M21.2 17.8c-.4-1.9-1.7-3.1-3.5-3.2" />
      </svg>
    ),
  },
];

const locations = [
  { country: "UAE", city: "Dubai" },
  { country: "Qatar", city: "Doha" },
  { country: "Bahrain", city: "Manama" },
  { country: "Oman", city: "Muscat" },
  { country: "Egypt", city: "Cairo" },
  { country: "Kuwait", city: "Kuwait City" },
];

export default function AboutPage() {
  return (
    <main>
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden bg-(--color-background)">
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-primary-light) via-(--color-primary-light)/75 to-transparent"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-430 min-h-[460px] grid-cols-1 lg:min-h-[520px] lg:grid-cols-[minmax(0,0.90fr)_minmax(0,1.10fr)]">
            {/* Left Copy */}
            <div className="relative z-10 flex flex-col justify-center px-6 pt-12 pb-12 sm:px-10 lg:py-16 xl:pl-16 xl:pr-6">
              <p className="animate-fade-up text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                About Lifestyle Aesthetics
              </p>

              <h1 className="animate-fade-up delay-1 mt-3.5 max-w-[18ch] font-display text-[clamp(2.35rem,4.8vw,3.85rem)] leading-[1.06] font-semibold tracking-[-0.015em] text-foreground">
                A Trusted Partner in{" "}
                <span className="block text-primary">Medical Aesthetics</span>
              </h1>

              <p className="animate-fade-up delay-2 mt-5 max-w-xl text-[15px] leading-relaxed text-secondary sm:text-[15.5px]">
                Since 2011, Lifestyle Aesthetics has been a leading distributor
                of world-class aesthetic products, devices and professional
                solutions across the Middle East.
              </p>

              <div className="animate-fade-up delay-3 mt-7">
                <a
                  href="#our-story"
                  className="inline-flex items-center gap-2 rounded-lg bg-(--color-button-primary) px-6 py-3 text-[13.5px] font-semibold text-white shadow-(--shadow-card) transition-all hover:bg-(--color-button-primary-hover) hover:shadow-(--shadow-hover)"
                >
                  Our Story
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Right Spacer */}
            <div
              className="pointer-events-none min-h-[min(56vw,360px)] lg:min-h-full"
              aria-hidden="true"
            />

            {/* Portrait & Silk Graphic */}
            <div className="animate-image-reveal pointer-events-none absolute inset-y-0 right-0 z-[1] flex w-[min(94vw,580px)] items-end justify-end sm:w-[min(80vw,680px)] lg:w-[60%] xl:w-[56%]">
              <Image
                src="/about/about-hero.png"
                alt="Portrait of a woman with glowing skin draped in flowing pink silk"
                width={1313}
                height={1198}
                priority
                sizes="(max-width: 1024px) 92vw, 58vw"
                className="h-full w-auto max-w-none origin-bottom-right object-contain translate-x-[6%] lg:translate-x-[2%]"
              />
            </div>

            {/* Right Tagline Stack */}
            <div
              className="animate-fade-in delay-4 absolute right-6 bottom-10 z-[2] hidden flex-col items-start gap-2.5 lg:flex xl:right-16 xl:bottom-14"
              aria-hidden="true"
            >
              <p className="text-[11px] font-semibold leading-[1.85] tracking-[0.28em] text-foreground/85 uppercase">
                Science <br />
                People <br />
                Aesthetics <br />
                Together
              </p>
              <span className="h-0.5 w-7 rounded-full bg-primary" />
            </div>
          </div>
        </section>

        {/* 2. Vision, Mission & Values Strip */}
        <section className="border-y border-border/80 bg-(--color-background-white) py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
            <div className="grid grid-cols-1 gap-9 lg:grid-cols-3 lg:gap-0">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`flex items-start gap-4 sm:gap-5 ${
                    index > 0
                      ? "lg:border-l lg:border-border lg:pl-9 xl:pl-11"
                      : ""
                  } ${index < pillars.length - 1 ? "lg:pr-9 xl:pr-11" : ""}`}
                >
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-(--color-primary-light) text-primary">
                    {pillar.icon}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-[1.45rem] leading-tight font-semibold text-foreground sm:text-[1.6rem]">
                      {pillar.title}
                    </h2>
                    {pillar.description ? (
                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-secondary sm:text-[14px]">
                        {pillar.description}
                      </p>
                    ) : (
                      <ul className="mt-2.5 flex list-none flex-wrap items-center gap-y-1.5 text-[13.5px] leading-relaxed text-secondary sm:text-[14px]">
                        {pillar.values?.map((val, idx) => (
                          <li key={val} className="inline-flex items-center">
                            {idx > 0 && (
                              <span
                                className="mx-2.5 text-border-accent"
                                aria-hidden="true"
                              >
                                |
                              </span>
                            )}
                            <span>{val}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Our Story + Lifestyle Aesthetics at a Glance */}
        <section
          id="our-story"
          className="scroll-mt-8 bg-(--color-background) py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-16">
              {/* Left Copy */}
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                  Our Story
                </p>

                <h2 className="mt-3 font-display text-[clamp(2rem,3.8vw,3.1rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-foreground">
                  A Journey of{" "}
                  <span className="block text-primary">
                    Aesthetic Excellence
                  </span>
                </h2>

                <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-secondary sm:text-[15px]">
                  <p>
                    The word{" "}
                    <strong className="font-semibold text-foreground">
                      aesthetic
                    </strong>{" "}
                    comes from the Greek{" "}
                    <em className="font-semibold text-foreground not-italic">
                      &ldquo;aisthētikos&rdquo;
                    </em>
                    , meaning a perception of beauty by the senses. At Lifestyle
                    Aesthetics, we have built our journey on this very
                    philosophy — combining science, innovation and a deep
                    understanding of beauty to bring advanced, reliable and
                    results-driven solutions to the aesthetic industry.
                  </p>
                  <p>
                    Headquartered in Dubai, we partner with{" "}
                    <strong className="font-semibold text-foreground">
                      globally renowned brands
                    </strong>{" "}
                    to support clinics,{" "}
                    <strong className="font-semibold text-foreground">
                      dermatologists
                    </strong>{" "}
                    and aesthetic practitioners across the region.
                  </p>
                </div>
              </div>

              {/* Right Reception Image */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-border/70 bg-(--color-background-white) shadow-(--shadow-card) sm:rounded-3xl">
                  <Image
                    src="/about/about-story-office.jpg"
                    alt="Lifestyle Aesthetics reception and showroom in Dubai"
                    width={1408}
                    height={792}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="aspect-16/10 h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* At a Glance Banner Card */}
            <div className="mt-14 rounded-2xl border border-border-accent/45 bg-(--color-background-soft) px-6 py-8 shadow-(--shadow-card) sm:mt-16 sm:rounded-3xl sm:px-10 sm:py-10 lg:px-12">
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)] lg:gap-6">
                <div>
                  <h3 className="font-display text-[clamp(1.65rem,2.6vw,2.2rem)] leading-[1.12] font-semibold text-foreground">
                    Lifestyle Aesthetics
                    <span className="block text-primary">at a Glance</span>
                  </h3>
                </div>

                <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-0">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-start sm:border-l sm:border-border-accent/60 sm:px-6 lg:px-7 first:sm:border-l lg:first:border-l"
                    >
                      <span className="text-primary">{stat.icon}</span>
                      <dt className="mt-2.5 text-[1.35rem] font-bold tracking-tight text-foreground sm:text-[1.5rem]">
                        {stat.value}
                      </dt>
                      <dd className="mt-1 text-[12.5px] leading-snug text-secondary sm:text-[13px]">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Presence Section */}
        <section
          id="presence"
          className="relative overflow-hidden bg-(--color-background-white) pt-14 pb-0 sm:pt-18 lg:pt-20"
        >
          <div className="mx-auto max-w-430">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
              {/* Left Copy & Locations */}
              <div className="relative z-10 px-6 pb-4 sm:px-10 lg:py-12 xl:pl-16 xl:pr-8">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                  Our Presence
                </p>

                <h2 className="mt-3 font-display text-[clamp(2rem,3.8vw,3.1rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-foreground">
                  Serving the{" "}
                  <span className="block text-primary">Middle East Region</span>
                </h2>

                <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-secondary sm:text-[15px]">
                  A strong regional footprint with a commitment to supporting
                  the growth of the aesthetic industry across key markets.
                </p>

                <ul className="mt-8 grid max-w-md list-none grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
                  {locations.map((loc) => (
                    <li key={loc.country} className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-primary"
                        aria-hidden="true"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2.25a7.25 7.25 0 0 0-7.25 7.25c0 5.05 6.14 11.4 6.4 11.67a1.2 1.2 0 0 0 1.7 0c.26-.27 6.4-6.62 6.4-11.67A7.25 7.25 0 0 0 12 2.25Zm0 9.85a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-[14px] font-bold leading-snug text-foreground">
                          {loc.country}
                        </p>
                        <p className="text-[12.5px] leading-snug text-secondary">
                          {loc.city}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Arched Dubai Skyline */}
              <div className="relative min-h-[300px] w-full overflow-hidden sm:min-h-[380px] lg:min-h-[430px]">
                <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-tl-[120px] sm:min-h-[380px] sm:rounded-tl-[200px] lg:min-h-[430px] lg:rounded-tl-[260px]">
                  <Image
                    src="/about/dubai-skyline.jpg"
                    alt="Dubai skyline with the Burj Khalifa at sunset"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-r from-(--color-background-white)/35 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Bottom CTA Banner */}
        <section className="relative overflow-hidden bg-[linear-gradient(110deg,#b00862_0%,#d40b77_42%,#e90c87_78%,#c50a73_100%)]">
          {/* Decorative curved ribbon waves matching the mockup */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1440 260"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M780 260C910 140 1120 35 1440 15V260H780Z"
              fill="#ff5cb5"
              fillOpacity="0.22"
            />
            <path
              d="M900 260C1040 165 1210 85 1440 70V260H900Z"
              fill="#8e064e"
              fillOpacity="0.35"
            />
            <path
              d="M0 0C260 40 480 140 640 260H0V0Z"
              fill="#830547"
              fillOpacity="0.28"
            />
          </svg>

          <div className="relative z-10 mx-auto flex max-w-430 flex-col items-start justify-between gap-6 px-6 py-12 sm:px-10 sm:py-14 lg:flex-row lg:items-center xl:px-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-white/85 uppercase">
                Let&apos;s Grow Together
              </p>
              <h2 className="mt-2.5 font-display text-[clamp(1.95rem,3.4vw,2.85rem)] leading-[1.08] font-semibold tracking-[-0.015em] text-white">
                Partner With Lifestyle Aesthetics
              </h2>
              <p className="mt-2.5 max-w-xl text-[14.5px] leading-relaxed text-white/90 sm:text-[15px]">
                Discover how our brands, solutions and support can add value to
                your clinic or business.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-[13.5px] font-semibold text-primary-dark shadow-[0_10px_28px_rgba(90,6,48,0.22)] transition-all hover:bg-(--color-primary-light) hover:shadow-[0_14px_34px_rgba(90,6,48,0.3)]"
              >
                Get in Touch
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
    </main>
  );
}
