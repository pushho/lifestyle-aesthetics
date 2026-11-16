import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeviceHero } from "../../components/products/DeviceHero";
import { ProductCard } from "../../components/products/ProductCard";
import { ProductEnquiryCta } from "../../components/products/ProductEnquiryCta";
import { ProductStory } from "../../components/products/ProductStory";
import { getDeviceStory } from "../../lib/device-stories";
import {
  getCategoryLabel,
  getProductBySlug,
  getRelatedProducts,
} from "../../lib/products";

type ProductDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product);
  const story = getDeviceStory(product.slug);

  const chapters = story
    ? story.blocks.map((block, index) => ({
        href: `#device-story-${index}`,
        label: block.eyebrow ?? block.title,
      }))
    : [];

  return (
    <>
      {story ? <DeviceHero product={product} chapters={chapters} /> : null}
      {story ? null : (
      <section className="relative overflow-hidden bg-(--color-background) pt-12 pb-10 sm:pt-14 sm:pb-12">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary-light/70 via-transparent to-transparent"
          aria-hidden="true"
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

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                {getCategoryLabel(product.category)} · {product.brandName}
              </p>
              <h1 className="mt-3 font-display text-[clamp(2.3rem,4.8vw,3.6rem)] leading-[1.05] font-semibold tracking-[-0.015em] text-foreground">
                {product.name}
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-secondary sm:text-base">
                {product.summary}
              </p>

              {product.indications && product.indications.length > 0 ? (
                <ul className="mt-6 flex list-none flex-wrap gap-2">
                  {product.indications.map((indication) => (
                    <li
                      key={indication}
                      className="rounded-full border border-border-accent bg-(--color-background-white) px-3 py-1.5 text-[12px] font-semibold tracking-wide text-primary-dark"
                    >
                      {indication}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:info@laesthetics.com?subject=${encodeURIComponent(`Enquiry about ${product.name}`)}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-(--color-button-primary-hover)"
                >
                  Request information
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={product.brandWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-border-accent bg-transparent px-5 py-2.5 text-[13.5px] font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary-light"
                >
                  {product.brandName} site
                </a>
              </div>
            </div>

            {product.image ? (
              <div className="relative">
                <div
                  className="pointer-events-none absolute inset-8 rounded-full bg-primary/12 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white bg-[radial-gradient(circle_at_50%_38%,#ffffff,#fff1f7_78%)] shadow-(--shadow-card)">
                <div
                  className={
                    product.image.fit === "contain"
                      ? "absolute inset-6"
                      : "absolute inset-0"
                  }
                >
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    priority
                    loading="eager"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className={
                      product.image.fit === "contain"
                        ? "object-contain"
                        : product.image.position === "left"
                          ? "object-cover object-left"
                          : "object-cover"
                    }
                  />
                </div>
                </div>
              </div>
            ) : (
              <div
                className="flex min-h-48 items-center justify-center rounded-[1.5rem] border border-border/50 bg-linear-to-br from-primary-light via-(--color-background-soft) to-(--color-background-muted) px-6 shadow-(--shadow-card)"
                aria-hidden="true"
              >
                <span className="font-display text-[2rem] font-semibold tracking-[-0.02em] text-primary/65 sm:text-[2.4rem]">
                  {product.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
      )}

      {story ? (
        <ProductStory story={story} />
      ) : (
        <section className="bg-(--color-background-white) py-14 sm:py-16">
          <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
            <header className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                From {product.brandName}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.12] font-semibold tracking-[-0.01em] text-foreground">
                {product.brandTagline}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-secondary">
                {product.brandDescription}
              </p>
            </header>
          </div>
        </section>
      )}

      {related.length > 0 ? (
        <section className="bg-(--color-background) py-14 sm:py-16">
          <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
            {related.length === 1 ? (
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
                <header className="max-w-lg">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                    More from {product.brandName}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.45rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-foreground">
                    Explore the rest of the{" "}
                    <span className="font-medium italic text-primary">
                      {product.brandName} line.
                    </span>
                  </h2>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-secondary">
                    {product.brandDescription}
                  </p>
                </header>
                <ul className="list-none">
                  <ProductCard product={related[0]} />
                </ul>
              </div>
            ) : (
              <>
                <header className="max-w-2xl">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                    More from {product.brandName}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.12] font-semibold tracking-[-0.01em] text-foreground">
                    Related products
                  </h2>
                </header>
                <ul
                  className={`mt-10 grid list-none gap-5 sm:grid-cols-2 lg:gap-6 ${
                    related.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
                  }`}
                >
                  {related.map((item) => (
                    <ProductCard key={item.slug} product={item} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      ) : null}

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

      <ProductEnquiryCta productName={product.name} />
    </>
  );
}
