"use client";

import Image, { type StaticImageData } from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type AnimationEvent,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { IMG_H, IMG_W } from "./HeroAmbience";
import { HeroFrame } from "./HeroFrame";
import diacore from "@/public/assets/hero/machines/shenb-diacore.png";
import pladuo from "@/public/assets/hero/machines/shenb-pladuo.png";
import sunny from "@/public/assets/hero/machines/shenb-sunny.png";
import beladona from "@/public/assets/hero/machines/wontech-beladona.png";
import lavieen from "@/public/assets/hero/machines/wontech-lavieen.png";
import pastellePro from "@/public/assets/hero/machines/wontech-pastelle-pro.png";
import vLaser from "@/public/assets/hero/machines/wontech-v-laser.png";
import inpure from "@/public/assets/hero/machines/gtg-inpure.png";
import investa from "@/public/assets/hero/machines/gtg-investa.png";

/** Where each platform's top surface sits in the plate, in image px. */
const PLATFORM_Y = { main: 675, side: 647 };

type Machine = {
  name: string;
  img: StaticImageData;
  platform: keyof typeof PLATFORM_Y;
  /** Centre of the footprint, in image px. */
  x: number;
  /** Rendered height, in image px. */
  h: number;
  /** Footprint centre as a fraction of the cutout's width, for devices with off-centre arms. */
  foot?: number;
  /** Contact shadow width, in image px. Defaults to 80% of the cutout's width. */
  shadow?: number;
};

/** Machines are listed back to front: the side platform sits behind the main one. */
const BRANDS: { name: string; machines: Machine[] }[] = [
  {
    name: "ShenB",
    machines: [
      { name: "Sunny", img: sunny, platform: "side", x: 1630, h: 450 },
      { name: "Pladuo", img: pladuo, platform: "side", x: 1765, h: 430 },
      { name: "Diacore", img: diacore, platform: "main", x: 1260, h: 490, foot: 0.3, shadow: 230 },
    ],
  },
  {
    name: "Wontech",
    machines: [
      { name: "Lavieen", img: lavieen, platform: "side", x: 1640, h: 470 },
      { name: "Beladona", img: beladona, platform: "side", x: 1765, h: 450 },
      { name: "V-Laser", img: vLaser, platform: "main", x: 1185, h: 580 },
      { name: "Pastelle Pro", img: pastellePro, platform: "main", x: 1405, h: 560 },
    ],
  },
  {
    name: "GTG",
    machines: [
      { name: "Investa", img: investa, platform: "side", x: 1700, h: 500, foot: 0.55 },
      { name: "Inpure", img: inpure, platform: "main", x: 1260, h: 520, foot: 0.47 },
    ],
  },
];

const pct = (n: number) => `${n * 100}%`;

function MachineCutout({
  machine,
  active,
  order,
  eager,
}: {
  machine: Machine;
  active: boolean;
  order: number;
  eager: boolean;
}) {
  const { img, h, foot = 0.5 } = machine;
  const w = (h * img.width) / img.height;
  const base = PLATFORM_Y[machine.platform];
  const shadow = machine.shadow ?? w * 0.8;

  return (
    <div
      className={`hero-slide absolute transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        active ? "translate-y-0 opacity-100" : "translate-y-[3%] opacity-0"
      }`}
      style={{
        left: pct((machine.x - w * foot) / IMG_W),
        bottom: pct((IMG_H - base) / IMG_H),
        height: pct(h / IMG_H),
        aspectRatio: `${img.width} / ${img.height}`,
        transitionDelay: active ? `${order * 90}ms` : "0ms",
      }}
    >
      <span
        className="absolute -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(70,35,45,0.38),transparent)]"
        style={{
          left: pct(foot),
          bottom: pct(-9 / h),
          width: pct((shadow * 1.1) / w),
          height: pct(18 / h),
        }}
      />
      <span
        className="absolute -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(70,35,45,0.55),transparent)]"
        style={{
          left: pct(foot),
          bottom: pct(-4 / h),
          width: pct((shadow * 0.85) / w),
          height: pct(8 / h),
        }}
      />
      <Image
        src={img}
        alt=""
        fill
        loading={eager ? "eager" : undefined}
        sizes={`max(${((w / IMG_H) * 83).toFixed(1)}vh, ${((w / IMG_W) * 100).toFixed(1)}vw)`}
        className="object-contain object-bottom"
      />
    </div>
  );
}

type SlideshowState = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  playing: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  reduceMotion: boolean;
  plateReady: boolean;
  setPlateReady: Dispatch<SetStateAction<boolean>>;
};

const SlideshowContext = createContext<SlideshowState | null>(null);

function useSlideshow() {
  const state = useContext(SlideshowContext);
  if (!state) throw new Error("Hero slideshow parts must render inside <HeroSlideshowProvider>");
  return state;
}

export function HeroSlideshowProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [plateReady, setPlateReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <SlideshowContext
      value={{ index, setIndex, playing, setPlaying, reduceMotion, plateReady, setPlateReady }}
    >
      {children}
    </SlideshowContext>
  );
}

/** The empty stage the machines stand on; they stay hidden until it has loaded. */
export function HeroPlate() {
  const { setPlateReady } = useSlideshow();

  return (
    <Image
      src="/assets/bg/hero_bg6.png"
      alt=""
      fill
      preload
      quality={90}
      sizes="100vw"
      onLoad={() => setPlateReady(true)}
      className="animate-image-reveal object-cover object-[72%_center] sm:object-right"
    />
  );
}

export function HeroMachines() {
  const { index, plateReady } = useSlideshow();

  return (
    <HeroFrame>
      {BRANDS.map((brand, b) =>
        brand.machines.map((machine, m) => (
          <MachineCutout
            key={`${brand.name}-${machine.name}`}
            machine={machine}
            active={plateReady && b === index}
            order={m}
            eager={b === 0}
          />
        )),
      )}
    </HeroFrame>
  );
}

/** Centre of the main platform's front face, in image px. */
const PLATFORM_LABEL = { x: 1260, y: 717, size: 40 };

/** The active brand's name, set on the front of the main platform. */
export function HeroPlatformLabel() {
  const { index, plateReady } = useSlideshow();
  const { x, y, size } = PLATFORM_LABEL;
  const baseline = y + size * 0.36;

  return (
    <HeroFrame>
      <svg
        viewBox={`0 0 ${IMG_W} ${IMG_H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {BRANDS.map((brand, b) => {
          const active = plateReady && b === index;
          return (
            <g
              key={brand.name}
              className={`hero-slide font-display transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                active ? "translate-y-0 opacity-100 delay-200" : "translate-y-1 opacity-0"
              }`}
              fontSize={size}
              fontWeight={600}
              letterSpacing={size * 0.32}
              textAnchor="middle"
            >
              {/* Light lip under each stroke so the lettering reads as engraved */}
              <text x={x} y={baseline + 1.5} fill="#fff" fillOpacity={0.55}>
                {brand.name.toUpperCase()}
              </text>
              <text x={x} y={baseline} fill="#4a2c37">
                {brand.name.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </HeroFrame>
  );
}

export function HeroBrandTabs({ className = "" }: { className?: string }) {
  const { index, setIndex, playing, setPlaying, reduceMotion, plateReady } = useSlideshow();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const paused = !playing || hovered || focused;
  const autoplay = playing && !reduceMotion && plateReady;
  const active = BRANDS[index];
  const names = [...active.machines].sort((a, b) => a.x - b.x).map((m) => m.name);

  function onRailEnd(event: AnimationEvent<HTMLSpanElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.animationName !== "hero-rail") return;
    if (reduceMotion || paused) return;
    setIndex((current) => (current + 1) % BRANDS.length);
  }

  return (
    <div
      className={className}
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
      <div role="group" aria-label="Featured device brands" className="flex items-end gap-5 sm:gap-7">
        {BRANDS.map((brand, b) => {
          const current = b === index;
          return (
            <button
              key={brand.name}
              type="button"
              aria-current={current ? "true" : undefined}
              aria-label={`Show ${brand.name} devices`}
              onClick={() => setIndex(b)}
              className="group flex min-h-11 min-w-16 flex-col justify-end gap-2 rounded-sm text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span className="flex items-baseline gap-1.5">
                <span
                  className={`font-display text-[12px] font-semibold tabular-nums ${
                    current ? "text-primary" : "text-white/45 group-hover:text-white/70"
                  }`}
                  aria-hidden="true"
                >
                  {String(b + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                    current ? "text-white" : "text-white/55 group-hover:text-white/80"
                  }`}
                >
                  {brand.name}
                </span>
              </span>
              <span className="relative h-px w-full bg-white/20" aria-hidden="true">
                {current ? (
                  <span
                    key={index}
                    className={`absolute inset-0 origin-left bg-primary ${
                      autoplay ? "animate-hero-rail motion-reduce:animate-none" : ""
                    }`}
                    style={autoplay ? { animationPlayState: paused ? "paused" : "running" } : undefined}
                    onAnimationEnd={onRailEnd}
                  />
                ) : null}
              </span>
            </button>
          );
        })}

        {!reduceMotion && (
          <button
            type="button"
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            onClick={() => setPlaying((p) => !p)}
            className="-ml-2 grid size-11 place-items-center rounded-full text-white/55 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg viewBox="0 0 12 12" className="size-2.5" fill="currentColor" aria-hidden="true">
              {playing ? (
                <path d="M2.5 1.5h2.25v9H2.5zM7.25 1.5H9.5v9H7.25z" />
              ) : (
                <path d="M3 1.25v9.5L10.5 6z" />
              )}
            </svg>
          </button>
        )}
      </div>

      <p
        className="mt-2.5 text-[12px] tracking-[0.04em] text-white/60"
        aria-live={autoplay ? "off" : "polite"}
      >
        <span className="sr-only">{active.name}: </span>
        {names.join(" · ")}
      </p>
    </div>
  );
}
