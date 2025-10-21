import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const t = useTranslations("PrivacyPolicy");

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

          {/* Data Controller */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("dataController.heading")}
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 font-light">
              <p className="mb-2">
                <strong className="font-normal">
                  {t("dataController.name")}:
                </strong>{" "}
                Doran Homes
              </p>
              <p className="mb-2">
                <strong className="font-normal">
                  {t("dataController.address")}:
                </strong>{" "}
                3 Carrer d'Alhaueth, Ibiza, España 07800
              </p>
              <p>
                <strong className="font-normal">
                  {t("dataController.contact")}:
                </strong>{" "}
                <a
                  href="mailto:info@doranhomesdesign.com"
                  className="text-gray-900 hover:underline"
                >
                  info@doranhomesdesign.com
                </a>
              </p>
            </div>
          </section>

          {/* Data We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("dataCollection.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              {t("dataCollection.intro")}
            </p>
            <ul className="space-y-3 text-gray-700 font-light">
              <li>
                <strong className="font-normal">
                  {t("dataCollection.personalData.heading")}:
                </strong>{" "}
                {t("dataCollection.personalData.description")}
              </li>
              <li>
                <strong className="font-normal">
                  {t("dataCollection.technicalData.heading")}:
                </strong>{" "}
                {t("dataCollection.technicalData.description")}
              </li>
              <li>
                <strong className="font-normal">
                  {t("dataCollection.communicationData.heading")}:
                </strong>{" "}
                {t("dataCollection.communicationData.description")}
              </li>
            </ul>
          </section>

          {/* How We Use Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("dataUse.heading")}
            </h2>
            <ul className="space-y-3 text-gray-700 font-light">
              <li>• {t("dataUse.purpose1")}</li>
              <li>• {t("dataUse.purpose2")}</li>
              <li>• {t("dataUse.purpose3")}</li>
              <li>• {t("dataUse.purpose4")}</li>
              <li>• {t("dataUse.purpose5")}</li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("legalBasis.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              {t("legalBasis.intro")}
            </p>
            <ul className="space-y-3 text-gray-700 font-light">
              <li>
                <strong className="font-normal">
                  {t("legalBasis.consent.heading")}:
                </strong>{" "}
                {t("legalBasis.consent.description")}
              </li>
              <li>
                <strong className="font-normal">
                  {t("legalBasis.contract.heading")}:
                </strong>{" "}
                {t("legalBasis.contract.description")}
              </li>
              <li>
                <strong className="font-normal">
                  {t("legalBasis.legitimate.heading")}:
                </strong>{" "}
                {t("legalBasis.legitimate.description")}
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("yourRights.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              {t("yourRights.intro")}
            </p>
            <ul className="space-y-3 text-gray-700 font-light">
              <li>
                <strong className="font-normal">
                  {t("yourRights.access.heading")}:
                </strong>{" "}
                {t("yourRights.access.description")}
              </li>
              <li>
                <strong className="font-normal">
                  {t("yourRights.rectification.heading")}:
                </strong>{" "}
                {t("yourRights.rectification.description")}
              </li>
              <li>
                <strong className="font-normal">
                  {t("yourRights.erasure.heading")}:
                </strong>{" "}
                {t("yourRights.erasure.description")}
              </li>
              <li>
                <strong className="font-normal">
                  {t("yourRights.restriction.heading")}:
                </strong>{" "}
                {t("yourRights.restriction.description")}
              </li>
              <li>
                <strong className="font-normal">
                  {t("yourRights.portability.heading")}:
                </strong>{" "}
                {t("yourRights.portability.description")}
              </li>
              <li>
                <strong className="font-normal">
                  {t("yourRights.objection.heading")}:
                </strong>{" "}
                {t("yourRights.objection.description")}
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("dataRetention.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed">
              {t("dataRetention.description")}
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {t("dataSecurity.heading")}
            </h2>
            <p className="text-gray-700 font-light leading-relaxed">
              {t("dataSecurity.description")}
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
