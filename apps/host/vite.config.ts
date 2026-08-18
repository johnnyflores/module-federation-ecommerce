import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const productsRemoteUrl =
    env.VITE_PRODUCTS_REMOTE_URL ??
    "http://localhost:4173/assets/remoteEntry.js";

  return {
    plugins: [
      react(),

      federation({
        name: "host",

        remotes: {
          products: productsRemoteUrl,
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
      minify: true,
    },

    server: {
      port: 5173,
    },
  };
});
