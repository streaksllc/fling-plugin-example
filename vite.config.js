import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
      name: "sample-plugin",
      fileName: "index",
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      // external: ["react"],
      sourcemap: false,
    },
    // Reduce bloat from legacy polyfills.
    target: "esnext",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
}));
