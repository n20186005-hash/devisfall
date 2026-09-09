import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// डोमेन तय भएपछि पूर्ण URL केवल यही एक ठाउँमा भर्नुहोस्।
// खाली राख्दा canonical/absolute URL हट्छ र sitemap integration स्वतः बन्द हुन्छ।
const SITE = 'https://devisfall.com';
const site = SITE.trim() || undefined;

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
