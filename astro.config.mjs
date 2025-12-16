// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// Pagefind integration
function pagefind() {
  return {
    name: 'pagefind',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const { execSync } = await import('child_process');
        execSync(`npx pagefind --site "${dir.pathname}"`, {
          stdio: 'inherit',
        });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), pagefind()],

  vite: {
    plugins: [tailwindcss()],
  },
});
