import type React from "react";

type HeroLayoutProps = React.HTMLAttributes<HTMLDivElement>;

export function HeroLayout({ className = "", ...props }: HeroLayoutProps) {
  const classes = `hero-layout ${className}`.trim();
  return <div className={classes} {...props} />;
}
