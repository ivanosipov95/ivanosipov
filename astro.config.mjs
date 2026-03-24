import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ivanosipov95.github.io',
  base: '/ivanosipov/',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
});
