"use client";

import { useMemo, useState } from "react";

type PolicyKey = "privacy" | "terms" | "accessibility";

type Policy = {
  key: PolicyKey;
  label: string;
  title: string;
  body: string[];
};

type PolicyFooterProps = {
  copyright: string;
};

const policies: Policy[] = [
  {
    key: "privacy",
    label: "Privacy",
    title: "Privacy Policy (India)",
    body: [
      "OSIT VR-Labs collects the minimum personal information needed to respond to enquiries and provide services. We do not sell personal data and process information in line with applicable Indian privacy laws and industry norms.",
      "Data we may collect includes name, business email, phone number, and company details you share via forms or demos. We use it to respond, deliver services, improve the site, and meet compliance obligations.",
      "We may use trusted service providers to host infrastructure and analytics under contractual safeguards. You can request access, correction, or deletion by contacting us.",
    ],
  },
  {
    key: "terms",
    label: "Terms",
    title: "Terms of Use",
    body: [
      "Content on this site is provided for professional, informational purposes. Use of the site implies acceptance of these terms.",
      "You may not copy, redistribute, or misuse content, branding, or proprietary materials without written permission. Any project discussions are non-binding until a formal agreement is executed.",
      "We disclaim warranties to the extent permitted by law and limit liability for indirect or consequential damages arising from use of the site.",
    ],
  },
  {
    key: "accessibility",
    label: "Accessibility",
    title: "Accessibility Statement",
    body: [
      "We aim to provide an accessible experience aligned with WCAG 2.1 AA principles and continuously improve usability across devices.",
      "If you experience any difficulty accessing content, email our team with the page and issue details so we can provide an alternative or resolve the problem.",
    ],
  },
];

export function PolicyFooter({ copyright }: PolicyFooterProps) {
  const [active, setActive] = useState<PolicyKey | null>(null);

  const activePolicy = useMemo(
    () => policies.find((policy) => policy.key === active) ?? null,
    [active]
  );

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-text">{copyright}</div>
        <div className="footer-subtext">
          {policies.map((policy, index) => (
            <button
              key={policy.key}
              className="footer-link footer-link-button"
              type="button"
              onClick={() => setActive(policy.key)}
            >
              {policy.label}
              {index < policies.length - 1 ? " • " : ""}
            </button>
          ))}
        </div>
      </div>

      {activePolicy ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <div className="modal-header">
              <h3 className="modal-title">{activePolicy.title}</h3>
              <button className="modal-close" type="button" onClick={() => setActive(null)}>
                Close
              </button>
            </div>
            <div className="modal-body">
              {activePolicy.body.map((paragraph) => (
                <p key={paragraph} className="modal-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <button
            className="modal-overlay"
            aria-label="Close"
            type="button"
            onClick={() => setActive(null)}
          />
        </div>
      ) : null}
    </footer>
  );
}
