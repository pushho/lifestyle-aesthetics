import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductEnquiryCta } from "../components/products/ProductEnquiryCta";
import { ProductsCatalogue } from "./ProductsCatalogue";

export const metadata: Metadata = {
  title: "Products | Lifestyle Aesthetics",
  description:
    "Explore injectables, clinical peels, and aesthetic devices from Hyalure, Mitelier, Supernova, FineMEC, ShenB, Wontech, and GTG.",
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

function CatalogueFallback() {
  return (
    <div className="mx-auto mt-12 max-w-430 px-6 sm:mt-14 sm:px-10 xl:px-16">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-72 animate-pulse rounded-[1.5rem] border border-border/50 bg-(--color-background-white)"
          />
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <div>
      <Header activeHref="/products" />
      <main>
        <section className="relative overflow-hidden bg-(--color-background) pt-14 pb-16 sm:pt-16 sm:pb-20">
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary-light/70 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-430 px-6 text-center sm:px-10 xl:px-16">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Our Portfolio
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.08] font-semibold tracking-[-0.015em] text-foreground">
              Products for Aesthetic Practices
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-secondary sm:text-base">
              Professional injectables, chemical peels, and energy-based devices
              for clinics, dermatologists, and aesthetic practitioners across
              the Middle East.
            </p>
          </div>

          <Suspense fallback={<CatalogueFallback />}>
            <ProductsCatalogue searchParams={searchParams} />
          </Suspense>
        </section>

        <ProductEnquiryCta />
      </main>
      <Footer />
    </div>
  );
}
