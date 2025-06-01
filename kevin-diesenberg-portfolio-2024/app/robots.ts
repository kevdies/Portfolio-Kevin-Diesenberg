import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/", // Next.js internal files
        "/admin/",
      ],
    },
    sitemap: "https://www.kevindiesenberg.com/sitemap.xml",
  };
}
