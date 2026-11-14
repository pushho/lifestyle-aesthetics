import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";

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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
    values: ["Improvement", "Quality", "Passion", "Integrity", "Customer Focus"],
    icon: (
      <svg
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
  { country: "UAE", city: "Dubai", tilt: "-rotate-2" },
  { country: "Qatar", city: "Doha", tilt: "rotate-1" },
  { country: "Bahrain", city: "Manama", tilt: "-rotate-1" },
  { country: "Oman", city: "Muscat", tilt: "rotate-2" },
  { country: "Egypt", city: "Cairo", tilt: "-rotate-1" },
  { country: "Kuwait", city: "Kuwait City", tilt: "rotate-1" },
];

const mosaicLogos = [
  {
    name: "Hyalure",
    src: "/brands/logos/hyalure_logo.png",
    width: 2560,
    height: 551,
  },
  {
    name: "Zimmer",
    src: "/brands/logos/zimmer_logo.webp",
    width: 1333,
    height: 484,
  },
  {
    name: "Wontech",
    src: "/brands/logos/wontech_logo.png",
    width: 547,
    height: 99,
  },
  {
    name: "ShenB",
    src: "/brands/logos/shenb.svg",
    width: 479,
    height: 87,
  },
  {
    name: "Supernova",
    src: "/brands/logos/supernova_logo.png",
    width: 777,
    height: 183,
  },
  {
    name: "GTG",
    src: "/brands/logos/gtg_logo.svg",
    width: 200,
    height: 34,
    invert: true,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-(--color-background)">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-white via-(--color-primary-light)/80 to-(--color-background-soft)"
          aria-hidden="true"
        />
        {/* Ambient glows that fill the mid-gap behind the product */}
        <div
          className="pointer-events-none absolute top-1/4 right-[18%] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[8%] bottom-0 h-72 w-96 rounded-full bg-[#ffb3d9]/45 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-10 left-[6%] h-56 w-72 rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-430 items-center lg:min-h-[480px] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:min-h-[520px]">
          {/* Left copy */}
          <div className="relative z-10 flex flex-col justify-center px-6 pt-10 pb-4 sm:px-10 lg:py-12 xl:pl-16 xl:pr-0">
            <p className="animate-fade-up flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              About Lifestyle Aesthetics
              <span
                className="hidden h-px w-12 bg-primary/40 sm:block"
                aria-hidden="true"
              />
            </p>

            <h1 className="animate-fade-up delay-1 mt-3.5 max-w-[18ch] font-display text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.06] font-semibold tracking-[-0.015em] text-foreground">
              A Trusted Partner{" "}
              <span className="block font-medium italic text-primary">
                in Medical Aesthetics
              </span>
            </h1>

            <p className="animate-fade-up delay-2 mt-4 max-w-md text-[15px] leading-relaxed text-secondary sm:text-base">
              Since 2011, Lifestyle Aesthetics has been a leading distributor
              of world-class aesthetic products, devices and professional
              solutions across the Middle East.
            </p>

            <div className="animate-fade-up delay-3 mt-6 flex flex-wrap items-center gap-3.5">
              <a
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-full bg-(--color-button-primary) px-6 py-3 text-[13.5px] font-semibold text-white shadow-(--shadow-card) transition-all hover:bg-(--color-button-primary-hover) hover:shadow-(--shadow-hover)"
              >
                Our Story
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-primary/35 bg-white/70 px-6 py-3 text-[13.5px] font-semibold text-primary-dark backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary-light"
              >
                Partner With Us
              </Link>
            </div>

            {/* Sticker stat pills */}
            <div className="animate-fade-up delay-4 mt-7 flex flex-wrap gap-x-3 gap-y-3">
              {["Est. 2011 · Dubai", "7+ Global Brands", "6 Countries Served"].map(
                (text, index) => (
                  <span
                    key={text}
                    className={`${index % 2 === 0 ? "-rotate-1" : "rotate-1"} flex items-center gap-2 rounded-full border border-(--color-border-accent) bg-white/90 px-4 py-2 text-[12px] font-semibold whitespace-nowrap text-foreground shadow-(--shadow-card) backdrop-blur-sm transition-transform duration-300 ease-out hover:rotate-0`}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {text}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Right product visual — compact height, still fills width */}
          <div className="relative z-[1] flex min-h-[360px] items-end justify-center sm:min-h-[420px] lg:min-h-full lg:items-end lg:justify-center">
            <div
              className="pointer-events-none absolute bottom-[4%] left-1/2 h-28 w-[75%] -translate-x-1/2 rounded-[100%] bg-primary/28 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-[18%] left-[10%] h-48 w-48 rounded-full bg-[#ffb3d9]/35 blur-3xl"
              aria-hidden="true"
            />

            <div className="animate-image-reveal relative -mb-2 h-[min(72vw,440px)] w-[min(100%,560px)] sm:h-[min(62vw,480px)] lg:mb-0 lg:h-[500px] lg:w-[112%] lg:max-w-none lg:-translate-x-[6%] xl:h-[520px] xl:w-[118%]">
              <Image
                src="/about/about_hero.png"
                alt="Aesthetic device and professional skincare products from the Lifestyle Aesthetics portfolio"
                fill
                preload
                sizes="(max-width: 1024px) 95vw, 58vw"
                className="object-contain object-bottom drop-shadow-[0_24px_50px_rgba(184,11,105,0.2)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision, Mission & Values */}
      <section className="relative overflow-hidden bg-(--color-background-white) py-16 sm:py-20">
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
                What Drives Us
                <span
                  className="hidden h-px w-14 bg-gradient-to-l from-transparent to-primary/60 sm:block"
                  aria-hidden="true"
                />
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.85rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-foreground">
                Guided by Purpose.{" "}
                <span className="font-medium italic text-primary">
                  Grounded in Values.
                </span>
              </h2>
            </header>
          </Reveal>

          <ul className="mt-11 grid list-none grid-cols-1 gap-5 md:grid-cols-3 sm:mt-12">
            {pillars.map((pillar, index) => (
              <li key={pillar.title}>
                <Reveal delay={index * 110} className="h-full">
                  <article className="group relative h-full rounded-[1.5rem] border border-(--color-border-accent)/60 bg-white p-6 shadow-(--shadow-card) transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-(--shadow-hover) sm:p-7">
                    <span
                      aria-hidden="true"
                      className="font-display absolute top-5 right-6 text-sm font-semibold text-primary/30 transition-colors duration-500 group-hover:text-primary"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute right-6 bottom-5 text-[10px] text-primary/30 transition-colors duration-500 group-hover:text-primary"
                    >
                      ✦
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary ring-1 ring-(--color-border-accent) transition-colors duration-500 group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                      {pillar.icon}
                    </span>

                    <h3 className="mt-5 font-display text-[1.35rem] leading-tight font-semibold text-foreground">
                      {pillar.title}
                    </h3>

                    {pillar.description ? (
                      <p className="mt-3 text-[13.5px] leading-relaxed text-secondary sm:text-[14px]">
                        {pillar.description}
                      </p>
                    ) : (
                      <ul className="mt-3.5 flex list-none flex-wrap gap-2">
                        {pillar.values?.map((val) => (
                          <li key={val}>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-(--color-border-accent)/70 bg-(--color-background-soft) px-3 py-1.5 text-[12px] font-semibold text-foreground transition-colors duration-300 group-hover:border-primary/40">
                              <span
                                className="h-1 w-1 rounded-full bg-primary"
                                aria-hidden="true"
                              />
                              {val}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Our Story + At a Glance */}
      <section
        id="our-story"
        className="relative scroll-mt-8 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff5fa_48%,#ffffff_100%)] py-16 sm:py-20 lg:py-24"
      >
        {/* Ambient glows */}
        <div
          className="pointer-events-none absolute -top-24 left-[6%] h-56 w-72 rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-1/3 h-64 w-80 rounded-full bg-[#ffb3d9]/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
            {/* Left copy */}
            <div>
              <Reveal>
                <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                  Our Story
                  <span
                    className="hidden h-px w-12 bg-primary/40 sm:block"
                    aria-hidden="true"
                  />
                </p>

                <h2 className="mt-4 font-display text-[clamp(2rem,3.8vw,3.1rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-foreground">
                  A Journey of{" "}
                  <span className="block font-medium italic text-primary">
                    Aesthetic Excellence
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={120}>
                {/* Etymology callout */}
                <figure className="mt-7 flex gap-4 rounded-2xl border border-(--color-border-accent)/50 bg-white/80 p-5 shadow-(--shadow-card) backdrop-blur-sm sm:gap-5 sm:p-6">
                  <span
                    className="font-display text-4xl leading-none text-primary"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold italic text-foreground sm:text-xl">
                      aisth&#275;tikos
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-secondary sm:text-[14px]">
                      From the Greek — a perception of beauty by the senses.
                      The philosophy our entire journey is built on.
                    </p>
                  </div>
                </figure>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-secondary sm:text-[15px]">
                  <p>
                    At Lifestyle Aesthetics, we combine science, innovation and
                    a deep understanding of beauty to bring advanced, reliable
                    and results-driven solutions to the aesthetic industry.
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
              </Reveal>
            </div>

            {/* Right: real portfolio mosaic */}
            <Reveal delay={150}>
              <div className="relative mx-auto w-full max-w-[560px] pt-6 lg:max-w-none">
                <div
                  className="grid aspect-[5/4] grid-cols-6 grid-rows-6 gap-2 sm:aspect-[5/4] sm:gap-2.5 lg:aspect-16/11"
                  aria-label="Portfolio of brands and products we distribute"
                >
                  {/* Large device tile */}
                  <Link
                    href="/products/cryo-7"
                    className="group relative col-span-3 row-span-4 overflow-hidden rounded-[1.25rem] bg-[#1a1214] sm:rounded-[1.5rem]"
                  >
                    <Image
                      src="/products/zimmer/cryo-7.webp"
                      alt="Zimmer Cryo 7 aesthetic device"
                      fill
                      sizes="(max-width: 1024px) 50vw, 28vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-3 left-3 text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase sm:bottom-3.5 sm:left-3.5">
                      Zimmer · Devices
                    </span>
                  </Link>

                  {/* Injectable packaging */}
                  <Link
                    href="/products/hyalure-volume-plus"
                    className="group relative col-span-3 row-span-2 overflow-hidden rounded-[1.25rem] bg-[#2a0f3d] sm:rounded-[1.5rem]"
                  >
                    <Image
                      src="/products/hyalure/hyalure-volume-plus.png"
                      alt="Hyalure Volume Plus injectable"
                      fill
                      sizes="(max-width: 1024px) 50vw, 28vw"
                      className="object-contain object-center p-3 transition-transform duration-700 ease-out group-hover:scale-105 sm:p-4"
                    />
                    <span className="absolute top-2.5 left-3 text-[10px] font-semibold tracking-[0.14em] text-white/75 uppercase">
                      Injectables
                    </span>
                  </Link>

                  {/* Brand logo cluster */}
                  <div className="col-span-3 row-span-2 grid grid-cols-3 content-center gap-x-3 gap-y-3 rounded-[1.25rem] border border-(--color-border-accent)/50 bg-white/95 px-3 py-3 shadow-(--shadow-card) backdrop-blur-sm sm:rounded-[1.5rem] sm:px-4 sm:py-3.5">
                    {mosaicLogos.map((logo) => (
                      <div
                        key={logo.name}
                        className="flex items-center justify-center"
                        title={logo.name}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          width={logo.width}
                          height={logo.height}
                          className={`h-3.5 w-auto max-w-full object-contain opacity-70 sm:h-4 ${
                            logo.invert ? "brightness-0" : ""
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Mitelier vial */}
                  <Link
                    href="/products/mitelier-plla"
                    className="group relative col-span-2 row-span-2 overflow-hidden rounded-[1.25rem] bg-[#0c0c0e] sm:rounded-[1.5rem]"
                  >
                    <Image
                      src="/products/mitelier/mitelier.png"
                      alt="Mitelier PLLA dermal filler vial"
                      fill
                      sizes="(max-width: 1024px) 35vw, 18vw"
                      className="object-contain object-center p-3 transition-transform duration-700 ease-out group-hover:scale-105 sm:p-4"
                    />
                    <span className="absolute bottom-2.5 left-2.5 text-[10px] font-semibold tracking-[0.12em] text-white/80 uppercase">
                      Mitelier
                    </span>
                  </Link>

                  {/* Clinical peels / ampoules — crop tightly to product */}
                  <Link
                    href="/products"
                    className="group relative col-span-4 row-span-2 overflow-hidden rounded-[1.25rem] bg-[#1c1416] sm:rounded-[1.5rem]"
                  >
                    <Image
                      src="/brands/janssen/ampoules.jpg"
                      alt="Professional clinical ampoules from our skincare portfolio"
                      fill
                      sizes="(max-width: 1024px) 65vw, 35vw"
                      className="object-cover object-[12%_78%] scale-[1.55] transition-transform duration-700 ease-out group-hover:scale-[1.65]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-3 left-3 text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase sm:bottom-3.5 sm:left-3.5">
                      Clinical Peels
                    </span>
                  </Link>
                </div>

                {/* Rotating circular-text badge */}
                <div
                  className="absolute -top-3 -right-2 h-24 w-24 sm:-right-5 sm:h-28 sm:w-28"
                  aria-hidden="true"
                >
                  <div className="relative h-full w-full rounded-full bg-white shadow-(--shadow-card) ring-1 ring-(--color-border-accent)">
                    <svg
                      viewBox="0 0 100 100"
                      className="animate-spin-slow absolute inset-0 h-full w-full"
                    >
                      <defs>
                        <path
                          id="about-badge-circle"
                          d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                          fill="none"
                        />
                      </defs>
                      <text className="fill-primary text-[9px] font-semibold tracking-[0.22em] uppercase">
                        <textPath href="#about-badge-circle" textLength="224">
                          Devices · Injectables · Peels ·
                        </textPath>
                      </text>
                    </svg>
                    <span className="absolute inset-0 grid place-items-center text-lg text-primary">
                      ✦
                    </span>
                  </div>
                </div>

                {/* Sticker stat pill */}
                <span className="absolute -bottom-4 left-6 flex -rotate-2 items-center gap-2 rounded-full border border-(--color-border-accent) bg-white/90 px-4 py-2 text-[12px] font-semibold whitespace-nowrap text-foreground shadow-(--shadow-card) backdrop-blur-sm sm:left-8">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  8 Global Brands
                </span>
              </div>
            </Reveal>
          </div>

          {/* At a Glance banner */}
          <Reveal delay={100}>
            <div className="mt-16 rounded-[2rem] border border-(--color-border-accent)/45 bg-white/85 px-6 py-8 shadow-(--shadow-card) backdrop-blur-sm sm:mt-20 sm:rounded-[2.5rem] sm:px-10 sm:py-10 lg:px-12">
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)] lg:gap-6">
                <div>
                  <h3 className="font-display text-[clamp(1.65rem,2.6vw,2.2rem)] leading-[1.12] font-semibold text-foreground">
                    Lifestyle Aesthetics
                    <span className="block font-medium italic text-primary">
                      at a Glance
                    </span>
                  </h3>
                </div>

                <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-0">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="group flex flex-col items-start sm:border-l sm:border-(--color-border-accent)/60 sm:px-6 lg:px-7"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary ring-1 ring-(--color-border-accent) transition-colors duration-500 group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                        {stat.icon}
                      </span>
                      <dt className="mt-3 font-display text-[1.35rem] font-bold tracking-tight text-foreground sm:text-[1.5rem]">
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
          </Reveal>
        </div>
      </section>

      {/* 4. Our Presence */}
      <section
        id="presence"
        className="relative overflow-hidden bg-(--color-background-white) pt-14 pb-0 sm:pt-18 lg:pt-20"
      >
        <div
          className="pointer-events-none absolute top-8 left-[4%] h-48 w-64 rounded-full bg-primary/[0.07] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-430">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
            {/* Left copy & locations */}
            <div className="relative z-10 px-6 pb-4 sm:px-10 lg:py-12 xl:pl-16 xl:pr-8">
              <Reveal>
                <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                  Our Presence
                  <span
                    className="hidden h-px w-12 bg-primary/40 sm:block"
                    aria-hidden="true"
                  />
                </p>

                <h2 className="mt-4 font-display text-[clamp(2rem,3.8vw,3.1rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-foreground">
                  Serving the{" "}
                  <span className="block font-medium italic text-primary">
                    Middle East Region
                  </span>
                </h2>

                <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-secondary sm:text-[15px]">
                  A strong regional footprint with a commitment to supporting
                  the growth of the aesthetic industry across key markets.
                </p>
              </Reveal>

              <Reveal delay={140}>
                <ul className="mt-8 flex max-w-lg list-none flex-wrap gap-x-3 gap-y-3.5">
                  {locations.map((loc) => (
                    <li
                      key={loc.country}
                      className={`${loc.tilt} transition-transform duration-300 ease-out hover:rotate-0`}
                    >
                      <span className="flex items-center gap-2 rounded-full border border-(--color-border-accent) bg-white px-4 py-2.5 text-[13px] font-semibold text-foreground shadow-[0_2px_12px_rgba(184,11,105,0.08)] transition-colors duration-300 hover:border-primary/50 hover:bg-primary-light">
                        <span className="text-primary" aria-hidden="true">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2.25a7.25 7.25 0 0 0-7.25 7.25c0 5.05 6.14 11.4 6.4 11.67a1.2 1.2 0 0 0 1.7 0c.26-.27 6.4-6.62 6.4-11.67A7.25 7.25 0 0 0 12 2.25Zm0 9.85a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z" />
                          </svg>
                        </span>
                        {loc.country}
                        <span className="font-normal text-secondary">
                          {loc.city}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right arched Dubai skyline */}
            <Reveal>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="bg-(--color-background-white)">
        <div className="relative overflow-hidden bg-[linear-gradient(115deg,#f472b0_0%,#e83684_38%,#c41262_72%,#9f0d50_100%)] shadow-(--shadow-hover)">
          {/* Soft atmospheric light */}
          <div
            className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/18 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-1/3 right-[28%] h-56 w-56 rounded-full bg-[#ff9ac8]/25 blur-3xl"
            aria-hidden="true"
          />

          {/* Gentle wave texture */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 260C180 210 320 320 480 280C640 240 760 150 920 180C1040 202 1120 250 1200 230V420H0V260Z"
              fill="white"
            />
            <path
              d="M0 310C200 270 340 360 520 330C700 300 820 220 980 250C1080 268 1140 300 1200 290V420H0V310Z"
              fill="white"
              opacity="0.55"
            />
          </svg>

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-7 py-14 text-center sm:px-10 sm:py-16 lg:py-20">
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-white/85 uppercase">
                Let&apos;s Grow Together
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,3.8vw,3.35rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-white">
                Partner With Lifestyle Aesthetics
              </h2>
              <p className="mx-auto mt-4 max-w-[42ch] text-[15px] leading-relaxed text-white/90 sm:text-base">
                Discover how our brands, solutions and support can add value to
                your clinic or business.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-primary-dark shadow-[0_10px_30px_rgba(120,10,60,0.18)] transition-all hover:bg-primary-light hover:shadow-[0_14px_36px_rgba(120,10,60,0.24)]"
              >
                Get in Touch
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
