import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gobadi — AI-Powered Livestock Platform",
    short_name: "Gobadi",
    description: "AI-powered digital platform transforming the livestock ecosystem",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#C0612B",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/images/brand/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
