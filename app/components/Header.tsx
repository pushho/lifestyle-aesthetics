"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { BRANDS } from "../lib/products";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Brands", href: "/products", hasDropdown: true },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
] as const;

const upcomingBrands = ["Janssen Cosmetics", "Inspira"] as const;

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [atTop, setAtTop] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const brandsMenuId = useId();
  const brandsRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHome = pathname === "/";
  const overHero = isHome && atTop;

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setBrandsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!brandsOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setBrandsOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      if (
        brandsRef.current &&
        !brandsRef.current.contains(event.target as Node)
      ) {
        setBrandsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [brandsOpen]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openBrands = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setBrandsOpen(true);
  };

  const scheduleCloseBrands = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setBrandsOpen(false), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 h-18 w-full border-b transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
        atTop
          ? "border-transparent bg-transparent"
          : "border-border/70 bg-(--color-background-white)/90 shadow-[0_1px_0_rgba(41,37,43,0.04)] backdrop-blur-md"
      } ${isHome ? "-mb-18" : ""}`}
    >
      <div className="mx-auto flex h-full max-w-430 items-center justify-between gap-4 px-5 lg:px-8 xl:px-10">
        <Link href="/" aria-label="Lifestyle Aesthetics home">
          <Image
            src="/lsa-logo.png"
            alt="Lifestyle Aesthetics"
            width={1000}
            height={1000}
            loading="eager"
            className="h-20 w-auto"
          />
        </Link>
        <nav
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = isNavActive(pathname, item.href);
            const linkClass = `relative whitespace-nowrap pb-1 text-[13.5px] font-medium tracking-wide transition-colors ${
              isActive
                ? overHero
                  ? "font-semibold text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary"
                  : "font-semibold text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary"
                : overHero
                  ? "text-white/80 hover:text-white"
                  : "text-secondary hover:text-primary"
            }`;

            if ("hasDropdown" in item && item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  ref={brandsRef}
                  className="relative"
                  onMouseEnter={openBrands}
                  onMouseLeave={scheduleCloseBrands}
                >
                  <Link
                    href={item.href}
                    className={`${linkClass} inline-flex items-center gap-1`}
                    aria-expanded={brandsOpen}
                    aria-controls={brandsMenuId}
                    aria-haspopup="true"
                    onClick={() => setBrandsOpen(false)}
                    onFocus={openBrands}
                  >
                    {item.label}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 12"
                      className={`size-2.5 transition-transform duration-200 ${
                        brandsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                    >
                      <path
                        d="M2.5 4.25 6 7.75l3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  <div
                    id={brandsMenuId}
                    role="menu"
                    aria-label="Brands and products"
                    className={`absolute top-full left-1/2 z-50 w-[min(94vw,56rem)] -translate-x-1/2 pt-4 transition-[opacity,transform] duration-200 ${
                      brandsOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-border/80 bg-(--color-surface-dark) text-white shadow-[0_24px_60px_-20px_rgba(41,37,43,0.45)]">
                      <div className="max-h-[min(62vh,32rem)] overflow-y-auto px-7 py-7 sm:px-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3 md:grid-cols-4">
                          {BRANDS.map((brand) => (
                            <div key={brand.slug} className="min-w-0">
                              <Link
                                href={`/products?brand=${brand.slug}#catalogue`}
                                role="menuitem"
                                className="text-[12px] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:text-primary"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  setBrandsOpen(false);
                                }}
                              >
                                {brand.name}
                              </Link>
                              <ul className="mt-3 space-y-1.5">
                                {brand.products.map((product) => (
                                  <li key={product.slug}>
                                    <Link
                                      href={`/products/${product.slug}`}
                                      role="menuitem"
                                      className="block text-[13px] leading-snug text-white/75 transition-colors hover:text-white"
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        setBrandsOpen(false);
                                      }}
                                    >
                                      {product.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-white/10 px-7 py-4 sm:px-8">
                        {upcomingBrands.map((brand) => (
                          <span
                            key={brand}
                            className="text-[13px] font-bold tracking-wide text-white"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 xl:ml-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-(--color-button-primary-hover) sm:px-5"
          >
            Request a Quote
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
