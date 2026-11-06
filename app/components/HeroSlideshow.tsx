"use client";

import Image from "next/image";
import { useEffect, useState, type AnimationEvent } from "react";

const SLIDES = [
  {
    src: "/assets/bg/hero_bg3.png",
    alt: "Aesthetic treatment devices from the Lifestyle Aesthetics portfolio",
    label: "Devices",
    fit: "origin-right scale-[1.52] object-contain object-right",
  },
  {
    src: "/assets/bg/hero_bg2.jpg",
    alt: "VIVACE and Lavieen treatment systems on a pale studio plinth",
    label: "Systems",
    fit: "object-cover object-right",
  },
  {
    src: "/assets/bg/hero_bg1.jpg",
    alt: "VIVACE and Lavieen devices in a blush studio setting",
    label: "Studio",
    fit: "object-cover object-right",
  },
] as const;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const paused = hovered || focused;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function showSlide(next: number) {
    setIndex(next);
  }

  function onRailEnd(event: AnimationEvent<HTMLSpanElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.animationName !== "hero-rail") return;
    if (reduceMotion || paused) return;
    setIndex((current) => (current + 1) % SLIDES.length);
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[380px] shrink-0 sm:max-w-[420px] lg:mx-0 lg:w-[min(34%,400px)] lg:max-w-none xl:w-[min(36%,460px)] 2xl:w-[min(38%,500px)]"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setHovered(false);
      }}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
          setFocused(false);
        }
      }}
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-(--color-background) lg:aspect-[6/5]">
        {SLIDES.map((slide, slideIndex) => {
          const active = slideIndex === index;
          return (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              preload={slideIndex === 0}
              quality={75}
              sizes="(min-width: 1536px) 500px, (min-width: 1280px) 460px, (min-width: 1024px) 400px, 420px"
              aria-hidden={!active}
              className={`hero-slide transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                active ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
              } ${slide.fit}`}
            />
          );
        })}
      </div>

      <div
        role="group"
        aria-label="Product slides"
        className="mt-3 flex items-end justify-end gap-4 sm:gap-5"
      >
        {SLIDES.map((slide, slideIndex) => {
          const active = slideIndex === index;
          const number = String(slideIndex + 1).padStart(2, "0");
          return (
            <button
              key={slide.src}
              type="button"
              aria-current={active ? "true" : undefined}
              aria-label={`Show slide ${slideIndex + 1} of ${SLIDES.length}: ${slide.label}`}
              onClick={() => showSlide(slideIndex)}
              className="group flex min-h-11 min-w-11 flex-col justify-end gap-1.5 rounded-sm px-0.5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span className="flex items-baseline gap-1.5">
                <span
                  className={`font-display text-[12px] font-semibold tabular-nums ${
                    active ? "text-primary" : "text-muted group-hover:text-secondary"
                  }`}
                  aria-hidden="true"
                >
                  {number}
                </span>
                <span
                  className={`text-[10px] font-semibold tracking-[0.16em] uppercase ${
                    active
                      ? "text-primary"
                      : "text-muted group-hover:text-secondary"
                  }`}
                >
                  {slide.label}
                </span>
              </span>
              <span className="relative h-px w-full bg-border" aria-hidden="true">
                {active ? (
                  <span
                    className={`absolute inset-0 origin-left bg-primary ${
                      reduceMotion
                        ? ""
                        : "animate-hero-rail motion-reduce:animate-none"
                    }`}
                    style={
                      reduceMotion
                        ? undefined
                        : { animationPlayState: paused ? "paused" : "running" }
                    }
                    onAnimationEnd={onRailEnd}
                  />
                ) : null}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
