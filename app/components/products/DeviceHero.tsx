import Image from "next/image";
import Link from "next/link";
import type { CatalogueProduct } from "../../lib/products";

export type DeviceChapter = {
  href: string;
  label: string;
};

const chipPositions = [
  "top-[14%] -left-2 sm:-left-6",
  "right-0 bottom-[22%] sm:-right-4",
  "bottom-[8%] left-[12%]",
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function DeviceHero({
  product,
  chapters,
}: {
  product: CatalogueProduct;
  chapters: DeviceChapter[];
}) {
  const chips = (product.indications ?? []).slice(0, 3);
  const marquee = [
    ...(product.indications ?? []),
    product.brandName,
    product.name,
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff5fa_0%,#fffcfd_78%)] pt-12 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[6%] h-72 w-105 rounded-full bg-primary/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob-drift pointer-events-none absolute top-1/3 -left-28 h-64 w-80 rounded-full bg-[#ffb3d9]/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <nav aria-label="Breadcrumb" className="text-[13px] text-secondary">
          <ol className="flex list-none flex-wrap items-center gap-2">
            <li>
              <Link
                href="/products"
                className="transition-colors hover:text-primary"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/products?brand=${product.brandSlug}#catalogue`}
                className="transition-colors hover:text-primary"
              >
                {product.brandName}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="mt-8 grid items-center gap-14 pb-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10 lg:pb-16">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
              {product.brandName}
              <span aria-hidden="true" className="h-px w-8 bg-primary/40 sm:w-12" />
              Devices
            </p>
            <h1 className="mt-4 font-display text-[clamp(3.4rem,7vw,5.6rem)] leading-[0.92] font-semibold tracking-[-0.035em]">
              <span className="bg-[linear-gradient(115deg,#e90c87_8%,#9f0d50_92%)] bg-clip-text text-transparent italic">
                {product.name}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-secondary sm:text-[17px]">
              {product.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:info@laesthetics.com?subject=${encodeURIComponent(`Enquiry about ${product.name}`)}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-6 py-3 text-[13.5px] font-semibold text-white transition-all hover:bg-(--color-button-primary-hover) hover:shadow-(--shadow-hover)"
              >
                Request information
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={product.brandWebsite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border-accent bg-white/75 px-6 py-3 text-[13.5px] font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary-light"
              >
                {product.brandName} site
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {chapters.length > 0 ? (
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/70 pt-6">
                {chapters.map((chapter, index) => (
                  <a
                    key={chapter.href}
                    href={chapter.href}
                    className="group relative pb-1.5 text-[12.5px] font-semibold tracking-wide text-secondary transition-colors hover:text-foreground"
                  >
                    <span className="mr-1.5 font-display text-[11px] text-primary">
                      {pad(index)}
                    </span>
                    {chapter.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {product.image ? (
            <div className="relative mx-auto w-full max-w-115">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 -bottom-2 h-10 rounded-full bg-primary/20 blur-2xl"
              />
              <div className="rounded-t-[9.5rem] rounded-b-[1.8rem] border border-primary/15 bg-white/75 p-3 shadow-(--shadow-card) backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-[8.6rem] rounded-b-[1.25rem] bg-white">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className={
                      product.image.fit === "contain"
                        ? "object-contain p-8"
                        : product.image.position === "left"
                          ? "object-cover object-left"
                          : "object-cover"
                    }
                  />
                </div>
              </div>

              {chips.map((chip, index) => (
                <span
                  key={chip}
                  className={`absolute z-10 hidden items-center gap-2 rounded-full border border-border-accent bg-white/95 px-4 py-2 text-[12px] font-semibold text-foreground shadow-(--shadow-card) sm:flex ${chipPositions[index]}`}
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-primary"
                  />
                  {chip}
                </span>
              ))}

              <div
                aria-hidden="true"
                className="absolute -top-2 -right-1 z-10 h-24 w-24 sm:-right-3 sm:h-28 sm:w-28"
              >
                <div className="relative h-full w-full rounded-full bg-white shadow-(--shadow-card) ring-1 ring-border-accent">
                  <svg
                    viewBox="0 0 100 100"
                    className="animate-spin-slow absolute inset-0 h-full w-full"
                  >
                    <defs>
                      <path
                        id={`device-badge-${product.slug}`}
                        d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                        fill="none"
                      />
                    </defs>
                    <text
                      fill="#e90c87"
                      className="text-[8px] font-semibold tracking-[0.18em] uppercase"
                    >
                      <textPath href={`#device-badge-${product.slug}`}>
                        {`${product.name} · ${product.brandName} · ${product.name} · `}
                      </textPath>
                    </text>
                  </svg>
                  <span className="absolute inset-0 grid place-items-center text-lg text-primary">
                    ✦
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative border-y border-border/70 bg-white/65 py-3.5 backdrop-blur-sm">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((half) => (
            <div
              key={half}
              aria-hidden={half === 1}
              className="flex items-center gap-8 pr-8"
            >
              {marquee.map((word, index) => (
                <span
                  key={`${half}-${word}-${index}`}
                  className="flex items-center gap-8 text-[13px] font-semibold tracking-[0.16em] whitespace-nowrap uppercase"
                >
                  <span
                    className={
                      index % 2 === 0
                        ? "text-foreground/70"
                        : "text-transparent [-webkit-text-stroke:1px_#e90c87]"
                    }
                  >
                    {word}
                  </span>
                  <span aria-hidden="true" className="text-primary">
                    ✦
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
