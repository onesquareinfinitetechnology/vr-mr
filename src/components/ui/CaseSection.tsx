import type React from "react";

type CaseSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function CaseSection({ title, children }: CaseSectionProps) {
  return (
    <section className="case-section">
      <h2 className="case-section-title">{title}</h2>
      <div className="case-section-body">{children}</div>
    </section>
  );
}
