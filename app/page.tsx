import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpeg"
              alt="A spacious indoor-outdoor dining area with a large wooden table and chairs, overlooking a scenic landscape with trees and a swimming pool outside."
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              THE WHITE ANGEL TALAMANCA
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8">
              HEAVEN IN THE HEART OF TALAMANCA
            </h2>
            <a
              href="https://wa.me/34671478820"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8"
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

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">OUR SERVICES</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group">
                <div className="relative h-96 mb-6 overflow-hidden">
                  <Image
                    src="/images/service1.jpg"
                    alt="Modern house with a swimming pool in the backyard, surrounded by greenery and lounge chairs."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">BUYING, SELLING & RENTING HOMES</h3>
                <p className="text-gray-600 leading-relaxed">
                  We offer a wide range of houses and apartments for both vacation and long-term rental or purchase.
                </p>
              </div>

              {/* Service 2 */}
              <div className="group">
                <div className="relative h-96 mb-6 overflow-hidden">
                  <Image
                    src="/images/service2.jpg"
                    alt="Modern balcony with wooden furniture and white cushions overlooking a cityscape, with trees, buildings, water, and hills in the background."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">LEGAL & CONSTRUCTION CONSULTING</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our network boasts the best professionals to address any need related to property acquisition, refurbishment, and sale.
                </p>
              </div>

              {/* Service 3 */}
              <div className="group">
                <div className="relative h-96 mb-6 overflow-hidden">
                  <Image
                    src="/images/service3.jpg"
                    alt="Living room with a large cream-colored sofa, a rustic wooden coffee table with white decorative vases, and a beige rug. There is a side table with a stone lamp, and artwork hanging on the white wall. Sliding glass doors open to a balcony with outdoor furniture and a view of green trees and blue sky."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">REFURBISHMENT & INTERIOR DESIGN</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are passionate about interior design and have been advising our clients on how to make the most out of their properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch Section */}
        <section className="py-20 bg-gray-50">
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
