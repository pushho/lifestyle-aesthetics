import Link from "next/link";
import type { CSSProperties } from "react";
import { CONTACT, getWhatsAppHref } from "@/app/lib/contact";
import type { Service } from "@/app/lib/services";
import { Reveal } from "../Reveal";

/**
 * Closing CTA: a dark rounded card on a light section, glowing in the
 * service accent, with WhatsApp and contact actions.
 */
export function ServiceCta({ service }: { service: Service }) {
  return (
    <section
      className="bg-(--color-background) py-14 sm:py-18"
      style={{ "--svc-accent": service.accent } as CSSProperties}
    >
      <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-(--color-surface-dark) px-7 py-14 text-center sm:px-12 sm:py-16 lg:py-20">
            {/* Accent glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse, color-mix(in srgb, var(--svc-accent) 38%, transparent), transparent 70%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-72 rounded-full bg-[#e90c87]/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-24 h-56 w-72 rounded-full bg-[#ffb3d9]/15 blur-3xl"
            />

            <div className="relative">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-white/55 uppercase">
                {service.name} · Lifestyle Aesthetics
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-white">
                Ready to put{" "}
                <span className="font-medium italic text-[#ff8ecd]">
                  {service.name.toLowerCase()}
                </span>{" "}
                to work for your clinic?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/65">
                Tell us about your practice and goals — we&apos;ll map the
                right mix of products, training, and support around them.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-foreground transition-all hover:bg-primary-light"
                >
                  Chat on WhatsApp
                  <span aria-hidden="true">↗</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-6 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Contact our team
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <p className="mt-6 text-[12.5px] text-white/45">
                Prefer to talk? Call us at{" "}
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="font-semibold text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
