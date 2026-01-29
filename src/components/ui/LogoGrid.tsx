import type React from "react";

type LogoGridProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function LogoGrid({ className = "", children, ...props }: LogoGridProps) {
  const classes = `logo-grid grid-4 ${className}`.trim();
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
