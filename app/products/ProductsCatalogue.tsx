import { BrandCard } from "../components/products/BrandCard";
import { CategoryFilter } from "../components/products/CategoryFilter";
import {
  getBrandsByCategory,
  isProductCategoryId,
  PRODUCT_CATEGORIES,
  type ProductCategoryId,
} from "../lib/products";

type ProductsCatalogueProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export async function ProductsCatalogue({
  searchParams,
}: ProductsCatalogueProps) {
  const params = await searchParams;
  const rawCategory = Array.isArray(params.category)
    ? params.category[0]
    : params.category;
  const activeCategory: ProductCategoryId | "all" =
    rawCategory && isProductCategoryId(rawCategory) ? rawCategory : "all";
  const brands = getBrandsByCategory(activeCategory);
  const categoryMeta =
    activeCategory === "all"
      ? null
      : PRODUCT_CATEGORIES.find((category) => category.id === activeCategory);

  return (
    <>
      <div className="mt-8">
        <CategoryFilter active={activeCategory} />
      </div>
      {categoryMeta ? (
        <p className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-muted">
          {categoryMeta.description}
        </p>
      ) : null}

      <div className="mx-auto mt-12 max-w-430 px-6 sm:mt-14 sm:px-10 xl:px-16">
        {brands.length > 0 ? (
          <ul className="grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {brands.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl border border-border bg-(--color-background-white) px-6 py-10 text-center text-secondary">
            No brands found in this category.
          </p>
        )}
      </div>
    </>
  );
}
