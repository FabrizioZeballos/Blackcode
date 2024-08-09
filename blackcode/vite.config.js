import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This makes the server listen on all IP addresses. Useful to access website on phone web browser
  server: {
    host: true,
  },
});
