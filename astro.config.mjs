import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kirilly.github.io',
  base: '/kayak-tigre-astro',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ru'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
