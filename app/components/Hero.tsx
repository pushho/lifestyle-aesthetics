import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Global Brands",
    detail: "Exclusive Distribution",
    icon: HandshakeIcon,
  },
  {
    title: "End-to-End Support",
    detail: "Beyond Product Supply",
    icon: AwardIcon,
  },
  {
    title: "For Aesthetic Clinics",
    detail: "& Medical Professionals",
    icon: ClinicIcon,
  },
  {
    title: "Regional Presence",
    detail: "Across the Middle East",
    icon: GlobeIcon,
  },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3f4]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_78%_0%,rgba(255,255,255,0.95),transparent_58%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-430 px-6 pt-10 pb-6 sm:px-10 sm:pt-14 lg:min-h-[min(68vh,620px)] lg:pt-10 lg:pb-8 xl:px-16">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block xl:w-[58%]">
          <Image
            src="/assets/bg/hero_bg4.png"
            alt="Liftera devices with Neauvia and Janssen Cosmetics professional products"
            fill
            priority
            quality={90}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-contain object-right"
          />
        </div>

        <div className="relative z-10 w-full max-w-xl @container lg:max-w-[48%] lg:py-8">
          <p className="animate-fade-up text-[11px] font-semibold tracking-[0.22em] text-primary uppercase sm:text-[12px]">
            Aesthetic Technologies &amp; Solutions
          </p>

          <h1
            className={`animate-fade-up delay-1 mt-4 text-[clamp(1.85rem,10cqw,3.5rem)] leading-[1.08] text-foreground font-semibold`}
          >
            Your Trusted
            <br />
            Distribution Partner
            <br />
            <span className="text-primary">in Medical Aesthetics</span>
          </h1>

          <p className="animate-fade-up delay-2 mt-5 max-w-md text-[15px] leading-relaxed text-secondary sm:text-[16.5px]">
            Supplying world-class aesthetic devices, injectables and
            professional skincare to clinics and practitioners across the
            Middle East.
          </p>

          <div className="animate-fade-up delay-3 mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Explore Our Solutions
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/#brands"
              className="inline-flex items-center rounded-full border border-[#e4dde1] bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Our Brands
            </Link>
          </div>
        </div>

        <div className="relative mt-6 aspect-[1.72/1] w-full lg:hidden">
          <Image
            src="/assets/bg/hero_bg4.png"
            alt="Liftera devices with Neauvia and Janssen Cosmetics professional products"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-contain object-right"
          />
        </div>
      </div>

      <div className="relative z-10 border-t border-[#efe6ea] bg-white">
        <ul className="mx-auto grid max-w-430 list-none grid-cols-1 gap-5 px-6 py-6 sm:grid-cols-2 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:py-7 xl:px-16">
          {highlights.map((item) => (
            <li key={item.title} className="flex items-center gap-3.5">
              <item.icon className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <p className="text-[15px] leading-tight font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[13px] leading-tight text-secondary">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function ClinicIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
