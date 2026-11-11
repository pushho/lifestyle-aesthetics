"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { Service } from "@/app/lib/services";
import { Reveal } from "../Reveal";

/**
 * "How it works" — a sticky intro column with a live step indicator and
 * progress bar, next to a scroll-driven step list. The active step is
 * whichever card crosses the middle of the viewport.
 */
export function ProcessSteps({ service }: { service: Service }) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const steps = service.process;
  const progress = ((active + 1) / steps.length) * 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const step = Number(entry.target.getAttribute("data-step"));
            if (!Number.isNaN(step)) setActive(step);
          }
        }
      },
      // A step becomes active as it crosses the vertical centre band.
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    for (const el of itemRefs.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section
      className="border-y border-border bg-(--color-background-white) py-16 sm:py-20"
      style={{ "--svc-accent": service.accent } as CSSProperties}
    >
      <div className="mx-auto grid max-w-430 gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:px-16">
        {/* Sticky intro + progress */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-(--svc-accent) uppercase">
              The Journey
              <span
                aria-hidden="true"
                className="hidden h-px w-12 bg-(--svc-accent)/50 sm:block"
              />
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-foreground">
              How it works,{" "}
              <span className="font-medium italic text-(--svc-accent)">
                step by step.
              </span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-secondary">
              {service.processIntro}
            </p>

            <div className="mt-9 hidden lg:block" aria-hidden="true">
              <div
                key={active}
                className="animate-fade-up font-display text-[6.5rem] leading-none font-semibold tracking-[-0.04em] text-(--svc-accent)"
              >
                {String(active + 1).padStart(2, "0")}
              </div>
              <p className="mt-2 text-[13px] font-semibold tracking-[0.16em] text-secondary uppercase">
                {steps[active].title}
              </p>
              <div className="mt-5 h-1.5 w-44 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full transition-[width] duration-500 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: "var(--svc-accent)",
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Steps */}
        <ol className="relative list-none">
          {/* Track */}
          <span
            aria-hidden="true"
            className="absolute top-8 bottom-8 left-6.75 w-px bg-border"
          />
          <span
            aria-hidden="true"
            className="absolute top-8 left-6.75 w-px origin-top transition-transform duration-500 ease-out"
            style={{
              height: "calc(100% - 4rem)",
              transform: `scaleY(${(active + 1) / steps.length})`,
              background: "var(--svc-accent)",
            }}
          />

          {steps.map((step, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <li
                key={step.title}
                data-step={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="relative flex gap-6 py-7 first:pt-2 last:pb-2 sm:gap-8"
              >
                <span
                  className={`relative z-10 grid h-13.5 w-13.5 shrink-0 place-items-center rounded-full border font-display text-[15px] font-semibold transition-all duration-400 ${
                    isActive
                      ? "scale-105 border-transparent text-white shadow-(--shadow-hover)"
                      : isDone
                        ? "border-transparent text-white"
                        : "border-border bg-white text-muted"
                  }`}
                  style={
                    isActive || isDone
                      ? { background: "var(--svc-accent)" }
                      : undefined
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className={`flex-1 rounded-2xl border p-5 transition-all duration-400 sm:p-6 ${
                    isActive
                      ? "border-transparent bg-white shadow-(--shadow-card)"
                      : "border-border/70 bg-transparent opacity-70"
                  }`}
                  style={
                    isActive
                      ? {
                          boxShadow:
                            "0 10px 36px color-mix(in srgb, var(--svc-accent) 14%, transparent)",
                        }
                      : undefined
                  }
                >
                  <h3 className="font-display text-[19px] font-semibold tracking-[-0.01em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-secondary">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
