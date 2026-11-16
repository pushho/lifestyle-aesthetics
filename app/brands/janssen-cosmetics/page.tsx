import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Janssen Cosmetics | Lifestyle Aesthetics",
  description:
    "German cosmeceutical system care from Janssen Cosmetics. Ampoules, peel-off masks, collagen masks, Platinum Care, and skin-type lines for professional clinics.",
};

const stats = [
  { value: "1990", label: "House founded" },
  { value: "85", label: "Countries" },
  { value: "115", label: "Retail products" },
  { value: "135", label: "Cabin products" },
];

const chapters = [
  {
    year: "1990",
    title: "A system, not a single cream",
    body: "Walther Janssen and his wife Elka set out to combine several high-dose actives and prove a change in the skin profile.",
  },
  {
    year: "Fair Skin",
    title: "First shown on a folding table",
    body: "The opening range, then called White Secrets, travelled to Asia and became the cosmeceutical line clinics still know as Fair Skin.",
  },
  {
    year: "Today",
    title: "A protocol for each skin",
    body: "Beauticians match a series to the skin in front of them. The house now supplies partners on almost every continent.",
  },
];

const collections = [
  {
    id: "ampoules",
    kicker: "Cabin and home",
    title: "Ampoules",
    body: "Concentrated fluids worn under daily care or opened in a facial. A single active, or a complex, reaches the skin in minutes and outpaces cream on its own.",
    points: ["High-dose actives and complexes", "Immediate nourishing or repair effect", "First aid between full treatments"],
    image: "/brands/janssen/ampoules.webp",
    alt: "Janssen Cosmetics ampoules including Caviar Extract, Hyaluron Fluid, and Melafadin Fluid",
    position: "center 40%",
  },
  {
    id: "powder-masks",
    kicker: "Treatment room",
    title: "Powder Masks",
    body: "Peel-off masks mixed with Ocean Mineral Activator and laid over the face, neck, décolleté, and hands. As the film sets, it holds moisture in and lets actives through.",
    points: ["Second-skin occlusive film", "Pairs with ampoules in the same facial", "Built for the beauty salon"],
    image: "/brands/janssen/powder.webp",
    alt: "Janssen Cosmetics peel-off powder mask sachets",
    position: "center 28%",
    scale: "scale-[1.45]",
  },
  {
    id: "collagen-masks",
    kicker: "Dermafleece",
    title: "Collagen Masks",
    body: "A biomatrix of native, soluble collagen fibres. It puts moisture back and firms tissue, with no chemical crosslinkers, preservatives, or perfume oils.",
    points: ["High-purity bovine collagen", "Comfortable on hypersensitive skin", "Fresher, more supple finish"],
    image: "/brands/janssen/collagen.webp",
    alt: "Janssen Cosmetics collagen sheet masks in pastel sachets",
    position: "center 28%",
    scale: "scale-[1.45]",
  },
  {
    id: "platinum-care",
    kicker: "Anti-age ritual",
    title: "Platinum Care",
    body: "The top of the ladder. Platinum-MP-Complex pairs rare platinum with biotech and botanical actives for a surface that looks smoother at once, and tissue work that continues after.",
    points: ["Double anti-age effect", "Luxury texture and fragrance", "Cabin pampering with a visible result"],
    image: "/brands/janssen/platinum.webp",
    alt: "Janssen Cosmetics Platinum Care silver jars and serums",
    position: "center 42%",
    tone: "dark" as const,
  },
  {
    id: "mature-skin",
    kicker: "Age management",
    title: "Mature Skin",
    body: "One line for wrinkles, dullness, slackness, and pigment. Natural actives meet newer delivery, and small marks are softened while the skin renews.",
    points: ["Firmness, tone, and pigment together", "Youthful, more even complexion", "Full facial textures"],
    image: "/brands/janssen/mature-skin.webp",
    alt: "Janssen Cosmetics Mature Skin creams and gold-capped serums",
    position: "center 42%",
  },
  {
    id: "fair-skin",
    kicker: "Pigment",
    title: "Fair Skin",
    body: "Developed to slow melanin formation. Used as a combined system, it brightens the complexion and lets pigment spots fade.",
    points: ["The original White Secrets line", "Even tone, not a single spot cream", "Fresher, more vital look"],
    image: "/brands/janssen/fair-skin.webp",
    alt: "Janssen Cosmetics Fair Skin brightening care with Melafadin",
    position: "center 36%",
  },
  {
    id: "oily-skin",
    kicker: "Blemish-prone",
    title: "Oily Skin",
    body: "Congestion, enlarged pores, and breakouts fed by sebum, follicular buildup, and bacteria. The series calms oil and treats blemishes locally, before acne takes hold.",
    points: ["Normalises an oily, moist condition", "Clarifying gels, tonics, and masks", "Care that belongs early in the story"],
    image: "/brands/janssen/oily-skin.webp",
    alt: "Janssen Cosmetics Oily Skin purifying cleansers and gels",
    position: "center 34%",
  },
  {
    id: "demanding-skin",
    kicker: "Barrier",
    title: "Demanding Skin",
    body: "Dry air, heat, and cold ask more of the barrier. Each product balances lipids and water so actives can refill moisture stores and the skin stays supple.",
    points: ["Protection against climate stress", "Deeper moisture, steadier barrier", "Rosier, more vital skin"],
    image: "/brands/janssen/demanding.webp",
    alt: "Janssen Cosmetics Demanding Skin creams, cleanser, and Vitaforce serum",
    position: "center 32%",
  },
];

const ranges = [
  "All Skin Needs",
  "Ampoules",
  "Body",
  "Combination Skin",
  "Demanding Skin",
  "Dry Skin",
  "Essentials",
  "Exfoliation",
  "Fair Skin",
  "Longevity Care",
  "Make Up",
  "Mature Skin",
  "Men",
  "Oily Skin",
  "Sensitive Skin",
  "Cream Masks",
  "Massage Fleece",
  "Masks",
  "Peeling Masks",
  "Seasonal",
];

const ritual = [
  { step: "01", title: "Read the skin", body: "Choose the series that matches type: fair, oily, mature, demanding, or sensitive." },
  { step: "02", title: "Open with ampoules", body: "A concentrated fluid goes on first, under the cream or inside the facial." },
  { step: "03", title: "Seal with a mask", body: "Peel-off or collagen holds moisture and drives the actives in while it sets." },
  { step: "04", title: "Send the line home", body: "The same system continues between visits with the matching retail products." },
];

export default function JanssenCosmeticsPage() {
  return (
    <main className="bg-(--color-background)">
      <section className="bg-[#1c191d] text-white">
        <div className="mx-auto grid max-w-430 items-stretch gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10 lg:py-16 xl:px-16">
          <div className="flex flex-col justify-between gap-9">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex rounded-lg bg-white px-2.5 py-1.5">
                  <Image
                    src="/brands/logos/janssen_logo.svg"
                    alt="Janssen Cosmetics"
                    width={359}
                    height={83}
                    priority
                    className="h-7 w-auto sm:h-8"
                  />
                </span>
                <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 uppercase">
                  Made in Germany
                </p>
              </div>

              <p className="mt-9 text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                Professional system care
              </p>
              <h1 className="mt-3.5 max-w-[14ch] font-display text-[clamp(2.35rem,4.4vw,3.7rem)] leading-[0.96] font-semibold tracking-[-0.03em]">
                Care matched to the skin in the chair.
              </h1>
              <p className="mt-5 max-w-[48ch] text-[14.5px] leading-relaxed text-white/72">
                Janssen Cosmetics builds cosmeceuticals around skin type.
                Highly concentrated actives, cabin masks, and retail lines that
                continue the same protocol at home. Distributed by Lifestyle
                Aesthetics for clinics across the region.
              </p>
            </div>

            <div>
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/6 px-4 py-3.5"
                  >
                    <dt className="font-display text-[1.35rem] leading-none font-semibold tracking-[-0.03em] text-white">
                      {stat.value}
                    </dt>
                    <dd className="mt-1.5 text-[11px] leading-tight text-white/55">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Request the range
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="https://www.janssen-cosmetics.com/en/company/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:border-white/40"
                >
                  Brand site
                </a>
              </div>
            </div>
          </div>

          <div className="grid min-h-[340px] grid-cols-2 grid-rows-2 gap-4 sm:min-h-[440px] lg:min-h-0">
            {[
              {
                src: "/brands/janssen/ampoules.webp",
                alt: "Janssen ampoule treatments",
                position: "center 36%",
              },
              {
                src: "/brands/janssen/platinum.webp",
                alt: "Platinum Care collection",
                position: "center 40%",
              },
              {
                src: "/brands/janssen/mature-skin.webp",
                alt: "Mature Skin collection",
                position: "center 40%",
              },
              {
                src: "/brands/janssen/fair-skin.webp",
                alt: "Fair Skin collection",
                position: "center 36%",
              },
            ].map((shot) => (
              <div
                key={shot.src}
                className="relative overflow-hidden rounded-2xl bg-[#f3f1f2]"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 1024px) 46vw, 24vw"
                  className="scale-[1.12] object-cover"
                  style={{ objectPosition: shot.position }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav
        aria-label="Janssen ranges"
        className="sticky top-18 z-40 border-b border-border/80 bg-(--color-background-white)/92 backdrop-blur-md"
      >
        <ul className="mx-auto flex max-w-430 list-none gap-2.5 overflow-x-auto px-6 py-4 sm:px-10 xl:px-16">
          {collections.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className="inline-flex rounded-full border border-border bg-(--color-background) px-4 py-2.5 text-[12px] font-semibold text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="border-b border-border/70 bg-(--color-background-soft)">
        <div className="mx-auto grid max-w-430 gap-5 px-6 py-12 sm:px-10 lg:grid-cols-3 lg:py-14 xl:px-16">
          {chapters.map((chapter) => (
            <article
              key={chapter.year}
              className="rounded-2xl border border-border/70 bg-(--color-background-white) px-6 py-6"
            >
              <p className="text-[10px] font-semibold tracking-[0.16em] text-primary uppercase">
                {chapter.year}
              </p>
              <h2 className="mt-2.5 font-display text-[1.05rem] leading-tight font-semibold tracking-[-0.02em]">
                {chapter.title}
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-secondary">
                {chapter.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="collections" className="scroll-mt-28">
        <div className="mx-auto max-w-430 px-6 py-14 sm:px-10 lg:py-16 xl:px-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                The ranges
              </p>
              <h2 className="mt-2.5 font-display text-[clamp(1.6rem,2.6vw,2.15rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
                Eight lines clinics actually use
              </h2>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-secondary sm:text-right">
              115 retail products and 135 professional products, grouped so a
              facial and the homecare match.
            </p>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {collections.map((item) => {
              const dark = item.tone === "dark";
              return (
                <article
                  id={item.id}
                  key={item.id}
                  className={`scroll-mt-28 grid overflow-hidden rounded-2xl border shadow-(--shadow-card) sm:grid-cols-2 ${
                    dark
                      ? "border-white/10 bg-[#241f24] text-white"
                      : "border-border/70 bg-(--color-background-white)"
                  }`}
                >
                  <div
                    className={`relative h-56 overflow-hidden sm:h-full sm:min-h-64 ${
                      dark ? "bg-[#2c272c]" : "bg-[#f4f2f3]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 24vw"
                      className={`${item.scale ?? "scale-[1.12]"} object-cover`}
                      style={{ objectPosition: item.position }}
                    />
                  </div>
                  <div className="px-6 py-6 sm:px-7 sm:py-7">
                    <p className="text-[10px] font-semibold tracking-[0.16em] text-primary uppercase">
                      {item.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-[1.35rem] leading-none font-semibold tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3.5 text-[13px] leading-relaxed ${
                        dark ? "text-white/72" : "text-secondary"
                      }`}
                    >
                      {item.body}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className={`flex items-start gap-2.5 text-[12.5px] leading-snug ${
                            dark ? "text-white/85" : "text-foreground/85"
                          }`}
                        >
                          <span
                            className="mt-[0.4rem] size-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-(--color-background-white)">
        <div className="mx-auto grid max-w-430 gap-6 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-16 xl:px-16">
          <div className="rounded-2xl bg-[#1c191d] p-6 text-white sm:p-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
              In the treatment room
            </p>
            <h2 className="mt-2.5 font-display text-[1.55rem] leading-[1.05] font-semibold tracking-[-0.02em]">
              One facial, then the same line at home.
            </h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {ritual.map((item) => (
                <li
                  key={item.step}
                  className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
                >
                  <span className="font-display text-[13px] font-semibold text-primary">
                    {item.step}
                  </span>
                  <span>
                    <span className="block text-[13.5px] font-semibold">
                      {item.title}
                    </span>
                    <span className="mt-1.5 block text-[12.5px] leading-snug text-white/65">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-border/80 bg-(--color-background) p-6 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                  Full portfolio
                </p>
                <h2 className="mt-2.5 font-display text-[1.55rem] leading-[1.05] font-semibold tracking-[-0.02em]">
                  Every series in the house
                </h2>
              </div>
              <p className="hidden max-w-[18ch] text-right text-[12px] leading-snug text-secondary sm:block">
                Skin-type care, masks, body, men, and seasonal edits.
              </p>
            </div>
            <ul className="mt-6 grid list-none grid-cols-2 gap-2.5 sm:grid-cols-4">
              {ranges.map((range) => (
                <li
                  key={range}
                  className="rounded-lg border border-border/80 bg-(--color-background-white) px-3.5 py-3 text-[12.5px] font-medium text-foreground/85"
                >
                  {range}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-(--color-background-white) px-6 pb-14 sm:px-10 lg:pb-16 xl:px-16">
        <div className="mx-auto grid max-w-430 overflow-hidden rounded-2xl bg-[linear-gradient(115deg,#f472b0_0%,#e83684_42%,#c41262_100%)] text-white lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="px-7 py-9 sm:px-9 sm:py-10">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-white/80 uppercase">
              Stock Janssen Cosmetics
            </p>
            <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(1.7rem,2.8vw,2.3rem)] leading-[1.02] font-semibold tracking-[-0.02em]">
              Bring German system care into the clinic.
            </h2>
            <p className="mt-4 max-w-[46ch] text-[13.5px] leading-relaxed text-white/90">
              Lifestyle Aesthetics supplies the range with catalogue access,
              pricing, and training for professional buyers in the UAE and
              across the Gulf.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-primary-dark transition-colors hover:bg-primary-light"
            >
              Talk to the team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="grid list-none gap-3 border-t border-white/20 p-6 sm:grid-cols-3 sm:p-7 lg:grid-cols-1 lg:border-t-0 lg:border-l">
            {[
              ["Catalogue", "Retail and cabin lines, matched by skin type."],
              ["Training", "How to run the facial and the homecare together."],
              ["Region", "Dubai distribution for clinics across the Gulf."],
            ].map(([title, body]) => (
              <li
                key={title}
                className="rounded-xl bg-white/12 px-4 py-3.5"
              >
                <p className="text-[13px] font-semibold">{title}</p>
                <p className="mt-1.5 text-[12.5px] leading-snug text-white/85">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
