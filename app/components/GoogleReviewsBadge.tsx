"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  toReviewCards,
  useGoogleReviews,
} from "@/app/lib/google-reviews";
import { ChevronUp, GoogleIcon } from "./icons";
import { Stars } from "./Stars";

export function GoogleReviewsBadge() {
  const google = useGoogleReviews();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPointerType = useRef<string | null>(null);
  const panelId = useId();

  const rating = google.rating ?? 5;
  const total = google.total ?? google.reviews.length;
  const cards = toReviewCards(google.reviews);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  const openPanel = () => {
    cancelClose();
    setOpen(true);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 left-4 z-50 print:hidden md:left-6"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") openPanel();
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") scheduleClose();
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div
        id={panelId}
        role="dialog"
        aria-label="Google reviews"
        inert={!open}
        className={`absolute bottom-full left-0 origin-bottom-left pb-3 transition duration-200 ease-out ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <div className="w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border bg-(--color-background-white) shadow-(--shadow-hover)">
          <div className="flex items-center gap-4 border-b border-border bg-linear-to-br from-primary/10 via-transparent to-transparent px-5 py-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white shadow-(--shadow-card)">
              <GoogleIcon className="size-6" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-muted uppercase">
                Google reviews
              </p>
              <div className="mt-1 flex items-center gap-2.5">
                <span className="font-display text-2xl leading-none font-bold text-foreground tabular-nums">
                  {rating.toFixed(1)}
                </span>
                <Stars
                  score={rating}
                  className="size-4"
                  filledClassName="text-primary"
                  emptyClassName="text-border"
                />
              </div>
            </div>
            <p className="text-right text-xs leading-snug text-muted">
              <span className="block font-display text-base font-bold text-foreground tabular-nums">
                {total}
              </span>
              reviews
            </p>
          </div>

          <ul className="max-h-[min(24rem,55vh)] divide-y divide-border overflow-y-auto overscroll-contain [scrollbar-color:rgba(41,37,43,0.2)_transparent] [scrollbar-width:thin]">
            {cards.map((item) => (
              <li key={item.key} className="px-5 py-4">
                <div className="flex items-center gap-3">
                  {item.photo ? (
                    <Image
                      src={item.photo}
                      alt=""
                      width={36}
                      height={36}
                      referrerPolicy="no-referrer"
                      className="size-9 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-[11px] font-bold tracking-wide text-white"
                      aria-hidden
                    >
                      {item.initials}
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-sm font-bold text-foreground">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-4 hover:text-primary hover:underline"
                        >
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </p>
                    <p className="truncate text-xs text-muted">{item.subtitle}</p>
                  </div>
                  <span className="sr-only">{item.rating} out of 5 stars</span>
                  <Stars
                    score={item.rating}
                    className="size-3"
                    filledClassName="text-primary"
                    emptyClassName="text-border"
                  />
                </div>
                <p className="mt-2.5 line-clamp-4 text-sm leading-relaxed text-secondary">
                  {item.quote}
                </p>
              </li>
            ))}
          </ul>

          {google.maps_url ? (
            <a
              href={google.maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-t border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-light"
            >
              See all reviews on Google
              <ChevronUp className="size-3.5 rotate-90" />
            </a>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onPointerDown={(event) => {
          lastPointerType.current = event.pointerType;
        }}
        onClick={() => {
          if (lastPointerType.current === "mouse") openPanel();
          else setOpen((value) => !value);
          lastPointerType.current = null;
        }}
        className={`group flex items-center gap-3 rounded-2xl border bg-(--color-background-white)/95 py-2 pr-3 pl-2 text-left shadow-(--shadow-card) backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-(--shadow-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:gap-3.5 sm:py-2.5 sm:pl-2.5 ${
          open ? "border-primary/40" : "border-border"
        }`}
      >
        <span className="sr-only">
          Rated {rating.toFixed(1)} out of 5 from {total} Google reviews. Show
          reviews.
        </span>
        <span
          aria-hidden="true"
          className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white sm:size-10"
        >
          <GoogleIcon className="size-5 sm:size-6" />
        </span>
        <span aria-hidden="true" className="flex flex-col justify-center">
          <span className="flex items-center gap-2">
            <span className="font-display text-lg leading-none font-bold text-foreground tabular-nums sm:text-xl">
              {rating.toFixed(1)}
            </span>
            <Stars
              score={rating}
              className="size-3.5 sm:size-4"
              filledClassName="text-primary"
              emptyClassName="text-border"
            />
          </span>
          <span className="mt-1 text-[10px] font-semibold tracking-[0.16em] text-muted uppercase">
            {total} Google reviews
          </span>
        </span>
        <ChevronUp
          className={`size-4 shrink-0 text-muted transition duration-200 group-hover:text-primary ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>
    </div>
  );
}
