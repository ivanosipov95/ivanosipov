import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ivanosipov.dev',
  integrations: [mdx(), sitemap({ lastmod: new Date() })],
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
});
