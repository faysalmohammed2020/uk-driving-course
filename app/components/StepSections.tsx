import { CalendarCheck, Stethoscope, MapPinned, Workflow } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      icon: <CalendarCheck size={48} strokeWidth={1.5} />,
      title: "Book Appointment",
      description:
        "You can begin your PCO licence by booking an appointment on a Thursday evening.",
    },
    {
      icon: <Stethoscope size={48} strokeWidth={1.5} />,
      title: "Medical Check",
      description:
        "You will undergo a TPH204 TFL medical test to ensure you're fit to drive. Our in-house GP will check your medical history and complete your medical.",
    },
    {
      icon: <MapPinned size={48} strokeWidth={1.5} />,
      title: "Topographical Training",
      description:
        "You will undergo 3 hours of Topographical skills training. We will show you the format of the test and how to navigate and read the London A-Z map.",
    },
    {
      icon: <Workflow size={48} strokeWidth={1.5} />,
      title: "Final Steps",
      description:
        "We will complete all necessary application forms and file your application directly to TFL. We will complete everything, making the process hassle-free and simple.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-teal-600 text-white rounded-2xl shadow-lg transition-transform hover:scale-105"
            >
              <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
              <div className="mt-4 text-white text-lg">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
