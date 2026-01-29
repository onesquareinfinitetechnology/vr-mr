import type React from "react";

type TechPanelProps = {
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

export function TechPanel({ imageSrc, imageAlt = "", children }: TechPanelProps) {
  return (
    <div className="tech-panel">
      {imageSrc ? <img className="tech-panel-img" src={imageSrc} alt={imageAlt} /> : null}
      {children}
    </div>
  );
}
