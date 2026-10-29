import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "../../components/products/ProductCard";
import { ProductEnquiryCta } from "../../components/products/ProductEnquiryCta";
import { getBrandBySlug, getCategoryLabel } from "../../lib/products";

type BrandDetailProps = {
  params: Promise<{ brand: string }>;
};

export async function BrandDetail({ params }: BrandDetailProps) {
  const { brand: brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);

  if (!brand) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-(--color-background) pt-12 pb-10 sm:pt-14 sm:pb-12">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary-light/70 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <nav aria-label="Breadcrumb" className="text-[13px] text-secondary">
            <ol className="flex list-none flex-wrap items-center gap-2">
              <li>
                <Link href="/products" className="transition-colors hover:text-primary">
                  Products
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground">{brand.name}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                {getCategoryLabel(brand.category)}
              </p>
              <h1 className="mt-3 font-display text-[clamp(2.3rem,4.8vw,3.6rem)] leading-[1.05] font-semibold tracking-[-0.015em] text-foreground">
                {brand.name}
              </h1>
              <p className="mt-3 text-[16px] font-medium text-secondary">
                {brand.tagline}
              </p>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-secondary sm:text-base">
                {brand.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:info@laesthetics.com?subject=${encodeURIComponent(`Enquiry about ${brand.name}`)}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-(--color-button-primary-hover)"
                >
                  Request information
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-border-accent bg-transparent px-5 py-2.5 text-[13.5px] font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary-light"
                >
                  Manufacturer site
                </a>
              </div>
            </div>

            <div
              className="flex min-h-48 items-center justify-center rounded-[1.5rem] border border-border/50 bg-linear-to-br from-primary-light via-(--color-background-soft) to-(--color-background-muted) px-6 shadow-(--shadow-card)"
              aria-hidden="true"
            >
              <span className="font-display text-[2rem] font-semibold tracking-[-0.02em] text-primary/65 sm:text-[2.4rem]">
                {brand.name}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-(--color-background-white) py-14 sm:py-16">
        <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <header className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Why clinics choose {brand.name}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.12] font-semibold tracking-[-0.01em] text-foreground">
              Built for professional adoption
            </h2>
          </header>
          <ul className="mt-8 grid list-none gap-4 sm:grid-cols-3">
            {brand.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-border/60 bg-(--color-background) px-5 py-5 text-[14.5px] leading-relaxed text-secondary"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-(--color-background) py-14 sm:py-16">
        <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <header className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Product range
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.12] font-semibold tracking-[-0.01em] text-foreground">
              {brand.products.length} products in the {brand.name} line
            </h2>
          </header>
          <ul className="mt-10 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {brand.products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-(--color-background-white) py-12">
        <div className="mx-auto flex max-w-430 flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 xl:px-16">
          <p className="max-w-xl text-[15px] leading-relaxed text-secondary">
            Training, installation, maintenance, and after-sales support are
            available through Lifestyle Aesthetics.
          </p>
          <Link
            href="/#training"
            className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            View training & support
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ProductEnquiryCta brandName={brand.name} />
    </>
  );
}
