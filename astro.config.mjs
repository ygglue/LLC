import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Base path:
// - GitHub Pages preview (https://n3mo1101.github.io/LLC/) is a project site, so it
//   needs '/LLC/'. Its build runs in GitHub Actions, which always sets GITHUB_ACTIONS.
// - Everywhere else (Vercel, other hosts, `astro dev`, local builds) serves from '/'.
// - SITE_BASE overrides both, e.g. SITE_BASE=/LLC/ npm run build.
const base = process.env.SITE_BASE?.trim() || (process.env.GITHUB_ACTIONS ? '/LLC/' : '/');

// Canonical origin: Vercel exposes its production domain; otherwise the Pages preview.
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://n3mo1101.github.io';

export default defineConfig({
  site,
  base,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
