import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.javera-studio.at";
  return [
    { url: `${base}`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projekte`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...["face-and-more", "paula-venc", "divine-beauty-nails"].map((slug) => ({
      url: `${base}/projekte/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/preise`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/demo-anfrage`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
