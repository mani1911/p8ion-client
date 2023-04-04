import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  worker: {
    plugins: [react()],
  },
  plugins: [
    react({ fastRefresh: false }),
    VitePWA({
      includeAssets: ["masked-icon.svg", "masked-icon.png"],
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{ts,js,tsx,css,html,ico,png,svg,jpeg,jpg}"],
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "P8ion",
        display: "standalone",
        short_name: "P8ion",
        description: "Doctor Handwriting Recognition App",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/mask-icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
