import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  server: {
    open: false,
    fs: {
      strict: false,
    },
    historyApiFallback: true, 
  },
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
});
