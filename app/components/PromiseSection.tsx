import { Book, CalendarDays, LineChart, Map } from "lucide-react";

const PromiseSection = () => {
  const promises = [
    {
      icon: <Map size={48} strokeWidth={1.5} />,
      title: "Realistic Tests",
      description:
        "All of our questions are designed to closely match real test questions. We’ll make sure that there are no surprises at the test centre.",
    },
    {
      icon: <LineChart size={48} strokeWidth={1.5} />,
      title: "Progress Tracking",
      description:
        "Check your test results to see your progress and stay on track. Re-do the tests you’ve failed and gain confidence from the ones you’ve passed.",
    },
    {
      icon: <Book size={48} strokeWidth={1.5} />,
      title: "Self Paced",
      description:
        "All of our material is available to you from the very beginning. Study at your own speed and rest assured, we’re here to help every step of the way.",
    },
    {
      icon: <CalendarDays size={48} strokeWidth={1.5} />,
      title: "Convenient",
      description:
        "Read the handbook or complete our mock tests from any place, any device, any time. We are live 24/7 so you can prepare whenever you want.",
    },
  ];

  return (
    <section className="text-center py-12 bg-white">
      <h2 className="text-3xl font-semibold mb-4">OUR PROMISE</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        We’ve helped thousands of people pass their topographical test. Here’s
        how we’re going to make you pass too!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {promises.map((promise, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-4 rounded-full mb-4">
              {promise.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{promise.title}</h3>
            <p className="text-gray-600">{promise.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromiseSection;
