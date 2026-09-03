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
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    // No sourcemaps in production — keeps original, unminified source out of
    // the deployed bundle (browser devtools would otherwise be able to
    // reconstruct it via the Sources panel).
    sourcemap: false,
    // Terser gives smaller, more thoroughly mangled output than the default
    // esbuild minifier — variable/function names are shortened and comments
    // and console/debugger statements are stripped from the shipped build.
    minify: "terser",
    terserOptions: {
      compress: {
        // Not dropping console/debugger: dropping console would also
        // silently strip real console.error() calls used for production
        // error visibility (see __root.tsx's error boundary), and the
        // authorship watermark below relies on a console message too.
        // debugger statements are stripped by esbuild during the earlier
        // transform step regardless.
        passes: 2,
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        // Without this, Rollup was emitting 15+ separate sub-1KB files (one
        // per lucide-react icon shared across two-plus routes) alongside one
        // monolithic ~520KB catch-all vendor file. Neither is great on a
        // slow/high-latency mobile connection: dozens of tiny requests each
        // carry their own round-trip overhead, and one giant bundle blocks
        // on a single slow download. Grouping by library instead means:
        // fewer, right-sized requests, and — since React/Radix/Framer Motion
        // change far less often than the app's own code — returning visitors
        // can keep these cached across future deploys instead of
        // re-downloading them every time a page's content changes.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/react-dom|\/react\/|scheduler/.test(id)) return "vendor-react";
          if (id.includes("framer-motion") || id.includes("motion-dom") || id.includes("motion-utils")) return "vendor-motion";
          if (id.includes("@tanstack")) return "vendor-tanstack";
          if (id.includes("@radix-ui") || id.includes("lucide-react")) return "vendor-ui";
          return "vendor";
        },
      },
    },
  },
});
