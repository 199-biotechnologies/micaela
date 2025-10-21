import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
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
              alt="Indoor-outdoor dining area overlooking scenic landscape"
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
            <div className="max-w-5xl animate-fade-in">
              {/* Main headline with ultra-refined typography */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[-0.04em] mb-6 leading-[0.95]">
                The White Angel
                <span className="block mt-2 text-5xl md:text-7xl lg:text-8xl opacity-90">Talamanca</span>
              </h1>

              {/* Subtle divider */}
              <div className="w-16 h-px bg-white/40 mx-auto my-8" />

              {/* Subheading with perfect spacing */}
              <h2 className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.05em] uppercase opacity-95 mb-12">
                Heaven in the heart of Talamanca
              </h2>

              {/* CTA with micro-interaction */}
              <a
                href="https://wa.me/34671478820"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center transition-smooth-fast hover:scale-110 active:scale-95"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-smooth" />
                  <Image
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    width={64}
                    height={64}
                    className="relative"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Services Section - Refined spacing and interactions */}
        <section className="py-24 md:py-32 px-6 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            {/* Section title with subtle animation */}
            <div className="text-center mb-20">
              <h2 className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-gray-500 mb-4">
                Our Services
              </h2>
              <div className="w-12 h-px bg-gray-300 mx-auto" />
            </div>

            {/* Service cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {/* Service 1 */}
              <div className="group cursor-default">
                <div className="relative h-[400px] md:h-[480px] mb-8 overflow-hidden bg-gray-100">
                  <Image
                    src="/images/service1.jpg"
                    alt="Modern house with swimming pool"
                    fill
                    className="object-cover transition-smooth group-hover:scale-105"
                    quality={90}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 text-gray-900">
                  Buying, Selling & Renting Homes
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
                  We offer a wide range of houses and apartments for both vacation and long-term rental or purchase.
                </p>
              </div>

              {/* Service 2 */}
              <div className="group cursor-default">
                <div className="relative h-[400px] md:h-[480px] mb-8 overflow-hidden bg-gray-100">
                  <Image
                    src="/images/service2.jpg"
                    alt="Modern balcony overlooking cityscape"
                    fill
                    className="object-cover transition-smooth group-hover:scale-105"
                    quality={90}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 text-gray-900">
                  Legal & Construction Consulting
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
                  Our network boasts the best professionals to address any need related to property acquisition, refurbishment, and sale.
                </p>
              </div>

              {/* Service 3 */}
              <div className="group cursor-default">
                <div className="relative h-[400px] md:h-[480px] mb-8 overflow-hidden bg-gray-100">
                  <Image
                    src="/images/service3.jpg"
                    alt="Living room interior with modern design"
                    fill
                    className="object-cover transition-smooth group-hover:scale-105"
                    quality={90}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 text-gray-900">
                  Refurbishment & Interior Design
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
                  We are passionate about interior design and have been advising our clients on how to make the most out of their properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch Section - Minimal and refined */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-gray-500 mb-8">
              Get In Touch
            </h2>
            <div className="w-12 h-px bg-gray-300 mx-auto mb-12" />

            <a
              href="https://wa.me/34671478820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-smooth-fast hover:scale-110 active:scale-95"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-smooth" />
                <Image
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  width={72}
                  height={72}
                  className="relative"
                />
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
