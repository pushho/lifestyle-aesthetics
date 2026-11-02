import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "../BlogCard";
import { getPostBySlug, getRelatedPosts } from "@/app/lib/posts";

type PostArticleProps = {
  params: Promise<{ slug: string }>;
};

export async function PostArticle({ params }: PostArticleProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  return (
    <>
      <article className="bg-(--color-background)">
        <header className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-x-0 h-64 bg-linear-to-b from-(--color-primary-light)/75 to-transparent"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 pt-10 pb-8 sm:px-10 sm:pt-14">
            <nav aria-label="Breadcrumb" className="text-[13px] text-secondary">
              <ol className="flex list-none flex-wrap items-center gap-2">
                <li>
                  <Link href="/blogs" className="transition-colors hover:text-primary">
                    Journal
                  </Link>
                </li>
                <li aria-hidden="true" className="text-muted">
                  /
                </li>
                <li className="text-foreground">{post.category}</li>
              </ol>
            </nav>
            <p className="mt-6 text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
              {post.category}
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-foreground">
              {post.title}
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-secondary">{post.excerpt}</p>
            <p className="mt-5 text-[13px] text-muted">
              Lifestyle Aesthetics
              <span aria-hidden="true"> · </span>
              {post.dateLabel}
              <span aria-hidden="true"> · </span>
              {post.readTime}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-430 px-6 py-8 sm:px-10 sm:py-10 xl:px-16">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[1.5rem] bg-(--color-primary-light) sm:aspect-[16/7]">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1080px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-3xl pt-10 sm:pt-12">
            {post.sections.map((section) => (
              <section key={section.heading} className="mt-10 first:mt-0">
                <h2 className="font-display text-[clamp(1.6rem,2.4vw,2rem)] leading-tight font-semibold tracking-[-0.015em] text-foreground">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15.5px] leading-[1.75] text-secondary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <p className="mt-12 border-t border-border pt-5 text-[13px] leading-relaxed text-muted">
              Written for clinic teams. This is not a treatment protocol or
              advice for an individual patient.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-(--color-background-white)">
        <div className="mx-auto max-w-430 px-6 py-12 sm:px-10 sm:py-14 xl:px-16">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(115deg,#f472b0_0%,#e83684_42%,#b00862_100%)] px-6 py-10 sm:px-10 sm:py-12">
            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-white/80 uppercase">
                  From the Dubai team
                </p>
                <h2 className="mt-2 font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.08] font-semibold text-white">
                  Planning something this article describes?
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/90">
                  Tell us about the clinic and we will help you look at the
                  product, the training, or both.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-white px-5 py-3 text-[13.5px] font-semibold text-primary-dark transition-colors hover:bg-(--color-primary-light)"
              >
                Get in touch
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {related.length > 0 ? (
            <div className="mt-14">
              <h2 className="font-display text-[clamp(1.7rem,2.6vw,2.2rem)] leading-tight font-semibold tracking-[-0.02em] text-foreground">
                Continue reading
              </h2>
              <ul className="mt-6 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {related.map((item) => (
                  <li key={item.slug}>
                    <BlogCard post={item} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
