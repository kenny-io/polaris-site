# Polaris Labs — marketing site

Marketing site for Polaris Labs and its two products: **Flagpole** (a
lightweight feature-flag REST API) and **Drift** (a zero-dependency embedded
key-value store for Node.js).

Built with Vite, React, and TypeScript, routed with react-router-dom.

## Pages

All page copy lives inline as JSX in the page components:

| Route       | File                     |
| ----------- | ------------------------ |
| `/`         | `src/pages/Home.tsx`     |
| `/flagpole` | `src/pages/Flagpole.tsx` |
| `/drift`    | `src/pages/Drift.tsx`    |

Styling is the shared stylesheet at `src/styles.css`.

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build to dist/
npm run preview   # serve the production build
```
