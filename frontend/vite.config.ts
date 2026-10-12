import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "src/assets"),
            "@shared": path.resolve(__dirname, "src/shared"),
        },
    },
});
