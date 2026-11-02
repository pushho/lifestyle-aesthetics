import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/app/lib/posts";

type BlogCardProps = {
  post: Post;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="h-full">
      <Link
        href={`/blogs/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-white transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-border-accent hover:shadow-(--shadow-hover)"
      >
        <div className="relative aspect-16/6 overflow-hidden bg-(--color-background-soft)">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex flex-1 flex-col px-4 py-3.5 sm:px-4 sm:py-4">
          <p className="text-[10.5px] font-semibold tracking-[0.16em] text-primary uppercase">
            {post.category}
          </p>
          <h3 className="mt-1.5 font-display text-[1.22rem] leading-[1.18] font-semibold tracking-[-0.015em] text-foreground transition-colors group-hover:text-primary-dark">
            {post.title}
          </h3>
          <p className="mt-2.5 text-[12px] text-muted">
            {post.dateLabel}
            <span aria-hidden="true"> · </span>
            {post.readTime}
          </p>
        </div>
      </Link>
    </article>
  );
}
