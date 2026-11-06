import Image from "next/image";

const brands = [
  {
    name: "Janssen Cosmetics",
    origin: "Made in Germany · Since 1997",
    tagline: "Pioneer in cosmeceutical system care",
    description:
      "Family-run German cosmeceuticals with 250+ salon and retail products in 80+ countries. TÜV-certified system care, developed with dermatologists and research laboratories.",
    website: "https://www.janssen-cosmetics.com/en/company/about-us/",
    logo: {
      src: "/brands/janssen/logo.png",
      alt: "Janssen Cosmetics logo",
      width: 1000,
      height: 216,
    },
    image: {
      src: "/brands/janssen/system-care.jpg",
      alt: "Janssen Cosmetics system care made in Germany",
      width: 1080,
      height: 600,
    },
    insetImage: {
      src: "/brands/janssen/ampoules.jpg",
      alt: "Janssen Cosmetics professional ampoule skincare products",
      width: 1600,
      height: 1000,
    },
    linesLabel: "Product Lines",
    lines: [
      "All Skin Needs",
      "Ampoules",
      "Body",
      "Combination Skin",
      "Demanding Skin",
      "Dry Skin",
      "Essentials",
      "Exfoliation System",
      "Fair Skin",
      "Limited Editions",
      "Longevity Care",
      "Make Up",
      "Mature Skin",
      "Men",
      "Oily Skin",
      "Sensitive Skin",
      "Facial Cream Masks",
      "Massage Fleece",
      "Masks",
      "Peeling Masks",
      "Seasonal Treatments",
    ],
  },
  {
    name: "Inspira Cosmetics",
    origin: "Made in Germany · Since 2000",
    tagline: "German beauty engineering for professional skin",
    description:
      "Aachen-based luxury skincare for studios, spas, medical spas, and dermatology practices. Natural and biotechnological actives - maximum effect, as natural as possible.",
    website: "https://www.inspira-cosmetics.com/en/service-support/about_us",
    logo: {
      src: "/brands/inspira/logo.svg",
      alt: "inspira: cosmetics logo",
      width: 500,
      height: 55,
    },
    image: {
      src: "/brands/inspira/hero-exosome.jpg",
      alt: "Inspira Cosmetics Exosome Cell Booster professional skincare",
      width: 1400,
      height: 394,
    },
    insetImage: {
      src: "/brands/inspira/hero-ampoules.jpg",
      alt: "Inspira Cosmetics Skin Accents ampoule treatments",
      width: 1600,
      height: 450,
    },
    linesLabel: "Specialties",
    lines: [
      "Ampoules",
      "Serums",
      "Peel-off Masks",
      "Professional Cabin Treatments",
      "Pre- & Post-Treatment Care",
      "Dermabrasion Support",
      "Laser Therapy Support",
      "IPL Treatment Support",
      "Aesthetic Surgery Aftercare",
    ],
  },
] as const;

export function FeaturedBrands() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-(--color-background-white) py-14 sm:py-16 lg:py-14"
    >
      <div
        className="pointer-events-none absolute top-8 left-1/2 h-52 w-[min(80vw,520px)] -translate-x-1/2 rounded-full bg-primary/7 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <header className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-8">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Featured Brands
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(1.7rem,3vw,2.45rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-foreground">
              Professional Skincare{" "}
              <span className="text-primary">from Germany</span>
            </h2>
          </div>
          <p className="max-w-md text-[13.5px] leading-relaxed text-secondary sm:pb-1 sm:text-right sm:text-[14px]">
            Two German cosmeceutical houses we distribute for professional
            buyers across the region.
          </p>
        </header>

        <ul className="mt-8 grid list-none gap-4 lg:mt-9 lg:gap-5">
          {brands.map((brand, index) => {
            const reversed = index % 2 === 1;

            return (
              <li
                key={brand.name}
                className="overflow-hidden rounded-[1.35rem] border border-border/60 bg-(--color-background) shadow-(--shadow-card)"
              >
                <article
                  className={`grid items-stretch ${
                    reversed
                      ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
                      : "lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
                  }`}
                >
                  <div
                    className={`relative min-h-[210px] overflow-hidden sm:min-h-[240px] lg:min-h-[280px] ${
                      reversed ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={brand.image.src}
                      alt={brand.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 46vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-black/10"
                      aria-hidden="true"
                    />
                    <div className="absolute right-4 bottom-4 overflow-hidden rounded-xl border border-white/70 shadow-(--shadow-card) sm:right-5 sm:bottom-5">
                      <Image
                        src={brand.insetImage.src}
                        alt={brand.insetImage.alt}
                        width={brand.insetImage.width}
                        height={brand.insetImage.height}
                        className="h-16 w-28 object-cover sm:h-[4.5rem] sm:w-32"
                        sizes="128px"
                      />
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-center px-5 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-7 ${
                      reversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                      <div className="flex h-8 items-center">
                        <Image
                          src={brand.logo.src}
                          alt={brand.logo.alt}
                          width={brand.logo.width}
                          height={brand.logo.height}
                          className="h-6 w-auto max-w-[150px] object-contain sm:h-7 sm:max-w-[168px]"
                        />
                      </div>
                      <p className="text-[10px] font-semibold tracking-[0.16em] text-primary uppercase">
                        {brand.origin}
                      </p>
                    </div>

                    <h3 className="mt-3.5 font-display text-[1.45rem] leading-[1.12] font-semibold tracking-[-0.01em] text-foreground sm:text-[1.6rem]">
                      {brand.name}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium text-foreground/75">
                      {brand.tagline}
                    </p>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-secondary">
                      {brand.description}
                    </p>

                    <div className="mt-4">
                      <p className="text-[10px] font-semibold tracking-[0.16em] text-secondary uppercase">
                        {brand.linesLabel}
                      </p>
                      <ul className="mt-2 flex list-none flex-wrap gap-1.5">
                        {brand.lines.map((line) => (
                          <li
                            key={line}
                            className="rounded-full border border-border/80 bg-(--color-background-white) px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-primary transition-colors hover:text-primary-hover"
                    >
                      Visit brand website
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
