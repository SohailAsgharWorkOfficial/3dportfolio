import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2019",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("gsap")) return "gsap-vendor";
          if (id.includes("react-icons")) return "icons-vendor";
          if (id.includes("react-fast-marquee")) return "marquee-vendor";
        },
      },
    },
  },
});
