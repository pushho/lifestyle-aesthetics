type StarsProps = {
  score: number;
  className?: string;
  filledClassName?: string;
  emptyClassName?: string;
};

export function Stars({
  score,
  className = "size-4",
  filledClassName = "text-primary",
  emptyClassName = "text-border",
}: StarsProps) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index + 1 <= Math.round(score);
        return (
          <svg
            key={index}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${className} ${filled ? filledClassName : emptyClassName}`}
          >
            <path d="M12 3.6 14.4 9l5.9.5-4.5 3.9 1.4 5.7L12 16.8 6.8 19.1l1.4-5.7L3.7 9.5 9.6 9 12 3.6Z" />
          </svg>
        );
      })}
    </span>
  );
}
