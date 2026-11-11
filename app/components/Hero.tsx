import Link from "next/link";
import { HeroAmbience } from "./HeroAmbience";
import { HeroFrame } from "./HeroFrame";
import {
  HeroBrandTabs,
  HeroMachines,
  HeroPlate,
  HeroPlatformLabel,
  HeroSlideshowProvider,
} from "./HeroSlideshow";

export function Hero() {
  return (
    <section className="relative isolate h-[83vh] overflow-hidden bg-[#2a2224]">
      <HeroSlideshowProvider>
        <HeroPlate />

        <HeroFrame>
          <HeroAmbience layer="back" />
        </HeroFrame>
        <HeroMachines />

        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(28,22,24,0.88)_0%,rgba(28,22,24,0.72)_34%,rgba(28,22,24,0.38)_58%,rgba(28,22,24,0.12)_78%,rgba(28,22,24,0.05)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_78%_48%,transparent_20%,rgba(28,22,24,0.35)_100%)]"
          aria-hidden="true"
        />
        {/* Softens the bottom edge so the image melts into its reflection below */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,rgba(255,252,253,0.16))]"
          aria-hidden="true"
        />

        <HeroFrame>
          <HeroAmbience layer="front" />
        </HeroFrame>
        <HeroPlatformLabel />

        <div className="relative z-10 mx-auto flex h-full max-w-430 items-center px-6 pt-16 sm:px-10 sm:pt-28 xl:pt-16">
          <div className="w-full max-w-xl @container lg:max-w-[46%] py-20">
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

            <div className="animate-fade-up delay-3 mt-4 flex flex-wrap items-center gap-3.5">
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

            <HeroBrandTabs className="animate-fade-up delay-4 mt-10" />
          </div>
        </div>
      </HeroSlideshowProvider>
    </section>
  );
}
