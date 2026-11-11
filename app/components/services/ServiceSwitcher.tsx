import Link from "next/link";
import type { CSSProperties } from "react";
import type { Service } from "@/app/lib/services";
import { Reveal } from "../Reveal";

/**
 * "Keep exploring" — large typographic rows linking to the other services.
 * Each row lights up in that service's own accent colour on hover.
 */
export function ServiceSwitcher({ services }: { services: Service[] }) {
  return (
    <section className="bg-(--color-surface-dark) py-16 text-white sm:py-20">
      <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <Reveal>
          <header className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-white/50 uppercase">
                Keep Exploring
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] font-semibold tracking-[-0.015em]">
                More ways we{" "}
                <span className="font-medium italic text-[#ff8ecd]">
                  partner.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[13.5px] leading-relaxed text-white/55">
              Every service is included in the Lifestyle Aesthetics
              partnership — explore what else comes with it.
            </p>
          </header>
        </Reveal>

        <div className="mt-10">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 90}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex items-center gap-5 border-t border-white/12 py-6 transition-colors last:border-b sm:gap-8 sm:py-7 hover:bg-[color-mix(in_srgb,var(--row-accent)_8%,transparent)]"
                style={{ "--row-accent": service.accent } as CSSProperties}
              >
                <span className="font-display text-[13px] font-semibold tracking-[0.18em] text-white/40 transition-colors group-hover:text-white/70">
                  {service.index}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[clamp(1.35rem,2.6vw,2.1rem)] leading-tight font-semibold tracking-[-0.015em] transition-transform duration-300 group-hover:translate-x-2">
                    {service.name}
                  </span>
                  <span className="mt-1 hidden max-w-xl truncate text-[13px] text-white/50 md:block">
                    {service.tagline}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-[16px] text-white/80 transition-all duration-300 group-hover:rotate-45 group-hover:border-transparent group-hover:text-white"
                  style={{
                    background: "transparent",
                  }}
                >
                  <span
                    className="grid h-full w-full place-items-center rounded-full transition-colors duration-300 group-hover:bg-(--row-accent)"
                  >
                    ↗
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
