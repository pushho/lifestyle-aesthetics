"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { Service } from "@/app/lib/services";

function CountUp({
  value,
  suffix,
  start,
  delay,
}: {
  value: number;
  suffix: string;
  start: boolean;
  delay: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const duration = 1600;
    const t0 = performance.now() + delay;

    const step = (now: number) => {
      const progress = Math.min(Math.max((now - t0) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, value, delay]);

  return (
    <span className="tabular-nums">
      {display.toLocaleString("en-US")}
      <span className="text-(--svc-accent)">{suffix}</span>
    </span>
  );
}

/**
 * Achievement numbers band. Counts up once the section scrolls into view,
 * staggered per stat. Values come from the service's data entry.
 */
export function StatsBand({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="border-b border-border bg-(--color-background-white)"
      style={{ "--svc-accent": service.accent } as CSSProperties}
    >
      <div
        ref={ref}
        className="mx-auto grid max-w-430 grid-cols-1 gap-y-8 px-6 py-12 sm:grid-cols-2 sm:px-10 sm:py-14 lg:grid-cols-4 lg:gap-y-0 xl:px-16"
      >
        {service.stats.map((stat, i) => (
          <div
            key={stat.label}
            className="group relative lg:border-l lg:border-border lg:px-8 lg:first:border-l-0 lg:first:pl-0"
          >
            <p className="font-display text-[clamp(2.4rem,3.4vw,3.4rem)] leading-none font-semibold tracking-[-0.02em] text-foreground">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                start={inView}
                delay={i * 120}
              />
            </p>
            <p className="mt-2.5 text-[13.5px] font-semibold text-foreground">
              {stat.label}
            </p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-secondary">
              {stat.hint}
            </p>
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 hidden h-0.5 w-10 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 lg:block"
              style={{ background: "var(--svc-accent)" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
