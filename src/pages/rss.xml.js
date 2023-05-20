import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { SITE_TITLE, SITE_DESCRIPTION } from "../site";

const allArticles = await getCollection("articles");
const sortedArticles = allArticles.sort((a, b) => {
  return b.slug.localeCompare(a.slug);
});

export function get(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: sortedArticles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.pubDate,
      description: article.data.description,
      link: `/costep/${article.slug}/`,
      content: `<p>${article.data.description}</p><img src="${context.site}costep${article.data.image.src}" alt="${article.data.image.alt}" />`,
    })),
    customData: `<language>ja-jp</language>`,
  });
}
