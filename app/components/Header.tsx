"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [atTop, setAtTop] = useState(true);
  const isHome = pathname === "/";
  const overHero = isHome && atTop;

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

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

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative whitespace-nowrap pb-1 text-[13.5px] font-medium tracking-wide transition-colors ${
                  isActive
                    ? overHero
                      ? "font-semibold text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary"
                      : "font-semibold text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary"
                    : overHero
                      ? "text-white/80 hover:text-white"
                      : "text-secondary hover:text-primary"
                }`}
              >
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
