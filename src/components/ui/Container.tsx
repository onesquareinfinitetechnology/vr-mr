import type React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className = "", ...props }: ContainerProps) {
  const classes = `container ${className}`.trim();
  return <div className={classes} {...props} />;
}
