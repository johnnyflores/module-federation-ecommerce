import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

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
