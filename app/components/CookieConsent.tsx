"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      // Show banner after a brief delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-fade-in">
      {/* Glassmorphism banner */}
      <div className="relative bg-white/90 backdrop-blur-xl border-t border-gray-900/10 shadow-2xl shadow-gray-900/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Content */}
            <div className="flex-1 pr-4">
              <p className="text-sm font-light text-gray-700 leading-relaxed mb-3">
                {t("message")}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <Link
                  href="/privacy-policy"
                  className="text-gray-900 hover:underline font-normal transition-smooth-fast"
                >
                  {t("privacyPolicy")}
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-gray-900 hover:underline font-normal transition-smooth-fast"
                >
                  {t("cookiePolicy")}
                </Link>
              </div>
            </div>

            {/* Actions - Equal prominence, no dark patterns */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0">
              {/* Reject button - EQUAL prominence (no dark pattern) */}
              <button
                onClick={handleReject}
                className="px-6 py-2.5 text-xs font-light tracking-[0.1em] uppercase border border-gray-900/20 text-gray-900 rounded-full transition-smooth-fast hover:bg-gray-900/5 hover:border-gray-900"
                aria-label={t("rejectAria")}
              >
                {t("reject")}
              </button>

              {/* Accept button - Equal prominence */}
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 text-xs font-light tracking-[0.1em] uppercase bg-gray-900 text-white rounded-full transition-smooth-fast hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/25"
                aria-label={t("acceptAria")}
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
