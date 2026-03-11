import type React from "react";

type RatingProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
  max?: number;
  label?: string;
};

export function Rating({
  value,
  max = 5,
  label,
  className = "",
  ...props
}: RatingProps) {
  const safeMax = Math.max(1, max);
  const safeValue = Math.max(0, Math.min(value, safeMax));
  const stars = Array.from({ length: safeMax }, (_, index) => index < safeValue);
  const ariaLabel = label ?? `${safeValue} out of ${safeMax} stars`;
  const classes = `rating ${className}`.trim();

  return (
    <div className={classes} aria-label={ariaLabel} role="img" {...props}>
      {stars.map((filled, index) => (
        <span
          key={`${filled ? "filled" : "empty"}-${index}`}
          aria-hidden="true"
          className={filled ? "rating-star is-filled" : "rating-star"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
