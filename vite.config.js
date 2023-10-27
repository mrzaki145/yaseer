import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
// import postcssLogical from "postcss-logical";

export default defineConfig({
  root: "src",
  base: "./",
  publicDir: "./../public",
  build: {
    rollupOptions: {
      input: {
        app: "./src/index.html",
        about: "./src/about.html",
        contact: "./src/contact.html",
        services: "./src/services.html",
        "service-safety": "./src/service-safety.html",
        "service-airconditioning": "./src/service-airconditioning.html",
        projects: "./src/projects.html",
        "projects-single": "./src/project-singel.html",
        404: "./src/404.html",
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    outDir: "./../dist",
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          logical: {
            inlineDirection: "right-to-left",
          },
        }),
        autoprefixer(),
      ],
    },
  },
});
