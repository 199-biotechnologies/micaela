import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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

export const metadata: Metadata = {
  metadataBase: new URL("https://doranhomesdesign.com"),
  title: "Mihaela Doran | Private Estates • Ibiza",
  description: "Mihaela Doran curates exceptional luxury estates in Ibiza, combining visionary interior design with exclusive waterfront properties for discerning international clientele.",
  keywords: ["Mihaela Doran", "Ibiza luxury real estate", "White Angel Talamanca", "interior design Ibiza", "luxury property Ibiza", "private estates Ibiza"],
  authors: [{ name: "Mihaela Doran" }],
  creator: "Mihaela Doran",
  publisher: "Mihaela Doran",
  openGraph: {
    title: "Mihaela Doran | Private Estates • Ibiza",
    description: "Mihaela Doran curates exceptional luxury estates in Ibiza, combining visionary interior design with exclusive waterfront properties for discerning international clientele.",
    url: "https://doranhomesdesign.com",
    siteName: "Mihaela Doran | Private Estates • Ibiza",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Mihaela Doran | Private Estates • Ibiza - Luxury waterfront property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihaela Doran | Private Estates • Ibiza",
    description: "Mihaela Doran curates exceptional luxury estates in Ibiza, combining visionary interior design with exclusive waterfront properties for discerning international clientele.",
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

// iOS Safari safe area support
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

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
