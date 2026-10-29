import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    category: "Injectables",
    title: "Fillers and Biostimulators.",
    description:
      "Hyalure HA and CMC injectables, plus Mitelier PLLA for collagen-focused volume support.",
    href: "/products?category=injectables",
    image: {
      src: "/assets/skincare-portrait.webp",
      alt: "Serene beauty portrait highlighting natural glowing skin",
      width: 1130,
      height: 1392,
      className:
        "absolute right-0 bottom-0 h-[78%] w-auto max-w-none object-contain object-bottom",
    },
  },
  {
    category: "Clinical Peels",
    title: "Professional Peel Protocols.",
    description:
      "Supernova Nebula ACTO2 biphasic TCA peels for acne, pigment, and clinical renewal.",
    href: "/products?category=peels",
    image: {
      src: "/assets/skincare-collection.webp",
      alt: "Polished pink glass skincare bottles on a soft gradient",
      width: 1254,
      height: 1254,
      className:
        "absolute right-0 bottom-0 h-[72%] w-auto max-w-none object-contain object-bottom",
    },
  },
  {
    category: "Devices",
    title: "Lasers, RF, and Clinic Systems.",
    description:
      "FineMEC, ShenB, Wontech, and GTG platforms for laser, RF, plasma, and facial care.",
    href: "/products?category=devices",
    image: {
      src: "/assets/treatment-machine.webp",
      alt: "Modern white aesthetic treatment device with applicator",
      width: 1024,
      height: 1536,
      className:
        "absolute right-0 bottom-0 h-[82%] w-auto max-w-none object-contain object-bottom",
    },
  },
] as const;

export function OurSolutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-(--color-background) py-20 sm:py-24 lg:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-primary-light/40 to-primary-light/70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-24 left-1/2 h-64 w-[min(90vw,720px)] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            Our Solutions
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.5rem,4.2vw,2.25rem)] 2xl:text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.12] font-semibold tracking-[-0.01em] text-foreground">
            A Comprehensive Portfolio for Aesthetic Success
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-relaxed text-secondary sm:text-base">
            Seven brands across injectable aesthetics, clinical peels, and{" "}
            <span className="font-semibold text-foreground">
              aesthetic technology
            </span>
            , supplied for clinics, dermatologists, and aesthetic practitioners.
          </p>
        </header>

        <ul className="mt-12 grid list-none grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {solutions.map((solution) => (
            <li key={solution.category}>
              <Link
                href={solution.href}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-border/50 bg-(--color-background-white) p-7 shadow-(--shadow-card) transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-(--shadow-hover) sm:p-8"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-br from-transparent via-transparent to-primary-light/80"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 translate-x-8 translate-y-10 rounded-full bg-primary/15 blur-3xl sm:h-56 sm:w-56"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex max-w-[58%] flex-col">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                    {solution.category}
                  </p>
                  <h3 className="mt-4 font-display text-[1.55rem] leading-[1.15] font-semibold tracking-[-0.01em] text-foreground sm:text-[1.55rem] 2xl:text-[1.7rem]">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-secondary">
                    {solution.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-primary transition-colors group-hover:text-primary-hover">
                    Explore {solution.category}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>

                <Image
                  src={solution.image.src}
                  alt={solution.image.alt}
                  width={solution.image.width}
                  height={solution.image.height}
                  className={solution.image.className}
                  sizes="(max-width: 768px) 70vw, 28vw"
                />

                <span
                  className="absolute right-5 bottom-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-(--color-background-white) text-foreground shadow-(--shadow-card) transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
