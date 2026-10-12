// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site URL — update to the real domain before launch.
export default defineConfig({
  site: 'https://blackcrowntint.net',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !/\/(thank-you|404)(\/|\.html|$)/.test(new URL(page).pathname) })],
  build: {
    inlineStylesheets: 'auto',
  },
});
