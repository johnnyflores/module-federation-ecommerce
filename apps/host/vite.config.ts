import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const isProduction = mode === "production";
  const productsRemoteUrl = isProduction
    ? env.VITE_PRODUCTS_REMOTE_URL
    : env.VITE_PRODUCTS_LOCAL_URL;

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
