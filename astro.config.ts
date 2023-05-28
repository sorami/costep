import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import relativeLinks from "astro-relative-links";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://sorami.dev/costep/",
  trailingSlash: "always",
  integrations: [UnoCSS({
    injectReset: true
  }), relativeLinks(), mdx()]
});