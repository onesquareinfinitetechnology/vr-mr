import {
  AboutLayout,
  ActionRow,
  Container,
  CopyBlock,
  CtaInner,
  FeatureCard,
  Grid,
  Heading,
  HeroLayout,
  HeroVisual,
  HeroVisualWrap,
  Lead,
  MediaCard,
  MutedLink,
  PolicyFooter,
  Rating,
  Section,
  SiteHeader,
  TechPanel,
  TestimonialCard,
  TestimonialCarousel,
} from "../components/ui";
import { brandLogo, brandName, navItems } from "../data/site";
import { useCases } from "../data/useCases";

const testimonials = [
  {
    quote:
      "Using the VR walkthrough for my own home while it was being built gave me a much clearer understanding of the space, proportions, and design decisions before execution. It made discussions and decisions far more confident.",
    name: "Vidyanshu Jain",
    role: "Structural Engineer, Master's in Tall Structures",
    company: "Homeowner",
    rating: 5,
  },
  {
    quote:
      "As an interior designer, I found the VR walkthrough extremely valuable for reviewing materials, layout flow, and the overall feel of the space. It is a very effective way to experience a design before it is built, and I liked the service very much.",
    name: "Shubham Jain",
    role: "Interior Designer",
    company: "Design Consultant",
    rating: 5,
  },
];

const placeholderUseCases = [
  {
    slug: "vr-education-placeholder",
    title: "VR Education",
    summary:
      "Placeholder use case for immersive learning and training experiences.",
    image: "/images/vr_education.png",
    placeholderLabel: "Placeholder",
  },
  {
    slug: "vr-dating-placeholder",
    title: "VR Dating",
    summary:
      "Placeholder use case for social and relationship-focused virtual experiences.",
    image: "/images/vr_dating.png",
    placeholderLabel: "Placeholder",
  },
];

const showcasedUseCases = [
  ...useCases.map((useCase) => ({
    ...useCase,
    href: `/use-cases/${useCase.slug}`,
    footer: undefined,
  })),
  ...placeholderUseCases.map((useCase) => ({
    ...useCase,
    href: undefined,
    footer: useCase.placeholderLabel,
  })),
];

export default function Home() {
  return (
    <main className="site-main">
      <SiteHeader brand={brandName} logoSrc={brandLogo} navItems={navItems} />

      <Section id="home" variant="hero">
        <HeroLayout>
          <CopyBlock>
            <Heading as="h1" variant="hero">
              Immersive Reality for Real-World Impact
            </Heading>
            <Lead>Next-Generation VR Solutions for Business and Industry</Lead>

            <ActionRow>
              <a
                className="btn-gradient"
                href="https://forms.gle/3JG2PvsJS76Tf9jq9"
                target="_blank"
                rel="noreferrer"
              >
                Request a Demo
              </a>
              <MutedLink href="#solutions">Explore use cases →</MutedLink>
            </ActionRow>
          </CopyBlock>

          <HeroVisualWrap>
            <HeroVisual
              imageSrc="/images/vr_hero.png"
              imageAlt="VR headset experience"
            />
          </HeroVisualWrap>
        </HeroLayout>
      </Section>

      <Section id="about" variant="surface-2">
        <AboutLayout>
          <CopyBlock>
            <Heading as="h2" variant="section-light">
              Who We Are
            </Heading>
            <Lead>
              OSIT stands for One Square Infinite Technologies. VR Labs is a
              focused unit within OSIT dedicated to crafting high-fidelity VR
              and MR experiences that connect digital environments with
              real-world decision making.
              <br />
              We bring together experienced 3D artists, immersive designers,
              and software engineers to build environments that look credible,
              feel intuitive, and support practical business goals. Right now,
              that effort is centered on VR Home as the company’s flagship
              showcase.
            </Lead>
          </CopyBlock>

          <MediaCard
            imageSrc="/images/vr_lab.png"
            imageAlt="VR-MR lab workspace"
          />
        </AboutLayout>
      </Section>

      <Section id="solutions" variant="surface-3">
        <Container>
          <Heading as="h2" variant="section">
            Use Cases
          </Heading>

          <Grid variant="three">
            {showcasedUseCases.map((card) => (
              <FeatureCard
                key={card.slug}
                title={card.title}
                description={card.summary}
                imageSrc={card.image}
                imageAlt={card.title}
                href={card.href}
                footer={card.footer}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="tech" variant="surface-2">
        <Container>
          <Heading as="h2" variant="section">
            Technology Stack
          </Heading>
          <Lead>
            Powered by Unreal Engine and immersive visualization workflows.
          </Lead>
          <TechPanel
            imageSrc="/images/vr_tech_stack.png"
            imageAlt="VR technology stack"
          />
        </Container>
      </Section>

      <Section id="testimonials" variant="surface-3">
        <Container>
          <Heading as="h2" variant="section">
            Testimonials
          </Heading>
          <Lead>
            Feedback from teams that have used our immersive visualization
            services.
          </Lead>
          <TestimonialCarousel>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </TestimonialCarousel>
          <div className="testimonial-summary">
            <Rating value={5} label="Overall client satisfaction: 5 out of 5 stars" />
            <div className="testimonial-summary-copy">Trusted by teams building immersive buyer experiences.</div>
          </div>
        </Container>
      </Section>

      <Section id="contact" variant="cta">
        <CtaInner>
          <Heading as="h2" variant="cta">
            Partner with the future of reality
          </Heading>

          <ActionRow>
            <a
              className="btn-solid"
              href="https://forms.gle/3JG2PvsJS76Tf9jq9"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </ActionRow>
        </CtaInner>
      </Section>

      <PolicyFooter
        copyright={`© 2026 ${brandName} (One Square Infinite Technologies). All rights reserved.`}
      />
    </main>
  );
}
