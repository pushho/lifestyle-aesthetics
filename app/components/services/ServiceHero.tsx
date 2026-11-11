"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { getWhatsAppHref } from "@/app/lib/contact";
import type { Service } from "@/app/lib/services";

const TILT_MAX = 7;
const LERP = 0.12;

type Motion = { gx: number; gy: number; rx: number; ry: number };

/**
 * Service hero: cursor-following ambient glow, a 3D-tilting image card with
 * parallax chips, a rotating circular-text badge, numbered service tabs, and
 * a scrolling keyword marquee. Motion is pointer-driven and eased in a rAF
 * loop; everything degrades gracefully with prefers-reduced-motion.
 */
export function ServiceHero({
  service,
  all,
}: {
  service: Service;
  all: Service[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const hoveringRef = useRef(false);
  const reducedRef = useRef(false);
  const targetRef = useRef<Motion>({ gx: 0, gy: 0, rx: 0, ry: 0 });
  const currentRef = useRef<Motion>({ gx: 0, gy: 0, rx: 0, ry: 0 });

  const applyStyles = () => {
    const c = currentRef.current;
    if (glowRef.current) {
      glowRef.current.style.transform = `translate3d(${c.gx}px, ${c.gy}px, 0) translate(-50%, -50%)`;
    }
    const card = cardRef.current;
    if (card) {
      card.style.transform = `perspective(1100px) rotateX(${c.rx}deg) rotateY(${c.ry}deg)`;
      card.style.setProperty("--px", String(c.ry / TILT_MAX));
      card.style.setProperty("--py", String(-c.rx / TILT_MAX));
    }
  };

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const el = sectionRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const initial = { gx: rect.width * 0.72, gy: rect.height * 0.3 };
      targetRef.current = { ...targetRef.current, ...initial };
      currentRef.current = { ...currentRef.current, ...initial };
      applyStyles();
    }

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const tick = () => {
    const t = targetRef.current;
    const c = currentRef.current;
    c.gx += (t.gx - c.gx) * LERP;
    c.gy += (t.gy - c.gy) * LERP;
    c.rx += (t.rx - c.rx) * LERP;
    c.ry += (t.ry - c.ry) * LERP;
    applyStyles();

    const settled =
      Math.abs(t.gx - c.gx) < 0.6 &&
      Math.abs(t.gy - c.gy) < 0.6 &&
      Math.abs(t.rx - c.rx) < 0.02 &&
      Math.abs(t.ry - c.ry) < 0.02;

    if (!settled || hoveringRef.current) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      rafRef.current = null;
    }
  };

  const start = () => {
    if (rafRef.current === null && !reducedRef.current) {
      rafRef.current = requestAnimationFrame(tick);
    }
  };

  const onSectionMove = (event: PointerEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    targetRef.current.gx = event.clientX - rect.left;
    targetRef.current.gy = event.clientY - rect.top;
    start();
  };

  const onCardMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    targetRef.current.ry = px * 2 * TILT_MAX;
    targetRef.current.rx = -py * 2 * TILT_MAX;
    hoveringRef.current = true;
    start();
  };

  const onCardLeave = () => {
    targetRef.current.rx = 0;
    targetRef.current.ry = 0;
    hoveringRef.current = false;
    start();
  };

  const chipTransforms = [
    "translate3d(calc(var(--px, 0) * 16px), calc(var(--py, 0) * 12px), 54px)",
    "translate3d(calc(var(--px, 0) * -12px), calc(var(--py, 0) * -9px), 40px)",
    "translate3d(calc(var(--px, 0) * 9px), calc(var(--py, 0) * 7px), 30px)",
  ];
  const chipPositions = [
    "top-[16%] -left-4 -rotate-3 sm:-left-8",
    "bottom-[30%] -right-3 rotate-2 sm:-right-7",
    "-bottom-5 left-12 -rotate-2",
  ];

  const marquee = [...service.keywords, ...service.keywords];

  return (
    <section
      ref={sectionRef}
      onPointerMove={onSectionMove}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff5fa_0%,#fffcfd_72%)] pt-12 sm:pt-16"
      style={{ "--svc-accent": service.accent } as CSSProperties}
    >
      {/* Cursor-following ambient glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-0 h-[34rem] w-[34rem] rounded-full opacity-70 blur-3xl will-change-transform"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--svc-accent) 24%, transparent), transparent 68%)",
        }}
      />
      {/* Static brand ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[8%] h-64 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob-drift pointer-events-none absolute top-1/3 -left-24 h-56 w-72 rounded-full bg-[#ffb3d9]/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <nav aria-label="Breadcrumb" className="text-[13px] text-secondary">
          <ol className="flex list-none flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-secondary/80">Services</li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">{service.name}</li>
          </ol>
        </nav>

        <div className="mt-8 grid items-center gap-14 pb-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:pb-20">
          {/* Copy */}
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-(--svc-accent) uppercase">
              Our Services · {service.index}
              <span
                aria-hidden="true"
                className="hidden h-px w-12 bg-(--svc-accent)/50 sm:block"
              />
            </p>

            <h1 className="mt-4 font-display text-[clamp(2.6rem,5.4vw,4.3rem)] leading-[1.03] font-semibold tracking-[-0.02em] text-foreground">
              {service.titleLead}
              <br />
              <span
                className="bg-clip-text italic text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(115deg, var(--svc-accent) 10%, #b80b69 90%)",
                }}
              >
                {service.titleAccent}
              </span>
            </h1>

            <p className="mt-5 text-[16px] leading-relaxed font-medium text-foreground/80 sm:text-[17px]">
              {service.tagline}
            </p>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-secondary">
              {service.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-6 py-3 text-[13.5px] font-semibold text-white transition-all hover:bg-(--color-button-primary-hover) hover:shadow-(--shadow-hover)"
              >
                Chat on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-border-accent bg-white/70 px-6 py-3 text-[13.5px] font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary-light"
              >
                Talk to our team
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Numbered service tabs */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/70 pt-6">
              {all.map((item) => {
                const active = item.slug === service.slug;
                return (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    aria-current={active ? "page" : undefined}
                    className="group relative pb-1.5"
                  >
                    <span
                      className={`text-[12.5px] font-semibold tracking-wide transition-colors ${
                        active
                          ? "text-foreground"
                          : "text-secondary/75 group-hover:text-foreground"
                      }`}
                    >
                      <span
                        className="mr-1.5 font-display text-[11px]"
                        style={
                          active
                            ? { color: "var(--svc-accent)" }
                            : undefined
                        }
                      >
                        {item.index}
                      </span>
                      {item.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full transition-all duration-300 ${
                        active
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-40"
                      }`}
                      style={{ background: "var(--svc-accent)" }}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Tilting visual */}
          <div className="relative mx-auto w-full max-w-105 [perspective:1100px]">
            <div
              ref={cardRef}
              onPointerMove={onCardMove}
              onPointerLeave={onCardLeave}
              className="relative w-full will-change-transform [transform-style:preserve-3d]"
            >
              <div className="rounded-t-[10rem] rounded-b-[2rem] border border-primary/15 bg-white/70 p-3 shadow-(--shadow-card) backdrop-blur-sm sm:p-3.5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-[9.25rem] rounded-b-[1.5rem]">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating parallax chips */}
              {service.heroChips.map((chip, i) => (
                <span
                  key={chip}
                  className={`absolute z-10 flex items-center gap-2 rounded-full border border-(--color-border-accent) bg-white/95 px-4 py-2 text-[12px] font-semibold whitespace-nowrap text-foreground shadow-(--shadow-card) backdrop-blur-sm ${chipPositions[i]}`}
                  style={{ transform: chipTransforms[i] }}
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--svc-accent)" }}
                  />
                  {chip}
                </span>
              ))}

              {/* Rotating circular-text badge */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-2 z-10 h-24 w-24 sm:-right-5 sm:h-28 sm:w-28"
                style={{
                  transform:
                    "translate3d(calc(var(--px, 0) * -14px), calc(var(--py, 0) * -10px), 60px)",
                }}
              >
                <div className="relative h-full w-full rounded-full bg-white shadow-(--shadow-card) ring-1 ring-(--color-border-accent)">
                  <svg
                    viewBox="0 0 100 100"
                    className="animate-spin-slow absolute inset-0 h-full w-full"
                  >
                    <defs>
                      <path
                        id={`svc-badge-${service.slug}`}
                        d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                        fill="none"
                      />
                    </defs>
                    <text
                      className="text-[8.5px] font-semibold tracking-[0.2em] uppercase"
                      style={{ fill: "var(--svc-accent)" }}
                    >
                      <textPath
                        href={`#svc-badge-${service.slug}`}
                        textLength="224"
                      >
                        {`${service.name} · Lifestyle Aesthetics ·`}
                      </textPath>
                    </text>
                  </svg>
                  <span
                    className="absolute inset-0 grid place-items-center text-lg"
                    style={{ color: "var(--svc-accent)" }}
                  >
                    ✦
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyword marquee */}
      <div className="relative border-y border-border/70 bg-white/60 py-3.5 backdrop-blur-sm">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8">
          {[0, 1].map((half) => (
            <div
              key={half}
              aria-hidden={half === 1}
              className="flex items-center gap-8"
            >
              {marquee.map((keyword, i) => (
                <span
                  key={`${half}-${i}`}
                  className="flex items-center gap-8 text-[13px] font-semibold tracking-[0.14em] whitespace-nowrap uppercase"
                >
                  <span
                    className={
                      i % 2 === 0
                        ? "text-foreground/70"
                        : "text-transparent [-webkit-text-stroke:1px_var(--svc-accent)]"
                    }
                  >
                    {keyword}
                  </span>
                  <span aria-hidden="true" className="text-(--svc-accent)">
                    ✦
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
