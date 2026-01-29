import type React from "react";

type HeroVisualWrapProps = React.HTMLAttributes<HTMLDivElement>;

export function HeroVisualWrap({ className = "", ...props }: HeroVisualWrapProps) {
  const classes = `hero-visual-wrap ${className}`.trim();
  return <div className={classes} {...props} />;
}
