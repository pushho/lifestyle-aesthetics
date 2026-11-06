import Image from "next/image";

const cards = [
  {
    eyebrow: "Training & Workshops",
    title: "Product Training for Your Team",
    description:
      "Orientation, hands-on product workshops, and round tables so buyer teams can stock, operate, and sell with confidence.",
    href: "#training",
    cta: "Explore Training",
    image: {
      src: "/training-education.jpg",
      alt: "Hands-on product training session for aesthetic professionals",
    },
  },
  {
    eyebrow: "Marketing Services",
    title: "Open Days, Events, and Print",
    description:
      "Social media, open days, exhibitions, and print support to help partners launch and promote the brands they stock.",
    href: "#contact",
    cta: "Plan a Partner Event",
    image: {
      src: "/knowledge-hub.jpg",
      alt: "Aesthetic professional reviewing industry insights on a laptop",
    },
  },
] as const;

export function EducationHub() {
  return (
    <section id="insights" className="bg-(--color-background-white) py-16 sm:py-20 lg:py-16">
      <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            Education & Events
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.85rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-foreground">
            Train the Team. Grow the Partnership.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-secondary sm:text-base">
            Workshops and marketing support so partners can adopt a brand,
            operate it well, and launch it commercially.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="grid overflow-hidden rounded-[1.6rem] border border-border/70 bg-(--color-background-white) shadow-(--shadow-card) sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            >
              <div className="relative min-h-[220px] sm:min-h-full">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 24vw"
                  className="object-cover object-[center_30%]"
                />
              </div>

              <div className="flex flex-col justify-center px-6 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-9">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-[clamp(1.65rem,2vw,2.05rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-[14.5px] leading-relaxed text-secondary">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-[13.5px] font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  {card.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
