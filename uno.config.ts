import { defineConfig, presetUno, presetIcons, presetWebFonts } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        base: "Zen Maru Gothic",
        heading: "Kaisei Tokumin",
      },
    }),
  ],
  transformers: [transformerDirectives()],
});
