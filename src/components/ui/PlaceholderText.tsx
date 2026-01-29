import type React from "react";

type PlaceholderTextProps = React.HTMLAttributes<HTMLDivElement>;

export function PlaceholderText({ className = "", ...props }: PlaceholderTextProps) {
  const classes = `placeholder-text ${className}`.trim();
  return <div className={classes} {...props} />;
}
