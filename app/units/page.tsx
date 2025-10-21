import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Units() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Title Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6">Unit Types</h1>
            <div className="w-16 h-px bg-gray-300 mx-auto" />
          </div>
        </section>

        {/* Ground Floor Section */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light tracking-tight mb-4">GROUND FLOOR</h2>
              <p className="text-gray-600 text-lg italic font-light">
                Private Pool • 4 Bedrooms • 185-320 sqm
              </p>
            </div>
            <div className="relative w-full h-[600px] bg-gray-100">
              <Image
                src="/images/ground-floor-plan.jpg"
                alt="Architectural floor plan of a house showing various rooms, furniture, and outdoor areas."
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Penthouse Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light tracking-tight mb-4">PENTHOUSE</h2>
              <p className="text-gray-600 text-lg italic font-light">
                Private Pool • 3 Bedrooms • 197 sqm
              </p>
            </div>
            <div className="relative w-full h-[600px] bg-white">
              <Image
                src="/images/penthouse-plan.jpg"
                alt="Architectural floor plan of a house showing rooms, furniture, kitchen, bedrooms, bathrooms, and outdoor patio with a swimming pool."
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Get In Touch Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-light tracking-tight mb-8">GET IN TOUCH</h2>
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
