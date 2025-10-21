import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function TheProperty() {
  const galleryImages = [
    { src: "/images/gallery-1.jpg", title: "Rooftop", span: "col-span-2 row-span-2" },
    { src: "/images/gallery-2.jpg", title: "Penthouse Terrace", span: "col-span-1 row-span-1" },
    { src: "/images/gallery-3.jpg", title: "Terrace View", span: "col-span-1 row-span-1" },
    { src: "/images/property-pool.jpg", title: "Rooftop Pool", span: "col-span-1 row-span-2" },
    { src: "/images/service1.jpg", title: "Garden Pool", span: "col-span-1 row-span-1" },
    { src: "/images/service2.jpg", title: "Balcony", span: "col-span-2 row-span-1" },
    { src: "/images/service3.jpg", title: "Living Room", span: "col-span-1 row-span-1" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6">
              Take A Look Inside
            </h1>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8" />
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              Explore our meticulously designed spaces where modern luxury meets Mediterranean charm
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
                    alt={image.title}
                    fill
                    className="object-cover transition-smooth group-hover:scale-110"
                    quality={90}
                  />
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white font-light tracking-wide text-sm">
                        {image.title}
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
                Amenities
              </h2>
              <div className="w-16 h-px bg-gray-300 mx-auto mb-8" />
              <p className="text-gray-600 text-lg font-light max-w-3xl mx-auto">
                All our apartments include 3-4 bedrooms, a private pool & garden, spa & fitting rooms,
                gym, indoor parking, and panoramic views of Dalt Villa and the Mediterranean Sea.
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
                <h3 className="text-lg font-light tracking-tight mb-2">Concierge</h3>
                <p className="text-sm text-gray-600 font-light">
                  24/7 personalized service
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900/5 flex items-center justify-center group-hover:bg-gray-900/10 transition-smooth">
                  <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light tracking-tight mb-2">Spa & Fitness</h3>
                <p className="text-sm text-gray-600 font-light">
                  Wellness area & gym
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900/5 flex items-center justify-center group-hover:bg-gray-900/10 transition-smooth">
                  <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-lg font-light tracking-tight mb-2">Indoor Pool</h3>
                <p className="text-sm text-gray-600 font-light">
                  Heated year-round
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900/5 flex items-center justify-center group-hover:bg-gray-900/10 transition-smooth">
                  <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light tracking-tight mb-2">Outdoor Pool</h3>
                <p className="text-sm text-gray-600 font-light">
                  Three pools available
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900/5 flex items-center justify-center group-hover:bg-gray-900/10 transition-smooth">
                  <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light tracking-tight mb-2">Security</h3>
                <p className="text-sm text-gray-600 font-light">
                  24/7 surveillance
                </p>
              </div>
            </div>

            <p className="text-center text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              At Doran Homes, we&apos;re dedicated to the Ibiza lifestyle. With a wide range of properties
              and central apartments, we customize your stay for an exceptional experience. Offering turn-key
              projects, we handle licensing, legal, and interior design, so you can simply enjoy.
            </p>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">
                  Prime Location
                </h2>
                <div className="w-16 h-px bg-gray-900 mb-8" />
                <p className="text-gray-700 text-lg font-light leading-relaxed mb-8">
                  Only three minutes walking from the wonderful Talamanca beach and the vibrant city of Ibiza.
                  The White Angel is located in the heart of the city, with easy access to everything Ibiza has to offer.
                </p>
                <WhatsAppButton />
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/property-pool.jpg"
                  alt="Rooftop pool overlooking Ibiza"
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
    </div>
  );
}
