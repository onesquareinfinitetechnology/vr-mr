import type React from "react";

import { CaseHero } from "./CaseHero";
import { Button } from "./Button";
import { CaseSection } from "./CaseSection";
import { Container } from "./Container";
import { Section } from "./Section";

export type CaseStudyMetrics = {
  label: string;
  value: string;
};

type CaseStudyLayoutProps = {
  title: string;
  summary: string;
  heroImage: string;
  studyLink?: string;
  overview: string;
  challenges: string[];
  solution: string;
  impact: string[];
  deliverables: string[];
  studylink: string;
  metrics?: CaseStudyMetrics[];
  timeline?: string[];
  techStack?: string[];
  cta?: React.ReactNode;
};

export function CaseStudyLayout({
  title,
  summary,
  heroImage,
  studyLink,
  overview,
  challenges,
  solution,
  impact,
  deliverables,
  studylink,
  metrics = [],
  timeline = [],
  techStack = [],
  cta,
}: CaseStudyLayoutProps) {
  const defaultCta = (
    <a
      className="btn-gradient"
      href="https://forms.gle/3JG2PvsJS76Tf9jq9"
      target="_blank"
      rel="noreferrer"
    >
      Request a Demo
    </a>
  );

  return (
    <>
      <Section variant="surface">
        <CaseHero
          title={title}
          summary={summary}
          imageSrc={heroImage}
          imageAlt={title}
          studyLink={studyLink}
        />
      </Section>

      <Section variant="surface-2">
        <Container>
          <CaseSection title="Overview">
            <p>{overview}</p>
          </CaseSection>

          {metrics.length ? (
            <CaseSection title="Key Metrics">
              <div className="case-metrics">
                {metrics.map((metric) => (
                  <div key={metric.label} className="case-metric">
                    <div className="case-metric-value">{metric.value}</div>
                    <div className="case-metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </CaseSection>
          ) : null}

          <CaseSection title="Challenges">
            <ul className="case-list">
              {challenges.map((item) => (
                <li key={item} className="case-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Solution">
            <p>{solution}</p>
          </CaseSection>

          <CaseSection title="Impact">
            <ul className="case-list">
              {impact.map((item) => (
                <li key={item} className="case-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Deliverables">
            <ul className="case-list">
              {deliverables.map((item) => (
                <li key={item} className="case-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </CaseSection>

          {timeline.length ? (
            <CaseSection title="Timeline">
              <ul className="case-list">
                {timeline.map((item) => (
                  <li key={item} className="case-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </CaseSection>
          ) : null}

          {techStack.length ? (
            <CaseSection title="Technology Stack">
              <div className="case-tags">
                {techStack.map((item) => (
                  <span key={item} className="case-tag">
                    {item}
                  </span>
                ))}
              </div>
            </CaseSection>
          ) : null}

          <div className="case-cta">{cta ?? defaultCta}</div>
        </Container>
      </Section>
    </>
  );
}
