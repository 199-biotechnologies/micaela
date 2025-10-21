import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">LET&apos;S CONNECT</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Contact us today, and let us guide in finding your perfect Ibiza home—whether it&apos;s a ground floor
              luxury apartment, or an exclusive penthouse retreat. As your real estate and interior design experts
              on the island, my team and I will ensure every detail is tailored to your lifestyle, making the process
              seamless, stress-free, and effortless.
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[500px]">
              <Image
                src="/images/contact-aerial.jpeg"
                alt="Aerial view of a modern residential complex with multiple swimming pools, palm trees, and lush green landscaping near a body of water in the background."
                fill
                className="object-cover"
              />
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
