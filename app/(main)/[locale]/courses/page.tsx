import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { useTranslations } from "next-intl";

const CoursePage: React.FC = () => {
  const t = useTranslations();
  const courses = t.raw('Courses.courseContent.features');
  console.log(courses)
  return (
    <div className="bg-[#002b46] text-white min-h-screen">
      <main className="max-w-6xl mx-auto p-6">
        <section className="text-center my-12">
          <h2 className="text-4xl font-bold mb-4">{t('Courses.coursePage.Seru')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((features, index) => (
              <Card key={index} className="p-4 bg-white text-black shadow-lg">
                <CardContent className="text-center font-semibold">{features.title}</CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6">{t('Courses.coursePage.includes')}</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 px-6 py-3">{t('Courses.coursePage.payBtn')}</Button>
            <Button variant="ghost" className="px-6 py-3">{t('home.hero.TryFree')}</Button>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold text-center mb-6">{t('Courses.coursePage.whatIncludes')}</h2>
          <ul className="list-disc text-lg space-y-2 pl-6">
            <li>{t('Courses.coursePage.over')}</li>
            <li>{t('Courses.coursePage.learningMaterials')}</li>
            <li>{t('Courses.coursePage.sectionsCovered')}</li>
            <li>{t('Courses.coursePage.availablePlatforms')}</li>
            <li>{t('Courses.coursePage.access')}</li>
            <li>{t('Courses.coursePage.learnAtYourOwnPace')}</li>
            <li>{t('Courses.coursePage.continueFromWhereYouLeftOff')}</li>
            <li>{t('Courses.coursePage.practiceQuestions')}</li>
            <li>{t('Courses.coursePage.comprehensiveLearning')}</li>
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold text-center mb-6">{t('Courses.coursePage.Learn')}</h2>
          <p className="text-center">{t('Courses.coursePage.Platform')}</p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold text-center mb-6">{t('Courses.coursePage.Choose')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white text-black shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t('Courses.coursePage.instructors')}</h3>
              <p>{t('Courses.coursePage.created')}</p>
            </div>
            <div className="p-6 bg-white text-black shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t('Courses.coursePage.Flex')}</h3>
              <p>{t('Courses.coursePage.study')}</p>
            </div>
          </div>
        </section>

        <section className="my-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">{t('Courses.coursePage.watch')}</h2>
          <div className="relative w-full max-w-3xl mx-auto">
            <video className="w-full rounded-lg shadow-lg" controls>
              <source src="/course-overview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CoursePage;
