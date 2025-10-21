import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TheProperty() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Title Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">TAKE A LOOK INSIDE</h1>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-80">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Rooftop"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white font-medium">Rooftop</div>
              </div>
              <div className="relative h-80">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Penthouse Terrace"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white font-medium">Penthouse Terrace</div>
              </div>
              <div className="relative h-80">
                <Image
                  src="/images/gallery-3.jpg"
                  alt="Penthouse Terrace"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white font-medium">Penthouse Terrace</div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">AMENITIES</h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-4xl mx-auto">
              All our apartments include 3-4 bedrooms, a private pool & garden, spa & fitting rooms, gym, indoor parking,
              and panoramic views of Dalt Villa and the Mediterranean Sea.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Concierge</h3>
                <p className="text-gray-600 text-sm">
                  24/7 Personalized service responding to all your needs.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Spa & Fitness</h3>
                <p className="text-gray-600 text-sm">
                  Multifunctional wellness area with changing rooms and spaces for deep relaxation.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Indoor Heated Pool</h3>
                <p className="text-gray-600 text-sm">
                  Get your daily laps or relaxation time, whenever you like.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Outdoor Pool</h3>
                <p className="text-gray-600 text-sm">
                  Three outdoor pools to indulge in.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Security</h3>
                <p className="text-gray-600 text-sm">
                  24/7 security and surveillance.
                </p>
              </div>
            </div>

            <p className="text-center text-gray-700 mt-16 max-w-4xl mx-auto leading-relaxed">
              At Doran Homes, we&apos;re dedicated to the Ibiza lifestyle. With a wide range of properties and central apartments,
              we customize your stay for an exceptional experience. Offering turn-key projects, we handle licensing, legal,
              and interior design, so you can simply enjoy.
            </p>
          </div>
        </section>

        {/* Tailored Experience Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">TAILORED EXPERIENCE</h2>
              </div>
              <div className="relative h-96">
                <Image
                  src="/images/property-pool.jpg"
                  alt="Rooftop swimming pool with white lounge chairs under a clear blue sky, overlooking a hillside community with white buildings and green trees."
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Prime Location Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">PRIME LOCATION</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Only three minutes walking from the wonderful Talamanca beach and the vibrant city of Ibiza.
              The White Angel is located in the heart of the city, with easy access to everything Ibiza has to offer.
            </p>
          </div>
        </section>

        {/* Get In Touch Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">GET IN TOUCH</h2>
            <a
              href="https://wa.me/34671478820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/images/whatsapp.png"
                alt="WhatsApp"
                width={60}
                height={60}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
