import type React from "react";

type CopyBlockProps = React.HTMLAttributes<HTMLDivElement>;

export function CopyBlock({ className = "", ...props }: CopyBlockProps) {
  const classes = `copy-block ${className}`.trim();
  return <div className={classes} {...props} />;
}
