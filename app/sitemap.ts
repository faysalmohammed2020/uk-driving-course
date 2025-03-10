import { MetadataRoute } from "next";
import { routing, Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

const host = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticLinks = [
    "/",
    "/courses",
    "/guidelines",
    "/blogs",
    "/about-us",
    "/contacts",
  ];

  return staticLinks.flatMap((href) => getEntries(href));
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      ),
    },
  }));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return `${host}${pathname}`;
}
