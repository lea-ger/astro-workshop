// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
    integrations: [icon(), mdx(), react(), vue()],

    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": new URL("./src", import.meta.url).pathname,
            },
        },
    },

    image: {
        domains: ["astro.build", "placecats.com"],
    },

    adapter: node({
        mode: "middleware",
    }),

});