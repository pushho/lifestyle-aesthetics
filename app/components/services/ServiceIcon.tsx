import type { ServiceIconKey } from "@/app/lib/services";

/**
 * Stroke-style line icons for the services pages. Kept visually consistent
 * with the iconography used across the homepage (24×24, 1.6 stroke).
 */
export function ServiceIcon({
  name,
  size = 22,
}: {
  name: ServiceIconKey;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.2 2.2-2.1-.6-.6-2.1 2-2Z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="16" rx="2.5" />
          <path d="M8 3v4M16 3v4M4 11h16" />
          <path d="m9 15.5 2 2 4-4.5" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path d="M4.5 19a8.5 8.5 0 1 1 15 0" />
          <path d="m12 13 3.2-3.7" />
          <circle cx="12" cy="13" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 5 13.5h5L9 22l8-11.5h-5l1-8.5Z" />
        </svg>
      );
    case "headset":
      return (
        <svg {...common}>
          <path d="M4 12a8 8 0 0 1 16 0" />
          <path d="M4 12v4.5A1.5 1.5 0 0 0 5.5 18H7v-6H5.5A1.5 1.5 0 0 0 4 13.5V12Z" />
          <path d="M20 12v4.5a1.5 1.5 0 0 1-1.5 1.5H17v-6h1.5a1.5 1.5 0 0 1 1.5 1.5V12Z" />
          <path d="M17 18v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
        </svg>
      );
    case "chip":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3" />
        </svg>
      );
    case "graduation":
      return (
        <svg {...common}>
          <path d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z" />
          <path d="M7 11.8V16c0 .6 2.2 2.2 5 2.2s5-1.6 5-2.2v-4.2" />
          <path d="M21 10v5.5" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3 9 4.7-9 4.7-9-4.7L12 3Z" />
          <path d="m3 12.4 9 4.7 9-4.7" />
          <path d="m3 16.8 9 4.7 9-4.7" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M5 21V5.5A1.5 1.5 0 0 1 6.5 4h6A1.5 1.5 0 0 1 14 5.5V21" />
          <path d="M14 9.5h4.5A1.5 1.5 0 0 1 20 11V21" />
          <path d="M3 21h18" />
          <path d="M8 8h1.5M8 12h1.5M8 16h1.5M16.5 13h1M16.5 17h1" />
        </svg>
      );
    case "video":
      return (
        <svg {...common}>
          <rect x="3" y="6.5" width="12" height="11" rx="2" />
          <path d="m15 10.7 6-3.2v9l-6-3.2" />
        </svg>
      );
    case "certificate":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="4.8" />
          <path d="m10.3 9 1.2 1.2 2.4-2.5" />
          <path d="M9.4 12.9 8 21l4-2.3 4 2.3-1.4-8.1" />
        </svg>
      );
    case "protocol":
      return (
        <svg {...common}>
          <path d="M7 3.5h7L18.5 8v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
          <path d="M13.8 3.8V8.5h4.4" />
          <path d="M9.5 12h5.5M9.5 15.2h5.5M9.5 18.4h3.5" />
        </svg>
      );
    case "warehouse":
      return (
        <svg {...common}>
          <path d="M3.5 21V9.8L12 4l8.5 5.8V21" />
          <path d="M2.5 21h19" />
          <path d="M9.5 21v-6.5h5V21" />
        </svg>
      );
    case "snowflake":
      return (
        <svg {...common}>
          <path d="M12 3v18M4.8 6.9l14.4 10.2M19.2 6.9 4.8 17.1" />
          <path d="m10 5.2 2-2.2 2 2.2M10 18.8l2 2.2 2-2.2" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M3 7h11v9H3V7Z" />
          <path d="M14 10h4l3 3v3h-7v-6Z" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="17.5" cy="17.5" r="1.5" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <rect x="5.5" y="5" width="13" height="16.5" rx="2" />
          <rect x="8.5" y="2.8" width="7" height="3.8" rx="1.2" />
          <path d="M9 11h6M9 14.5h6M9 18h4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="m12 3 7 2.6v5.6c0 4.4-3 7.6-7 9.3-4-1.7-7-4.9-7-9.3V5.6L12 3Z" />
          <path d="m9 11.6 2.1 2.1 4-4.4" />
        </svg>
      );
    case "radar":
      return (
        <svg {...common}>
          <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5" />
          <path d="M12 8a4 4 0 1 0 4 4" />
          <path d="m12 12 6-6" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M12 6.5C10.2 4.9 7.2 4.5 4 5v13.5c3.2-.5 6.2-.1 8 1.5 1.8-1.6 4.8-2 8-1.5V5c-3.2-.5-6.2-.1-8 1.5Z" />
          <path d="M12 6.5V20" />
        </svg>
      );
    case "social":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2.8" />
          <circle cx="17.5" cy="5.5" r="2.5" />
          <circle cx="17.5" cy="18.5" r="2.5" />
          <path d="m8.5 10.6 6.6-3.8M8.5 13.4l6.6 3.8" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4.8" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "print":
      return (
        <svg {...common}>
          <path d="M7 8V3.5h10V8" />
          <rect x="3.5" y="8" width="17" height="8.5" rx="2" />
          <path d="M7 13.5h10v7H7v-7Z" />
          <path d="M17.3 11h.01" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 4.5 13.8 9l4.7 1.8-4.7 1.8L12 17.5l-1.8-4.9-4.7-1.8L10.2 9 12 4.5Z" />
          <path d="m18.6 3.2.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />
          <path d="m5.6 16.4.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M12 2.8c3.3 1.9 4.8 5.3 4.8 9.2l-4.8 4.4L7.2 12c0-3.9 1.5-7.3 4.8-9.2Z" />
          <circle cx="12" cy="9.6" r="1.7" />
          <path d="M7.2 12 4 16.8l4-1M16.8 12l3.2 4.8-4-1M12 16.4V21" />
        </svg>
      );
  }
}
