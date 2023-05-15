import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import relativeLinks from "astro-relative-links";

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    relativeLinks(),
  ],
});
