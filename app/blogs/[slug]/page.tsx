import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllPosts, getPostBySlug } from "@/app/lib/posts";
import { PostArticle } from "./PostArticle";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Journal | Lifestyle Aesthetics" };
  }

  return {
    title: `${post.title} | Lifestyle Aesthetics`,
    description: post.excerpt,
  };
}

function ArticleFallback() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
      <div className="h-4 w-32 animate-pulse rounded bg-border/70" />
      <div className="mt-6 h-12 w-full max-w-lg animate-pulse rounded bg-border/70" />
      <div className="mt-8 aspect-[16/8] animate-pulse rounded-[1.5rem] bg-border/50" />
    </div>
  );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main>
      <Suspense fallback={<ArticleFallback />}>
        <PostArticle params={params} />
      </Suspense>
    </main>
  );
}
