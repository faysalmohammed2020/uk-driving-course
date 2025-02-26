import { Book, CalendarDays, LineChart, Map } from "lucide-react";
import { CalendarCheck, Stethoscope, MapPinned, Workflow } from "lucide-react";
import { FaBook, FaFlag, FaCompass } from "react-icons/fa";

export const statistics = [
  {
    icon: <FaBook className="text-6xl text-sky-800" />,
    value: "800+",
    label: "STUDENTS",
  },
  {
    icon: <FaFlag className="text-6xl text-sky-800" />,
    value: "500+",
    label: "REAL EXAM QUESTIONS",
  },
  {
    icon: <FaCompass className="text-6xl text-sky-800" />,
    value: "100%",
    label: "PASS RATE",
  },
];

export const promises = [
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

export const steps = [
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


export const courses = [
  {
    title: "Basic Course",
    price: "2.99",
    duration: "per month",
    description: "Everything you need to get started.",
    features: [
      "10 Lessons",
      "Video Tutorials",
      "Downloadable Resources",
      "Community Access",
      "Basic Support",
    ],
    link: "/courses/basic",
  },
  {
    title: "Professional Course",
    price: "3.99",
    duration: "per month",
    description: "Level up with advanced features and support.",
    features: [
      "20 Lessons",
      "Advanced Video Tutorials",
      "Exclusive Resources",
      "Community & Forum Access",
      "Priority Support",
    ],
    isPopular: true,
    link: "/courses/professional",
  },
  {
    title: "Expert Course",
    price: "7.99",
    duration: "per month",
    description: "Gain expert knowledge and premium support.",
    features: [
      "30+ Lessons",
      "Expert Video Series",
      "1-on-1 Mentoring",
      "Complete Resources",
      "Dedicated Support",
    ],
    link: "/courses/expert",
  },
];


// Sample Blog Data
export const blogs = [
  {
    title: "SERU Training For PCO Drivers",
    description: "The SERU training course (Safety, Equality, and Regularity Understanding) offered",
    image: "/images/blog1.webp",
    link: "/blogs/seru-training",
  },
  {
    title: "Topographical Skills Test: A Key Requirement for PCO Driver Training",
    description: "Becoming a Private Hire or Taxi Driver in London involves",
    image: "/images/blog2.avif",
    link: "/blogs/topographical-test",
  },
  {
    title: "PCO Electric Vehicle Advantages",
    description: "Driving in London is becoming more expensive day by day,",
    image: "/images/blog3.jpg",
    link: "/blogs/electric-vehicles",
  },
  {
    title: "PCO Driver Training in London",
    description: "The SERU training course (Safety, Equality, and Regularity Understanding) offered",
    image: "/images/blog4.webp",
    link: "/blogs/driver-training",
  },
];