"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { getWhatsAppHref } from "@/app/lib/contact";
import type { Service } from "@/app/lib/services";
import { Reveal } from "../Reveal";

/**
 * FAQ accordion with smooth height animation (grid-rows trick) and a
 * "still have questions" card that links to WhatsApp.
 */
export function ServiceFaq({ service }: { service: Service }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="bg-[linear-gradient(180deg,#ffffff_0%,#fff5fa_52%,#ffffff_100%)] py-16 sm:py-20"
      style={{ "--svc-accent": service.accent } as CSSProperties}
    >
      <div className="mx-auto grid max-w-430 gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:px-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-(--svc-accent) uppercase">
              FAQ
              <span
                aria-hidden="true"
                className="hidden h-px w-12 bg-(--svc-accent)/50 sm:block"
              />
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-foreground">
              Questions,{" "}
              <span className="font-medium italic text-(--svc-accent)">
                answered.
              </span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-secondary">
              The essentials about our {service.name.toLowerCase()} offering.
              For anything more specific to your clinic, we&apos;re one message
              away.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-(--shadow-card)">
              <p className="text-[15px] font-semibold text-foreground">
                Still have questions?
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-secondary">
                We&apos;re here to provide clarity and assist with anything
                about {service.name.toLowerCase()}.
              </p>
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-(--color-button-primary-hover)"
              >
                Ask on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="list-none border-t border-border">
            {service.faqs.map((faq, i) => {
              const open = i === openIndex;
              return (
                <li key={faq.question} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`text-[15.5px] font-semibold transition-colors ${
                        open
                          ? "text-foreground"
                          : "text-foreground/80 group-hover:text-foreground"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-[15px] transition-all duration-300 ${
                        open
                          ? "rotate-45 border-transparent text-white"
                          : "border-border text-secondary group-hover:border-primary/40"
                      }`}
                      style={open ? { background: "var(--svc-accent)" } : undefined}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pr-10 pb-6 text-[14px] leading-relaxed text-secondary">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
