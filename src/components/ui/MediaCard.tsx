import type React from "react";

type MediaCardProps = {
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

export function MediaCard({ imageSrc, imageAlt = "", children }: MediaCardProps) {
  return (
    <div className="media-card">
      {imageSrc ? <img className="media-card-img" src={imageSrc} alt={imageAlt} /> : null}
      {children}
    </div>
  );
}
