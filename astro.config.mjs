import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ivanosipov95.github.io',
  base: '/',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
});
