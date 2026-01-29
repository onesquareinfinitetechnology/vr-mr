import { notFound } from "next/navigation";

import { CaseStudyLayout, PolicyFooter, SiteHeader } from "../../../components/ui";
import { brandLogo, brandName, navItems } from "../../../data/site";
import { useCases } from "../../../data/useCases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = useCases.find((item) => item.slug === slug);

  if (!useCase) {
    notFound();
  }

  return (
    <main className="site-main">
      <SiteHeader brand={brandName} logoSrc={brandLogo} navItems={navItems} />

      <CaseStudyLayout
        title={useCase.title}
        summary={useCase.summary}
        heroImage={useCase.heroImage}
        studyLink={useCase.studyLink}
        overview={useCase.overview}
        challenges={useCase.challenges}
        solution={useCase.solution}
        impact={useCase.impact}
        deliverables={useCase.deliverables}
        studylink={useCase.studyLink}
        metrics={useCase.metrics}
        timeline={useCase.timeline}
        techStack={useCase.techStack}
      />

      <PolicyFooter copyright={`© 2026 ${brandName}. All rights reserved.`} />
    </main>
  );
}
