import Link from "next/link";
import type React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  href?: string;
};

export function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  footer,
  href,
}: FeatureCardProps) {
  const contents = (
    <>
      {imageSrc ? (
        <div className="card-media">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      ) : null}
      <div className="card-title">{title}</div>
      <div className="card-body">{description}</div>
      {footer ? <div className="card-placeholder">{footer}</div> : null}
    </>
  );

  if (href) {
    return (
      <Link className="card card-link" href={href}>
        {contents}
      </Link>
    );
  }

  return <div className="card">{contents}</div>;
}
