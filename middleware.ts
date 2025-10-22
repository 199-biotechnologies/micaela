import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

// Country to locale mapping for IP-based detection
const countryToLocale: Record<string, string> = {
  // Spanish-speaking countries
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es', 'PE': 'es', 'VE': 'es',
  // French-speaking countries
  'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'CA': 'fr', 'LU': 'fr',
  // German-speaking countries
  'DE': 'de', 'AT': 'de',
  // Italian-speaking
  'IT': 'it',
  // Dutch-speaking
  'NL': 'nl',
  // Portuguese-speaking
  'PT': 'pt', 'BR': 'pt', 'AO': 'pt', 'MZ': 'pt',
  // Chinese-speaking
  'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'SG': 'zh',
  // Russian-speaking
  'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'UA': 'ru',
  // Romanian-speaking
  'RO': 'ro', 'MD': 'ro',
  // Arabic-speaking
  'SA': 'ar', 'AE': 'ar', 'QA': 'ar', 'KW': 'ar', 'BH': 'ar', 'OM': 'ar',
  'EG': 'ar', 'JO': 'ar', 'LB': 'ar', 'MA': 'ar', 'DZ': 'ar', 'TN': 'ar',
};

const intlMiddleware = createMiddleware({
  ...routing,
  localeDetection: true,
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /units to /property for all locales
  if (pathname.match(/^\/(en|es|fr|de|it|nl|pt|zh|ru|ro|ar)\/units$/)) {
    const locale = pathname.split('/')[1];
    return NextResponse.redirect(new URL(`/${locale}/property`, request.url));
  }

  // Check if user is visiting root without locale
  if (pathname === '/') {
    // Get country from Vercel's geolocation headers
    const country = request.headers.get('x-vercel-ip-country') || '';

    const detectedLocale = countryToLocale[country] || 'en';

    // Redirect to detected locale
    return NextResponse.redirect(new URL(`/${detectedLocale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
