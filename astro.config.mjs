// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site URL — update to the real domain before launch.
export default defineConfig({
  site: 'https://www.blackcrowntint.net',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
