import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6">
              Let&apos;s Connect
            </h1>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              Contact us today, and let us guide you in finding your perfect Ibiza home—whether it&apos;s a ground floor
              luxury apartment, or an exclusive penthouse retreat.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-8">
              {/* Name */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-light tracking-wide uppercase text-gray-500 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-lg font-light text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-gray-900 focus:outline-none transition-smooth"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-light tracking-wide uppercase text-gray-500 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-lg font-light text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-gray-900 focus:outline-none transition-smooth"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-light tracking-wide uppercase text-gray-500 mb-3">
                  Phone <span className="text-gray-400 normal-case">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-lg font-light text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-gray-900 focus:outline-none transition-smooth"
                  placeholder="+34"
                />
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-light tracking-wide uppercase text-gray-500 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-lg font-light text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-gray-900 focus:outline-none transition-smooth resize-none"
                  placeholder="Tell us about your dream property in Ibiza..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gray-900 text-white font-light text-sm tracking-[0.1em] uppercase rounded-lg transition-smooth-fast hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/25 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-8 my-16">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm font-light tracking-wide uppercase text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* WhatsApp CTA */}
            <div className="text-center">
              <p className="text-sm font-light tracking-wide uppercase text-gray-500 mb-8">
                Prefer instant messaging?
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/images/contact-aerial.jpeg"
                alt="Aerial view of modern residential complex"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
