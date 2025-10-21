import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Doran Homes Design"
                width={200}
                height={60}
                priority
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/theproperty" className="text-gray-700 hover:text-gray-900 font-medium">
                The Property
              </Link>
              <Link href="/units" className="text-gray-700 hover:text-gray-900 font-medium">
                Layout
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">© 2024 Doran Homes</h3>
              <p className="text-gray-400 text-sm">
                3 Carrer d&apos;Alhaueth, Ibiza, Spain 07800
              </p>
              <div className="mt-4">
                <Link href="/privacy-policy-1" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div></div>
            <div className="text-right">
              <h3 className="font-bold mb-4">Follow</h3>
              <div className="flex justify-end space-x-4">
                <a
                  href="https://www.instagram.com/doranhomesdesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://m.facebook.com/people/DORAN-HOMES/100046870542729/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
