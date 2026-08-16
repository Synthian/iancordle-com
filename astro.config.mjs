// @ts-check
import {defineConfig, fontProviders} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        awaitWriteFinish: {
          stabilityThreshold: 100,
          pollInterval: 20
        }
      }
    }
  },
  site: "https://www.iancordle.com",
  integrations: [react(), mdx(), icon()],
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Poppins",
    cssVariable: "--font-poppins",
    weights: [300, 400, 700]
  }]
});