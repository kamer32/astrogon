import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://celestial-fury.netlify.app', // Kendi Netlify URL'in
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
  },
  // --- BEAT TAURUS i18n ENTEGRASYONU ---
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    routing: {
      prefixDefaultLocale: false // İngilizce URL'ler temiz kalır (örn: /blog). Türkçe URL'ler /tr/blog olur.
    }
  }
});