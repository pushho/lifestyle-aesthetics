import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, WhatsAppIcon } from "@/app/components/icons";
import { CONTACT, getTelHref, getWhatsAppHref } from "@/app/lib/contact";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Lifestyle Aesthetics",
  description:
    "Contact the Lifestyle Aesthetics team in Dubai for product enquiries, clinic partnerships, and training support across the Middle East.",
};

const channels = [
  {
    title: "Call the Dubai office",
    value: CONTACT.phoneDisplay,
    href: getTelHref(),
    hint: "Speak with the team directly",
    external: false,
    icon: <PhoneIcon className="size-5" />,
  },
  {
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    hint: "For product and partnership notes",
    external: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden="true"
      >
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7 7.5 6L19.5 7" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    value: "Message the team",
    href: getWhatsAppHref(),
    hint: "A quick way to start a conversation",
    external: true,
    icon: <WhatsAppIcon className="size-5" />,
  },
];

const topics = [
  {
    title: "Products",
    description:
      "Injectables, clinical peels, and devices - including availability, indications, and what fits your treatment menu.",
  },
  {
    title: "Partnerships",
    description:
      "Clinic supply, distribution, and long-term support for practices across the UAE and neighbouring markets.",
  },
  {
    title: "Training",
    description:
      "Onboarding, clinical education, and the practical support that follows a new device or protocol.",
  },
];

const locations = [
  { country: "UAE", city: "Dubai", headquarters: true },
  { country: "Qatar", city: "Doha", headquarters: false },
  { country: "Bahrain", city: "Manama", headquarters: false },
  { country: "Oman", city: "Muscat", headquarters: false },
  { country: "Egypt", city: "Cairo", headquarters: false },
  { country: "Kuwait", city: "Kuwait City", headquarters: false },
];

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-(--color-background)">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-primary-light)/80 via-(--color-primary-light)/30 to-transparent lg:bg-linear-to-r lg:from-(--color-primary-light)/70 lg:via-transparent lg:to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-430 lg:min-h-[460px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:py-14 xl:px-16">
            <p className="animate-fade-up text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Contact
            </p>
            <h1 className="animate-fade-up delay-1 mt-3.5 max-w-[12ch] font-display text-[clamp(2.5rem,4.8vw,4rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-foreground">
              Let&apos;s talk about{" "}
              <em className="font-semibold text-primary italic">your practice.</em>
            </h1>
            <p className="animate-fade-up delay-2 mt-5 max-w-md text-[15px] leading-relaxed text-secondary">
              Products, devices, training, or a clinic partnership. The Dubai
              team supports aesthetic practices across the UAE, Qatar, Bahrain,
              Oman, Egypt, and Kuwait.
            </p>
            <div className="animate-fade-up delay-3 mt-7">
              <Link
                href="#enquiry"
                className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-(--color-button-primary-hover)"
              >
                Send an enquiry
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
            <Image
              src="/about/dubai-skyline.jpg"
              alt="Dubai skyline at dusk, home of the Lifestyle Aesthetics office"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-[center_40%]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-background) via-transparent to-transparent lg:bg-linear-to-r lg:from-(--color-background) lg:via-(--color-background)/20 lg:to-transparent"
              aria-hidden="true"
            />
            <div className="absolute right-5 bottom-5 left-5 z-10 sm:right-auto sm:bottom-8 sm:left-8 sm:max-w-xs lg:left-10">
              <div className="rounded-2xl border border-white/70 bg-white/88 p-4 shadow-(--shadow-card) backdrop-blur-md sm:p-5">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                  Headquarters
                </p>
                <p className="mt-1.5 font-display text-[1.7rem] leading-none font-semibold text-foreground">
                  Dubai, UAE
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                  Since 2011, supplying clinics across the Middle East.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="enquiry"
        className="scroll-mt-6 bg-(--color-background) py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-430 items-start gap-8 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.72fr)] lg:gap-10 xl:px-16">
          <ContactForm />

          <aside className="flex flex-col gap-3 lg:sticky lg:top-6">
            {channels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-(--shadow-card) transition-all hover:-translate-y-0.5 hover:border-border-accent hover:shadow-(--shadow-hover) sm:p-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-(--color-primary-light) text-primary">
                  {channel.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-semibold tracking-wide text-muted uppercase">
                    {channel.title}
                  </span>
                  <span className="mt-0.5 block text-[15px] font-semibold text-foreground group-hover:text-primary-dark">
                    {channel.value}
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-secondary">
                    {channel.hint}
                  </span>
                </span>
              </a>
            ))}

            <div className="rounded-2xl bg-[linear-gradient(145deg,#f472b0_0%,#e83684_46%,#b00862_100%)] p-5 text-white sm:p-6">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-white/80 uppercase">
                Who we work with
              </p>
              <p className="mt-2 font-display text-[1.65rem] leading-tight font-semibold">
                Built for licensed clinics.
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/90">
                Lifestyle Aesthetics supplies licensed aesthetic practices.
                Tell us about your clinic and we will point you to the right
                solution.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-(--color-background-white) py-14 sm:py-16">
        <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            How we can help
          </p>
          <h2 className="mt-3 max-w-xl font-display text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground">
            What clinics usually ask us about.
          </h2>
          <ul className="mt-8 grid list-none gap-4 md:grid-cols-3">
            {topics.map((topic) => (
              <li
                key={topic.title}
                className="rounded-2xl border border-border bg-(--color-background) p-5 sm:p-6"
              >
                <h3 className="font-display text-[1.55rem] leading-tight font-semibold text-foreground">
                  {topic.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-secondary">
                  {topic.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-(--color-background) py-14 sm:py-16">
        <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                Regional presence
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground">
                Headquartered in Dubai.
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-secondary">
              One team, supporting clinics in six markets across the Middle East.
            </p>
          </div>
          <ul className="mt-8 grid list-none grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {locations.map((location) => (
              <li
                key={location.country}
                className={`rounded-2xl border px-4 py-4 ${
                  location.headquarters
                    ? "border-border-accent bg-(--color-primary-light)"
                    : "border-border bg-white"
                }`}
              >
                <p className="text-[14px] font-semibold text-foreground">
                  {location.country}
                </p>
                <p className="mt-0.5 text-[12.5px] text-secondary">{location.city}</p>
                {location.headquarters ? (
                  <p className="mt-2 text-[11px] font-semibold tracking-wide text-primary uppercase">
                    Headquarters
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
