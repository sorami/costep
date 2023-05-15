import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import relativeLinks from "astro-relative-links";

export default defineConfig({
  trailingSlash: "always",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    relativeLinks(),
  ],
});
