import type React from "react";

type AboutLayoutProps = React.HTMLAttributes<HTMLDivElement>;

export function AboutLayout({ className = "", ...props }: AboutLayoutProps) {
  const classes = `about-layout ${className}`.trim();
  return <div className={classes} {...props} />;
}
