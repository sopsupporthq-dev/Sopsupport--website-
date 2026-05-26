import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
  TanStackRouterVite({
    target: "react",
    autoCodeSplitting: true,
  }),
  react(),
  tailwindcss(),
  tsconfigPaths(),
],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
    allowedHosts: ["sopsupport-website.onrender.com"],
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
