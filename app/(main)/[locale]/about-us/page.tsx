
import GetInTouch from "@/app/components/GetInTouch";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t =useTranslations();
  return (
    <>
      <div className="bg-white text-gray-900">
        {/* Who We Are Section */}
        <section className="text-center py-16 px-6">
          <h2 className="text-4xl font-extrabold">{t('About.AboutUs.Who')}</h2>
          <p className="text-lg font-medium mt-4 max-w-3xl mx-auto">
           {t('About.AboutUs.acceleration')}
          </p>
          <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-8 text-left">
            <p>
            {t('About.AboutUs.support')}
            </p>
            <p>
            {t('About.AboutUs.flexibility')}
            </p>
            <p>
            {t('About.AboutUs.training')}
            </p>
            <p>
            {t('About.AboutUs.methodology')}
            </p>
          </div>
        </section>

        {/* Our Aim Section */}
        <section className="bg-orange-100 py-16 px-6 text-center">
          <h2 className="text-4xl font-extrabold">{t('About.AboutUs.Aim')}</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
          {t('About.AboutUs.commitment')}
          </p>
          <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-8 text-left">
            <p>
              <span className="font-bold text-orange-500">1.</span> 
              {t('About.AboutUs.Expediting')}
            </p>
            <p>
              <span className="font-bold text-orange-500">2.</span> {t('About.AboutUs.Delivering')}
            </p>
            <p>
              <span className="font-bold text-orange-500">3.</span>  {t('About.AboutUs.Offering')}
            </p>
            <p>
              <span className="font-bold text-orange-500">4.</span>  {t('About.AboutUs.Providing')}
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6 text-center bg-gray-50">
          <h2 className="text-4xl font-extrabold"> {t('About.AboutUs.chooseUs')}?</h2>
          <div className="flex justify-center space-x-12 mt-8">
            <div className="text-orange-500 font-extrabold text-2xl">
              82+
              <br />
              <span className="text-lg text-gray-800">
              {t('About.AboutUs.Trainees')}
              </span>
            </div>
            <div className="text-orange-500 font-extrabold text-2xl">
              81+
              <br />
              <span className="text-lg text-gray-800">{t('About.AboutUs.Passes')}</span>
            </div>
            <div className="text-orange-500 font-extrabold text-2xl">
              1+
              <br />
              <span className="text-lg text-gray-800">{t('About.AboutUs.Expert')}</span>
            </div>
            <div className="text-orange-500 font-extrabold text-2xl">
              0+
              <br />
              <span className="text-lg text-gray-800">{t('About.AboutUs.Market')}</span>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-4xl font-extrabold">{t('About.AboutUs.Service')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
            <div className="bg-yellow-100 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg">
              {t('About.AboutUs.Fast')}
              </h3>
              <p>
              {t('About.AboutUs.Comprehensive')}
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg">
              {t('About.AboutUs.Personalized')}
              </h3>
              <p>
              {t('About.AboutUs.simulations')}
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg">{t('About.AboutUs.Training')}</h3>
              <p>
              {t('About.AboutUs.Customized')}
              </p>
            </div>
            <div className="bg-red-100 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg"> {t('About.AboutUs.Guaranteed')}</h3>
              <p>
              {t('About.AboutUs.coaching')}
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg">{t('About.AboutUs.Guidance')}</h3>
              <p>
              {t('About.AboutUs.Highly')}
              </p>
            </div>
            <div className="bg-pink-100 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg">{t('About.AboutUs.SERUExam')}</h3>
              <p>
              {t('About.AboutUs.Advanced')}
              </p>
            </div>
          </div>
        </section>

        <GetInTouch />

       
      </div>
    </>
  );
};

export default AboutPage;
