"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";

const MAX_TILT = 9;
const LERP = 0.14;
const SPAWN_STAGGER_MS = 140;

type SolutionCardProps = {
  title: string;
  description: string;
  href: string;
  index: number;
  image: {
    src: string;
    alt: string;
    fit: "cover" | "contain";
  };
};

export function SolutionCard({
  title,
  description,
  href,
  index,
  image,
}: SolutionCardProps) {
  const [visible, setVisible] = useState(false);
  const hitRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const rectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(
    null,
  );
  const rafRef = useRef<number | null>(null);
  const hoveringRef = useRef(false);
  const targetRef = useRef({ rotateX: 0, rotateY: 0, lift: 0 });
  const currentRef = useRef({ rotateX: 0, rotateY: 0, lift: 0 });

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const hit = hitRef.current;
    if (!hit) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(hit);
    return () => observer.disconnect();
  }, []);

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function applyTransform(rotateX: number, rotateY: number, lift: number) {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `translate3d(0, ${-lift}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function tick() {
    const current = currentRef.current;
    const target = targetRef.current;

    current.rotateX += (target.rotateX - current.rotateX) * LERP;
    current.rotateY += (target.rotateY - current.rotateY) * LERP;
    current.lift += (target.lift - current.lift) * LERP;

    applyTransform(current.rotateX, current.rotateY, current.lift);

    const settled =
      Math.abs(target.rotateX - current.rotateX) < 0.02 &&
      Math.abs(target.rotateY - current.rotateY) < 0.02 &&
      Math.abs(target.lift - current.lift) < 0.02;

    if (!settled || hoveringRef.current) {
      rafRef.current = requestAnimationFrame(tick);
      return;
    }

    applyTransform(0, 0, 0);
    current.rotateX = 0;
    current.rotateY = 0;
    current.lift = 0;
    rafRef.current = null;
  }

  function startLoop() {
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }

  function handlePointerEnter(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || prefersReducedMotion()) return;

    const hit = hitRef.current;
    if (!hit) return;

    const rect = hit.getBoundingClientRect();
    rectRef.current = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };

    hoveringRef.current = true;
    targetRef.current.lift = 2;
    startLoop();
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      !rectRef.current ||
      !hoveringRef.current ||
      prefersReducedMotion()
    ) {
      return;
    }

    const { left, top, width, height } = rectRef.current;
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;

    targetRef.current = {
      rotateX: (0.5 - y) * MAX_TILT * 2,
      rotateY: (x - 0.5) * MAX_TILT * 2,
      lift: 2,
    };

    startLoop();
  }

  function handlePointerLeave() {
    hoveringRef.current = false;
    rectRef.current = null;
    targetRef.current = { rotateX: 0, rotateY: 0, lift: 0 };
    startLoop();
  }

  return (
    <div
      ref={hitRef}
      className={`group h-full [perspective:900px] card-spawn ${
        visible ? "card-spawn-visible" : ""
      }`}
      style={{ animationDelay: `${index * SPAWN_STAGGER_MS}ms` }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
    >
      <Link
        ref={cardRef}
        href={href}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#efe6ea] bg-white shadow-[0_10px_30px_rgba(41,37,43,0.06)] will-change-transform transition-[box-shadow] duration-300 ease-out group-hover:shadow-[0_16px_40px_rgba(184,11,105,0.12)]"
        style={{
          transform: "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative aspect-[5/4] overflow-hidden bg-[#f7f3f4]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`${
              image.fit === "contain" ? "object-contain p-5" : "object-cover"
            } transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
            sizes="(max-width: 640px) 100vw, 28vw"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-white to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative flex flex-1 flex-col px-5 pt-1 pb-5">
          <h3 className="text-[16px] leading-snug font-semibold text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-secondary">
            {description}
          </p>

          <span
            className="mt-4 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-colors group-hover:bg-primary-hover"
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
}
