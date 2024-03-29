import { defineConfig } from 'astro/config';

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed'
    }
  },
  output: "server",
  adapter: netlify()
});