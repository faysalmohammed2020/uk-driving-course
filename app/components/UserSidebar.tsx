// components/UserSidebar.tsx

"use client";

import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  BookDown,
  FileText,
  Users,
  MessageSquare,
} from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useSession } from "@/lib/auth-client";


const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const session = useSession();

  const sidebarLinks = [
    { href: "/user", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { href: "/user/courses", label: "Courses", icon: <BookOpen size={20} /> },
    { href: "/user/exams", label: "Mock Test", icon: <FileText size={20} /> },
    { href: "/user/result", label: "Result", icon: <BookDown size={20} /> },
    {
      href: "/user/notification",
      label: "Notification",
      icon: <MessageSquare size={20} />,
    },
  ];

  return (
    <div className="flex">
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-[#0D1B2A] w-64 min-h-screen p-5 fixed top-0 left-0 shadow-md transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:relative`}
      >
        <h2 className="text-xl text-white font-bold">
          {session.data?.user?.name}
        </h2>
        <nav className="mt-16">
          <ul className="space-y-4">
            {sidebarLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 p-2 rounded transition duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white font-semibold shadow-lg"
                        : "hover:bg-blue-200 text-white"
                    }`}
                  >
                    {item.icon} {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default UserSidebar;






















// "use client";
// import React from "react";
// import { Link } from "@/i18n/navigation";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
// import { Button } from "./ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Award, Badge, BookOpen, Calendar, FileText, LayoutDashboard, LineChart, User } from 'lucide-react';

// // Types for the component props
// interface StudentSidebarProps {
//   studentName?: string;
//   studentEmail?: string;
//   studentAvatar?: string;
//   upcomingDeadlines?: Array<{
//     id: number;
//     title: string;
//     dueDate: string;
//     course: string;
//     type: string;
//     daysLeft: number;
//   }>;
// }

// export default function UsertSidebar({
//   studentName = "Student Name",
//   studentEmail = "student@example.com",
//   studentAvatar = "/placeholder.svg?height=80&width=80",
//   upcomingDeadlines = []
// }: StudentSidebarProps) {
//   // Default upcoming deadlines if none provided
//   const defaultDeadlines = [
//     {
//       id: 1,
//       title: "SERU Final Assessment",
//       dueDate: "2023-12-15",
//       course: "SERU Online License Course",
//       type: "Exam",
//       daysLeft: 5,
//     },
//     {
//       id: 2,
//       title: "Web Development Project",
//       dueDate: "2023-12-20",
//       course: "Web Development",
//       type: "Assignment",
//       daysLeft: 10,
//     },
//     {
//       id: 3,
//       title: "AI Research Paper",
//       dueDate: "2023-12-18",
//       course: "AI & Machine Learning",
//       type: "Assignment",
//       daysLeft: 8,
//     },
//   ];

//   // Use provided deadlines or default ones
//   const deadlines = upcomingDeadlines.length > 0 ? upcomingDeadlines : defaultDeadlines;

//   return (
//     <div className="space-y-6 w-96 overflow-y-auto">
//       {/* Student Profile Card */}
//       <Card>
//         <CardHeader className="pb-2">
//           <CardTitle className="text-lg">Student Profile</CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-col items-center text-center">
//           <Avatar className="h-20 w-20 mb-4">
//             <AvatarImage src={studentAvatar} alt={studentName} />
//             <AvatarFallback className="text-lg">{studentName.substring(0, 2).toUpperCase()}</AvatarFallback>
//           </Avatar>
//           <h3 className="font-medium text-lg">{studentName}</h3>
//           <p className="text-sm text-muted-foreground mb-2">{studentEmail}</p>
//           <Badge className="mb-4">Student</Badge>
//           <Button variant="outline" size="sm" className="w-full">
//             <User className="mr-2 h-4 w-4" />
//             View Profile
//           </Button>
//         </CardContent>
//       </Card>

//       {/* Navigation */}
//       <Card>
//         <CardContent className="p-3">
//           <nav className="space-y-1">
//             <Link href="/student/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
//               <LayoutDashboard className="h-4 w-4" />
//               <span>Dashboard</span>
//             </Link>
//             <Link href="/student/courses" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted">
//               <BookOpen className="h-4 w-4" />
//               <span>My Courses</span>
//             </Link>
//             <Link href="/student/exams" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted">
//               <FileText className="h-4 w-4" />
//               <span>Exams</span>
//             </Link>
//             <Link href="/student/progress" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted">
//               <LineChart className="h-4 w-4" />
//               <span>Progress</span>
//             </Link>
//             <Link href="/student/certificates" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted">
//               <Award className="h-4 w-4" />
//               <span>Certificates</span>
//             </Link>
//           </nav>
//         </CardContent>
//       </Card>

//       {/* Upcoming Deadlines */}
//       <Card>
//         <CardHeader className="pb-2">
//           <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
//         </CardHeader>
//         <CardContent className="p-0">
//           <div className="divide-y">
//             {deadlines.map((deadline) => (
//               <div key={deadline.id} className="p-3 hover:bg-muted/50">
//                 <div className="flex justify-between items-start mb-1">
//                   <h4 className="font-medium">{deadline.title}</h4>
//                   <Badge fontVariant={deadline.daysLeft <= 5 ? "destructive" : "outline"} className="text-xs">
//                     {deadline.daysLeft} days left
//                   </Badge>
//                 </div>
//                 <p className="text-sm text-muted-foreground">{deadline.course}</p>
//                 <div className="flex items-center mt-2 text-xs text-muted-foreground">
//                   <Calendar className="h-3 w-3 mr-1" />
//                   <span>Due: {new Date(deadline.dueDate).toLocaleDateString()}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//         <CardFooter className="pt-2">
//           <Button variant="ghost" size="sm" className="w-full text-xs">
//             View All Deadlines
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
