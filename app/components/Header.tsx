import Image from "next/image";
import { Logo } from "./Logo";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "#about" },
  { label: "Our Brands", href: "#brands" },
  { label: "Solutions", href: "#solutions" },
  { label: "Training & Events", href: "#training" },
  { label: "Education", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="relative z-20 border-b max-w-430 mx-auto border-border/70 bg-(--color-background-white)/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 items-center justify-between gap-4 px-5 lg:px-8 xl:px-10">
        <Image
          src="/isa-logo.jpg"
          alt="Lifestyle Aesthetics"
          width={1000}
          height={1000}
          className="w-auto h-16"
        />
        <nav
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative whitespace-nowrap pb-1 text-[13.5px] font-medium tracking-wide transition-colors ${
                item.active
                  ? "font-semibold text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 xl:ml-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-(--color-button-primary-hover) sm:px-5"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
