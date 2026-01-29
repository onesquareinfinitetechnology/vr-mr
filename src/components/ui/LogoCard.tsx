import type React from "react";

type LogoCardProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export function LogoCard({ imageSrc, imageAlt = "" }: LogoCardProps) {
  return (
    <div className="logo-card">
      {imageSrc ? <img className="logo-card-img" src={imageSrc} alt={imageAlt} /> : null}
    </div>
  );
}
