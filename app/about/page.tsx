import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* About Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h1 className="text-5xl md:text-6xl font-extralight tracking-tight mb-6">Hi, I&apos;m Micaela</h1>
                <div className="w-16 h-px bg-gray-900 mb-10"></div>

                <div className="space-y-6 text-gray-700 leading-relaxed font-light">
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
                  src="/images/portrait-micaela-new.jpg"
                  alt="A woman with long, wavy hair sits at a dining table in a restaurant, adjusting her hair. The table has a white tablecloth, a glass of water, and a folded napkin. In the background, art and elegant curtains are visible."
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch Section */}
        <section className="py-32 md:py-40 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">
              Get In Touch
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
