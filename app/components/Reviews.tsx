const reviews = [
  {
    quote:
      "Lifestyle Aesthetics made it straightforward to bring Hyalure into our practice. Training was clear, supply is reliable, and their team understands how a clinic actually runs.",
    name: "Dr. Sara Al Mansoori",
    role: "Dermatologist",
    practice: "DermCare Clinic, Dubai",
  },
  {
    quote:
      "From device installation to ongoing maintenance, the support has been consistent. Our practitioners felt confident after the workshops, and patients noticed the difference.",
    name: "Omar Haddad",
    role: "Clinic Director",
    practice: "Lumière Aesthetics, Doha",
  },
  {
    quote:
      "We needed a partner who could cover injectables, peels, and devices without fragmenting our vendors. Lifestyle Aesthetics became that single, trusted relationship.",
    name: "Dr. Layla Farouk",
    role: "Medical Director",
    practice: "Atelier Skin, Cairo",
  },
] as const;

function Stars() {
  return (
    <div className="flex gap-0.5 text-primary" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3.6 14.4 9l5.9.5-4.5 3.9 1.4 5.7L12 16.8 6.8 19.1l1.4-5.7L3.7 9.5 9.6 9 12 3.6Z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-(--color-background-soft) py-16 sm:py-20 lg:py-16"
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-[min(90vw,640px)] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            Partner Reviews
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.85rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-foreground">
            Trusted by Clinics Across the Region
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-secondary sm:text-base">
            Aesthetic practices choose Lifestyle Aesthetics for dependable
            brands, practical training, and support that stays with the clinic.
          </p>
        </header>

        <ul className="mt-12 grid list-none gap-10 sm:mt-14 lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {reviews.map((review) => (
            <li key={review.name} className="flex flex-col">
              <Stars />
              <blockquote className="mt-4 flex flex-1 flex-col">
                <p className="font-display text-[clamp(1.25rem,1.6vw,1.45rem)] leading-[1.35] font-medium tracking-[-0.01em] text-foreground">
                  “{review.quote}”
                </p>
                <footer className="mt-6 border-t border-border pt-5">
                  <cite className="not-italic">
                    <span className="block text-[14.5px] font-semibold text-foreground">
                      {review.name}
                    </span>
                    <span className="mt-1 block text-[13px] leading-snug text-secondary">
                      {review.role} · {review.practice}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
