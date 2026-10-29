type ProductEnquiryCtaProps = {
  brandName?: string;
};

export function ProductEnquiryCta({ brandName }: ProductEnquiryCtaProps) {
  const subject = brandName
    ? `Enquiry about ${brandName}`
    : "Product partnership enquiry";

  return (
    <section className="bg-(--color-background-white)">
      <div className="relative overflow-hidden bg-[linear-gradient(115deg,#f472b0_0%,#e83684_38%,#c41262_72%,#9f0d50_100%)]">
        <div
          className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/18 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-7 py-14 text-center sm:px-10 sm:py-16">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-white/85 uppercase">
            Partner With Lifestyle Aesthetics
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3.4vw,2.85rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-white">
            {brandName
              ? `Interested in ${brandName}?`
              : "Need help choosing a solution?"}
          </h2>
          <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-white/90">
            Our Dubai team helps clinics adopt, train on, and support the right
            injectable, peel, or device for their practice.
          </p>
          <a
            href={`mailto:info@laesthetics.com?subject=${encodeURIComponent(subject)}`}
            className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-primary-dark transition-all hover:bg-primary-light"
          >
            Request information
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
