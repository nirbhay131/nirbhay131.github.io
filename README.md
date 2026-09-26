# Nirbhay Pandey — Developer Portfolio

A cinematic, interactive personal portfolio built with React, TypeScript, Vite and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/sections/` — page sections (Hero, About, Skills, Work, Journey, etc.)
- `src/components/` — shared UI (Navbar, Loader, CustomCursor, project visuals, case study overlay)
- `src/data/` — `projects.ts` and `skills.ts`. Add a new project by adding an entry to `projects.ts` and a matching visual component in `src/components/visuals/`, then registering it in the `VISUALS` map in `Work.tsx` and `ProjectCaseStudy.tsx`.

## Notes

- All four project interfaces (CareerSphere, CropPulse, Food Waste Management, Modern Traffic Lights) are built directly in React/CSS/SVG as concept visualizations — not real screenshots — and are labeled as such in the UI.
- The "Selected Work" section uses a scroll-pinned 3D gallery on desktop and a simplified stacked layout on mobile/tablet.
- Replace the placeholder email in `src/sections/Contact.tsx` with your real one.
