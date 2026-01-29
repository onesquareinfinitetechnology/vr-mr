# VR-MR Landing

A Next.js + Tailwind landing site for OSIT VR-Labs with a reusable UI component system and data-driven case studies.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev`: local development server
- `npm run build`: production build
- `npm run start`: serve production build

## Structure

- `src/app/`: Next.js App Router pages
- `src/components/ui/`: reusable UI components
- `src/data/`: site and case-study data
- `public/images/`: static image assets

## Styling

- Global tokens and base styles: `src/app/globals.css`
- Component layer styles: `src/app/components.css`

## Case studies

Use-case cards are driven by `src/data/useCases.ts` and render at `/use-cases/[slug]`.

## GitHub Pages deployment

This project exports a static site to the `out/` directory and deploys via GitHub Actions.

Steps:

1. Push the repo to GitHub and ensure your default branch is `main`.
2. In GitHub, go to Settings → Pages.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Commit and push the workflow at `.github/workflows/deploy.yml`.
5. The action will build and publish the site to GitHub Pages.

Notes:

- If this is a project site (e.g. `https://username.github.io/repo-name/`), the workflow sets `BASE_PATH` automatically so assets resolve correctly.
- If this is a user/organization site (e.g. `https://username.github.io/`), the base path will be `/` and no extra changes are needed.
- The build output is `out/`. You can test locally with:

```bash
npm run build
npx serve out
```

## Notes

- CTA buttons open the Request a Demo form.
- Policies render in a footer modal.

## Documentation

- Component docs: `COMPONENTS.md`
