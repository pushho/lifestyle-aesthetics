"use client";

import { getTelHref, getWhatsAppHref } from "@/app/lib/contact";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function FloatingContactButtons() {
  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3 print:hidden md:right-6">
      <a
        href={getWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-(--shadow-card) transition duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe57] hover:shadow-(--shadow-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:size-14"
      >
        <WhatsAppIcon className="size-6" />
      </a>
      <a
        href={getTelHref()}
        aria-label="Call Lifestyle Aesthetics"
        className="flex size-12 items-center justify-center rounded-full bg-(--color-button-primary) text-white shadow-(--shadow-card) transition duration-200 hover:-translate-y-0.5 hover:bg-(--color-button-primary-hover) hover:shadow-(--shadow-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:size-14"
      >
        <PhoneIcon className="size-5" />
      </a>
    </div>
  );
}
