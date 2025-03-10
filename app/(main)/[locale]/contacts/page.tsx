import { getTranslations } from "next-intl/server";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("contactPage.metadata.title");
  const description = t("contactPage.metadata.description");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

const ContactPage = async () => {
  const t = await getTranslations();
  return (
    <>
      <div className="bg-gray-100 text-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Contact Header */}
          <section className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">{t('home.GIT.getInTouch')}</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
            {t('home.GIT.Have')}
            </p>
          </section>

          {/* Contact Information */}
          <section className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                {t('home.Navigation.Contact')}
              </h3>
              <p className="mb-2">
                <strong>📞 Phone:</strong> 07576497335 / 02034884184
              </p>
              <p className="mb-2">
                <strong>📧 Email:</strong> info@londonpcoandtraining.co.uk
              </p>
              <p className="mb-2">
                <strong>📍 Address:</strong> {t('home.Navigation.Address')}
              </p>
              <iframe
                className="w-full h-56 mt-4 rounded-lg"
                src="https://www.google.com/maps/embed?..."
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
               {t('home.GIT.send')}
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border rounded-lg"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                   {t('home.GIT.Submit')}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
