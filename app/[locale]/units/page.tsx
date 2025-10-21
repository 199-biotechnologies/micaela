"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function Units() {
  const t = useTranslations("UnitsPage");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Title Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6">
              {t("hero.heading")}
            </h1>
            <div className="w-16 h-px bg-gray-300 mx-auto" />
          </div>
        </section>

        {/* Ground Floor Section */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light tracking-tight mb-4">
                {t("groundFloor.heading")}
              </h2>
              <p className="text-gray-600 text-lg italic font-light">
                {t("groundFloor.details")}
              </p>
            </div>
            <div className="group relative w-full h-[600px] overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/images/ground-floor-plan.jpg"
                alt={t("groundFloor.imageAlt")}
                fill
                className="object-contain transition-smooth group-hover:scale-110"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          </div>
        </section>

        {/* Penthouse Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light tracking-tight mb-4">
                {t("penthouse.heading")}
              </h2>
              <p className="text-gray-600 text-lg italic font-light">
                {t("penthouse.details")}
              </p>
            </div>
            <div className="group relative w-full h-[600px] overflow-hidden rounded-2xl bg-white">
              <Image
                src="/images/penthouse-plan.jpg"
                alt={t("penthouse.imageAlt")}
                fill
                className="object-contain transition-smooth group-hover:scale-110"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          </div>
        </section>

        {/* Get In Touch Section */}
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">
              {t("getInTouch.heading")}
            </h2>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-16" />
            <WhatsAppButton />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
