import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import CookieConsent from "@/app/components/CookieConsent";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

// Locale to OpenGraph locale mapping
const localeToOGLocale: Record<string, string> = {
  'en': 'en_US',
  'es': 'es_ES',
  'fr': 'fr_FR',
  'de': 'de_DE',
  'it': 'it_IT',
  'nl': 'nl_NL',
  'pt': 'pt_PT',
  'zh': 'zh_CN',
  'ru': 'ru_RU',
  'ro': 'ro_RO',
  'ar': 'ar_SA',
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL("https://doranhomesdesign.com"),
    title: t('title'),
    description: t('description'),
    keywords: ["Mihaela Doran", "Ibiza luxury real estate", "White Angel Talamanca", "interior design Ibiza", "luxury property Ibiza", "private estates Ibiza"],
    authors: [{ name: "Mihaela Doran" }],
    creator: "Mihaela Doran",
    publisher: "Mihaela Doran",
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: "https://doranhomesdesign.com",
      siteName: t('title'),
      locale: localeToOGLocale[locale] || 'en_US',
      type: "website",
      images: [
        {
          url: "/images/hero.jpeg",
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      creator: "@doranhomesdesign",
      images: ["/images/hero.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// iOS Safari safe area support
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
