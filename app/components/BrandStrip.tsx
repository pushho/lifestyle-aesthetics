import Link from "next/link";
import { BRANDS } from "../lib/products";

export function BrandStrip() {
  return (
    <section
      aria-label="Our brands"
      className="border-b border-[#efe6ea] bg-white"
    >
      <div className="mx-auto flex max-w-430 flex-col gap-4 px-6 py-5 sm:px-10 lg:flex-row lg:items-center lg:gap-8 lg:py-6 xl:px-16">
        <p className="shrink-0 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
          Our Brands
        </p>

        <ul className="flex list-none items-center gap-x-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {BRANDS.map((brand, index) => (
            <li key={brand.slug} className="flex items-center">
              {index > 0 ? (
                <span
                  className="mx-3 h-5 w-px shrink-0 bg-[#e8e0e4] sm:mx-4"
                  aria-hidden="true"
                />
              ) : null}
              <Link
                href={`/products/${brand.products[0]?.slug ?? ""}`}
                className={`whitespace-nowrap text-[12px] font-semibold tracking-[0.04em] transition-colors sm:text-[13px] ${
                  index === 0
                    ? "text-primary hover:text-primary-hover"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {brand.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
