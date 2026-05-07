import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://celestial-fury.netlify.app', // Kendi Netlify URL'inle değiştir
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    mdx()
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});