import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const products = defineCollection({
  loader: file("src/data/products.json"),
});

export const collections = {
  products,
};
