import { forwardRef } from "react";
import type React from "react";

type TestimonialRailProps = React.HTMLAttributes<HTMLDivElement>;

export const TestimonialRail = forwardRef<HTMLDivElement, TestimonialRailProps>(
  function TestimonialRail({ className = "", children, ...props }, ref) {
    const classes = `testimonial-rail ${className}`.trim();
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);
