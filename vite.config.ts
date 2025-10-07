import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const ALLOWED = [
  "localhost",
  "127.0.0.1",
  "dkcg8cwwo88cgc8csoksswoc.162.212.158.89.sslip.io",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ALLOWED,
  },
  // TODO: add imports aliases
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
