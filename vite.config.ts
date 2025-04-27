import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "NE-coding-task",
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
