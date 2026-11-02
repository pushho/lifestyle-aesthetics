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
        className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/50 bg-(--color-background-white) shadow-(--shadow-card) transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-(--shadow-hover)"
      >
        {product.image ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-(--color-background-soft)">
            <div
              className={
                product.image.fit === "contain"
                  ? "absolute inset-3"
                  : "absolute inset-0"
              }
            >
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={
                  product.image.fit === "contain"
                    ? "object-contain"
                    : "object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                }
              />
            </div>
          </div>
        ) : (
          <div
            className="flex h-40 items-center justify-center bg-linear-to-br from-primary-light via-(--color-background-soft) to-(--color-background-muted) px-6"
            aria-hidden="true"
          >
            <span className="text-center text-[12px] font-semibold tracking-[0.18em] text-primary/60 uppercase">
              Product image placeholder
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
            {getCategoryLabel(product.category)} · {product.brandName}
          </p>
          <h3 className="mt-2 font-display text-[1.35rem] leading-[1.15] font-semibold tracking-[-0.01em] text-foreground">
            {product.name}
          </h3>
          <p className="mt-2 flex-1 text-[14px] leading-relaxed text-secondary">
            {product.summary}
          </p>
          {product.indications && product.indications.length > 0 ? (
            <ul className="mt-4 flex list-none flex-wrap gap-2">
              {product.indications.map((indication) => (
                <li
                  key={indication}
                  className="rounded-full border border-border bg-(--color-background-soft) px-2.5 py-1 text-[11px] font-semibold tracking-wide text-secondary"
                >
                  {indication}
                </li>
              ))}
            </ul>
          ) : null}
          <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-primary transition-colors group-hover:text-primary-hover">
            View product
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </li>
  );
}
