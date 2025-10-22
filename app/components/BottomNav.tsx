"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState, useEffect, useRef } from "react";

export default function BottomNav() {
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
    { code: "en", label: "EN", name: "English" },
    { code: "de", label: "DE", name: "Deutsch" },
    { code: "es", label: "ES", name: "Español" },
    { code: "fr", label: "FR", name: "Français" },
    { code: "it", label: "IT", name: "Italiano" },
    { code: "nl", label: "NL", name: "Nederlands" },
    { code: "pt", label: "PT", name: "Português" },
    { code: "ro", label: "RO", name: "Română" },
    { code: "ru", label: "RU", name: "Русский" },
    { code: "zh", label: "中文", name: "中文" },
    { code: "ar", label: "AR", name: "العربية" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setShowLanguages(false);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-t border-white/20 shadow-sm shadow-gray-900/5" />

      <div className="relative px-6 py-3 flex items-center justify-between gap-4">
        {/* Contact Button - Left (Thumb Zone) */}
        <Link
          href="/contact"
          className="flex-1 min-h-[48px] px-6 py-3 text-xs font-light tracking-[0.1em] uppercase bg-gray-900 text-white rounded-full transition-smooth-fast hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/25 flex items-center justify-center"
        >
          {t("nav.contact")}
        </Link>

        {/* Language Switcher - Right */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowLanguages(!showLanguages)}
            className="min-h-[48px] min-w-[80px] px-4 py-3 text-xs font-light tracking-[0.1em] uppercase border border-gray-900/20 text-gray-900 rounded-full transition-smooth-fast hover:bg-gray-900/5 hover:border-gray-900 flex items-center justify-center gap-1"
            aria-label="Select language"
            aria-expanded={showLanguages}
            aria-haspopup="true"
          >
            {currentLanguage?.label}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Language Dropdown - Opens Upward */}
          {showLanguages && (
            <div className="absolute bottom-full right-0 mb-2 bg-white/95 backdrop-blur-xl border border-gray-900/20 rounded-2xl shadow-xl overflow-hidden min-w-[120px] animate-slideUp">
              <div className="max-h-[280px] overflow-y-auto">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full px-4 py-3 text-xs font-light tracking-[0.1em] uppercase text-left transition-smooth-fast hover:bg-gray-900/5 min-h-[48px] flex items-center ${
                      locale === lang.code
                        ? "bg-gray-900/10 text-gray-900"
                        : "text-gray-700"
                    }`}
                    aria-current={locale === lang.code ? "true" : undefined}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Safe area padding for iOS */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
