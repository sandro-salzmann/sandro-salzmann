import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { remixRoutes } from "remix-routes/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
      basename: "/sandro-salzmann/",
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    remixRoutes(),
  ],
  assetsInclude: ["../README.md"],
  base: "/sandro-salzmann/",
});
