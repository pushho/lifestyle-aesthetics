import Link from "next/link";
import {
  PRODUCT_CATEGORIES,
  type ProductCategoryId,
} from "../../lib/products";

type CategoryFilterProps = {
  active?: ProductCategoryId | "all";
};

const filters = [
  { id: "all" as const, label: "All" },
  ...PRODUCT_CATEGORIES.map((category) => ({
    id: category.id,
    label: category.label,
  })),
];

export function CategoryFilter({ active = "all" }: CategoryFilterProps) {
  return (
    <nav aria-label="Product categories" className="flex flex-wrap justify-center gap-2">
      {filters.map((filter) => {
        const href =
          filter.id === "all" ? "/products" : `/products?category=${filter.id}`;
        const isActive = active === filter.id;

        return (
          <Link
            key={filter.id}
            href={href}
            className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
              isActive
                ? "bg-(--color-button-primary) text-white"
                : "border border-border bg-(--color-background-white) text-secondary hover:border-primary hover:text-primary"
            }`}
          >
            {filter.label}
          </Link>
        );
      })}
    </nav>
  );
}
