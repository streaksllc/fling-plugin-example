import { resolve } from "path";
import { defineConfig } from "vite";
import generateFile from "vite-plugin-generate-file";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      react: "https://unpkg.com/react@18/umd/react.development.js",
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
      name: "sample-plugin",
      fileName: "sample-plugin",
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      // external: ["react", "react-jsx-runtime"],
      sourcemap: false,
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "sample-plugin.css";
          return assetInfo.name ?? "";
        },
      },
    },
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    generateFile([
      {
        type: "json",
        output: "./manifest.json",
        data: {
          id: "sample-plugin",
          script: "sample-plugin.js",
          css: "sample-plugin.css",
          name: "Sample Plugin",
          description: "A sample plugin for testing",
          version: "1.0.0",
        },
      },
    ]),
  ],
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
}));
