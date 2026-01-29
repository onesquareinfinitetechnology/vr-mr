import type React from "react";

type MutedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function MutedLink({ className = "", ...props }: MutedLinkProps) {
  const classes = `link-muted ${className}`.trim();
  return <a className={classes} {...props} />;
}
