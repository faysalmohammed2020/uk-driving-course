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
    
  },
  {
    icon: <Stethoscope size={48} strokeWidth={1.5} />,
    
  },
  {
    icon: <MapPinned size={48} strokeWidth={1.5} />,
    
  },
  {
    icon: <Workflow size={48} strokeWidth={1.5} />,
   
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
    id: 1,
    title: "SERU Training For PCO Drivers",
    description: "The SERU training course (Safety, Equality, and Regularity Understanding) offered",
    image: "/images/blog1.webp",
    link: "/blogs/seru-training",
  },
  {
    id: 2,
    title: "Topographical Skills Test: A Key Requirement for PCO Driver Training",
    description: "Becoming a Private Hire or Taxi Driver in London involves",
    image: "/images/blog2.avif",
    link: "/blogs/topographical-test",
  },
  {
    id: 3,
    title: "PCO Electric Vehicle Advantages",
    description: "Driving in London is becoming more expensive day by day,",
    image: "/images/blog3.jpg",
    link: "/blogs/electric-vehicles",
  },
  {
    id: 4,
    title: "PCO Driver Training in London",
    description: "The SERU training course (Safety, Equality, and Regularity Understanding) offered",
    image: "/images/blog4.webp",
    link: "/blogs/driver-training",
  },
];

// Sample Blog Data
export const blogspageblogs = [
  {
    id: 1,
    title: "SERU Training For PCO Drivers",
    description: "The SERU training course (Safety, Equality, and Regularity Understanding) offered",
    image: "/images/blog1.webp",
    link: "/blogs/seru-training",
  },
  {
    id: 2,
    title: "Topographical Skills Test: A Key Requirement for PCO Driver Training",
    description: "Becoming a Private Hire or Taxi Driver in London involves",
    image: "/images/blog2.avif",
    link: "/blogs/topographical-test",
  },
  {
    id: 3,
    title: "PCO Electric Vehicle Advantages",
    description: "Driving in London is becoming more expensive day by day,",
    image: "/images/blog3.jpg",
    link: "/blogs/electric-vehicles",
  },
  {
    id: 4,
    title: "PCO Driver Training in London",
    description: "The SERU training course (Safety, Equality, and Regularity Understanding) offered",
    image: "/images/blog4.webp",
    link: "/blogs/driver-training",
  },
  {
    id: 5,
    title: "How to Pass the PCO License Test",
    description: "Tips and tricks to pass the PCO License Test on the first attempt.",
    image: "/images/blog5.jpg",
    link: "/blogs/pco-license-test",
  },
  {
    id: 6,
    title: "Benefits of Hybrid Vehicles for PCO Drivers",
    description: "Why hybrid vehicles are gaining popularity among PCO drivers in London.",
    image: "/images/blog6.jpg",
    link: "/blogs/hybrid-vehicles",
  },
  {
    id: 7,
    title: "Understanding PCO Insurance",
    description: "Everything you need to know about insurance requirements for PCO drivers.",
    image: "/images/blog7.jpg",
    link: "/blogs/pco-insurance",
  },
  {
    id: 8,
    title: "PCO License Renewal Guide",
    description: "Step-by-step guide to renewing your PCO license hassle-free.",
    image: "/images/blog8.jfif",
    link: "/blogs/pco-license-renewal",
  },
  {
    id: 9,
    title: "Medical Requirements for PCO License",
    description: "Medical tests and health standards needed for PCO license approval.",
    image: "/images/blog9.jfif",
    link: "/blogs/pco-medical-requirements",
  },
  {
    id: 10,
    title: "Navigating London Traffic as a PCO Driver",
    description: "Effective strategies to save time and fuel in London's busy streets.",
    image: "/images/blog10.jpg",
    link: "/blogs/london-traffic-tips",
  },
  {
    id: 11,
    title: "PCO Vehicle Maintenance Tips",
    description: "Keep your vehicle in top shape with these essential maintenance tips.",
    image: "/images/blog11.jpg",
    link: "/blogs/vehicle-maintenance",
  },
  {
    id: 12,
    title: "Maximizing Earnings as a PCO Driver",
    description: "Proven strategies to increase your earnings as a PCO driver in London.",
    image: "/images/blog12.jpg",
    link: "/blogs/maximizing-earnings",
  },
  {
    id: 13,
    title: "Safety Tips for PCO Drivers",
    description: "Ensure passenger safety with these crucial tips for PCO drivers.",
    image: "/images/blog1.webp",
    link: "/blogs/safety-tips",
  },
  {
    id: 14,
    title: "PCO Driver Responsibilities Explained",
    description: "An in-depth look at the responsibilities every PCO driver must know.",
    image: "/images/blog2.avif",
    link: "/blogs/driver-responsibilities",
  },
  {
    id: 15,
    title: "PCO License Application Process",
    description: "A detailed guide to applying for a PCO license in London.",
    image: "/images/blog3.jpg",
    link: "/blogs/application-process",
  },
  {
    id: 16,
    title: "PCO vs Taxi License: Key Differences",
    description: "Understanding the differences between PCO and traditional taxi licenses.",
    image: "/images/blog4.webp",
    link: "/blogs/pco-vs-taxi",
  },
  {
    id: 17,
    title: "Legal Obligations for PCO Drivers",
    description: "Stay compliant with London’s legal requirements as a PCO driver.",
    image: "/images/blog5.jpg",
    link: "/blogs/legal-obligations",
  },
  {
    id: 18,
    title: "Choosing the Right Vehicle for PCO License",
    description: "A comprehensive guide to selecting the best vehicle for your PCO license.",
    image: "/images/blog6.jpg",
    link: "/blogs/choosing-vehicle",
  },
  {
    id: 19,
    title: "How to Appeal a PCO License Rejection",
    description: "Step-by-step process to appeal if your PCO license application is rejected.",
    image: "/images/blog7.jpg",
    link: "/blogs/license-rejection-appeal",
  },
  {
    id: 20,
    title: "PCO Driver Expenses to Consider",
    description: "A breakdown of all expenses you should be aware of as a PCO driver.",
    image: "/images/blog10.jpg",
    link: "/blogs/driver-expenses",
  },
];


export const mockTests = [
  { id: 1, title: "SERU Grammer Mock Test – 2" },
  { id: 2, title: "SERU Grammer Mock Test – 1" },
  { id: 3, title: "Theory Mock Test 6" },
];