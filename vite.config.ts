import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
    }),
    tsconfigPaths(),
  ],
  server: {
    strictPort: true,
  },
  build: {
    target: "esnext",
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
