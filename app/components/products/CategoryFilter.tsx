import Link from "next/link";
import {
  PRODUCT_CATEGORIES,
  type ProductCategoryId,
} from "../../lib/products";

type CategoryFilterProps = {
  active?: ProductCategoryId | "all";
  query?: string;
};

const filters = [
  { id: "all" as const, label: "All Products" },
  ...PRODUCT_CATEGORIES.map((category) => ({
    id: category.id,
    label: category.label,
  })),
];

export function CategoryFilter({
  active = "all",
  query,
}: CategoryFilterProps) {
  return (
    <nav
      aria-label="Product categories"
      className="flex flex-wrap items-center gap-2"
    >
      {filters.map((filter) => {
        const search = new URLSearchParams();
        if (filter.id !== "all") search.set("category", filter.id);
        if (query) search.set("q", query);
        const qs = search.toString();
        const href = qs ? `/products?${qs}#catalogue` : "/products#catalogue";
        const isActive = active === filter.id;

        return (
          <Link
            key={filter.id}
            href={href}
            scroll={false}
            className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all ${
              isActive
                ? "bg-(--color-button-primary) text-white shadow-xs"
                : "border border-border bg-(--color-background-white) text-secondary hover:border-primary/50 hover:text-primary"
            }`}
          >
            {filter.label}
          </Link>
        );
      })}
    </nav>
  );
}
