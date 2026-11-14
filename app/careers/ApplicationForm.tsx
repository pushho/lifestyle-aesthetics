"use client";

import { CONTACT } from "@/app/lib/contact";
import {
  careerChoiceTitle,
  careerRoles,
  isCareerChoice,
  openApplication,
} from "@/app/lib/careers";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useState, type FormEvent } from "react";

const choices = [
  ...careerRoles.map((role) => ({ slug: role.slug, label: role.title })),
  { slug: openApplication.slug, label: openApplication.title },
];

type FormValues = {
  name: string;
  email: string;
  phone: string;
  role: string;
  link: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  role: "",
  link: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border bg-white px-3.5 py-3 text-[14.5px] text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted/70 focus:ring-3";

function inputClass(invalid: boolean, className = "mt-1.5") {
  return `${className} ${fieldClass} ${
    invalid
      ? "border-primary focus:border-primary focus:ring-primary/15"
      : "border-border focus:border-primary focus:ring-primary/15"
  }`;
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const email = values.email.trim();
  const link = values.link.trim();

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (values.phone.trim() && !/^[0-9+().\-\s]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number, or leave this blank.";
  }
  if (!isCareerChoice(values.role)) {
    errors.role = "Choose a role, or send an open application.";
  }
  if (link && !/^https?:\/\/\S+\.\S+/.test(link) && !/linkedin\.com\//i.test(link)) {
    errors.link = "Add a full link, or leave this blank.";
  }
  if (values.message.trim().length < 12) {
    errors.message = "Add a short note about your experience.";
  }

  return errors;
}

function greetingName(name: string) {
  const titles = new Set(["dr", "mr", "mrs", "ms", "mx", "prof", "professor"]);
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const given = parts.find(
    (part) => !titles.has(part.toLowerCase().replace(/\.$/, "")),
  );
  return given ?? parts[0] ?? "";
}

function buildMailto(values: FormValues) {
  const roleTitle = careerChoiceTitle(values.role);
  const subject = `Career application — ${roleTitle}`;
  const body = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim() || "—"}`,
    `Role: ${roleTitle}`,
    `LinkedIn: ${values.link.trim() || "—"}`,
    "",
    values.message.trim(),
  ].join("\n");

  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-[12.5px] text-primary-dark">
      {message}
    </p>
  );
}

function roleFromSearch(value: string | null) {
  if (!value || !isCareerChoice(value)) return "";
  return value;
}

export function ApplicationForm() {
  const searchParams = useSearchParams();
  const requestedRole = roleFromSearch(searchParams.get("role"));
  const formId = useId();
  const [values, setValues] = useState<FormValues>({
    ...emptyValues,
    role: requestedRole,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [mailtoHref, setMailtoHref] = useState("");

  useEffect(() => {
    if (!requestedRole) return;
    setValues((current) =>
      current.role === requestedRole ? current : { ...current, role: requestedRole },
    );
  }, [requestedRole]);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as (keyof FormValues)[])[0];
    if (firstInvalid) {
      const field = document.getElementById(`${formId}-${firstInvalid}`);
      field?.focus();
      return;
    }

    const href = buildMailto(values);
    setMailtoHref(href);
    window.location.href = href;
  }

  if (mailtoHref) {
    const firstName = greetingName(values.name);

    return (
      <div className="flex min-h-[28rem] flex-col items-start justify-center rounded-3xl border border-border bg-white px-6 py-10 shadow-(--shadow-card) sm:px-10">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-(--color-primary-light) text-primary">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,3vw,2.5rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground">
          Thank you, {firstName}.
        </h2>
        <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-secondary">
          Your note is ready for {CONTACT.email}. Attach your CV in the email
          before you send it. If your email app did not open, use the button
          below.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-(--color-button-primary) px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-(--color-button-primary-hover)"
          >
            Open email
            <span aria-hidden="true">→</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setMailtoHref("");
              setValues({ ...emptyValues, role: requestedRole });
              setErrors({});
            }}
            className="rounded-full px-4 py-3 text-[13.5px] font-semibold text-secondary transition-colors hover:text-primary"
          >
            Start another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-border bg-white px-5 py-6 shadow-(--shadow-card) sm:px-8 sm:py-8 lg:px-9 lg:py-9"
    >
      <h2 className="font-display text-[clamp(1.85rem,2.6vw,2.35rem)] leading-tight font-semibold tracking-[-0.02em] text-foreground">
        Apply
      </h2>
      <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-secondary">
        This opens an email to {CONTACT.email}. Attach your CV before you send
        it.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="text-[13px] font-semibold text-foreground"
          >
            Full name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={inputClass(Boolean(errors.name))}
            placeholder="Layla Hassan"
          />
          <FieldError id={`${formId}-name-error`} message={errors.name} />
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="text-[13px] font-semibold text-foreground"
          >
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={inputClass(Boolean(errors.email))}
            placeholder="you@email.com"
          />
          <FieldError id={`${formId}-email-error`} message={errors.email} />
        </div>

        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="text-[13px] font-semibold text-foreground"
          >
            Phone <span className="font-medium text-muted">(optional)</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="tel"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            className={inputClass(Boolean(errors.phone))}
            placeholder="+971 50 000 0000"
          />
          <FieldError id={`${formId}-phone-error`} message={errors.phone} />
        </div>

        <div>
          <label
            htmlFor={`${formId}-role`}
            className="text-[13px] font-semibold text-foreground"
          >
            Role
          </label>
          <div className="relative mt-1.5">
            <select
              id={`${formId}-role`}
              name="role"
              value={values.role}
              onChange={(event) => update("role", event.target.value)}
              aria-invalid={Boolean(errors.role)}
              aria-describedby={errors.role ? `${formId}-role-error` : undefined}
              className={`${inputClass(Boolean(errors.role), "")} appearance-none pr-10 ${
                values.role ? "text-foreground" : "text-muted"
              }`}
            >
              <option value="">Select a role</option>
              {choices.map((choice) => (
                <option key={choice.slug} value={choice.slug}>
                  {choice.label}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-secondary"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m6 9 6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <FieldError id={`${formId}-role-error`} message={errors.role} />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-link`}
            className="text-[13px] font-semibold text-foreground"
          >
            LinkedIn <span className="font-medium text-muted">(optional)</span>
          </label>
          <input
            id={`${formId}-link`}
            name="url"
            type="url"
            inputMode="url"
            autoComplete="url"
            value={values.link}
            onChange={(event) => update("link", event.target.value)}
            aria-invalid={Boolean(errors.link)}
            aria-describedby={errors.link ? `${formId}-link-error` : undefined}
            className={inputClass(Boolean(errors.link))}
            placeholder="https://www.linkedin.com/in/your-name"
          />
          <FieldError id={`${formId}-link-error`} message={errors.link} />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-3">
          <label
            htmlFor={`${formId}-message`}
            className="text-[13px] font-semibold text-foreground"
          >
            Note
          </label>
          <span className="text-[12px] text-muted">{values.message.length}/1000</span>
        </div>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          maxLength={1000}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${formId}-message-error` : undefined
          }
          className={`${inputClass(Boolean(errors.message))} resize-y leading-relaxed`}
          placeholder="Where you have worked, and which role you want."
        />
        <FieldError id={`${formId}-message-error`} message={errors.message} />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-(--color-button-primary) px-6 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-(--color-button-primary-hover)"
        >
          Send application
          <span aria-hidden="true">→</span>
        </button>
        <p className="max-w-xs text-[12.5px] leading-relaxed text-muted">
          We use these details only to reply about this role.
        </p>
      </div>
    </form>
  );
}
