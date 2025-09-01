import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",   // garante saída correta
    sourcemap: false
  },
  server: {
    port: 5173,
    host: true
  }
});
