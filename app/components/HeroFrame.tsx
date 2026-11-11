import type { ReactNode } from "react";
import { HERO_IMAGE_RATIO } from "./HeroAmbience";

/** Mirrors the hero image's object-cover crop so its children stay pinned to the artwork. */
export function HeroFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="animate-image-reveal pointer-events-none absolute inset-0 [container-type:size]"
      aria-hidden="true"
    >
      <div
        className="absolute top-1/2 left-[72%] -translate-x-[72%] -translate-y-1/2 sm:left-full sm:-translate-x-full"
        style={{
          width: `max(100cqw, calc(100cqh * ${HERO_IMAGE_RATIO}))`,
          height: `max(100cqh, calc(100cqw / ${HERO_IMAGE_RATIO}))`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
