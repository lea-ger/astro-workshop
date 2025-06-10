// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [icon(), mdx(), react()],

    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": new URL("./src", import.meta.url).pathname,
            },
        },
    },

    image: {
        domains: ["astro.build", "placecats.com", "placehold.co"],
    },

    adapter: node({
        mode: "middleware",
    }),

});
