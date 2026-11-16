import Image from "next/image";
import type {
  DeviceStory,
  StoryBlock,
  StoryFrame,
  StoryImage,
  StoryMetric,
} from "../../lib/device-stories";

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

function frameOf(image: StoryImage): StoryFrame {
  return image.frame ?? "photo";
}

function Eyebrow({
  index,
  label,
  light = false,
}: {
  index: number;
  label?: string;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] uppercase ${
        light ? "text-[#ff8ec4]" : "text-primary"
      }`}
    >
      <span className={light ? "font-display text-white" : "font-display"}>
        {pad(index)}
      </span>
      <span
        aria-hidden="true"
        className={`h-px w-10 ${light ? "bg-white/30" : "bg-primary/40"}`}
      />
      {label ?? "Details"}
    </p>
  );
}

function Title({
  title,
  accent,
  light = false,
}: {
  title: string;
  accent?: string;
  light?: boolean;
}) {
  return (
    <h2
      className={`mt-3 font-display text-[clamp(1.8rem,2.85vw,2.65rem)] leading-[1.06] font-semibold tracking-[-0.025em] ${
        light ? "text-white" : "text-foreground"
      }`}
    >
      {title}{" "}
      {accent ? (
        <span
          className={`font-medium italic ${
            light ? "text-[#ff8ec4]" : "text-primary"
          }`}
        >
          {accent}
        </span>
      ) : null}
    </h2>
  );
}

function MetricsBand({ metrics }: { metrics: StoryMetric[] }) {
  return (
    <section className="border-b border-border bg-white">
      <dl className="mx-auto grid max-w-430 grid-cols-2 gap-y-7 px-6 py-9 sm:px-10 sm:py-11 lg:grid-cols-4 lg:gap-y-0 xl:px-16">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="pr-4 lg:border-l lg:border-border lg:px-8 lg:first:border-l-0 lg:first:pl-0"
          >
            <dd className="font-display text-[clamp(1.7rem,2.5vw,2.35rem)] leading-none font-semibold tracking-[-0.03em] text-foreground">
              {metric.value}
            </dd>
            <dt className="mt-2 text-[13px] font-semibold text-primary-dark">
              {metric.label}
            </dt>
            {metric.hint ? (
              <p className="mt-1 text-[12.5px] leading-snug text-secondary">
                {metric.hint}
              </p>
            ) : null}
          </div>
        ))}
      </dl>
    </section>
  );
}

function SplitConsoleSection({
  block,
  index,
}: {
  block: StoryBlock;
  index: number;
}) {
  const image = block.images?.[0];
  const points = block.points ?? [];

  return (
    <section
      id={`device-story-${index}`}
      className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff5fa_55%,#ffffff_100%)] py-14 sm:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[8%] h-64 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-430 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-14 xl:px-16">
        <div>
          <Eyebrow index={index} label={block.eyebrow} />
          <Title title={block.title} accent={block.accent} />
          {block.body ? (
            <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-secondary">
              {block.body}
            </p>
          ) : null}

          {points.length > 0 ? (
            <ul className="mt-6 grid list-none gap-2.5 sm:grid-cols-2">
              {points.map((point, pointIndex) => (
                <li
                  key={point}
                  className={`flex items-start gap-3 rounded-2xl border border-border-accent/60 bg-white/95 px-4 py-3.5 shadow-(--shadow-card) ${
                    points.length % 2 === 1 && pointIndex === points.length - 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-light font-display text-[11px] font-semibold text-primary">
                    {pad(pointIndex)}
                  </span>
                  <p className="text-[13.5px] leading-snug text-foreground">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {image ? (
          <figure className="relative mx-auto w-full max-w-md">
            <div className="rounded-t-[9rem] rounded-b-[2rem] border border-primary/15 bg-white p-3 shadow-(--shadow-card)">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[8.2rem] rounded-b-[1.4rem] bg-white">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, 85vw"
                  className="object-contain p-4"
                />
              </div>
            </div>
            {image.caption ? (
              <figcaption className="relative z-10 mx-auto -mt-4 w-fit max-w-[92%] rounded-full border border-border-accent bg-white px-4 py-2 text-center text-[12px] font-semibold text-foreground shadow-(--shadow-card)">
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>
    </section>
  );
}

function PillarsSection({
  block,
  index,
}: {
  block: StoryBlock;
  index: number;
}) {
  const points = block.points ?? [];

  return (
    <section
      id={`device-story-${index}`}
      className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff5fa_60%,#ffffff_100%)] py-14 sm:py-16"
    >
      <div className="mx-auto grid max-w-430 items-center gap-8 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12 xl:px-16">
        <div className="max-w-xl">
          <Eyebrow index={index} label={block.eyebrow} />
          <Title title={block.title} accent={block.accent} />
          {block.body ? (
            <p className="mt-3.5 text-[15px] leading-relaxed text-secondary">
              {block.body}
            </p>
          ) : null}
        </div>

        <ul className="grid list-none gap-3.5 sm:grid-cols-2">
          {points.map((point, pointIndex) => (
            <li
              key={point}
              className="flex flex-col justify-between rounded-[1.4rem] border border-border-accent/65 bg-white p-5 shadow-(--shadow-card)"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-light font-display text-[12px] font-semibold text-primary">
                  {pad(pointIndex)}
                </span>
                <span aria-hidden="true" className="text-xs text-primary/35">
                  ✦
                </span>
              </div>
              <p className="mt-4 text-[14px] leading-snug font-medium text-foreground">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ShowcaseSection({
  block,
  index,
}: {
  block: StoryBlock;
  index: number;
}) {
  const images = block.images ?? [];
  const points = block.points ?? [];
  const wide =
    images.length > 0 && images.every((image) => frameOf(image) === "wide");
  const gridCols =
    images.length >= 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-3";

  return (
    <section
      id={`device-story-${index}`}
      className="scroll-mt-24 border-y border-border/70 bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <header className="max-w-2xl">
          <Eyebrow index={index} label={block.eyebrow} />
          <Title title={block.title} accent={block.accent} />
          {block.body ? (
            <p className="mt-3 text-[14.5px] leading-relaxed text-secondary sm:text-[15px]">
              {block.body}
            </p>
          ) : null}
        </header>

        <div className={`mt-8 grid gap-4 sm:gap-5 ${gridCols}`}>
          {images.map((image, imageIndex) => (
            <article
              key={image.src}
              className="group flex flex-col overflow-hidden rounded-[1.4rem] border border-border bg-white shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-1 hover:border-border-accent hover:shadow-(--shadow-hover)"
            >
              <div
                className={`relative overflow-hidden border-b border-border/60 bg-white ${
                  wide ? "aspect-[12/5]" : "aspect-[5/4]"
                }`}
              >
                <span className="absolute top-3 left-3.5 z-10 rounded-full bg-primary-light px-2.5 py-0.5 font-display text-[11px] font-semibold text-primary">
                  {pad(imageIndex)}
                </span>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 90vw"
                  className={
                    wide
                      ? "object-contain px-6 py-4 transition-transform duration-500 group-hover:scale-[1.03]"
                      : "object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  }
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-(--color-background) px-4 py-3.5 sm:px-5">
                {image.caption ? (
                  <h3 className="font-display text-[1rem] font-semibold text-foreground">
                    {image.caption}
                  </h3>
                ) : null}
                {image.detail ? (
                  <p className="mt-1 text-[12.5px] leading-snug text-secondary">
                    {image.detail}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {points.length > 0 ? (
          <div className="mt-5 flex flex-wrap items-center gap-2 rounded-2xl border border-border-accent/55 bg-(--color-background-soft) px-4 py-3.5 sm:px-5">
            <span className="mr-1.5 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
              Full set
            </span>
            {points.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-border-accent/80 bg-white px-3 py-1 text-[12px] font-medium text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                />
                {point}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ComparePairPanel({
  kicker,
  items,
}: {
  kicker: string;
  items: StoryImage[];
}) {
  return (
    <div className="rounded-[1.5rem] border border-white bg-white p-5 shadow-(--shadow-card)">
      <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
        {kicker}
      </p>
      <div className="mt-3.5 grid gap-4 sm:grid-cols-2">
        {items.map((image) => (
          <figure key={image.src} className="flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/70 bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-contain p-3"
              />
            </div>
            <figcaption className="pt-2.5">
              <span className="block font-display text-[0.98rem] font-semibold text-foreground">
                {image.caption}
              </span>
              {image.detail ? (
                <span className="mt-0.5 block text-[12.5px] leading-snug text-secondary">
                  {image.detail}
                </span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function CompareSection({
  block,
  index,
}: {
  block: StoryBlock;
  index: number;
}) {
  const images = block.images ?? [];
  const fourUp = images.length === 4;

  return (
    <section
      id={`device-story-${index}`}
      className="scroll-mt-24 py-12 sm:py-14"
    >
      <div className="mx-auto max-w-430 px-6 sm:px-10 xl:px-16">
        <div className="rounded-[2rem] border border-border-accent/60 bg-[linear-gradient(135deg,#fff5fa_0%,#ffffff_52%,#fdebf4_100%)] p-6 shadow-(--shadow-card) sm:p-8 lg:p-10">
          {fourUp ? (
            <>
              <header className="max-w-2xl">
                <Eyebrow index={index} label={block.eyebrow} />
                <Title title={block.title} accent={block.accent} />
                {block.body ? (
                  <p className="mt-3 text-[14.5px] leading-relaxed text-secondary">
                    {block.body}
                  </p>
                ) : null}
              </header>

              <div className="mt-7 grid gap-5 lg:grid-cols-2">
                <ComparePairPanel
                  kicker="Cluster size · Tap vs. H₂"
                  items={images.slice(0, 2)}
                />
                <ComparePairPanel
                  kicker="Galvanic polarity · Out vs. In"
                  items={images.slice(2, 4)}
                />
              </div>
            </>
          ) : (
            <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-10">
              <div>
                <Eyebrow index={index} label={block.eyebrow} />
                <Title title={block.title} accent={block.accent} />
                {block.body ? (
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-secondary sm:text-[15px]">
                    {block.body}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {images.map((image, imageIndex) => {
                  const wide = frameOf(image) === "wide";
                  return (
                    <figure
                      key={image.src}
                      className="flex flex-col justify-between overflow-hidden rounded-[1.35rem] border border-white bg-white p-4 shadow-(--shadow-card)"
                    >
                      <div className="flex items-center justify-between gap-2 pb-2.5">
                        <span className="font-display text-[0.98rem] font-semibold text-foreground">
                          {image.caption}
                        </span>
                        <span className="rounded-full bg-primary-light px-2.5 py-0.5 font-display text-[11px] font-semibold text-primary">
                          {pad(imageIndex)}
                        </span>
                      </div>

                      <div
                        className={`relative overflow-hidden rounded-xl border border-border/60 bg-white ${
                          wide ? "aspect-[16/6]" : "aspect-[4/3]"
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 1024px) 28vw, 90vw"
                          className="object-contain p-2.5"
                        />
                      </div>

                      {image.detail ? (
                        <figcaption className="pt-2.5 text-[12.5px] leading-snug text-secondary">
                          {image.detail}
                        </figcaption>
                      ) : null}
                    </figure>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function DarkFeatureSection({
  block,
  index,
}: {
  block: StoryBlock;
  index: number;
}) {
  const images = block.images ?? [];
  const points = block.points ?? [];

  return (
    <section
      id={`device-story-${index}`}
      className="relative scroll-mt-24 overflow-hidden bg-[#1c161b] py-14 text-white sm:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[6%] h-72 w-80 rounded-full bg-primary/28 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[4%] h-64 w-72 rounded-full bg-[#ff8ec4]/12 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-430 items-center gap-9 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 xl:px-16">
        <div>
          <Eyebrow index={index} label={block.eyebrow} light />
          <Title title={block.title} accent={block.accent} light />
          {block.body ? (
            <p className="mt-3.5 max-w-xl text-[14.5px] leading-relaxed text-white/72 sm:text-[15px]">
              {block.body}
            </p>
          ) : null}

          {points.length > 0 ? (
            <ol className="mt-6 grid list-none gap-2.5">
              {points.map((point, pointIndex) => (
                <li
                  key={point}
                  className="grid grid-cols-[2.25rem_minmax(0,1fr)] items-baseline gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5"
                >
                  <span className="font-display text-[13px] font-semibold text-[#ff8ec4]">
                    {pad(pointIndex)}
                  </span>
                  <span className="text-[13.5px] leading-snug text-white/90 sm:text-[14px]">
                    {point}
                  </span>
                </li>
              ))}
            </ol>
          ) : null}
        </div>

        {images.length === 1 ? (
          <figure className="mx-auto w-full max-w-lg rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-4 backdrop-blur-sm sm:p-5">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-white">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="(min-width: 1024px) 440px, 90vw"
                className="object-contain p-5"
              />
            </div>
            {images[0].caption ? (
              <figcaption className="pt-3 text-center text-[12.5px] font-medium tracking-wide text-white/75">
                {images[0].caption}
              </figcaption>
            ) : null}
          </figure>
        ) : images.length > 1 ? (
          <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#ff8ec4] uppercase">
              Aquasure H₂ solutions
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3.5">
              {images.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-2xl bg-white p-3 text-center"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 150px, 30vw"
                      className="object-contain"
                    />
                  </div>
                  {image.caption ? (
                    <figcaption className="mt-2 text-[12px] font-semibold text-foreground">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function SpecSheet({ block, index }: { block: StoryBlock; index: number }) {
  const specs = block.specs ?? [];

  return (
    <section
      id={`device-story-${index}`}
      className="relative scroll-mt-24 overflow-hidden bg-[#1a1418] py-14 text-white sm:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-[10%] h-64 w-64 rounded-full bg-primary/25 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-430 items-start gap-8 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14 xl:px-16">
        <div>
          <Eyebrow index={index} label={block.eyebrow} light />
          <Title title={block.title} accent={block.accent} light />
          <p className="mt-3.5 max-w-sm text-[13.5px] leading-relaxed text-white/60">
            Factory configuration; regional voltage and optional handpieces
            supplied to order.
          </p>
        </div>

        <dl className="divide-y divide-white/12 rounded-2xl border border-white/12 bg-white/[0.04] px-6 py-2">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="grid gap-1 py-3.5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-baseline sm:gap-6"
            >
              <dt className="text-[11px] font-semibold tracking-[0.16em] text-[#ff8ec4] uppercase">
                {spec.label}
              </dt>
              <dd className="font-display text-[1.02rem] leading-snug font-medium text-white">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function ProductStory({ story }: { story: DeviceStory }) {
  return (
    <div>
      {story.metrics.length > 0 ? <MetricsBand metrics={story.metrics} /> : null}
      {story.blocks.map((block, index) => {
        if (block.layout === "specs" || (block.specs && block.specs.length > 0)) {
          return <SpecSheet key={block.title} block={block} index={index} />;
        }
        if (block.layout === "split") {
          return (
            <SplitConsoleSection key={block.title} block={block} index={index} />
          );
        }
        if (block.layout === "pillars") {
          return (
            <PillarsSection key={block.title} block={block} index={index} />
          );
        }
        if (block.layout === "compare") {
          return (
            <CompareSection key={block.title} block={block} index={index} />
          );
        }
        if (block.layout === "dark-feature") {
          return (
            <DarkFeatureSection key={block.title} block={block} index={index} />
          );
        }
        return (
          <ShowcaseSection key={block.title} block={block} index={index} />
        );
      })}
    </div>
  );
}
