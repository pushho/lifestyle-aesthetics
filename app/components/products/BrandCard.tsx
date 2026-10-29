import Link from "next/link";
import { getCategoryLabel, type Brand } from "../../lib/products";

type BrandCardProps = {
  brand: Brand;
};

export function BrandCard({ brand }: BrandCardProps) {
  const previewProducts = brand.products
    .slice(0, 3)
    .map((product) => product.name)
    .join(" · ");

  return (
    <li>
      <Link
        href={`/products/${brand.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/50 bg-(--color-background-white) p-7 shadow-(--shadow-card) transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-(--shadow-hover) sm:p-8"
      >
        <div
          className="flex h-28 items-center justify-center rounded-2xl bg-linear-to-br from-primary-light via-(--color-background-soft) to-(--color-background-muted)"
          aria-hidden="true"
        >
          <span className="font-display text-[1.65rem] font-semibold tracking-[-0.02em] text-primary/70 transition-colors group-hover:text-primary">
            {brand.name}
          </span>
        </div>

        <p className="mt-5 text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
          {getCategoryLabel(brand.category)}
        </p>
        <h3 className="mt-2 font-display text-[1.45rem] leading-[1.15] font-semibold tracking-[-0.01em] text-foreground">
          {brand.name}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-secondary">
          {brand.tagline}
        </p>
        <p className="mt-4 flex-1 text-[13px] leading-relaxed text-muted">
          {previewProducts}
          {brand.products.length > 3
            ? ` · +${brand.products.length - 3} more`
            : ""}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-primary transition-colors group-hover:text-primary-hover">
          View brand
          <span aria-hidden="true">→</span>
        </span>
      </Link>
    </li>
  );
}
