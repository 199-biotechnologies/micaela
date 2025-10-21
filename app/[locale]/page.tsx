"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section - Refined with subtle gradient overlay */}
        <section className="relative h-screen overflow-hidden">
          {/* Image with subtle zoom on load */}
          <div className="absolute inset-0 animate-scale-in">
            <Image
              src="/images/hero.jpeg"
              alt={t("hero.imageAlt")}
              fill
              className="object-cover"
              priority
              quality={100}
            />
            {/* Subtle gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          </div>

          {/* Hero Content - Centered with refined spacing */}
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6">
            <div className="max-w-6xl animate-fade-in">
              {/* Main headline - ALL CAPS, SAME SIZE */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[-0.04em] leading-[0.95] uppercase">
                {t("hero.heading.line1")}
                <br />
                {t("hero.heading.line2")}
              </h1>

              {/* CTA with premium animation */}
              <div className="mt-16">
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Consistent sizing */}
        <section className="py-32 md:py-40 px-6 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 mb-6">
                {t("services.heading")}
              </h2>
              <div className="w-16 h-px bg-gray-300 mx-auto" />
            </div>

            {/* Service cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
              {/* Service 1 */}
              <div className="group cursor-default">
                <div className="relative h-[480px] md:h-[560px] mb-8 overflow-hidden bg-gray-100">
                  <Image
                    src="/images/service1.jpg"
                    alt={t("services.service1.imageAlt")}
                    fill
                    className="object-cover transition-smooth group-hover:scale-105"
                    quality={90}
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-5 text-gray-900">
                  {t("services.service1.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-base">
                  {t("services.service1.description")}
                </p>
              </div>

              {/* Service 2 */}
              <div className="group cursor-default">
                <div className="relative h-[480px] md:h-[560px] mb-8 overflow-hidden bg-gray-100">
                  <Image
                    src="/images/service2.jpg"
                    alt={t("services.service2.imageAlt")}
                    fill
                    className="object-cover transition-smooth group-hover:scale-105"
                    quality={90}
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-5 text-gray-900">
                  {t("services.service2.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-base">
                  {t("services.service2.description")}
                </p>
              </div>

              {/* Service 3 */}
              <div className="group cursor-default">
                <div className="relative h-[480px] md:h-[560px] mb-8 overflow-hidden bg-gray-100">
                  <Image
                    src="/images/service3.jpg"
                    alt={t("services.service3.imageAlt")}
                    fill
                    className="object-cover transition-smooth group-hover:scale-105"
                    quality={90}
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-5 text-gray-900">
                  {t("services.service3.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-base">
                  {t("services.service3.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch Section - Consistent styling */}
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 mb-6">
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
