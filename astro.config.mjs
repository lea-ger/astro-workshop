// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx()],

  vite: {
      plugins: [tailwindcss()],
      resolve: {
          alias: {
              "@": new URL("./src", import.meta.url).pathname,
          },
      },
  },

  adapter: node({
    mode: "standalone",
  }),
});