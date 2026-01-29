# UI Components

This file documents the reusable UI components in `src/components/ui`. Each example uses plain React/JSX.

## AboutLayout

Wrapper for the About section layout.

Props: `React.HTMLAttributes<HTMLDivElement>`

```jsx
<AboutLayout>
  <div>Left</div>
  <div>Right</div>
</AboutLayout>
```

## ActionRow

Horizontal action row for buttons/links.

Props: `React.HTMLAttributes<HTMLDivElement>`

```jsx
<ActionRow>
  <Button>Primary</Button>
  <MutedLink href="#">Secondary</MutedLink>
</ActionRow>
```

## Button

Primary and solid buttons.

Props:
- `variant?: "gradient" | "solid"`
- plus standard `button` props

```jsx
<Button>Request a Demo</Button>
<Button variant="solid">Contact Us</Button>
```

## CaseHero

Hero block for case studies with optional study link under the image.

Props:
- `title: string`
- `summary: string`
- `imageSrc: string`
- `imageAlt?: string`
- `studyLink?: string`

```jsx
<CaseHero
  title="Healthcare VR"
  summary="Immersive training"
  imageSrc="/images/vr_health.png"
  studyLink="https://example.com"
/>
```

## CaseSection

Standard case study section with a title and body.

Props:
- `title: string`
- `children: React.ReactNode`

```jsx
<CaseSection title="Impact">
  <ul>
    <li>Improved outcomes</li>
  </ul>
</CaseSection>
```

## CaseStudyLayout

Opinionated, full case study layout with standard sections and optional metrics/timeline/tech stack.

Props:
- `title: string`
- `summary: string`
- `heroImage: string`
- `studyLink?: string`
- `overview: string`
- `challenges: string[]`
- `solution: string`
- `impact: string[]`
- `deliverables: string[]`
- `metrics?: { label: string; value: string }[]`
- `timeline?: string[]`
- `techStack?: string[]`
- `cta?: React.ReactNode`

```jsx
<CaseStudyLayout
  title="XR Education"
  summary="Immersive lessons at scale"
  heroImage="/images/vr_education.png"
  overview="..."
  challenges={["Challenge A"]}
  solution="..."
  impact={["Impact A"]}
  deliverables={["Deliverable A"]}
  metrics={[{ label: "Engagement", value: "+22%" }]}
  timeline={["Phase 1", "Phase 2"]}
  techStack={["Unity", "WebXR"]}
/>
```

## Container

Fixed-width page container.

Props: `React.HTMLAttributes<HTMLDivElement>`

```jsx
<Container>
  <h2>Section</h2>
</Container>
```

## CopyBlock

Constrained text block for hero and about sections.

Props: `React.HTMLAttributes<HTMLDivElement>`

```jsx
<CopyBlock>
  <Heading as="h1" variant="hero">Title</Heading>
</CopyBlock>
```

## CtaInner

Inner wrapper for CTA section.

Props: `React.HTMLAttributes<HTMLDivElement>`

```jsx
<CtaInner>
  <Heading as="h2" variant="cta">CTA</Heading>
</CtaInner>
```

## FeatureCard

Use-case card with optional image and optional link.

Props:
- `title: string`
- `description: string`
- `imageSrc?: string`
- `imageAlt?: string`
- `footer?: React.ReactNode`
- `href?: string`

```jsx
<FeatureCard
  title="Healthcare VR"
  description="Training"
  imageSrc="/images/vr_health.png"
  href="/use-cases/healthcare-vr"
/>
```

## Grid

Responsive grid with preset columns.

Props:
- `variant: "three" | "four"`
- plus standard div props

```jsx
<Grid variant="three">
  <FeatureCard ... />
</Grid>
```

## Heading

Typed headings for hero/section/cta.

Props:
- `as?: "h1" | "h2" | "h3" | "h4"`
- `variant?: "hero" | "section" | "section-light" | "cta"`

```jsx
<Heading as="h2" variant="section">Use Cases</Heading>
```

## HeroLayout

Hero section layout wrapper.

Props: `React.HTMLAttributes<HTMLDivElement>`

```jsx
<HeroLayout>
  <CopyBlock>...</CopyBlock>
  <HeroVisualWrap>...</HeroVisualWrap>
</HeroLayout>
```

## HeroVisual

Circular hero image container.

Props:
- `imageSrc?: string`
- `imageAlt?: string`
- `children?: React.ReactNode`

```jsx
<HeroVisual imageSrc="/images/vr_hero.png" />
```

## HeroVisualWrap

Alignment wrapper for the hero visual.

Props: `React.HTMLAttributes<HTMLDivElement>`

```jsx
<HeroVisualWrap>
  <HeroVisual imageSrc="/images/vr_hero.png" />
</HeroVisualWrap>
```

## Lead

Muted paragraph text.

Props: `React.HTMLAttributes<HTMLParagraphElement>`

```jsx
<Lead>Short supporting copy.</Lead>
```

## LogoCard

Logo tile, optionally with an image.

Props:
- `imageSrc?: string`
- `imageAlt?: string`

```jsx
<LogoCard imageSrc="/images/vr_logo_icon.png" />
```

## LogoGrid

Four-column logo grid with spacing.

Props: `React.HTMLAttributes<HTMLDivElement>`

```jsx
<LogoGrid>
  <LogoCard />
</LogoGrid>
```

## MediaCard

Rectangular media container.

Props:
- `imageSrc?: string`
- `imageAlt?: string`
- `children?: React.ReactNode`

```jsx
<MediaCard imageSrc="/images/vr_lab.png" />
```

## MutedLink

Inline muted link style.

Props: `React.AnchorHTMLAttributes<HTMLAnchorElement>`

```jsx
<MutedLink href="#solutions">Explore use cases →</MutedLink>
```

## PlaceholderText

Muted placeholder text for empty panels.

Props: `React.HTMLAttributes<HTMLDivElement>`

```jsx
<PlaceholderText>[Coming Soon]</PlaceholderText>
```

## PolicyFooter

Footer with modal policy content.

Props:
- `copyright: string`

```jsx
<PolicyFooter copyright="© 2026 OSIT VR-Labs." />
```

## Section

Section wrapper with style variants.

Props:
- `as?: React.ElementType`
- `variant?: "hero" | "surface" | "surface-2" | "surface-3" | "cta" | "plain"`
- plus standard element props

```jsx
<Section id="clients" variant="surface">
  <Container>...</Container>
</Section>
```

## SiteFooter

Basic footer with link list (unused when PolicyFooter is used).

Props:
- `copyright: string`
- `links: { href: string; label: string }[]`

```jsx
<SiteFooter copyright="© 2026" links={[{ href: "#", label: "Privacy" }]} />
```

## SiteHeader

Sticky header with logo and navigation.

Props:
- `brand: string`
- `logoSrc?: string`
- `logoAlt?: string`
- `navItems: { label: string; href: string }[]`
- `mobileLinkLabel?: string`
- `mobileLinkHref?: string`

```jsx
<SiteHeader
  brand="OSIT VR-Labs"
  logoSrc="/images/logoV2_vrlabs.png"
  navItems={[{ label: "Home", href: "/#home" }]}
/>
```

## TechPanel

Technology panel container.

Props:
- `imageSrc?: string`
- `imageAlt?: string`
- `children?: React.ReactNode`

```jsx
<TechPanel imageSrc="/images/vr_tech_stack.png" />
```
