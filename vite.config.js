import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "sass/_settings.scss";`
      }
    }
  },
  resolve: {
    alias: {
      "@": "/",
      "@sass": "/sass",
      "@js": "/js",
      "@img": "/img"
    }
  }
});