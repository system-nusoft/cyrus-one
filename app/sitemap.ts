import type { MetadataRoute } from "next";

const BASE_URL = "https://cyrusonehotel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/rooms`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/explore-islamabad`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blogs/business-travel-in-islamabad-where-should-you-stay`,
      lastModified: new Date("2026-09-18"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
