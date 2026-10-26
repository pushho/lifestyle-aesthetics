export function PartnerCta() {
  return (
    <section id="contact" className="bg-(--color-background-white)">
      <div className="mx-auto">
        <div className="relative overflow-hidden bg-[linear-gradient(115deg,#f472b0_0%,#e83684_38%,#c41262_72%,#9f0d50_100%)] shadow-(--shadow-hover)">
          {/* Soft atmospheric light */}
          <div
            className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/18 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-1/3 right-[28%] h-56 w-56 rounded-full bg-[#ff9ac8]/25 blur-3xl"
            aria-hidden="true"
          />

          {/* Gentle wave texture from the mock */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 260C180 210 320 320 480 280C640 240 760 150 920 180C1040 202 1120 250 1200 230V420H0V260Z"
              fill="white"
            />
            <path
              d="M0 310C200 270 340 360 520 330C700 300 820 220 980 250C1080 268 1140 300 1200 290V420H0V310Z"
              fill="white"
              opacity="0.55"
            />
          </svg>

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-7 py-14 text-center sm:px-10 sm:py-16 lg:py-20">
            <p className="animate-fade-up text-[11px] font-semibold tracking-[0.22em] text-white/85 uppercase">
              Partner With Lifestyle Aesthetics
            </p>
            <h2 className="animate-fade-up delay-1 mt-3 font-display text-[clamp(2.2rem,3.8vw,3.35rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-white">
              Let&apos;s Equip Your Practice
            </h2>
            <p className="animate-fade-up delay-2 mt-4 max-w-[42ch] text-[15px] leading-relaxed text-white/90 sm:text-base">
              Partner with a Dubai team that helps clinics adopt, operate, and
              market aesthetic solutions across the region.
            </p>
            <a
              href="mailto:info@laesthetics.com"
              className="animate-fade-up delay-3 mt-7 inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-primary-dark shadow-[0_10px_30px_rgba(120,10,60,0.18)] transition-all hover:bg-primary-light hover:shadow-[0_14px_36px_rgba(120,10,60,0.24)]"
            >
              Get in Touch
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
