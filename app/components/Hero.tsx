import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE_RATIO, HeroAmbience } from "./HeroAmbience";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden h-[83vh] bg-[#2a2224]">
      <Image
        src="/assets/bg/hero_bg5.png"
        alt="Aesthetic devices with Neauvia and Janssen Cosmetics professional products"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="animate-image-reveal object-cover object-[72%_center] sm:object-right"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(28,22,24,0.88)_0%,rgba(28,22,24,0.72)_34%,rgba(28,22,24,0.38)_58%,rgba(28,22,24,0.12)_78%,rgba(28,22,24,0.05)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_78%_48%,transparent_20%,rgba(28,22,24,0.35)_100%)]"
        aria-hidden="true"
      />

      {/* Mirrors the image's object-cover crop so the SVG stays pinned to the artwork */}
      <div
        className="animate-image-reveal pointer-events-none absolute inset-0 [container-type:size]"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-[72%] -translate-x-[72%] -translate-y-1/2 sm:left-full sm:-translate-x-full"
          style={{
            width: `max(100cqw, calc(100cqh * ${HERO_IMAGE_RATIO}))`,
            height: `max(100cqh, calc(100cqw / ${HERO_IMAGE_RATIO}))`,
          }}
        >
          <HeroAmbience />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,860px)] max-w-430 items-center px-6 py-16 sm:px-10 sm:py-20 xl:px-16">
        <div className="w-full max-w-xl @container lg:max-w-[46%]">
          <p className="animate-fade-up flex items-center gap-3 text-[11px] font-medium tracking-[0.28em] text-white/90 uppercase sm:text-[12px]">
            Medical Aesthetics Distribution
            <span
              className="hidden h-px w-14 bg-white/55 sm:block"
              aria-hidden="true"
            />
          </p>

          <h1 className="animate-fade-up delay-1 font-display mt-5 text-[clamp(2.15rem,8.5cqw,3.85rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-white">
            Global Brands.
            <br />
            Advanced Solutions.
            <br />
            <span className="font-medium italic text-primary">
              For Aesthetic Professionals.
            </span>
          </h1>

          <p className="animate-fade-up delay-2 mt-5 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-[16.5px]">
            Your trusted distribution partner for world-class aesthetic devices,
            injectables and professional skincare across the Middle East.
          </p>

          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Explore Solutions
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/#brands"
              className="inline-flex items-center rounded-lg border border-white/55 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Our Brands
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
