import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/app/lib/posts";
import { BlogCard } from "./BlogCard";

export const metadata: Metadata = {
  title: "Journal | Lifestyle Aesthetics",
  description:
    "Notes for aesthetic clinics on devices, clinical peels, injectables, training, and working with a distributor.",
};

export default function BlogsPage() {
  const [featured, ...rest] = getAllPosts();

  if (!featured) return null;

  return (
    <main className="bg-(--color-background)">
      <section className="mx-auto max-w-430 px-6 py-8 sm:px-10 sm:py-10 xl:px-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Journal
            </p>
            <h1 className="mt-2 font-display text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-foreground">
              Notes for{" "}
              <em className="font-semibold text-primary italic">the practice.</em>
            </h1>
          </div>
          <p className="max-w-xs text-[13.5px] leading-relaxed text-secondary sm:pb-1">
            Devices, peels, injectables, training, and the partnership behind them.
          </p>
        </div>

        <article className="mt-6">
          <Link
            href={`/blogs/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-border/80 bg-white shadow-(--shadow-card) transition-[box-shadow,border-color] duration-300 hover:border-border-accent hover:shadow-(--shadow-hover) lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <div className="relative min-h-[200px] overflow-hidden bg-(--color-primary-light) sm:min-h-[220px] lg:min-h-[250px]">
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-5 sm:px-7 sm:py-6 lg:px-8">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                Featured · {featured.category}
              </p>
              <h2 className="mt-2 font-display text-[clamp(1.55rem,2.2vw,2.05rem)] leading-[1.12] font-semibold tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary-dark">
                {featured.title}
              </h2>
              <p className="mt-2.5 line-clamp-2 max-w-lg text-[14px] leading-relaxed text-secondary">
                {featured.excerpt}
              </p>
              <p className="mt-3 text-[12.5px] text-muted">
                {featured.dateLabel}
                <span aria-hidden="true"> · </span>
                {featured.readTime}
                <span className="ml-3 inline-flex items-center gap-1 font-semibold text-primary-dark">
                  Read
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </p>
            </div>
          </Link>
        </article>

        <h2 className="mt-8 font-display text-[1.65rem] leading-tight font-semibold tracking-[-0.02em] text-foreground sm:mt-9">
          Latest
        </h2>
        <ul className="mt-4 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
