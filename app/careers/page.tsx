import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { careerRoles } from "@/app/lib/careers";
import { ApplicationForm } from "./ApplicationForm";

export const metadata: Metadata = {
  title: "Careers | Lifestyle Aesthetics",
  description:
    "Join the Dubai team behind Lifestyle Aesthetics. Open roles in commercial, clinical education, and marketing, supporting aesthetic clinics across the Middle East.",
};

const qualities = [
  {
    index: "01",
    title: "With clinics",
    description:
      "Partnerships, training days, and the follow-up after a device or protocol lands in a practice.",
  },
  {
    index: "02",
    title: "With global brands",
    description:
      "You represent names practitioners already know, and you learn the science that sits behind them.",
  },
  {
    index: "03",
    title: "Across the region",
    description:
      "Headquarters in Dubai, with work that reaches Qatar, Bahrain, Oman, Egypt, and Kuwait.",
  },
];

const steps = [
  {
    index: "01",
    title: "Send your profile",
    description:
      "A short note and your CV. Name the role, or send an open application if you are not sure yet.",
  },
  {
    index: "02",
    title: "A conversation",
    description:
      "We reply from the Dubai office and talk through the work, the travel, and whether it fits.",
  },
  {
    index: "03",
    title: "Meet the team",
    description:
      "A second conversation with the people you would actually work beside.",
  },
];

const notes = [
  {
    title: "Your CV",
    description: "Attach it in the email that opens. The form prepares the note.",
  },
  {
    title: "The role",
    description: "Pick an opening, or send an open application with the work you want.",
  },
  {
    title: "Where you are",
    description: "Dubai is home base. Tell us if you are already in the region.",
  },
];

function ApplicationFallback() {
  return (
    <div className="min-h-[28rem] animate-pulse rounded-3xl border border-border bg-white shadow-(--shadow-card)" />
  );
}

export default function CareersPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-(--color-background)">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-primary-light)/80 via-(--color-primary-light)/25 to-transparent lg:bg-linear-to-r lg:from-(--color-primary-light)/55 lg:via-transparent lg:to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-430 lg:min-h-[520px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:py-14 xl:px-16">
            <p className="animate-fade-up text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Careers
            </p>
            <h1 className="animate-fade-up delay-1 mt-3.5 max-w-[14ch] font-display text-[clamp(2.5rem,4.8vw,4rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-foreground">
              Come work with the{" "}
              <em className="font-semibold text-primary italic">
                brands clinics trust.
              </em>
            </h1>
            <p className="animate-fade-up delay-2 mt-5 max-w-md text-[15px] leading-relaxed text-secondary">
              From Dubai, we bring injectables, clinical peels, and devices to
              aesthetic practices across the Middle East. The team is small.
              The work sits close to the clinic.
            </p>
            <div className="animate-fade-up delay-3 mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#roles"
                className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-(--color-button-primary-hover)"
              >
                View open roles
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 rounded-full border border-border-accent bg-white/80 px-5 py-3 text-[13.5px] font-semibold text-primary-dark transition-colors hover:border-primary hover:text-primary"
              >
                Send your profile
              </a>
            </div>
          </div>

          <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-full">
            <Image
              src="/about/about-story-office.jpg"
              alt="Lifestyle Aesthetics reception and showroom in Dubai"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-[center_42%]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-background) via-transparent to-transparent lg:bg-linear-to-r lg:from-(--color-background) lg:via-(--color-background)/15 lg:to-transparent"
              aria-hidden="true"
            />
            <div className="absolute right-5 bottom-5 left-5 z-10 sm:right-auto sm:bottom-8 sm:left-8 lg:left-10">
              <div className="rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-(--shadow-card) backdrop-blur-md">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                  Open roles
                </p>
                <p className="mt-1 font-display text-[2.4rem] leading-none font-semibold tracking-[-0.03em] text-foreground">
                  {String(careerRoles.length).padStart(2, "0")}
                </p>
                <p className="mt-1.5 text-[13px] text-secondary">
                  Dubai, and the wider region
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-(--color-background-white) py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              The work
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground">
              Close to the clinic, not a distant catalogue.
            </h2>
          </div>
          <ol className="mt-10 grid list-none gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
            {qualities.map((item) => (
              <li key={item.index} className="bg-white px-6 py-7 sm:px-7 sm:py-8">
                <p className="font-display text-[1.35rem] font-semibold tracking-[-0.03em] text-primary">
                  {item.index}
                </p>
                <h3 className="mt-4 font-display text-[1.55rem] leading-tight font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-secondary">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="roles"
        className="scroll-mt-24 bg-(--color-background) py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                Open roles
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground">
                Three places to start.
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-secondary sm:pb-1">
              If none of these fit, send an open application. We read every note.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white shadow-(--shadow-card)">
            {careerRoles.map((role, index) => (
              <article
                key={role.slug}
                className={`grid gap-5 px-5 py-6 sm:px-7 sm:py-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:px-8 ${
                  index > 0 ? "border-t border-border" : ""
                }`}
              >
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                    {role.department}
                    <span className="mx-2 text-border-accent" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-muted">{role.location}</span>
                  </p>
                  <h3 className="mt-2 font-display text-[clamp(1.45rem,2vw,1.85rem)] leading-tight font-semibold tracking-[-0.02em] text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-2.5 max-w-2xl text-[14.5px] leading-relaxed text-secondary">
                    {role.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
                  <p className="text-[12.5px] font-medium tracking-wide text-muted uppercase">
                    {role.type}
                  </p>
                  <Link
                    href={`/careers?role=${role.slug}#apply`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-(--color-primary-light) px-4 py-2.5 text-[13px] font-semibold text-primary-dark transition-colors hover:bg-(--color-button-primary) hover:text-white"
                  >
                    Apply
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-(--color-background-white) py-14 sm:py-16">
        <div className="mx-auto grid max-w-430 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:px-16">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              How we hire
            </p>
            <h2 className="mt-3 max-w-md font-display text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground">
              A short path, with real conversations.
            </h2>
            <ol className="mt-8 list-none space-y-6">
              {steps.map((step) => (
                <li key={step.index} className="flex gap-4">
                  <span className="font-display text-[1.15rem] font-semibold tracking-[-0.03em] text-primary">
                    {step.index}
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 max-w-md text-[14px] leading-relaxed text-secondary">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border/70 shadow-(--shadow-card)">
              <Image
                src="/training-education.jpg"
                alt="A practitioner with a client during a facial treatment"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="aspect-4/3 h-auto w-full object-cover"
              />
            </div>
            <p className="mt-3 text-[12.5px] tracking-wide text-muted">
              Education sits next to the treatment room.
            </p>
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="scroll-mt-24 bg-(--color-background) py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-430 items-start gap-8 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.72fr)] lg:gap-10 xl:px-16">
          <Suspense fallback={<ApplicationFallback />}>
            <ApplicationForm />
          </Suspense>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-border/70 shadow-(--shadow-card)">
              <Image
                src="/knowledge-hub.jpg"
                alt="A person working at a laptop in a bright office"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="aspect-5/4 h-auto w-full object-cover object-[center_20%]"
              />
            </div>
            <ul className="list-none overflow-hidden rounded-3xl border border-border bg-white">
              {notes.map((note, index) => (
                <li
                  key={note.title}
                  className={`px-5 py-4 ${index > 0 ? "border-t border-border" : ""}`}
                >
                  <p className="text-[14px] font-semibold text-foreground">
                    {note.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-secondary">
                    {note.description}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
