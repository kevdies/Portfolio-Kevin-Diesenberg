import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/", "/assets/*.js", "/assets/*.css"],
        disallow: ["/_next/", "/admin/", "/private/"],
      },
      {
        userAgent: "*",
        disallow: ["/_next/", "/admin/", "/temp/"],
      },
    ],
    sitemap: "https://www.kevindiesenberg.com/sitemap.xml",
  };
}
