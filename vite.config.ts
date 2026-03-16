import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ["all"],
    hmr: {
      host: "dkcg8cwwo88cgc8csoksswoc.162.212.158.89.sslip.io",
      port: 5173,
    },
    watch: { usePolling: true },
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  // TODO: add imports aliases
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
