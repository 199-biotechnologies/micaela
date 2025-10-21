"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm shadow-gray-900/5" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex-shrink-0">
            <Link href="/" className="transition-smooth-fast hover:opacity-70">
              <Image
                src="/images/logo.png"
                alt={t("logoAlt")}
                width={180}
                height={54}
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-xs text-gray-700 hover:text-gray-900 font-light tracking-[0.1em] uppercase transition-smooth-fast relative group"
            >
              {t("nav.home")}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-900 opacity-0 transition-smooth group-hover:opacity-100" />
            </Link>
            <Link
              href="/theproperty"
              className="text-xs text-gray-700 hover:text-gray-900 font-light tracking-[0.1em] uppercase transition-smooth-fast relative group"
            >
              {t("nav.property")}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-900 opacity-0 transition-smooth group-hover:opacity-100" />
            </Link>
            <Link
              href="/units"
              className="text-xs text-gray-700 hover:text-gray-900 font-light tracking-[0.1em] uppercase transition-smooth-fast relative group"
            >
              {t("nav.layout")}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-900 opacity-0 transition-smooth group-hover:opacity-100" />
            </Link>
            <Link
              href="/about"
              className="text-xs text-gray-700 hover:text-gray-900 font-light tracking-[0.1em] uppercase transition-smooth-fast relative group"
            >
              {t("nav.about")}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-900 opacity-0 transition-smooth group-hover:opacity-100" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 text-xs font-light tracking-[0.1em] uppercase bg-gray-900 text-white rounded-full transition-smooth-fast hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/25"
            >
              {t("nav.contact")}
            </Link>

            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="ml-4 px-4 py-2.5 text-xs font-light tracking-[0.1em] uppercase border border-gray-900/20 text-gray-900 rounded-full transition-smooth-fast hover:bg-gray-900/5 hover:border-gray-900"
              aria-label="Switch language"
            >
              {locale === "en" ? "ES" : "EN"}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
