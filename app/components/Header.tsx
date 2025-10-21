"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [showLanguages, setShowLanguages] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLanguages(false);
      }
    };

    if (showLanguages) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguages]);

  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "fr", label: "FR" },
    { code: "de", label: "DE" },
    { code: "it", label: "IT" },
    { code: "zh", label: "ZH" },
    { code: "ru", label: "RU" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setShowLanguages(false);
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
            <div className="relative ml-4" ref={dropdownRef}>
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="px-4 py-2.5 text-xs font-light tracking-[0.1em] uppercase border border-gray-900/20 text-gray-900 rounded-full transition-smooth-fast hover:bg-gray-900/5 hover:border-gray-900"
                aria-label="Select language"
              >
                {currentLanguage?.label}
              </button>

              {showLanguages && (
                <div className="absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-xl border border-gray-900/20 rounded-2xl shadow-lg overflow-hidden min-w-[100px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-2.5 text-xs font-light tracking-[0.1em] uppercase text-left transition-smooth-fast hover:bg-gray-900/5 ${
                        locale === lang.code
                          ? "bg-gray-900/10 text-gray-900"
                          : "text-gray-700"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
