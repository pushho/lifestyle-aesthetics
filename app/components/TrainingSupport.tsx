import Image from "next/image";

const services = [
  {
    label: "Training & Workshops",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7 11.8V16c0 .6 2.2 2.2 5 2.2s5-1.6 5-2.2v-4.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M21 10v5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Marketing Support",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 10v4h3l8 4V6L7 10H4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7 14.2v2.3A1.5 1.5 0 0 0 8.5 18H9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M18 9.5a3.5 3.5 0 0 1 0 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Maintenance",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.2 2.2-2.1-.6-.6-2.1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Logistical Support",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 7h11v9H3V7Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 10h4l3 3v3h-7v-6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "After-Sales Support",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 12a8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 12v4.5A1.5 1.5 0 0 0 5.5 18H7v-6H5.5A1.5 1.5 0 0 0 4 13.5V12Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M20 12v4.5A1.5 1.5 0 0 1 18.5 18H17v-6h1.5A1.5 1.5 0 0 1 20 13.5V12Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M17 18v.5A2.5 2.5 0 0 1 14.5 21H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function TrainingSupport() {
  return (
    <section id="training" className="bg-(--color-background-white)">
      <div className="mx-auto">
        <div className="relative overflow-hidden bg-[#fde8f2]">
          <div className="grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              <Image
                src="/facial-treatment.webp"
                alt="Clinician performing a facial treatment with a handheld device"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-[38%_22%]"
              />
              {/* Match the panel color so the seam blends without washing out the faces */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#fde8f2] to-transparent lg:hidden"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 hidden w-28 bg-linear-to-r from-transparent to-[#fde8f2] lg:block"
                aria-hidden="true"
              />

              <p className="absolute top-[38%] left-6 z-10 max-w-[9rem] text-[11px] leading-[1.65] font-semibold tracking-[0.22em] text-white uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] sm:left-8 sm:text-[12px] sm:tracking-[0.26em]">
                Knowledge
                <br />
                Builds
                <br />
                Confidence
              </p>
            </div>

            <div className="relative flex flex-col justify-center px-6 py-8 sm:px-8 lg:py-9 lg:pr-10 lg:pl-2 xl:pr-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                Training & Support
              </p>

              <h2 className="mt-3 font-display text-[clamp(1.85rem,2.6vw,2.65rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-foreground">
                More Than Products.
                <br />
                A Partner in Your Success.
              </h2>

              <p className="mt-4 max-w-[46ch] text-[14.5px] leading-relaxed text-secondary">
                Product orientation, hands-on training, and round-table
                workshops, with marketing, device installation, warehousing, and
                technical assistance after the sale.
              </p>

              <a
                href="#training"
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-(--color-button-primary) px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-(--color-button-primary-hover) hover:shadow-(--shadow-hover)"
              >
                Explore Our Support Services
                <span aria-hidden="true">→</span>
              </a>

              <ul className="mt-8 grid list-none grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-3">
                {services.map((service) => (
                  <li key={service.label} className="flex flex-col gap-2">
                    <span className="text-primary">{service.icon}</span>
                    <span className="max-w-[7.5rem] text-[12px] leading-snug font-medium text-foreground/80">
                      {service.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
