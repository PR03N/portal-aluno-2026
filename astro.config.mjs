// @ts-check
import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [relativeLinks()],
  build: {
    assets: "assets",
    format: "file",
  },
});
