import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://ny-collins.github.io',
  base: '/swiftel_site',

  integrations: [tailwind(), svelte()]
});