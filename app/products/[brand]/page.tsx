import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BRANDS, getBrandBySlug } from "../../lib/products";
import { BrandDetail } from "./BrandDetail";

type BrandPageProps = {
  params: Promise<{ brand: string }>;
};

export function generateStaticParams() {
  return BRANDS.map((brand) => ({ brand: brand.slug }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { brand: brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);

  if (!brand) {
    return { title: "Brand | Lifestyle Aesthetics" };
  }

  return {
    title: `${brand.name} | Lifestyle Aesthetics`,
    description: brand.description,
  };
}

function BrandFallback() {
  return (
    <div className="mx-auto max-w-430 px-6 py-16 sm:px-10 xl:px-16">
      <div className="h-8 w-48 animate-pulse rounded bg-border/70" />
      <div className="mt-6 h-14 w-72 animate-pulse rounded bg-border/70" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-64 animate-pulse rounded-[1.35rem] border border-border/50 bg-(--color-background-white)"
          />
        ))}
      </div>
    </div>
  );
}

export default function BrandPage({ params }: BrandPageProps) {
  return (
    <div>
      <Header activeHref="/products" />
      <main>
        <Suspense fallback={<BrandFallback />}>
          <BrandDetail params={params} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
