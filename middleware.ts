// import createMiddleware from "next-intl/middleware";
// import { locales } from "./config";

// export default createMiddleware({
//   locales,
//   defaultLocale: "en",
// });

// export const config = {
//   matcher: ["/", "/(bn|ur|en|hi)/:path*"],
// };
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { locales } from "./config";

const defaultLocale = "en";

export default createMiddleware({
  locales,
  defaultLocale,
  
  getRequestConfig: (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;
    const locale = locales.find((l) => pathname.startsWith(`/${l}`));

    return {
      locale: locale || defaultLocale, // Always return a locale to avoid errors
    };
  }
});

export const config = {
  matcher: ["/", "/(bn|ur|en|hi)/:path*"],
};
