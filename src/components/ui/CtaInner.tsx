import type React from "react";

type CtaInnerProps = React.HTMLAttributes<HTMLDivElement>;

export function CtaInner({ className = "", ...props }: CtaInnerProps) {
  const classes = `cta-inner ${className}`.trim();
  return <div className={classes} {...props} />;
}
