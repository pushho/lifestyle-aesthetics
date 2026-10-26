export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`inline-flex shrink-0 items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="30"
        viewBox="0 0 34 30"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M17 14.5C14.2 8.2 8.4 3.8 2.8 5.2 0.6 5.8-.4 8.6.8 11.2c1.4 3 4.8 4.6 8.2 5.2-2.6 1.8-4.2 4.6-3.4 7.2.6 2 2.8 3.2 4.8 2.6 2.6-.8 4.4-3.4 5.4-6.2.2-.6.4-1.2.6-1.8.2.6.4 1.2.6 1.8 1 2.8 2.8 5.4 5.4 6.2 2 .6 4.2-.6 4.8-2.6.8-2.6-.8-5.4-3.4-7.2 3.4-.6 6.8-2.2 8.2-5.2 1.2-2.6.2-5.4-2-6-5.6-1.4-11.4 3-14.2 9.3Z"
          fill="var(--color-primary)"
        />
        <path
          d="M17 14.5c-1.6-3.6-4.8-6-8-5.2-1.6.4-2.6 1.8-2.2 3.4.6 2.2 3.2 3.4 5.6 3.8-1.4 1.2-2.2 2.8-1.8 4.2.3 1.1 1.5 1.7 2.6 1.4 1.6-.5 2.8-2.2 3.4-4 .1-.4.3-.8.4-1.2.1.4.3.8.4 1.2.6 1.8 1.8 3.5 3.4 4 1.1.3 2.3-.3 2.6-1.4.4-1.4-.4-3-1.8-4.2 2.4-.4 5-1.6 5.6-3.8.4-1.6-.6-3-2.2-3.4-3.2-.8-6.4 1.6-8 5.2Z"
          fill="#fff"
          fillOpacity="0.35"
        />
      </svg>
      <span className="text-[12px] font-bold tracking-[0.16em] text-foreground uppercase sm:text-[13px]">
        Lifestyle Aesthetics
      </span>
    </a>
  );
}
