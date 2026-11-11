"use client";

import type { CSSProperties, PointerEvent } from "react";
import type { Service } from "@/app/lib/services";
import { Reveal } from "../Reveal";
import { ServiceIcon } from "./ServiceIcon";

/**
 * "What this service covers" — a grid of capability cards. Each card has a
 * cursor-tracking radial spotlight in the service accent colour, a ghost
 * index number, and a tilting icon tile.
 */
export function CapabilitiesGrid({ service }: { service: Service }) {
  const onCardMove = (event: PointerEvent<HTMLLIElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--cx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--cy", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      className="bg-(--color-background) py-16 sm:py-20"
      style={{ "--svc-accent": service.accent } as CSSProperties}
    >
      <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <Reveal>
          <header className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-(--svc-accent) uppercase">
              Capabilities
              <span
                aria-hidden="true"
                className="hidden h-px w-12 bg-(--svc-accent)/50 sm:block"
              />
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-foreground">
              What this service{" "}
              <span className="font-medium italic text-(--svc-accent)">
                covers.
              </span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-secondary sm:text-base">
              {service.capabilitiesIntro}
            </p>
          </header>
        </Reveal>

        <ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {service.capabilities.map((capability, i) => (
            <Reveal key={capability.title} delay={(i % 3) * 90}>
              <li
                onPointerMove={onCardMove}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-(--shadow-hover) sm:p-7"
              >
                {/* Cursor spotlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(340px circle at var(--cx, 50%) var(--cy, 50%), color-mix(in srgb, var(--svc-accent) 13%, transparent), transparent 68%)",
                  }}
                />
                {/* Ghost index */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 right-4 font-display text-[4.6rem] leading-none font-semibold tracking-[-0.04em] select-none"
                  style={{
                    color:
                      "color-mix(in srgb, var(--svc-accent) 10%, transparent)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:-rotate-8 group-hover:scale-105"
                    style={{
                      background:
                        "color-mix(in srgb, var(--svc-accent) 10%, white)",
                      color: "var(--svc-accent)",
                    }}
                  >
                    <ServiceIcon name={capability.icon} />
                  </span>
                  <h3 className="mt-5 text-[16.5px] font-semibold text-foreground">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-secondary">
                    {capability.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
