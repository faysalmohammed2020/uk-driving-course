import { MetadataRoute } from "next";
import { routing, Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

const host = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const t = await getTranslations();

  let blogs: { id: string }[] = [];

  try {
    const fetchedBlogs = t.raw("home.BlogSection.blogContent");
    if (Array.isArray(fetchedBlogs)) {
      blogs = fetchedBlogs;
    } else {
      console.warn(
        "Blogs translation is missing or invalid, using an empty list."
      );
    }
  } catch (error) {
    console.error("Error fetching blogs translation:", error);
  }

  const staticLinks = [
    "/",
    "/courses",
    "/guidelines",
    "/guidelines/book-appoinment",
    "/guidelines/medical-check",
    "/guidelines/topographical-training",
    "/guidelines/final-steps",
    "/guidelines/pco-renewals",
    "/blogs",
    "/about-us",
    "/contacts",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add static pages to sitemap
  for (const link of staticLinks) {
    sitemapEntries.push(...getEntries(link));
  }

  // Add dynamic blog pages to sitemap
  blogs.forEach((blog) => {
    sitemapEntries.push(...getEntries(`/blogs/${blog.id}`));
  });

  return sitemapEntries;
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      ),
    },
  }));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
