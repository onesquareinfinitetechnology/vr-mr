import type React from "react";

type ActionRowProps = React.HTMLAttributes<HTMLDivElement>;

export function ActionRow({ className = "", ...props }: ActionRowProps) {
  const classes = `hero-actions ${className}`.trim();
  return <div className={classes} {...props} />;
}
