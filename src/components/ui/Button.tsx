import type React from "react";

type ButtonVariant = "gradient" | "solid";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  gradient: "btn-gradient",
  solid: "btn-solid",
};

export function Button({ variant = "gradient", className = "", ...props }: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`.trim();
  return <button className={classes} {...props} />;
}
