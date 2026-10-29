import type { Product } from "../../lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-border/50 bg-(--color-background-white) shadow-(--shadow-card)">
      <div
        className="flex h-40 items-center justify-center bg-linear-to-br from-primary-light via-(--color-background-soft) to-(--color-background-muted) px-6"
        aria-hidden="true"
      >
        <span className="text-center text-[12px] font-semibold tracking-[0.18em] text-primary/60 uppercase">
          Product image placeholder
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.3rem] leading-[1.15] font-semibold tracking-[-0.01em] text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-secondary">
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
      </div>
    </li>
  );
}
