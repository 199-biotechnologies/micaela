import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CookiePolicyPage({ params }: Props) {
  const { locale } = await params;
  const t = useTranslations("CookiePolicy");

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">
            {t("heading")}
          </h1>
          <div className="w-24 h-px bg-gray-900/20 mx-auto mb-8" />
          <p className="text-gray-600 font-light text-sm">
            {t("lastUpdated")}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-sm md:prose-base max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("introduction.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              {t("introduction.paragraph1")}
            </p>
            <p className="text-gray-700 font-light leading-relaxed">
              {t("introduction.paragraph2")}
            </p>
          </section>

          {/* What Are Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("whatAreCookies.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed">
              {t("whatAreCookies.description")}
            </p>
          </section>

          {/* Cookies We Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("cookiesWeUse.heading")}
            </h2>

            {/* Essential Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-light tracking-tight mb-3">
                {t("cookiesWeUse.essential.heading")}
              </h3>
              <p className="text-gray-700 font-light leading-relaxed mb-3">
                {t("cookiesWeUse.essential.description")}
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 text-sm font-light">
                <p className="mb-1">
                  <strong className="font-normal">{t("cookiesWeUse.essential.purpose")}:</strong> {t("cookiesWeUse.essential.purposeText")}
                </p>
                <p>
                  <strong className="font-normal">{t("cookiesWeUse.essential.duration")}:</strong> {t("cookiesWeUse.essential.durationText")}
                </p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-light tracking-tight mb-3">
                {t("cookiesWeUse.analytics.heading")}
              </h3>
              <p className="text-gray-700 font-light leading-relaxed mb-3">
                {t("cookiesWeUse.analytics.description")}
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 text-sm font-light">
                <p className="mb-1">
                  <strong className="font-normal">{t("cookiesWeUse.analytics.purpose")}:</strong> {t("cookiesWeUse.analytics.purposeText")}
                </p>
                <p>
                  <strong className="font-normal">{t("cookiesWeUse.analytics.duration")}:</strong> {t("cookiesWeUse.analytics.durationText")}
                </p>
              </div>
            </div>

            {/* Preference Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-light tracking-tight mb-3">
                {t("cookiesWeUse.preference.heading")}
              </h3>
              <p className="text-gray-700 font-light leading-relaxed mb-3">
                {t("cookiesWeUse.preference.description")}
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 text-sm font-light">
                <p className="mb-1">
                  <strong className="font-normal">{t("cookiesWeUse.preference.purpose")}:</strong> {t("cookiesWeUse.preference.purposeText")}
                </p>
                <p>
                  <strong className="font-normal">{t("cookiesWeUse.preference.duration")}:</strong> {t("cookiesWeUse.preference.durationText")}
                </p>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("managingCookies.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              {t("managingCookies.paragraph1")}
            </p>
            <p className="text-gray-700 font-light leading-relaxed">
              {t("managingCookies.paragraph2")}
            </p>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("thirdParty.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed">
              {t("thirdParty.description")}
            </p>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("updates.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed">
              {t("updates.description")}
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("contact.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed">
              {t("contact.description")}{" "}
              <a
                href="mailto:info@doranhomesdesign.com"
                className="text-gray-900 hover:underline font-normal"
              >
                info@doranhomesdesign.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
