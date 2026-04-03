import { site } from "@/data/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const origin = new URL(site.url).origin;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
