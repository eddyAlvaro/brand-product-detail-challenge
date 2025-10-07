import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ["all"],
    hmr: {
      host: "dkcg8cwwo88cgc8csoksswoc.162.212.158.89.sslip.io", // reemplaza con tu dominio real
      // protocol: "wss", // usa websocket seguro si Coolify usa HTTPS
      port: 5173,
    },
    watch: { usePolling: true },
  },
  // TODO: add imports aliases
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
