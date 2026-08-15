import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "host",

      remotes: {
        products: "http://localhost:4173/assets/remoteEntry.js",
      },

      shared: ["react", "react-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(new URL("./src", import.meta.url).pathname),
    },
  },

  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },

  server: {
    port: 5173,
  },
});
