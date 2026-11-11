import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllServices, getServiceBySlug } from "../../lib/services";
import { ServiceDetail } from "./ServiceDetail";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Services | Lifestyle Aesthetics" };
  }

  return {
    title: `${service.name} | Lifestyle Aesthetics`,
    description: service.tagline,
  };
}

function ServiceFallback() {
  return (
    <div className="mx-auto max-w-430 px-6 py-16 sm:px-10 xl:px-16">
      <div className="h-8 w-48 animate-pulse rounded bg-border/70" />
      <div className="mt-6 h-16 w-96 max-w-full animate-pulse rounded bg-border/70" />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="h-40 animate-pulse rounded-2xl bg-border/50" />
        <div className="aspect-[4/5] animate-pulse rounded-[2rem] bg-border/50" />
      </div>
    </div>
  );
}

export default function ServicePage({ params }: ServicePageProps) {
  return (
    <main>
      <Suspense fallback={<ServiceFallback />}>
        <ServiceDetail params={params} />
      </Suspense>
    </main>
  );
}
