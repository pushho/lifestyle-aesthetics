import Image from "next/image";
import Link from "next/link";

export function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-(--color-background-white) py-20 sm:py-24 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/neon-wave.svg"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
      </div>
      <div
        className="pointer-events-none absolute top-1/4 right-0 h-72 w-72 translate-x-1/4 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-8 bottom-16 h-56 w-56 rounded-full bg-primary-light/80 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-430 items-center gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16 xl:px-16">
        <div className="relative z-10 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            Who We Are
          </p>

          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] font-semibold tracking-[-0.01em] text-foreground">
            Your Regional Partner for{" "}
            <span className="text-primary">Aesthetic Supply</span>
          </h2>

          <p className="mt-6 text-[15px] leading-relaxed text-secondary sm:text-base">
            Established in Dubai in December 2011, Lifestyle Aesthetics is a
            B2B distributor of professional medical-aesthetic products and
            devices. We represent eight international brands across injectables,
            clinical peels, and treatment technology in the UAE, Qatar, Bahrain,
            Oman, Egypt, and Kuwait.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-(--color-button-primary-hover) hover:shadow-(--shadow-hover)"
          >
            Partner With Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative w-full lg:pr-6 xl:pr-10">
          <div className="relative overflow-hidden rounded-[1.25rem] bg-foreground sm:rounded-3xl">
            <Image
              src="/about/about_section.png"
              alt="Professional aesthetic treatment device from the Lifestyle Aesthetics catalogue"
              width={1024}
              height={1536}
              className="aspect-16/10 h-auto w-full object-contain object-[80%_20%]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>

          <aside className="relative z-10 mx-3 -mt-12 rounded-2xl border border-border/60 bg-(--color-background-white) p-5 shadow-(--shadow-card) sm:absolute sm:right-0 sm:-bottom-6 sm:mx-0 sm:mt-0 sm:w-[min(100%,320px)] sm:p-6">
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
                  d="M4 7.5h16v9H4v-9Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 7.5V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8V7.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M9 12h6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-foreground sm:text-base">
              Built for Professional Buyers
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-secondary sm:text-[14px]">
              Clinics, dermatology centers, and healthcare businesses source
              products, devices, training, and ongoing technical support from
              one regional partner.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
