import Image from "next/image";
import Link from "next/link";
import {
  getCategoryLabel,
  type CatalogueProduct,
} from "../../lib/products";

type ProductCardProps = {
  product: CatalogueProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <li>
      <Link
        href={`/products/${product.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-(--color-background-white) transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-border-accent hover:shadow-(--shadow-hover)"
      >
        <div className="relative aspect-[4/3.4] overflow-hidden bg-linear-to-b from-(--color-background-soft) via-(--color-background-muted)/55 to-(--color-background-soft)">
          {product.image ? (
            <div
              className={
                product.image.fit === "contain"
                  ? "absolute inset-5"
                  : "absolute inset-0"
              }
            >
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={
                  product.image.fit === "contain"
                    ? "object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    : "object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                }
              />
            </div>
          ) : (
            <div
              className="flex h-full flex-col items-center justify-center gap-1.5 px-6 text-center"
              aria-hidden="true"
            >
              <span className="font-display text-[1.6rem] font-semibold tracking-[-0.015em] text-primary/70">
                {product.name}
              </span>
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-muted uppercase">
                {product.brandName}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-[1.5rem] leading-[1.15] font-semibold tracking-[-0.01em] text-foreground transition-colors group-hover:text-primary-dark">
            {product.name}
          </h3>
          <p className="mt-1.5 text-[10.5px] font-semibold tracking-[0.18em] text-muted uppercase">
            {getCategoryLabel(product.category)} · {product.brandName}
          </p>
          <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-secondary">
            {product.summary}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-dark transition-colors group-hover:text-primary">
            Explore product
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </li>
  );
}
