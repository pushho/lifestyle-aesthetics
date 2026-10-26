import Image from "next/image";

export function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative bg-(--color-background-white) py-20 sm:py-24 lg:py-16"
    >
      {/* Soft pink ambient blobs — clipped at section edges only via these */}
      <div
        className="pointer-events-none absolute top-1/4 right-0 h-72 w-72 translate-x-1/4 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-8 bottom-16 h-56 w-56 rounded-full bg-primary-light/80 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-430 items-center gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16 xl:px-16">
        {/* Copy */}
        <div className="relative z-10 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            Who We Are
          </p>

          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] font-semibold tracking-[-0.01em] text-foreground">
            Professional Aesthetics{" "}
            <span className="text-primary">for Clinical Practices</span>
          </h2>

          <p className="mt-6 text-[15px] leading-relaxed text-secondary sm:text-base">
            Established in Dubai in December 2011, Lifestyle Aesthetics supplies
            professional medical aesthetics. We represent seven international
            brands in injectables, professional skincare, and aesthetic
            technology across the UAE, Qatar, Bahrain, Oman, Egypt, and Kuwait.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-(--color-button-primary-hover) hover:shadow-(--shadow-hover)"
          >
            Partner With Us
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Visual */}
        <div className="relative w-full lg:pr-6 xl:pr-10">
          <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-3xl">
            <Image
              src="/spa-treatment-room.webp"
              alt="Bright modern aesthetic treatment room with a clinical chair and spa cabinetry"
              width={1672}
              height={941}
              className="aspect-16/10 h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>

          <aside className="relative z-10 mx-3 -mt-12 rounded-2xl border border-border/60 bg-(--color-background-white) p-5 shadow-(--shadow-card) sm:absolute sm:right-0 sm:bottom-3 sm:mx-0 sm:mt-0 sm:w-[min(100%,320px)] sm:p-6">
            <div
              className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
              aria-hidden="true"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M12 3.5c.4 2.8 2.2 5 4.8 5.8-2.6.8-4.4 3-4.8 5.8-.4-2.8-2.2-5-4.8-5.8 2.6-.8 4.4-3 4.8-5.8Z"
                  fill="currentColor"
                />
                <path
                  d="M18.5 14c.2 1.4 1.1 2.5 2.4 2.9-1.3.4-2.2 1.5-2.4 2.9-.2-1.4-1.1-2.5-2.4-2.9 1.3-.4 2.2-1.5 2.4-2.9Z"
                  fill="currentColor"
                  opacity="0.85"
                />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-foreground sm:text-base">
              Built for Clinical Practices
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-secondary sm:text-[14px]">
              Dermatology clinics, plastic surgery centers, medical spas, and
              healthcare businesses rely on us to adopt, operate, and market
              each solution.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
