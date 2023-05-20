import { z, defineCollection } from "astro:content";

const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  articles: articleCollection,
};
