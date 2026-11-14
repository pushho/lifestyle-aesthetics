import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { careerRoles } from "@/app/lib/careers";
import { ApplicationForm } from "./ApplicationForm";

export const metadata: Metadata = {
  title: "Careers | Lifestyle Aesthetics",
  description:
    "Open roles at Lifestyle Aesthetics in Dubai. Apply for commercial, clinical education, and marketing positions supporting aesthetic clinics across the Middle East.",
};

const steps = [
  {
    title: "Send your profile",
    description: "Pick a role, add a short note, and attach your CV in the email.",
  },
  {
    title: "We reply",
    description: "The Dubai office writes back about the role and next steps.",
  },
  {
    title: "Meet the team",
    description: "A conversation with the people you would work with.",
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
      <section className="border-b border-border bg-(--color-background)">
        <div className="mx-auto grid max-w-430 lg:min-h-[440px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:py-14 xl:px-16">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Careers
            </p>
            <h1 className="mt-3.5 max-w-[12ch] font-display text-[clamp(2.5rem,4.8vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-foreground">
              Work with us in Dubai.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-secondary">
              We supply injectables, clinical peels, and devices to aesthetic
              clinics across the Middle East. Open roles are full-time and
              based in Dubai.
            </p>
            <div className="mt-7">
              <a
                href="#roles"
                className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-(--color-button-primary-hover)"
              >
                See open roles
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-full">
            <div className="animate-image-reveal absolute inset-0">
              <Image
                src="/career/career_hero.webp"
                alt="Dubai skyline at soft dusk with blush light accents"
                fill
                preload
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[center_42%]"
              />
            </div>
            {/* Soft left fade into the copy column */}
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-background) via-transparent to-transparent lg:bg-linear-to-r lg:from-(--color-background) lg:via-(--color-background)/55 lg:to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section
        id="roles"
        className="scroll-mt-24 bg-(--color-background-white) py-14 sm:py-16"
      >
        <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.5rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground">
              Open roles
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-secondary">
              {`${careerRoles.length} open ${careerRoles.length === 1 ? "role" : "roles"}. If none of them fit, choose Open application in the form.`}
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white">
            {careerRoles.map((role, index) => (
              <article
                key={role.slug}
                className={`grid gap-5 px-5 py-6 sm:px-7 sm:py-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:px-8 ${
                  index > 0 ? "border-t border-border" : ""
                }`}
              >
                <div>
                  <p className="text-[12.5px] font-medium text-secondary">
                    {role.department}
                    <span className="mx-2 text-border-accent" aria-hidden="true">
                      ·
                    </span>
                    {role.location}
                    <span className="mx-2 text-border-accent" aria-hidden="true">
                      ·
                    </span>
                    {role.type}
                  </p>
                  <h3 className="mt-1.5 font-display text-[clamp(1.4rem,2vw,1.75rem)] leading-tight font-semibold tracking-[-0.02em] text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-secondary">
                    {role.summary}
                  </p>
                </div>
                <Link
                  href={`/careers?role=${role.slug}#apply`}
                  className="inline-flex w-fit items-center gap-1.5 rounded-full bg-(--color-primary-light) px-4 py-2.5 text-[13px] font-semibold text-primary-dark transition-colors hover:bg-(--color-button-primary) hover:text-white"
                >
                  Apply
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="scroll-mt-24 border-t border-border bg-(--color-background) py-14 sm:py-16"
      >
        <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
          <ol className="mb-8 grid list-none gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="bg-white px-5 py-5 sm:px-6">
                <p className="text-[12px] font-semibold tracking-[0.16em] text-primary uppercase">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-[15.5px] font-semibold text-foreground">
                  {step.title}
                </p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-secondary">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mx-auto max-w-3xl">
            <Suspense fallback={<ApplicationFallback />}>
              <ApplicationForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
