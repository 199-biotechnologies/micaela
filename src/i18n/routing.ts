import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  // Order: English, European, Asian, Eastern European, MENA
  locales: ['en', 'es', 'fr', 'de', 'it', 'nl', 'pt', 'zh', 'ru', 'ro', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Locale prefix strategy
  localePrefix: 'always'
});
