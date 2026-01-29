import type React from "react";

type CaseHeroProps = {
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt?: string;
  studyLink?: string;
  children?: React.ReactNode;
};

export function CaseHero({
  title,
  summary,
  imageSrc,
  imageAlt = "",
  studyLink,
}: CaseHeroProps) {
  return (
    <div className="case-hero">
      <div className="case-hero-copy">
        <h1 className="hero-title">{title}</h1>
        <p className="lead">{summary}</p>
      </div>
      <div className="case-hero-media">
        <div className="case-hero-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        {studyLink ? (
          <a className="link-muted case-hero-link" href={studyLink} target="_blank" rel="noreferrer">
            View study →
          </a>
        ) : null}
      </div>
    </div>
  );
}
