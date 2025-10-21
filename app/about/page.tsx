import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Micaela</h1>
                <div className="w-20 h-1 bg-gray-900 mb-8"></div>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    I&apos;ve built my career around a passion for both interior design and real estate.
                    After graduating in Interior Design and becoming a qualified real estate agent in 2011,
                    I&apos;ve had the joy of blending these two fields to offer a unique and personalized
                    approach to property services.
                  </p>

                  <p>
                    Based here in Ibiza, I take pride in truly understanding my clients&apos; needs—not just
                    on a practical level, but by focusing on building meaningful relationships. Along with
                    my team, I help clients from diverse backgrounds find properties that perfectly align
                    with their lifestyles.
                  </p>

                  <p>
                    We offer a full range of services, from real estate and legal guidance to interior design
                    and construction advice, all designed to make your property experience smooth and stress-free.
                    If you&apos;re looking for a professional who truly listens and values personalized service,
                    I&apos;d love to help you find the perfect property.
                  </p>
                </div>
              </div>

              <div className="relative h-[600px]">
                <Image
                  src="/images/portrait-micaela.jpg"
                  alt="A woman with long, wavy hair sits at a dining table in a restaurant, adjusting her hair. The table has a white tablecloth, a glass of water, and a folded napkin. In the background, art and elegant curtains are visible."
                  fill
                  className="object-cover"
                />
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
