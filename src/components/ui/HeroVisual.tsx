import type React from "react";

type HeroVisualProps = {
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

export function HeroVisual({ imageSrc, imageAlt = "", children }: HeroVisualProps) {
  return (
    <div className="hero-visual">
      {imageSrc ? (
        <img
          className="hero-visual-img"
          src={imageSrc}
          alt={imageAlt}
          width={900}
          height={600}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      ) : null}
      {children}
      <div className="hero-visual-ring" />
    </div>
  );
}
