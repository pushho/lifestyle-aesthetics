import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { ProductEnquiryCta } from "../components/products/ProductEnquiryCta";
import { ProductsCatalogue } from "./ProductsCatalogue";

export const metadata: Metadata = {
  title: "Products | Lifestyle Aesthetics",
  description:
    "Explore injectables, clinical peels, and aesthetic devices from Hyalure, Mitelier, Supernova, FineMEC, ShenB, Wontech, GTG, and Zimmer Aesthetics.",
};

type ProductsPageProps = {
  searchParams: Promise<{ brand?: string | string[]; q?: string | string[] }>;
};

function CatalogueFallback() {
  return (
    <div className="mt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-28 animate-pulse rounded-full bg-border/60"
            />
          ))}
        </div>
        <div className="h-10 w-full animate-pulse rounded-full bg-border/60 sm:w-72 lg:w-80" />
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-88 animate-pulse rounded-2xl border border-border/50 bg-(--color-background-white)"
          />
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <main>
      {/* Split Hero Banner */}
      <section className="relative overflow-hidden border-b border-border bg-(--color-background)">
        <div className="mx-auto grid max-w-430 lg:min-h-[420px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:py-14 xl:px-16">
            <div className="flex items-center gap-3.5">
              <span className="text-[11px] font-semibold tracking-[0.22em] text-primary-dark uppercase">
                Our Product Portfolio
              </span>
              <span
                className="h-px w-12 bg-primary-dark/35"
                aria-hidden="true"
              />
            </div>

            <h1 className="mt-4 font-display text-[clamp(2.45rem,4.6vw,3.85rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground">
              Technology <br />
              meets{" "}
              <em className="font-semibold text-primary-dark italic">
                artistry.
              </em>
            </h1>

            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-secondary sm:text-[15px]">
              A curated portfolio of professional injectables, chemical peels,
              and energy-based devices for modern aesthetic practices across
              the Middle East.
            </p>

            <div className="mt-7">
              <a
                href="#catalogue"
                className="inline-flex items-center gap-2 rounded-full border border-primary-dark/45 bg-(--color-background-white)/80 px-5 py-2.5 text-[13px] font-semibold text-primary-dark backdrop-blur-xs transition-all hover:border-primary-dark hover:bg-(--color-button-primary) hover:text-white"
              >
                Explore products
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right visual composition */}
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-full">
            <Image
              src="/spa-treatment-room.webp"
              alt="Modern aesthetic treatment clinic room"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
            {/* Soft left fade to blend seamlessly into the copy column */}
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-background-soft) via-[--color-background-soft]/25 to-transparent lg:bg-linear-to-r lg:from-(--color-background) lg:via-[--color-background-soft] lg:to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section
        id="catalogue"
        className="scroll-mt-6 bg-(--color-background) pt-14 pb-20 sm:pt-16 sm:pb-24"
      >
        <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <header className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] font-semibold tracking-[-0.015em] text-foreground">
                Discover our{" "}
                <em className="font-semibold text-primary-dark italic">
                  products
                </em>
              </h2>
              <span
                className="hidden h-px w-14 bg-primary-dark/35 sm:inline-block"
                aria-hidden="true"
              />
            </div>
            <p className="mt-3 text-[14.5px] leading-relaxed text-secondary sm:text-[15px]">
              World-class aesthetic solutions from leading global
              manufacturers, including advanced injectables, clinical peels,
              and energy-based devices for comprehensive treatment offerings.
            </p>
          </header>

          <Suspense fallback={<CatalogueFallback />}>
            <ProductsCatalogue searchParams={searchParams} />
          </Suspense>
        </div>
      </section>

      <ProductEnquiryCta />
    </main>
  );
}
