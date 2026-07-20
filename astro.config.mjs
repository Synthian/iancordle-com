// @ts-check
import {defineConfig, fontProviders} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://www.iancordle.com",
  integrations: [react(), mdx()],
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Poppins",
    cssVariable: "--font-poppins",
    weights: [400, 700]
  }]
});