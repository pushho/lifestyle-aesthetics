import Image from "next/image";

const stats = [
  { value: "7", label: "Global Brands" },
  { value: "6", label: "Countries" },
  { value: "2011", label: "Founded in Dubai" },
  { value: "3", label: "Solution Areas" },
];

const brands = [
  "Neauvia",
  "Janssen Cosmetics",
  "LC Cell",
  "Nithya",
  "FineMEC",
  "ShenB",
  "Enerjet",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-(--color-background)">
      {/* bg linear gradient to transparent */}
      <div className="absolute inset-0 bg-linear-to-t from-(--color-primary-light) via-color-primary-light/85 to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        {/* Copy — stays above the absolute portrait */}
        <div className="relative z-10 flex flex-col max-w-430 justify-center px-6 pb-12 pt-10 sm:px-10 lg:pb-8 lg:pt-6 xl:pl-16 xl:pr-6">
          <p className="animate-fade-up text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            Dubai · Medical Aesthetics
          </p>

          <h1 className="animate-fade-up delay-1 mt-4 max-w-[20ch] font-display text-[clamp(2.2rem,4.8vw,3.5rem)] 2xl:text-[clamp(2.6rem,5.8vw,5rem)] leading-[1.08] font-semibold tracking-[-0.01em] text-foreground">
            Trusted Solutions for{" "}
            <em className="font-semibold text-primary not-italic sm:italic">
              Aesthetic Practices
            </em>
          </h1>

          <p className="animate-fade-up delay-2 mt-5 max-w-xl 2xl:max-w-3xl text-[15px] leading-relaxed font-medium text-secondary sm:text-[16px]">
            From Dubai, we connect international aesthetic manufacturers with
            clinics, dermatologists, and healthcare businesses across the
            Middle East.
          </p>

          <div className="animate-fade-up delay-3 mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#brands"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-button-primary)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-button-primary-hover)] hover:shadow-[var(--shadow-hover)]"
            >
              Explore Our Brands
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-xl border border-border-accent bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary-light"
            >
              Our Story
            </a>
          </div>

          <dl className="animate-fade-up delay-4 mt-10 grid grid-cols-2 gap-y-5 sm:flex sm:flex-wrap sm:items-stretch">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex min-w-[132px] flex-col gap-0.5 sm:px-5 ${
                  index === 0 ? "sm:pl-0" : "sm:border-l sm:border-border"
                }`}
              >
                <dt className="text-[2.25rem] text-primary font-semibold tracking-tight sm:text-[2.05rem]">
                  {stat.value}
                </dt>
                <dd className="2xl:text-[15px] text-[13px] font-medium leading-snug text-secondary">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Layout spacer — keeps grid balance; portrait is absolute over the hero */}
        <div
          className="pointer-events-none min-h-[min(58vw,420px)] lg:min-h-full"
          aria-hidden="true"
        />

        {/* Portrait: absolute entity — oversized vs. the grid so silk can bleed over copy */}
        <div className="animate-image-reveal pointer-events-none absolute inset-y-[2%] right-0 z-[1] flex w-[min(96vw,620px)] items-center justify-end sm:w-[min(82vw,720px)] lg:w-[62%] xl:w-[58%]">
          <Image
            src="/glamorous-portrait.webp"
            alt="Portrait of a woman with glowing skin draped in flowing pink silk"
            width={1313}
            height={1198}
            priority
            sizes="(max-width: 1024px) 95vw, 62vw"
            className="h-full w-auto max-w-none origin-right object-contain translate-x-[8%] lg:translate-x-[2%]"
          />
        </div>

        <p
          className="animate-fade-in delay-5 absolute top-[64%] right-4 z-[2] hidden origin-center text-[11px] tracking-[0.35em] text-secondary uppercase xl:right-26 xl:block"
          aria-hidden="true"
        >
          Science <br /> People <br /> Aesthetics <br /> Together
        </p>
      </div>

      {/* Brand strip */}
      <div
        id="brands"
        className="relative z-10 animate-fade-up delay-5 border-t border-border bg-[var(--color-background-white)]"
      >
        <ul className="mx-auto flex max-w-[1440px] list-none flex-wrap items-center justify-between gap-x-2 gap-y-3 px-6 py-5 sm:px-10 xl:px-16">
          {brands.map((brand) => (
            <li
              key={brand}
              className="flex flex-1 items-center justify-center border-border px-3 py-1 sm:border-l sm:first:border-l-0"
            >
              <span className="whitespace-nowrap text-[11px] font-semibold tracking-[0.18em] text-muted uppercase opacity-70 transition-opacity hover:opacity-100 sm:text-[12px]">
                {brand}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
