"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BottomNav from "../../components/BottomNav";
import WhatsAppButton from "../../components/WhatsAppButton";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

export default function Contact() {
  const t = useTranslations("ContactPage");

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 5000) {
      newErrors.message = 'Message must not exceed 5000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset states
    setErrors({});
    setSubmitSuccess(false);

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({
        submit: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6">
              {t("hero.heading")}
            </h1>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              {t("hero.description")}
            </p>

            {/* Success Message */}
            {submitSuccess && (
              <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl font-light text-green-900">Message Sent Successfully!</h3>
                </div>
                <p className="text-green-700 font-light">
                  Thank you for your enquiry. We will respond within 24 hours.
                </p>
              </div>
            )}

            {/* Error Message */}
            {errors.submit && (
              <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <h3 className="text-xl font-light text-red-900">Error</h3>
                </div>
                <p className="text-red-700 font-light">{errors.submit}</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-10" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-light tracking-wide uppercase text-gray-500 mb-4">
                  {t("form.name.label")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 bg-gray-50/50 border rounded-lg font-light text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none transition-smooth ${
                    errors.name
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-gray-200 focus:border-gray-900'
                  }`}
                  placeholder={t("form.name.placeholder")}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 font-light">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-light tracking-wide uppercase text-gray-500 mb-4">
                  {t("form.email.label")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 bg-gray-50/50 border rounded-lg font-light text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none transition-smooth ${
                    errors.email
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-gray-200 focus:border-gray-900'
                  }`}
                  placeholder={t("form.email.placeholder")}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 font-light">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-light tracking-wide uppercase text-gray-500 mb-4">
                  {t("form.phone.label")} <span className="text-gray-400 normal-case">{t("form.phone.optional")}</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-lg font-light text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-gray-900 focus:outline-none transition-smooth"
                  placeholder={t("form.phone.placeholder")}
                  disabled={isSubmitting}
                />
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-light tracking-wide uppercase text-gray-500 mb-4">
                  {t("form.message.label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-6 py-4 bg-gray-50/50 border rounded-lg font-light text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none transition-smooth resize-none ${
                    errors.message
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-gray-200 focus:border-gray-900'
                  }`}
                  placeholder={t("form.message.placeholder")}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 font-light">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-gray-900 text-white font-light text-sm tracking-[0.1em] uppercase rounded-lg transition-smooth-fast hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-wait disabled:hover:bg-gray-900 disabled:hover:shadow-none flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    t("form.submit")
                  )}
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-8 my-16">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm font-light tracking-wide uppercase text-gray-400">{t("form.divider")}</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* WhatsApp CTA */}
            <div className="text-center">
              <p className="text-sm font-light tracking-wide uppercase text-gray-500 mb-8">
                {t("form.instantMessaging")}
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-32 md:py-40 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="group relative h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/images/contact-aerial.jpeg"
                alt={t("imageAlt")}
                fill
                className="object-cover transition-smooth group-hover:scale-110"
                quality={90}
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
