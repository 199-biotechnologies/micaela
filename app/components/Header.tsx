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
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileMenu]);

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "de", label: "DE", name: "Deutsch" },
    { code: "es", label: "ES", name: "Español" },
    { code: "fr", label: "FR", name: "Français" },
    { code: "it", label: "IT", name: "Italiano" },
    { code: "ro", label: "RO", name: "Română" },
    { code: "ru", label: "RU", name: "Русский" },
    { code: "zh", label: "中文", name: "中文" },
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
                src="/images/mihaela-logo.svg"
                alt={t("logoAlt")}
                width={180}
                height={54}
                priority
              />
            </Link>
          </div>

          {/* Hamburger Button - Mobile Only */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 transition-smooth-fast hover:opacity-70"
            aria-label="Toggle menu"
            aria-expanded={showMobileMenu}
          >
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${showMobileMenu ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${showMobileMenu ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${showMobileMenu ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-xs text-gray-700 hover:text-gray-900 font-light tracking-[0.1em] uppercase transition-smooth-fast relative group"
            >
              {t("nav.home")}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-900 opacity-0 transition-smooth group-hover:opacity-100" />
            </Link>
            <Link
              href="/property"
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
                className="px-4 py-2.5 text-xs font-light tracking-[0.1em] uppercase border border-gray-900/20 text-gray-900 rounded-full transition-smooth-fast hover:bg-gray-900/5 hover:border-gray-900 min-h-[44px]"
                aria-label="Select language"
                aria-expanded={showLanguages}
                aria-haspopup="true"
              >
                {currentLanguage?.label}
              </button>

              {showLanguages && (
                <div className="absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-xl border border-gray-900/20 rounded-2xl shadow-lg overflow-hidden min-w-[100px] z-[60]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-3 text-xs font-light tracking-[0.1em] uppercase text-left transition-smooth-fast hover:bg-gray-900/5 min-h-[44px] ${
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
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setShowMobileMenu(false)}
          />

          {/* Menu Panel */}
          <div className="absolute inset-x-0 top-0 bg-white/95 backdrop-blur-xl shadow-2xl animate-slideDown">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-gray-200/50">
              <Link href="/" onClick={() => setShowMobileMenu(false)}>
                <Image
                  src="/images/mihaela-logo.svg"
                  alt={t("logoAlt")}
                  width={180}
                  height={54}
                  priority
                />
              </Link>
              <button
                onClick={() => setShowMobileMenu(false)}
                className="w-12 h-12 flex items-center justify-center transition-smooth-fast hover:opacity-70"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-6 py-8 space-y-1">
              <Link
                href="/"
                onClick={() => setShowMobileMenu(false)}
                className="block py-4 text-lg font-light tracking-[0.1em] uppercase text-gray-700 hover:text-gray-900 transition-smooth-fast border-b border-gray-200/50"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/property"
                onClick={() => setShowMobileMenu(false)}
                className="block py-4 text-lg font-light tracking-[0.1em] uppercase text-gray-700 hover:text-gray-900 transition-smooth-fast border-b border-gray-200/50"
              >
                {t("nav.property")}
              </Link>
              <Link
                href="/units"
                onClick={() => setShowMobileMenu(false)}
                className="block py-4 text-lg font-light tracking-[0.1em] uppercase text-gray-700 hover:text-gray-900 transition-smooth-fast border-b border-gray-200/50"
              >
                {t("nav.layout")}
              </Link>
              <Link
                href="/about"
                onClick={() => setShowMobileMenu(false)}
                className="block py-4 text-lg font-light tracking-[0.1em] uppercase text-gray-700 hover:text-gray-900 transition-smooth-fast border-b border-gray-200/50"
              >
                {t("nav.about")}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
