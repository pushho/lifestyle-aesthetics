import { CategoryFilter } from "../components/products/CategoryFilter";
import { ProductCard } from "../components/products/ProductCard";
import { ProductSearch } from "../components/products/ProductSearch";
import {
  getProductsByCategory,
  isProductCategoryId,
  type ProductCategoryId,
} from "../lib/products";

type ProductsCatalogueProps = {
  searchParams: Promise<{ category?: string | string[]; q?: string | string[] }>;
};

export async function ProductsCatalogue({
  searchParams,
}: ProductsCatalogueProps) {
  const params = await searchParams;
  const rawCategory = Array.isArray(params.category)
    ? params.category[0]
    : params.category;
  const rawQuery = Array.isArray(params.q) ? params.q[0] : params.q;
  const query = rawQuery?.trim() ?? "";

  const activeCategory: ProductCategoryId | "all" =
    rawCategory && isProductCategoryId(rawCategory) ? rawCategory : "all";

  const categoryProducts = getProductsByCategory(activeCategory);
  const normalizedQuery = query.toLowerCase();
  const products = normalizedQuery
    ? categoryProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(normalizedQuery) ||
          product.brandName.toLowerCase().includes(normalizedQuery) ||
          product.summary.toLowerCase().includes(normalizedQuery) ||
          product.indications?.some((indication) =>
            indication.toLowerCase().includes(normalizedQuery),
          ),
      )
    : categoryProducts;

  return (
    <div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter active={activeCategory} query={query} />
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
              Try adjusting your search or selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
