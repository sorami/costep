import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const allArticles = await getCollection("articles");
const sortedArticles = allArticles.sort((a, b) => {
  return b.slug.localeCompare(a.slug);
});

export function get(context) {
  return rss({
    title: "科学技術コミュ日記",
    description:
      "北海道で、CoSTEP「科学技術コミュニケーター養成プログラム」を受講する日々の記録です。",
    site: context.site,
    items: sortedArticles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.pubDate,
      description: article.data.description,
      link: `/${article.slug}/`,
    })),
    customData: `<language>ja-jp</language>`,
  });
}
