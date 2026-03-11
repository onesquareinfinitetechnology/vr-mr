import type React from "react";

import { Rating } from "./Rating";

type TestimonialCardProps = React.HTMLAttributes<HTMLDivElement> & {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  rating?: number;
};

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  rating,
  className = "",
  ...props
}: TestimonialCardProps) {
  const classes = `testimonial-card ${className}`.trim();
  const meta = [role, company].filter(Boolean).join(", ");

  return (
    <article className={classes} {...props}>
      {typeof rating === "number" ? <Rating value={rating} /> : null}
      <blockquote className="testimonial-quote">“{quote}”</blockquote>
      <div className="testimonial-author">{name}</div>
      {meta ? <div className="testimonial-meta">{meta}</div> : null}
    </article>
  );
}
