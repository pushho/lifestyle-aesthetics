import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllProducts, getProductBySlug } from "../../lib/products";
import { ProductDetail } from "./ProductDetail";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product | Lifestyle Aesthetics" };
  }

  return {
    title: `${product.name} | Lifestyle Aesthetics`,
    description: product.summary,
  };
}

function ProductFallback() {
  return (
    <div className="mx-auto max-w-430 px-6 py-16 sm:px-10 xl:px-16">
      <div className="h-8 w-48 animate-pulse rounded bg-border/70" />
      <div className="mt-6 h-14 w-72 animate-pulse rounded bg-border/70" />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="h-40 animate-pulse rounded-2xl bg-border/50" />
        <div className="aspect-[4/3] animate-pulse rounded-[1.5rem] bg-border/50" />
      </div>
    </div>
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main>
      <Suspense fallback={<ProductFallback />}>
        <ProductDetail params={params} />
      </Suspense>
    </main>
  );
}
