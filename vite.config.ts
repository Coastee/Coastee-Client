import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@components": "/src/components",
    },
  },
});
