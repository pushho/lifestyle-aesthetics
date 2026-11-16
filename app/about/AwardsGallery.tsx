"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "../components/Reveal";

export type AwardItem = {
  id: string;
  year: string;
  title: string;
  organization: string;
  detail: string;
  location: string;
  image: string;
  width: number;
  height: number;
  darkBackdrop?: boolean;
};

export function AwardsGallery({ awards }: { awards: AwardItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeAward = activeIndex !== null ? awards[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % awards.length,
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + awards.length) % awards.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, awards.length]);

  return (
    <>
      <ul className="mt-12 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((award, index) => (
          <li key={award.id}>
            <Reveal delay={(index % 4) * 90} className="h-full">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Inspect ${award.title} (${award.year})`}
                className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-(--color-border-accent)/60 bg-white text-left shadow-(--shadow-card) transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-(--shadow-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {/* Certificate / Trophy stage */}
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden border-b border-border/60 ${
                    award.darkBackdrop
                      ? "bg-[#121014]"
                      : "bg-[radial-gradient(circle_at_50%_40%,#ffffff_0%,#faf4f7_100%)]"
                  }`}
                >
                  <Image
                    src={award.image}
                    alt={`${award.title} — ${award.organization} (${award.year})`}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw"
                    className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-(--color-border-accent)/80 bg-white/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-primary-dark shadow-xs backdrop-blur-xs">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {award.year}
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-foreground opacity-0 shadow-sm ring-1 ring-border transition-all duration-300 group-hover:opacity-100 group-hover:text-primary"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M9 21H3v-6" />
                      <path d="m21 3-7 7" />
                      <path d="m3 21 7-7" />
                    </svg>
                  </span>
                </div>

                {/* Copy */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                      {award.organization}
                    </p>
                    <h3 className="mt-1.5 font-display text-[1.15rem] leading-snug font-semibold text-foreground transition-colors group-hover:text-primary-dark">
                      {award.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                      {award.detail}
                    </p>
                  </div>

                  <p className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-[11.5px] font-medium text-muted">
                    <span>{award.location}</span>
                    <span className="font-semibold text-primary opacity-80 transition-opacity group-hover:opacity-100">
                      View →
                    </span>
                  </p>
                </div>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Lightbox Modal */}
      {activeAward && activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeAward.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close preview"
              className="absolute top-3.5 right-3.5 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-foreground shadow-md ring-1 ring-border transition-colors hover:bg-primary hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Large certificate/award image */}
            <div
              className={`relative flex min-h-[300px] items-center justify-center sm:min-h-[420px] lg:min-h-[500px] ${
                activeAward.darkBackdrop
                  ? "bg-[#121014]"
                  : "bg-[radial-gradient(circle_at_50%_45%,#ffffff_0%,#f7eff3_100%)]"
              }`}
            >
              <Image
                src={activeAward.image}
                alt={`${activeAward.title} — ${activeAward.organization} (${activeAward.year})`}
                fill
                sizes="(max-width: 1024px) 92vw, 560px"
                className="object-contain p-5 sm:p-8"
              />
            </div>

            {/* Metadata & navigation */}
            <div className="flex flex-col justify-between bg-white p-6 sm:p-8">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-(--color-border-accent) bg-primary-light px-3 py-1 text-[11.5px] font-semibold text-primary-dark">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {activeAward.year}
                </span>

                <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                  {activeAward.organization}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight font-semibold text-foreground">
                  {activeAward.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-secondary">
                  {activeAward.detail}
                </p>

                <div className="mt-5 rounded-2xl border border-border bg-(--color-background-soft)/60 px-4 py-3 text-[12.5px] text-secondary">
                  <span className="font-semibold text-foreground">
                    Presented in:{" "}
                  </span>
                  {activeAward.location}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-[12px] font-medium text-muted">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(awards.length).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + awards.length) % awards.length,
                      )
                    }
                    aria-label="Previous award"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary-light hover:text-primary-dark"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((activeIndex + 1) % awards.length)
                    }
                    aria-label="Next award"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary-light hover:text-primary-dark"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
