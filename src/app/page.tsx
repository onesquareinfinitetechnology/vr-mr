import {
  AboutLayout,
  ActionRow,
  Button,
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
  LogoCard,
  LogoGrid,
  MediaCard,
  MutedLink,
  PolicyFooter,
  Section,
  SiteHeader,
  TechPanel,
} from "../components/ui";
import { brandLogo, brandName, navItems } from "../data/site";
import { useCases } from "../data/useCases";

const clientLogos = [
  "/images/vr_logo_icon.png",
  "/images/vr_logo_icon.png",
  "/images/vr_logo_icon.png",
  "/images/vr_logo_icon.png",
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
            <Lead>Next-gen VR + MR enterprise experiences</Lead>

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
              A pioneering team crafting high-fidelity VR and MR solutions that
              integrate seamlessly with real-world workflows.
              <br />
              We’re a VR-first team of seasoned creators and builders. Our 3D animators bring 15+ years of experience crafting high-fidelity visuals,
              cinematic motion, and immersive environments. Alongside them, our software engineers have 10+ years of hands-on experience delivering robust,
              scalable technology across real-world systems and the virtual world. Together, we blend artistry and engineering to create VR experiences that look incredible,
              feel natural, and work reliably—whether it’s for products, training, simulation, or interactive storytelling.
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
          <Lead>Powered by Unreal Engine and spatial computing APIs.</Lead>
          <TechPanel
            imageSrc="/images/vr_tech_stack.png"
            imageAlt="VR technology stack"
          />
        </Container>
      </Section>

      {/* <Section id="clients" variant="surface">
        <Container>
          <Heading as="h2" variant="section">
            Our Clients
          </Heading>

          <LogoGrid>
            {clientLogos.map((logo, index) => (
              <LogoCard key={`${logo}-${index}`} imageSrc={logo} imageAlt="Client logo" />
            ))}
          </LogoGrid>
        </Container>
      </Section> */}

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

      <PolicyFooter copyright={`© 2026 ${brandName}. All rights reserved.`} />
    </main>
  );
}
