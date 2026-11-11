import Image from "next/image";
import Link from "next/link";
import { BRANDS } from "../lib/products";

type BrandLogo = {
  src: string;
  width: number;
  height: number;
  /** White artwork that needs darkening on the light strip */
  invert?: boolean;
  /** Class names to apply to the logo */
  className?: string;
};

const BRAND_LOGOS: Record<string, BrandLogo> = {
  hyalure: {
    src: "/brands/logos/hyalure_logo.png",
    width: 2560,
    height: 551,
  },
  mitelier: {
    src: "/brands/logos/mitelier_logo.png",
    width: 241,
    height: 72,
    className: "bg-black p-1 rounded-md",
  },
  supernova: {
    src: "/brands/logos/supernova_logo.png",
    width: 777,
    height: 183,
  },
  shenb: {
    src: "/brands/logos/shenb.svg",
    width: 479,
    height: 87,
  },
  wontech: {
    src: "/brands/logos/wontech_logo.png",
    width: 547,
    height: 99,
  },
  gtg: {
    src: "/brands/logos/gtg_logo.svg",
    width: 200,
    height: 34,
    invert: true,
  },
  zimmer: {
    src: "/brands/logos/zimmer_logo.webp",
    width: 1333,
    height: 484,
  },
};

const EXTRA_BRANDS: {
  name: string;
  href: string;
  logo: BrandLogo;
}[] = [
  {
    name: "Janssen Cosmetics",
    href: "/#brands",
    logo: {
      src: "/brands/logos/janssen_logo.svg",
      width: 359,
      height: 83,
    },
  },
  {
    name: "Inspira Cosmetics",
    href: "/#brands",
    logo: {
      src: "/brands/logos/inspira_logo.svg",
      width: 500,
      height: 55,
    },
  },
];

const stripBrands = [
  ...BRANDS.map((brand) => ({
    name: brand.name,
    href: `/products/${brand.products[0]?.slug ?? ""}`,
    logo: BRAND_LOGOS[brand.slug] as BrandLogo | undefined,
  })),
  ...EXTRA_BRANDS,
];

function BrandCard({
  brand,
  index,
  duplicate = false,
}: {
  brand: (typeof stripBrands)[number];
  index: number;
  duplicate?: boolean;
}) {
  return (
    <li className="shrink-0">
      <Link
        href={brand.href}
        tabIndex={duplicate ? -1 : undefined}
        aria-label={duplicate ? undefined : brand.name}
        className="group/card relative flex h-[76px] w-[168px] items-center justify-center overflow-hidden rounded-2xl border border-[#f3dbe8] bg-white/75 px-5 shadow-[0_2px_14px_rgba(184,11,105,0.05)] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white hover:shadow-[0_18px_36px_-14px_rgba(233,12,135,0.45)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none sm:h-[84px] sm:w-[192px]"
      >
        {/* Index */}
        <span
          aria-hidden="true"
          className="absolute top-2 left-3 text-[9px] font-bold tracking-[0.18em] text-primary/35 transition-colors duration-500 group-hover/card:text-primary"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Shine sweep */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 translate-x-[-160%] skew-x-[-18deg] bg-linear-to-r from-transparent via-[#ffd9ec]/70 to-transparent transition-transform duration-700 ease-out group-hover/card:translate-x-[160%]"
        />

        {brand.logo ? (
          <Image
            src={brand.logo.src}
            alt={duplicate ? "" : brand.name}
            width={brand.logo.width}
            height={brand.logo.height}
            className={`h-6 w-auto max-w-[128px] object-contain opacity-55 grayscale transition-all duration-500 ease-out group-hover/card:scale-105 group-hover/card:opacity-100 group-hover/card:grayscale-0 sm:h-7 sm:max-w-[142px] ${
              brand.logo.invert ? "brightness-0" : ""
            } ${brand.logo.className ?? ""}`}
          />
        ) : (
          <span className="whitespace-nowrap text-[13px] font-semibold tracking-[0.04em] text-foreground/60 transition-colors duration-500 group-hover/card:text-primary sm:text-sm">
            {brand.name}
          </span>
        )}

        {/* Bottom accent line */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-[2.5px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-[#ff6bb5] transition-all duration-500 ease-out group-hover/card:w-1/2"
        />
      </Link>
    </li>
  );
}

export function BrandStrip() {
  return (
    <section
      aria-label="Our brands"
      className="relative isolate overflow-hidden border-b border-[#f6d9e8] bg-[linear-gradient(180deg,#ffffff_0%,#fff5fa_52%,#ffffff_100%)]"
    >
      {/* Mirror reflection of the hero image, fading into the strip */}
      <div
        aria-hidden="true"
        className="relative h-36 overflow-hidden [mask-image:linear-gradient(to_bottom,black_35%,transparent_98%)] sm:h-38"
      >
        {/* Same size / crop as the hero (83vh) so the flipped copy
            aligns perfectly with the hero's bottom edge */}
        <div className="absolute inset-x-0 top-0 h-[83vh] -scale-y-100 opacity-95 blur-[1px] saturate-[0.9]">
          <Image
            src="/assets/bg/hero_bg5.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[72%_center] sm:object-right"
          />
          {/* Same dark overlays as the hero, mirrored with the image
              so the reflection matches the hero's darkness at the seam */}
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(28,22,24,0.88)_0%,rgba(28,22,24,0.72)_34%,rgba(28,22,24,0.38)_58%,rgba(28,22,24,0.12)_78%,rgba(28,22,24,0.05)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(55%_70%_at_78%_48%,transparent_20%,rgba(28,22,24,0.35)_100%)]" />
        </div>

        {/* Melt the reflection into the strip background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,252,253,0)_0%,rgba(255,245,250,0.32)_55%,rgba(255,248,251,0.92)_100%)]" />

        {/* Polished-surface shine at the seam */}
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/15 to-transparent" />
      </div>

      {/* Animated gradient hairline */}
      {/* <div
        aria-hidden="true"
        className="animate-shimmer-line absolute inset-x-0 top-0 z-10 h-px bg-[linear-gradient(90deg,transparent,#e90c87,#ffb3d9,#e90c87,transparent)] bg-[length:200%_100%] motion-reduce:animate-none"
      /> */}

      {/* Soft drifting glows */}
      <div
        aria-hidden="true"
        className="animate-blob-drift pointer-events-none absolute -top-24 left-[8%] -z-10 h-48 w-72 rounded-full bg-primary/15 blur-3xl motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="animate-blob-drift-reverse pointer-events-none absolute -right-[4%] -bottom-28 -z-10 h-52 w-80 rounded-full bg-[#ffb3d9]/30 blur-3xl motion-reduce:animate-none"
      />

      {/* Dot texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(233,12,135,0.13)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
      />

      <div className="relative z-10 mx-auto -mt-14 max-w-430 px-6 sm:-mt-20 sm:px-10 xl:px-16">
        {/* Heading */}
        <div className="animate-fade-up flex flex-col items-center text-center">
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] font-semibold tracking-[0.28em] text-primary uppercase">
            <span
              aria-hidden="true"
              className="hidden h-px w-16 bg-gradient-to-r from-transparent to-primary/70 min-[420px]:block"
            />
            <span className="whitespace-nowrap">Our Brands</span>
            <span aria-hidden="true" className="text-[9px] tracking-normal">
              ✦
            </span>
            <span className="whitespace-nowrap normal-case">
              {stripBrands.length} Global Partners
            </span>
            <span
              aria-hidden="true"
              className="hidden h-px w-16 bg-gradient-to-l from-transparent to-primary/70 min-[420px]:block"
            />
          </p>
          {/* <p className="font-display mt-3 text-lg font-medium text-foreground italic sm:text-xl">
            Trusted names behind{" "}
            <span className="text-primary">world-class aesthetics</span>
          </p> */}
        </div>
      </div>

      {/* Infinite marquee — pauses on hover / focus */}
      <div className="group/marquee relative mt-8 pb-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto sm:pb-12">
        <div className="animate-marquee flex w-max will-change-transform group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] motion-reduce:animate-none">
          {[false, true].map((duplicate) => (
            <ul
              key={duplicate ? "duplicate" : "original"}
              aria-hidden={duplicate || undefined}
              className="flex shrink-0 list-none items-center gap-4 pr-4"
            >
              {stripBrands.map((brand, index) => (
                <BrandCard
                  key={brand.name}
                  brand={brand}
                  index={index}
                  duplicate={duplicate}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
