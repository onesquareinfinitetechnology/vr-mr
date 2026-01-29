import type React from "react";

type SectionVariant = "hero" | "surface" | "surface-2" | "surface-3" | "cta" | "plain";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  variant?: SectionVariant;
};

const variantClasses: Record<SectionVariant, string> = {
  hero: "section-hero",
  surface: "section bg-surface",
  "surface-2": "section bg-surface-2",
  "surface-3": "section bg-surface-3",
  cta: "cta-section",
  plain: "section",
};

export function Section({
  as: Component = "section",
  variant = "plain",
  className = "",
  ...props
}: SectionProps) {
  const classes = `${variantClasses[variant]} ${className}`.trim();
  return <Component className={classes} {...props} />;
}
