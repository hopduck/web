import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#272727",
    categories: ["productivity", "utilities"],
    description: site.description,
    display: "standalone",
    icons: [
      {
        purpose: "maskable",
        sizes: "192x192",
        src: "/icon-192.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "/icon-512.png",
        type: "image/png",
      },
      {
        sizes: "180x180",
        src: "/apple-icon.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "any",
        src: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    name: "HopDuck",
    orientation: "portrait-primary",
    screenshots: [
      {
        form_factor: "wide",
        label: "HopDuck dashboard — kanban board view",
        sizes: "1280x800",

        src: "/screenshots/dashboard.png",
        type: "image/png",
      },
      {
        form_factor: "narrow",
        label: "HopDuck on mobile",
        sizes: "390x844",

        src: "/screenshots/mobile.png",
        type: "image/png",
      },
    ],
    short_name: site.name,
    start_url: "/",
    theme_color: "#FF5B01",
  };
}
