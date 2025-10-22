import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'es', 'fr', 'de', 'it', 'nl', 'pt', 'zh', 'ru', 'ro', 'ar'];
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: 'property', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'units', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: 'cookie-policy', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  const baseUrl = 'https://doranhomesdesign.com';
  const currentDate = new Date();

  return locales.flatMap(locale =>
    pages.map(page => ({
      url: `${baseUrl}/${locale}${page.path ? `/${page.path}` : ''}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map(altLocale => [
            altLocale,
            `${baseUrl}/${altLocale}${page.path ? `/${page.path}` : ''}`
          ])
        )
      }
    }))
  );
}
