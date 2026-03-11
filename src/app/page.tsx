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
  Section,
  SiteHeader,
  TechPanel,
} from "../components/ui";
import { brandLogo, brandName, navItems } from "../data/site";
import { useCases } from "../data/useCases";

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
            <Lead>
              OSIT VR Labs creates immersive experiences with a current focus on
              VR Home for real-estate and residential visualization.
            </Lead>

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
          <Lead>Current company focus: VR Home.</Lead>

          <Grid variant="three">
            {useCases.map((card) => (
              <FeatureCard
                key={card.slug}
                title={card.title}
                description={card.summary}
                imageSrc={card.image}
                imageAlt={card.title}
                href={`/use-cases/${card.slug}`}
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
