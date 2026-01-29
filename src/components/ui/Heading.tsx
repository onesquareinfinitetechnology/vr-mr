import type React from "react";

type HeadingVariant = "hero" | "section" | "section-light" | "cta";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
  variant?: HeadingVariant;
};

const variantClasses: Record<HeadingVariant, string> = {
  hero: "hero-title",
  section: "section-title",
  "section-light": "section-title-light",
  cta: "cta-title",
};

export function Heading({
  as: Component = "h2",
  variant = "section",
  className = "",
  ...props
}: HeadingProps) {
  const classes = `${variantClasses[variant]} ${className}`.trim();
  return <Component className={classes} {...props} />;
}
