"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BottomNav from "../../components/BottomNav";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function TheProperty() {
  const t = useTranslations("PropertyPage");

  const galleryImages = [
    { src: "/images/gallery-1.jpg", titleKey: "gallery.image1", span: "col-span-2 row-span-2" },
    { src: "/images/gallery-2.jpg", titleKey: "gallery.image2", span: "col-span-1 row-span-1" },
    { src: "/images/gallery-3.jpg", titleKey: "gallery.image3", span: "col-span-1 row-span-1" },
    { src: "/images/property-pool.jpg", titleKey: "gallery.image4", span: "col-span-1 row-span-2" },
    { src: "/images/service1.jpg", titleKey: "gallery.image5", span: "col-span-1 row-span-1" },
    { src: "/images/service2.jpg", titleKey: "gallery.image6", span: "col-span-2 row-span-1" },
    { src: "/images/service3.jpg", titleKey: "gallery.image7", span: "col-span-1 row-span-1" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6">
              {t("hero.heading")}
            </h1>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8" />
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              {t("hero.description")}
            </p>
          </div>
        </section>

        {/* Gallery Section - Masonry Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl bg-gray-100 ${image.span}`}
                >
                  <Image
                    src={image.src}
                    alt={t(image.titleKey)}
                    fill
                    className="object-cover transition-smooth group-hover:scale-110"
                    quality={90}
                  />
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white font-light tracking-wide text-sm">
                        {t(image.titleKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-32 md:py-40 px-6 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">
                {t("amenities.heading")}
              </h2>
              <div className="w-16 h-px bg-gray-300 mx-auto mb-8" />
              <p className="text-gray-600 text-lg font-light max-w-3xl mx-auto">
                {t("amenities.description")}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-20">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900/5 flex items-center justify-center group-hover:bg-gray-900/10 transition-smooth">
                  <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light tracking-tight mb-2">{t("amenities.concierge.title")}</h3>
                <p className="text-sm text-gray-600 font-light">
                  {t("amenities.concierge.description")}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900/5 flex items-center justify-center group-hover:bg-gray-900/10 transition-smooth">
                  <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light tracking-tight mb-2">{t("amenities.spa.title")}</h3>
                <p className="text-sm text-gray-600 font-light">
                  {t("amenities.spa.description")}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900/5 flex items-center justify-center group-hover:bg-gray-900/10 transition-smooth">
                  <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-lg font-light tracking-tight mb-2">{t("amenities.indoorPool.title")}</h3>
                <p className="text-sm text-gray-600 font-light">
                  {t("amenities.indoorPool.description")}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900/5 flex items-center justify-center group-hover:bg-gray-900/10 transition-smooth">
                  <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light tracking-tight mb-2">{t("amenities.outdoorPool.title")}</h3>
                <p className="text-sm text-gray-600 font-light">
                  {t("amenities.outdoorPool.description")}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900/5 flex items-center justify-center group-hover:bg-gray-900/10 transition-smooth">
                  <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light tracking-tight mb-2">{t("amenities.security.title")}</h3>
                <p className="text-sm text-gray-600 font-light">
                  {t("amenities.security.description")}
                </p>
              </div>
            </div>

            <p className="text-center text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t("amenities.closing")}
            </p>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">
                  {t("location.heading")}
                </h2>
                <div className="w-16 h-px bg-gray-900 mb-8" />
                <p className="text-gray-700 text-lg font-light leading-relaxed mb-8">
                  {t("location.description")}
                </p>
                <WhatsAppButton />
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/property-pool.jpg"
                  alt={t("location.imageAlt")}
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
