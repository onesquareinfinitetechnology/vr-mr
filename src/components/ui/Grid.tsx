import type React from "react";

type GridVariant = "three" | "four";

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: GridVariant;
};

const variantClasses: Record<GridVariant, string> = {
  three: "grid-3",
  four: "grid-4",
};

export function Grid({ variant, className = "", ...props }: GridProps) {
  const classes = `section-grid ${variantClasses[variant]} ${className}`.trim();
  return <div className={classes} {...props} />;
}
