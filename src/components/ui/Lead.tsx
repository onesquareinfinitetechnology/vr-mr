import type React from "react";

type LeadProps = React.HTMLAttributes<HTMLParagraphElement>;

export function Lead({ className = "", ...props }: LeadProps) {
  const classes = `lead ${className}`.trim();
  return <p className={classes} {...props} />;
}
