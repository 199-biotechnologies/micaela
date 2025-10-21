"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* About Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h1 className="text-5xl md:text-6xl font-extralight tracking-tight mb-6">{t("about.heading")}</h1>
                <div className="w-16 h-px bg-gray-900 mb-10"></div>

                <div className="space-y-6 text-gray-700 leading-relaxed font-light">
                  <p>
                    {t("about.paragraph1")}
                  </p>

                  <p>
                    {t("about.paragraph2")}
                  </p>

                  <p>
                    {t("about.paragraph3")}
                  </p>
                </div>
              </div>

              <div className="group relative h-[600px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/portrait-micaela-new.jpg"
                  alt={t("about.imageAlt")}
                  fill
                  className="object-cover transition-smooth group-hover:scale-110"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch Section */}
        <section className="py-32 md:py-40 bg-gray-50/50">
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
