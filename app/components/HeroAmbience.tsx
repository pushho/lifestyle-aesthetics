import type { CSSProperties } from "react";

const IMG_W = 1965;
const IMG_H = 800;

const RING = { cx: 1290, cy: 522, r: 407 };

/** Arc of the ring that isn't hidden behind the devices, angles in degrees (SVG y-down). */
function ringArc(fromDeg: number, toDeg: number) {
  const p = (deg: number) => {
    const a = (deg * Math.PI) / 180;
    return `${(RING.cx + RING.r * Math.cos(a)).toFixed(1)} ${(RING.cy + RING.r * Math.sin(a)).toFixed(1)}`;
  };
  const largeArc = toDeg - fromDeg > 180 ? 1 : 0;
  return `M ${p(fromDeg)} A ${RING.r} ${RING.r} 0 ${largeArc} 1 ${p(toDeg)}`;
}

const RING_HALO = ringArc(160, 312);
/** Runs past ~322°, where the ring disappears behind the right-hand device; the mask below hides that part. */
const RING_COMET = ringArc(168, 340);

/** Silhouette of the right-hand device's screen and body, in image px. */
const RIGHT_DEVICE = "1555,275 1614,262 1700,270 1725,800 1495,800 1500,290";

/** Stacked strokes, all ending at the same leading edge, so the pulse has a bright head and a fading tail. `len` is in % of the arc. */
const PULSE_LAYERS = [
  { len: 22, width: 18, color: "#ff9cc9", opacity: 0.35, filter: "url(#ha-soft)" },
  { len: 14, width: 4, color: "#ffd6ea", opacity: 0.55 },
  { len: 6, width: 6, color: "#fff", opacity: 0.9, filter: "url(#ha-glow)" },
  { len: 1.5, width: 10, color: "#fff", opacity: 1, filter: "url(#ha-glow)" },
];

/** Head travels from 0 to past the arc end plus the longest tail, identically for every layer. */
const PULSE_TRAVEL = 100 + Math.max(...PULSE_LAYERS.map((l) => l.len));

const RIBBON =
  "M 0 675 C 110 712 250 758 420 766 C 560 772 660 740 730 690 C 800 640 880 580 960 576 C 1030 572 1080 582 1105 590";

const SCREENS = [
  { x: 1210, y: 233, r: 24 },
  { x: 1624, y: 318, r: 17 },
];

const PARTICLES = [
  { x: 760, y: 620, r: 3.2, d: 14, delay: 0 },
  { x: 880, y: 560, r: 2.2, d: 11, delay: 3 },
  { x: 960, y: 470, r: 3, d: 16, delay: 6 },
  { x: 1000, y: 640, r: 2.6, d: 12, delay: 1.5 },
  { x: 1420, y: 420, r: 3, d: 15, delay: 8 },
  { x: 1480, y: 330, r: 2, d: 10, delay: 4.5 },
  { x: 1540, y: 200, r: 2.4, d: 13, delay: 9 },
  { x: 1700, y: 420, r: 3.4, d: 13, delay: 2 },
  { x: 1860, y: 700, r: 2.8, d: 14, delay: 10 },
  { x: 620, y: 560, r: 2, d: 12, delay: 5.5 },
];

export function HeroAmbience({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${IMG_W} ${IMG_H}`}
      preserveAspectRatio="none"
      className={`hero-ambience pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="ha-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="ha-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="ha-mote">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffc2df" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ha-sweep" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="ha-behind-device" maskUnits="userSpaceOnUse">
          <rect width={IMG_W} height={IMG_H} fill="#fff" />
          <polygon points={RIGHT_DEVICE} fill="#000" />
        </mask>
        <clipPath id="ha-glass">
          <rect x="1745" y="0" width="220" height="640" />
        </clipPath>
      </defs>

      {/* Ring breathing halo */}
      <path
        className="ha-ring-breathe"
        d={RING_HALO}
        fill="none"
        strokeLinecap="round"
        stroke="#ffd3e6"
        strokeWidth="22"
        filter="url(#ha-soft)"
      />
      <g opacity="0.5">
        <path
          className="ha-ring-breathe"
          d={RING_HALO}
          fill="none"
          strokeLinecap="round"
          stroke="#fff"
          strokeWidth="3"
        />
      </g>

      {/* Light pulse running along the visible arc of the ring */}
      <g className="ha-pulse" mask="url(#ha-behind-device)">
        {PULSE_LAYERS.map((l, i) => (
          <path
            key={i}
            d={RING_COMET}
            pathLength={100}
            fill="none"
            stroke={l.color}
            strokeWidth={l.width}
            strokeLinecap="round"
            opacity={l.opacity}
            filter={l.filter}
            style={
              {
                "--len": l.len,
                "--from": l.len,
                "--to": l.len - PULSE_TRAVEL,
              } as CSSProperties
            }
          />
        ))}
      </g>

      {/* Shimmer running along the ribbon */}
      <path
        className="ha-ribbon"
        d={RIBBON}
        pathLength={100}
        fill="none"
        stroke="#fff"
        strokeWidth="10"
        strokeLinecap="round"
        filter="url(#ha-soft)"
      />

      {/* Device screen pulses */}
      {SCREENS.map((s, i) => (
        <g key={i}>
          {[0, 1].map((k) => (
            <circle
              key={k}
              className="ha-ping"
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="none"
              stroke="#8fd8ff"
              strokeWidth="2"
              style={{
                transformOrigin: `${s.x}px ${s.y}px`,
                animationDelay: `${i * 0.9 + k * 1.6}s`,
              }}
            />
          ))}
        </g>
      ))}

      {/* Light sweep across the glass panels */}
      <g clipPath="url(#ha-glass)">
        <rect
          className="ha-sweep"
          x="1645"
          y="0"
          width="120"
          height="640"
          fill="url(#ha-sweep)"
        />
      </g>

      {/* Floating light motes */}
      {PARTICLES.map((p, i) => (
        <circle
          key={i}
          className="ha-mote"
          cx={p.x}
          cy={p.y}
          r={p.r * 2.4}
          fill="url(#ha-mote)"
          style={{
            animationDuration: `${p.d}s`,
            animationDelay: `-${p.delay}s`,
          }}
        />
      ))}
    </svg>
  );
}

export const HERO_IMAGE_RATIO = IMG_W / IMG_H;
