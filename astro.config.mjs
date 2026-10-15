import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Set to the real Pages URL once the repo exists; used for canonical links only.
  site: 'https://robinfosterdev.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
