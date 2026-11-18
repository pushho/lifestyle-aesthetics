"use client";

import { useSearchParams } from "next/navigation";
import { BrandFilter } from "../components/products/BrandFilter";
import { ProductCard } from "../components/products/ProductCard";
import { ProductSearch } from "../components/products/ProductSearch";
import { getProductsByBrand, isBrandSlug } from "../lib/products";

export function ProductsCatalogue() {
  const searchParams = useSearchParams();
  const rawBrand = searchParams.get("brand") ?? undefined;
  const query = searchParams.get("q")?.trim() ?? "";

  const activeBrand =
    rawBrand && isBrandSlug(rawBrand) ? rawBrand : "all";

  const brandProducts = getProductsByBrand(activeBrand);
  const normalizedQuery = query.toLowerCase();
  const products = normalizedQuery
    ? brandProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(normalizedQuery) ||
          product.brandName.toLowerCase().includes(normalizedQuery) ||
          product.summary.toLowerCase().includes(normalizedQuery) ||
          product.indications?.some((indication) =>
            indication.toLowerCase().includes(normalizedQuery),
          ),
      )
    : brandProducts;

  return (
    <div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <BrandFilter active={activeBrand} query={query} />
        <ProductSearch initialQuery={query} />
      </div>

      <div className="mt-9 sm:mt-10">
        {products.length > 0 ? (
          <ul className="grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl border border-border bg-(--color-background-white) px-6 py-14 text-center">
            <p className="font-display text-[1.4rem] font-semibold text-foreground">
              No matching products found
            </p>
            <p className="mt-1.5 text-[14px] text-secondary">
              Try adjusting your search or selecting a different brand.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
