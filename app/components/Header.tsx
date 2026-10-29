import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Training & Events", href: "/#training" },
  { label: "Education", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
];

type HeaderProps = {
  activeHref?: string;
};

export function Header({ activeHref = "/" }: HeaderProps) {
  return (
    <header className="relative z-20 border-b max-w-430 mx-auto border-border/70 bg-(--color-background-white)/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 items-center justify-between gap-4 px-5 lg:px-8 xl:px-10">
        <Link href="/" aria-label="Lifestyle Aesthetics home">
          <Image
            src="/isa-logo.jpg"
            alt="Lifestyle Aesthetics"
            width={1000}
            height={1000}
            className="w-auto h-16"
          />
        </Link>
        <nav
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative whitespace-nowrap pb-1 text-[13.5px] font-medium tracking-wide transition-colors ${
                  isActive
                    ? "font-semibold text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary"
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
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-(--color-button-primary-hover) sm:px-5"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
