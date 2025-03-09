import { Book, CalendarDays, LineChart, Map } from "lucide-react";
// import { CalendarCheck, Stethoscope, MapPinned, Workflow } from "lucide-react";
import { FaBook, FaFlag, FaCompass } from "react-icons/fa";

export const statistics = [
  
  {
    icon: <FaBook className="text-6xl text-sky-800" />,
    
  },
  {
    icon: <FaFlag className="text-6xl text-sky-800" />,
    
  },
  {
    icon: <FaCompass className="text-6xl text-sky-800" />,
   
  },
];

export const promises = [
  {
    icon: <Map size={48} strokeWidth={1.5} />,
    
     
  },
  {
    icon: <LineChart size={48} strokeWidth={1.5} />,
  
     
  },
  {
    icon: <Book size={48} strokeWidth={1.5} />,
    
  },
  {
    icon: <CalendarDays size={48} strokeWidth={1.5} />,
    
  },
];

// export const steps = [
//   {
//     icon: <CalendarCheck size={48} strokeWidth={1.5} />,
    
//   },
//   {
//     icon: <Stethoscope size={48} strokeWidth={1.5} />,
    
//   },
//   {
//     icon: <MapPinned size={48} strokeWidth={1.5} />,
    
//   },
//   {
//     icon: <Workflow size={48} strokeWidth={1.5} />,
   
//   },
// ];


export const courses = [
  {

    link: "/courses/basic",
  },
  {
   
    link: "/courses/professional",
  },
  {
   
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
    image: "blog1.webp",
    link: "/blogs/seru-training",
  },
  {
    id: 2,
    title: "Topographical Skills Test: A Key Requirement for PCO Driver Training",
    description: "Becoming a Private Hire or Taxi Driver in London involves",
    image: "blog2.avif",
    link: "/blogs/topographical-test",
  },
  {
    id: 3,
    title: "PCO Electric Vehicle Advantages",
    description: "Driving in London is becoming more expensive day by day,",
    image: "blog3.jpg",
    link: "/blogs/electric-vehicles",
  },
  {
    id: 4,
    title: "PCO Driver Training in London",
    description: "The SERU training course (Safety, Equality, and Regularity Understanding) offered",
    image: "blog4.webp",
    link: "/blogs/driver-training",
  },
  {
    id: 5,
    title: "How to Pass the PCO License Test",
    description: "Tips and tricks to pass the PCO License Test on the first attempt.",
    image: "blog5.jpg",
    link: "/blogs/pco-license-test",
  },
  {
    id: 6,
    title: "Benefits of Hybrid Vehicles for PCO Drivers",
    description: "Why hybrid vehicles are gaining popularity among PCO drivers in London.",
    image: "blog6.jpg",
    link: "/blogs/hybrid-vehicles",
  },
  {
    id: 7,
    title: "Understanding PCO Insurance",
    description: "Everything you need to know about insurance requirements for PCO drivers.",
    image: "blog7.jpg",
    link: "/blogs/pco-insurance",
  },
  {
    id: 8,
    title: "PCO License Renewal Guide",
    description: "Step-by-step guide to renewing your PCO license hassle-free.",
    image: "blog8.jfif",
    link: "/blogs/pco-license-renewal",
  },
  {
    id: 9,
    title: "Medical Requirements for PCO License",
    description: "Medical tests and health standards needed for PCO license approval.",
    image: "blog9.jfif",
    link: "/blogs/pco-medical-requirements",
  },
  {
    id: 10,
    title: "Navigating London Traffic as a PCO Driver",
    description: "Effective strategies to save time and fuel in London's busy streets.",
    image: "blog10.jpg",
    link: "/blogs/london-traffic-tips",
  },
  {
    id: 11,
    title: "PCO Vehicle Maintenance Tips",
    description: "Keep your vehicle in top shape with these essential maintenance tips.",
    image: "blog11.jpg",
    link: "/blogs/vehicle-maintenance",
  },
  {
    id: 12,
    title: "Maximizing Earnings as a PCO Driver",
    description: "Proven strategies to increase your earnings as a PCO driver in London.",
    image: "blog12.jpg",
    link: "/blogs/maximizing-earnings",
  },
  {
    id: 13,
    title: "Safety Tips for PCO Drivers",
    description: "Ensure passenger safety with these crucial tips for PCO drivers.",
    image: "blog1.webp",
    link: "/blogs/safety-tips",
  },
  {
    id: 14,
    title: "PCO Driver Responsibilities Explained",
    description: "An in-depth look at the responsibilities every PCO driver must know.",
    image: "blog2.avif",
    link: "/blogs/driver-responsibilities",
  },
  {
    id: 15,
    title: "PCO License Application Process",
    description: "A detailed guide to applying for a PCO license in London.",
    image: "blog3.jpg",
    link: "/blogs/application-process",
  },
  {
    id: 16,
    title: "PCO vs Taxi License: Key Differences",
    description: "Understanding the differences between PCO and traditional taxi licenses.",
    image: "blog4.webp",
    link: "/blogs/pco-vs-taxi",
  },
  {
    id: 17,
    title: "Legal Obligations for PCO Drivers",
    description: "Stay compliant with London’s legal requirements as a PCO driver.",
    image: "blog5.jpg",
    link: "/blogs/legal-obligations",
  },
  {
    id: 18,
    title: "Choosing the Right Vehicle for PCO License",
    description: "A comprehensive guide to selecting the best vehicle for your PCO license.",
    image: "blog6.jpg",
    link: "/blogs/choosing-vehicle",
  },
  {
    id: 19,
    title: "How to Appeal a PCO License Rejection",
    description: "Step-by-step process to appeal if your PCO license application is rejected.",
    image: "blog7.jpg",
    link: "/blogs/license-rejection-appeal",
  },
  {
    id: 20,
    title: "PCO Driver Expenses to Consider",
    description: "A breakdown of all expenses you should be aware of as a PCO driver.",
    image: "blog10.jpg",
    link: "/blogs/driver-expenses",
  },
];


export const mockTests = [
  { id: 1, title: "SERU Grammer Mock Test – 2" },
  { id: 2, title: "SERU Grammer Mock Test – 1" },
  { id: 3, title: "Theory Mock Test 6" },
];