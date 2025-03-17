// "use client";

// import React, { useState } from "react";
// import { FileText, HelpCircle, ArrowDown, MoreHorizontal } from "lucide-react";
// import { Link } from "@/i18n/navigation";

// interface userData {
//   id: string;
//   email: string;
//   name?: string;
//   role?: string;
//   password?: string;
//   phone?: string;
//   image?: string;
//   emailVerified?: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

// interface blogData {
//   id: number;
//   post_author?: number;
//   tags?: string;
//   name?: string;
//   category?: string;
//   post_date?: Date;
//   post_date_gmt?: Date;
//   post_content?: any;
//   post_title: string;
//   post_excerpt?: string;
//   post_status?: string;
//   comment_status?: string;
//   ping_status?: string;
//   post_password?: string;
//   post_name: string;
//   to_ping?: string;
//   pinged?: string;
//   post_modified?: Date;
//   post_modified_gmt?: Date;
//   post_content_filtered?: string;
//   post_parent?: number;
//   guid?: string;
//   menu_order?: number;
//   post_type?: string;
//   post_mime_type?: string;
//   comment_count?: number;
//   createdAt?: Date;
// }

// interface activeUser {
//   id: string;
//   expiresAt: Date;
//   token: string;
//   role?: string;
//   createdAt: Date;
//   updatedAt: Date;
//   ipAddress?: string;
//   userAgent?: string;
//   userId: string;
// }

// interface ComponentProps {
//   blogData: blogData[];
//   userData: userData[];
//   activeUser: activeUser[];
// }

// const AdminDashboard = ({ blogData, userData, activeUser }: ComponentProps) => {
//   const [activeTab, setActiveTab] = useState("Today");
//   const [mockTests, setMockTests] = useState<MockTest[]>([]);

//   // Calculate the total number of mock tests
//   const totalMockTests = mockTests.length;

//   const [teachers] = useState([
//     {
//       id: 1,
//       name: "Beyona Miles",
//       email: "beyona-miles@esm-school.edu",
//       lastActivity: "Today",
//       classes: 2,
//       students: 40,
//       seatsTaken: 40,
//     },
//     {
//       id: 2,
//       name: "Bessie Cooper",
//       email: "bessie-cooper@esm-school.edu",
//       lastActivity: "Today",
//       classes: 3,
//       students: 60,
//       seatsTaken: 60,
//     },
//     {
//       id: 3,
//       name: "Darrell Steward",
//       email: "darrell-steward@esm-school.edu",
//       lastActivity: "Today",
//       classes: 2,
//       students: 40,
//       seatsTaken: 40,
//     },
//     {
//       id: 4,
//       name: "Wade Warren",
//       email: "wade-warren@esm-school.edu",
//       lastActivity: "Today",
//       classes: 2,
//       students: 40,
//       seatsTaken: 40,
//     },
//     {
//       id: 5,
//       name: "Jenny Wilson",
//       email: "jenny-wilson@esm-school.edu",
//       lastActivity: "Today",
//       classes: 2,
//       students: 40,
//       seatsTaken: 40,
//     },
//   ]);

//   // Stats data for the cards
//   const stats = {
//     activeUsers: 34,
//     scoresCreated: 73,
//     newAssignments: {
//       total: 18,
//       breakdown: [
//         { name: "Compositions", value: 6, color: "bg-green-500" },
//         { name: "Worksheets", value: 4, color: "bg-pink-500" },
//         { name: "Performances", value: 8, color: "bg-blue-500" },
//       ],
//     },
//     assignmentSuccess: 90,
//     avgSession: {
//       value: 26,
//       unit: "min",
//     },
//     assignmentsSubmitted: {
//       value: 62,
//       change: "+2%",
//     },
//   };

//   return (
//     <div className="flex-1 overflow-auto ">
//       {/* Tab navigation */}
//       <div className="bg-white border-b border-gray-200 shadow-sm">
//         <div className="flex justify-between items-center px-4">
//           <div className="flex">
//             {["Today", "This Month", "This year"].map((tab) => (
//               <button
//                 key={tab}
//                 className={`py-4 px-4 font-medium text-sm ${
//                   activeTab === tab
//                     ? "text-blue-600 border-b-2 border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50"
//                     : "text-gray-500 hover:bg-blue-50"
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           <button className="text-sm text-gray-700 font-medium flex items-center hover:bg-gray-50 px-3 py-2 rounded-md transition duration-200">
//             <FileText className="w-4 h-4 mr-1" />
//             Export as PDF
//           </button>
//         </div>
//       </div>

//       {/* Stats cards */}

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
//         <Link href="/admin/users">
//           <div className="h-52 bg-gradient-to-br from-[#ddf8fa] to-[#5bf5fd] p-5 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition duration-300">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-sm text-gray-600 font-medium">
//                 Total Users
//               </span>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <HelpCircle className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="text-3xl font-bold text-gray-800">
//               {userData.length}
//             </div>
//           </div>
//         </Link>

//         <div className="bg-gradient-to-br from-[#FCF3FB] to-[#fa93ee] p-5 rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition duration-300">
//           <div className="flex justify-between items-center mb-4">
//             <span className="text-sm text-gray-600 font-medium">
//               Active users
//             </span>
//             <button className="text-gray-400 hover:text-gray-600">
//               <HelpCircle className="w-4 h-4" />
//             </button>
//           </div>
//           <div className="text-3xl font-bold text-gray-800">
//             {activeUser.length}
//           </div>
//         </div>

//         {/* Link to Admin Mock Test Section */}
//         <Link href="/admin/mocktest">
//           <div className="h-52 bg-gradient-to-br from-[#F0FDF8] to-[#8dffd3] p-5 rounded-lg shadow-sm border border-green-100 hover:shadow-md transition duration-300">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-sm text-gray-600 font-medium">
//                 Mock Test
//               </span>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <HelpCircle className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="text-3xl font-bold text-gray-800">
//               {totalMockTests}
//             </div>
//           </div>
//         </Link>

//         <div className="bg-gradient-to-br from-[#e4e1ff] to-[#73c4fa] p-5 rounded-lg shadow-sm border border-amber-100 hover:shadow-md transition duration-300">
//           <div className="flex justify-between items-center mb-4">
//             <span className="text-sm text-gray-600 font-medium">
//               Mock Test Success Rate
//             </span>
//             <button className="text-gray-400 hover:text-gray-600">
//               <HelpCircle className="w-4 h-4" />
//             </button>
//           </div>
//           <div className="text-xs text-gray-500 mb-2">Last 7 days</div>
//           <div className="flex justify-center">
//             <div className="relative w-24 h-24">
//               <svg className="w-full h-full" viewBox="0 0 100 100">
//                 <defs>
//                   <linearGradient
//                     id="successGradient"
//                     x1="0%"
//                     y1="0%"
//                     x2="100%"
//                     y2="100%"
//                   >
//                     <stop offset="0%" stopColor="#10b981" />
//                     <stop offset="100%" stopColor="#059669" />
//                   </linearGradient>
//                 </defs>
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="40"
//                   fill="none"
//                   stroke="#e6e6e6"
//                   strokeWidth="10"
//                 />
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="40"
//                   fill="none"
//                   stroke="url(#successGradient)"
//                   strokeWidth="10"
//                   strokeDasharray={2 * Math.PI * 40}
//                   strokeDashoffset={
//                     2 * Math.PI * 40 * (1 - stats.assignmentSuccess / 100)
//                   }
//                   strokeLinecap="round"
//                   transform="rotate(-90 50 50)"
//                 />
//               </svg>
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <span className="text-2xl font-bold text-gray-800">
//                   {stats.assignmentSuccess}%
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Link href="/admin/notification">
//           <div className="bg-gradient-to-br from-indigo-50 to-indigo-700 p-5 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition duration-300 h-52 overflow-hidden overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-sm text-gray-600 font-medium">
//                 Notification
//               </span>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <HelpCircle className="w-4 h-4" />
//               </button>
//             </div>
//             <div>
//               <ul className="space-y-2">
//                 <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
//                   Notification 1
//                 </li>
//                 <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
//                   Notification 2
//                 </li>
//                 <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
//                   Notification 3
//                 </li>
//                 <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
//                   Notification 4
//                 </li>
//                 <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
//                   Notification 5
//                 </li>
//                 <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
//                   Notification 6
//                 </li>
//                 <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
//                   Notification 7
//                 </li>
//                 <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
//                   Notification 8
//                 </li>
//                 <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
//                   Notification 9
//                 </li>
//                 <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
//                   Notification 10
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </Link>

//         <div className="bg-gradient-to-br from-rose-50 to-red-500 p-5 rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition duration-300">
//           <div className="flex justify-between items-center mb-4">
//             <span className="text-sm text-gray-600 font-medium">Licenses</span>
//             <button className="text-gray-400 hover:text-gray-600">
//               <HelpCircle className="w-4 h-4" />
//             </button>
//           </div>
//           <div className="text-3xl font-bold text-gray-800">
//             {stats.scoresCreated}
//           </div>
//         </div>

//         <Link href="/admin/blogs">
//           <div className="h-52 bg-gradient-to-br from-[#c2e6ff] to-[#29daa5] p-5 rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition duration-300 cursor-pointer">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-sm text-gray-600 font-medium">
//                 Total Blog
//               </span>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <HelpCircle className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="text-3xl font-bold text-gray-800">
//               {blogData.length}
//             </div>
//           </div>
//         </Link>
//       </div>

//       {/* Licenses breakdown */}
//       <div className="p-6">
//         <div className="mb-4 flex justify-between items-center">
//           <h2 className="text-lg font-bold text-gray-800">
//             Licenses Collected
//           </h2>
//           <div className="flex items-center space-x-2">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search here..."
//                 className="pl-4 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-200"
//               />
//             </div>
//             <button className="text-sm text-gray-700 font-medium flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 shadow-sm transition duration-200">
//               <FileText className="w-4 h-4 mr-1" />
//               Export as CSV
//             </button>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center"
//                 >
//                   Name
//                   <ArrowDown className="w-3 h-3 ml-1" />
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Student ID
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Course
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Package Type
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Last Activity
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {teachers.map((teacher, index) => (
//                 <tr
//                   key={teacher.id}
//                   className={
//                     index % 2 === 0
//                       ? "bg-gradient-to-r from-white to-blue-50"
//                       : "bg-white hover:bg-gray-50"
//                   }
//                 >
//                   <td className="px-6 py-4 text-sm font-medium text-gray-800">
//                     {teacher.name}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-600">
//                     {teacher.classes}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-600">
//                     {teacher.students}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-600">
//                     {teacher.seatsTaken}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-600">
//                     {teacher.lastActivity}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


















































// "use client"

// import { useState } from "react"
// import { Link } from "@/i18n/navigation"
// import {
//   FileText,
//   Search,
//   Users,
//   Activity,
//   FileCheck,
//   Bell,
//   CreditCard,
//   BookOpen,
//   MoreHorizontal,
//   Calendar,
//   ArrowUpRight,
//   Filter,
//   Download,
//   ChevronRight,
//   Badge,
// } from "lucide-react"
// import { Input } from "./ui/input"
// import { Button } from "./ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
// import { Progress } from "./ui/progress"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"


// interface userData {
//   id: string
//   email: string
//   name?: string
//   role?: string
//   password?: string
//   phone?: string
//   image?: string
//   emailVerified?: boolean
//   createdAt: Date
//   updatedAt: Date
// }

// interface blogData {
//   id: number
//   post_author?: number
//   tags?: string
//   name?: string
//   category?: string
//   post_date?: Date
//   post_date_gmt?: Date
//   post_content?: any
//   post_title: string
//   post_excerpt?: string
//   post_status?: string
//   comment_status?: string
//   ping_status?: string
//   post_password?: string
//   post_name: string
//   to_ping?: string
//   pinged?: string
//   post_modified?: Date
//   post_modified_gmt?: Date
//   post_content_filtered?: string
//   post_parent?: number
//   guid?: string
//   menu_order?: number
//   post_type?: string
//   post_mime_type?: string
//   comment_count?: number
//   createdAt?: Date
// }

// interface activeUser {
//   id: string
//   expiresAt: Date
//   token: string
//   role?: string
//   createdAt: Date
//   updatedAt: Date
//   ipAddress?: string
//   userAgent?: string
//   userId: string
// }

// interface MockTest {
//   id: string
//   title: string
//   status: string
// }

// interface ComponentProps {
//   blogData: blogData[]
//   userData: userData[]
//   activeUser: activeUser[]
// }

// const AdminDashboard = ({ blogData, userData, activeUser }: ComponentProps) => {
//   const [activeTab, setActiveTab] = useState("today")
//   const [mockTests, setMockTests] = useState<MockTest[]>([])

//   // Calculate the total number of mock tests
//   const totalMockTests = mockTests.length

//   const [teachers] = useState([
//     {
//       id: 1,
//       name: "Beyona Miles",
//       email: "beyona-miles@esm-school.edu",
//       lastActivity: "Today",
//       classes: 2,
//       studentId: "STU-2023-001",
//       course: "Advanced Mathematics",
//       packageType: "Premium",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       id: 2,
//       name: "Bessie Cooper",
//       email: "bessie-cooper@esm-school.edu",
//       lastActivity: "Yesterday",
//       classes: 3,
//       studentId: "STU-2023-002",
//       course: "Computer Science",
//       packageType: "Standard",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       id: 3,
//       name: "Darrell Steward",
//       email: "darrell-steward@esm-school.edu",
//       lastActivity: "2 days ago",
//       classes: 2,
//       studentId: "STU-2023-003",
//       course: "Physics",
//       packageType: "Premium",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       id: 4,
//       name: "Wade Warren",
//       email: "wade-warren@esm-school.edu",
//       lastActivity: "3 days ago",
//       classes: 2,
//       studentId: "STU-2023-004",
//       course: "Biology",
//       packageType: "Standard",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       id: 5,
//       name: "Jenny Wilson",
//       email: "jenny-wilson@esm-school.edu",
//       lastActivity: "1 week ago",
//       classes: 2,
//       studentId: "STU-2023-005",
//       course: "Chemistry",
//       packageType: "Premium",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//   ])

//   // Stats data for the cards
//   const stats = {
//     activeUsers: activeUser.length,
//     scoresCreated: 73,
//     newAssignments: {
//       total: 18,
//       breakdown: [
//         { name: "Compositions", value: 6, color: "bg-green-500" },
//         { name: "Worksheets", value: 4, color: "bg-pink-500" },
//         { name: "Performances", value: 8, color: "bg-blue-500" },
//       ],
//     },
//     assignmentSuccess: 90,
//     avgSession: {
//       value: 26,
//       unit: "min",
//     },
//     assignmentsSubmitted: {
//       value: 62,
//       change: "+2%",
//     },
//   }

//   // Recent notifications
//   const notifications = [
//     { id: 1, text: "New user registered", time: "5 minutes ago" },
//     { id: 2, text: "License purchase completed", time: "1 hour ago" },
//     { id: 3, text: "System update scheduled", time: "2 hours ago" },
//     { id: 4, text: "New blog post published", time: "Yesterday" },
//     { id: 5, text: "User feedback received", time: "Yesterday" },
//   ]

//   return (
//     <div className="flex-1 overflow-auto bg-background">
//       <div className="container mx-auto p-6 space-y-8">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input type="search" placeholder="Search..." className="w-[200px] pl-8 md:w-[300px]" />
//             </div>
//             <Button>
//               <FileText className="mr-2 h-4 w-4" />
//               Export as PDF
//             </Button>
//           </div>
//         </div>

//         <Tabs defaultValue="today" className="space-y-6">
//           <div className="flex justify-between items-center">
//             <TabsList>
//               <TabsTrigger value="today" onClick={() => setActiveTab("today")}>
//                 Today
//               </TabsTrigger>
//               <TabsTrigger value="month" onClick={() => setActiveTab("month")}>
//                 This Month
//               </TabsTrigger>
//               <TabsTrigger value="year" onClick={() => setActiveTab("year")}>
//                 This Year
//               </TabsTrigger>
//             </TabsList>
//             <Button variant="outline" size="sm">
//               <Calendar className="mr-2 h-4 w-4" />
//               Date Range
//             </Button>
//           </div>

//           <TabsContent value="today" className="space-y-6">
//             {/* Stats Overview */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
//                   <CardTitle className="text-sm font-medium">Total Users</CardTitle>
//                   <Users className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{userData.length}</div>
//                   <p className="text-xs text-muted-foreground">+{Math.floor(userData.length * 0.05)} from last week</p>
//                   <div className="mt-4 h-1">
//                     <Progress value={75} className="h-1" />
//                   </div>
//                 </CardContent>
//                 <CardFooter className="pt-0">
//                   <Link href="/admin/users" className="text-xs text-primary flex items-center">
//                     View all users
//                     <ChevronRight className="ml-1 h-3 w-3" />
//                   </Link>
//                 </CardFooter>
//               </Card>

//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
//                   <CardTitle className="text-sm font-medium">Active Users</CardTitle>
//                   <Activity className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{activeUser.length}</div>
//                   <p className="text-xs text-muted-foreground">
//                     +{Math.floor(activeUser.length * 0.12)} from yesterday
//                   </p>
//                   <div className="mt-4 h-1">
//                     <Progress value={65} className="h-1" />
//                   </div>
//                 </CardContent>
//                 <CardFooter className="pt-0">
//                   <Link href="#" className="text-xs text-primary flex items-center">
//                     View active sessions
//                     <ChevronRight className="ml-1 h-3 w-3" />
//                   </Link>
//                 </CardFooter>
//               </Card>

//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
//                   <CardTitle className="text-sm font-medium">Mock Tests</CardTitle>
//                   <FileCheck className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{totalMockTests || 12}</div>
//                   <p className="text-xs text-muted-foreground">
//                     {totalMockTests ? "+2 from last week" : "12 total tests available"}
//                   </p>
//                   <div className="mt-4 h-1">
//                     <Progress value={40} className="h-1" />
//                   </div>
//                 </CardContent>
//                 <CardFooter className="pt-0">
//                   <Link href="/admin/mocktest" className="text-xs text-primary flex items-center">
//                     Manage mock tests
//                     <ChevronRight className="ml-1 h-3 w-3" />
//                   </Link>
//                 </CardFooter>
//               </Card>

//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
//                   <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
//                   <BookOpen className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">{blogData.length}</div>
//                   <p className="text-xs text-muted-foreground">+{Math.floor(blogData.length * 0.08)} from last month</p>
//                   <div className="mt-4 h-1">
//                     <Progress value={60} className="h-1" />
//                   </div>
//                 </CardContent>
//                 <CardFooter className="pt-0">
//                   <Link href="/admin/blogs" className="text-xs text-primary flex items-center">
//                     Manage blog posts
//                     <ChevronRight className="ml-1 h-3 w-3" />
//                   </Link>
//                 </CardFooter>
//               </Card>
//             </div>

//             {/* Secondary Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Success Rate</CardTitle>
//                   <CardDescription>Mock test completion rate</CardDescription>
//                 </CardHeader>
//                 <CardContent className="pb-2">
//                   <div className="flex items-center justify-center">
//                     <div className="relative w-40 h-40">
//                       <svg className="w-full h-full" viewBox="0 0 100 100">
//                         <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
//                         <circle
//                           cx="50"
//                           cy="50"
//                           r="40"
//                           fill="none"
//                           stroke="hsl(var(--primary))"
//                           strokeWidth="10"
//                           strokeDasharray={2 * Math.PI * 40}
//                           strokeDashoffset={2 * Math.PI * 40 * (1 - stats.assignmentSuccess / 100)}
//                           strokeLinecap="round"
//                           transform="rotate(-90 50 50)"
//                         />
//                       </svg>
//                       <div className="absolute inset-0 flex flex-col items-center justify-center">
//                         <span className="text-3xl font-bold">{stats.assignmentSuccess}%</span>
//                         <span className="text-sm text-muted-foreground">Completion</span>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex justify-between">
//                   <div className="text-sm text-muted-foreground">Last 7 days</div>
//                   <div className="text-sm font-medium text-primary">+5%</div>
//                 </CardFooter>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Licenses</CardTitle>
//                   <CardDescription>Active license distribution</CardDescription>
//                 </CardHeader>
//                 <CardContent className="pb-2">
//                   <div className="space-y-4">
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className="w-3 h-3 rounded-full bg-primary"></div>
//                           <span className="text-sm">Premium</span>
//                         </div>
//                         <span className="text-sm font-medium">42</span>
//                       </div>
//                       <Progress value={60} className="h-1" />
//                     </div>
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//                           <span className="text-sm">Standard</span>
//                         </div>
//                         <span className="text-sm font-medium">28</span>
//                       </div>
//                       <Progress value={40} className="h-1 bg-blue-100" />
//                     </div>
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                           <span className="text-sm">Basic</span>
//                         </div>
//                         <span className="text-sm font-medium">14</span>
//                       </div>
//                       <Progress value={20} className="h-1 bg-green-100" />
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button variant="outline" size="sm" className="w-full">
//                     <CreditCard className="mr-2 h-4 w-4" />
//                     View License Details
//                   </Button>
//                 </CardFooter>
//               </Card>

//               <Card>
//                 <CardHeader className="pb-2">
//                   <div className="flex items-center justify-between">
//                     <CardTitle>Recent Notifications</CardTitle>
//                     <Badge fontVariant="outline" className="text-xs">
//                       {notifications.length} new
//                     </Badge>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="max-h-[220px] overflow-auto">
//                   <div className="space-y-4">
//                     {notifications.map((notification) => (
//                       <div key={notification.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
//                         <div className="rounded-full bg-primary/10 p-2">
//                           <Bell className="h-4 w-4 text-primary" />
//                         </div>
//                         <div className="space-y-1">
//                           <p className="text-sm">{notification.text}</p>
//                           <p className="text-xs text-muted-foreground">{notification.time}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Link href="/admin/notification" className="text-sm text-primary flex items-center">
//                     View all notifications
//                     <ArrowUpRight className="ml-1 h-3 w-3" />
//                   </Link>
//                 </CardFooter>
//               </Card>
//             </div>

//             {/* Licenses Table */}
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <CardTitle>Licenses Collected</CardTitle>
//                     <CardDescription>Recent license acquisitions and usage</CardDescription>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Button variant="outline" size="sm">
//                       <Filter className="mr-2 h-4 w-4" />
//                       Filter
//                     </Button>
//                     <Button variant="outline" size="sm">
//                       <Download className="mr-2 h-4 w-4" />
//                       Export as CSV
//                     </Button>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Name</TableHead>
//                       <TableHead>Student ID</TableHead>
//                       <TableHead>Course</TableHead>
//                       <TableHead>Package Type</TableHead>
//                       <TableHead>Last Activity</TableHead>
//                       <TableHead></TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {teachers.map((teacher) => (
//                       <TableRow key={teacher.id}>
//                         <TableCell className="font-medium">
//                           <div className="flex items-center gap-2">
//                             <Avatar className="h-8 w-8">
//                               <AvatarImage src={teacher.avatar} alt={teacher.name} />
//                               <AvatarFallback>{teacher.name.substring(0, 2)}</AvatarFallback>
//                             </Avatar>
//                             <div>
//                               <div>{teacher.name}</div>
//                               <div className="text-xs text-muted-foreground">{teacher.email}</div>
//                             </div>
//                           </div>
//                         </TableCell>
//                         <TableCell>{teacher.studentId}</TableCell>
//                         <TableCell>{teacher.course}</TableCell>
//                         <TableCell>
//                           <Badge fontVariant={teacher.packageType === "Premium" ? "default" : "secondary"}>
//                             {teacher.packageType}
//                           </Badge>
//                         </TableCell>
//                         <TableCell>{teacher.lastActivity}</TableCell>
//                         <TableCell>
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button variant="ghost" size="icon">
//                                 <MoreHorizontal className="h-4 w-4" />
//                                 <span className="sr-only">Open menu</span>
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                               <DropdownMenuItem>View details</DropdownMenuItem>
//                               <DropdownMenuItem>Edit license</DropdownMenuItem>
//                               <DropdownMenuSeparator />
//                               <DropdownMenuItem className="text-destructive">Revoke license</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//               <CardFooter className="flex items-center justify-between">
//                 <div className="text-sm text-muted-foreground">Showing 5 of 100 entries</div>
//                 <div className="flex items-center gap-2">
//                   <Button variant="outline" size="sm" disabled>
//                     Previous
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Next
//                   </Button>
//                 </div>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           <TabsContent value="month">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Monthly Overview</CardTitle>
//                 <CardDescription>Your dashboard data for this month</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>Monthly statistics will appear here.</p>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="year">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Yearly Overview</CardTitle>
//                 <CardDescription>Your dashboard data for this year</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>Yearly statistics will appear here.</p>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   )
// }

// export default AdminDashboard










































"use client"

import { useState } from "react"
import { Link } from "@/i18n/navigation"
import {
  Search,
  Users,
  Activity,
  FileCheck,
  Bell,
  CreditCard,
  BookOpen,
  MoreHorizontal,
  Calendar,
  ArrowUpRight,
  Filter,
  Download,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  Home,
  UserPlus,
  Newspaper,
  TestTube,
  Menu,
} from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Badge } from "@mui/material"

interface userData {
  id: string
  email: string
  name?: string
  role?: string
  password?: string
  phone?: string
  image?: string
  emailVerified?: boolean
  createdAt: Date
  updatedAt: Date
}

interface blogData {
  id: number
  post_author?: number
  tags?: string
  name?: string
  category?: string
  post_date?: Date
  post_date_gmt?: Date
  post_content?: any
  post_title: string
  post_excerpt?: string
  post_status?: string
  comment_status?: string
  ping_status?: string
  post_password?: string
  post_name: string
  to_ping?: string
  pinged?: string
  post_modified?: Date
  post_modified_gmt?: Date
  post_content_filtered?: string
  post_parent?: number
  guid?: string
  menu_order?: number
  post_type?: string
  post_mime_type?: string
  comment_count?: number
  createdAt?: Date
}

interface activeUser {
  id: string
  expiresAt: Date
  token: string
  role?: string
  createdAt: Date
  updatedAt: Date
  ipAddress?: string
  userAgent?: string
  userId: string
}

interface MockTest {
  id: string
  title: string
  status: string
}

interface ComponentProps {
  blogData: blogData[]
  userData: userData[]
  activeUser: activeUser[]
}

const AdminDashboard = ({ blogData, userData, activeUser }: ComponentProps) => {
  const [activeTab, setActiveTab] = useState("today")
  const [mockTests, setMockTests] = useState<MockTest[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Calculate the total number of mock tests
  const totalMockTests = mockTests.length || 12

  const [teachers] = useState([
    {
      id: 1,
      name: "Beyona Miles",
      email: "beyona-miles@esm-school.edu",
      lastActivity: "Today",
      classes: 2,
      studentId: "STU-2023-001",
      course: "Advanced Mathematics",
      packageType: "Premium",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Bessie Cooper",
      email: "bessie-cooper@esm-school.edu",
      lastActivity: "Yesterday",
      classes: 3,
      studentId: "STU-2023-002",
      course: "Computer Science",
      packageType: "Standard",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Darrell Steward",
      email: "darrell-steward@esm-school.edu",
      lastActivity: "2 days ago",
      classes: 2,
      studentId: "STU-2023-003",
      course: "Physics",
      packageType: "Premium",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Wade Warren",
      email: "wade-warren@esm-school.edu",
      lastActivity: "3 days ago",
      classes: 2,
      studentId: "STU-2023-004",
      course: "Biology",
      packageType: "Standard",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Jenny Wilson",
      email: "jenny-wilson@esm-school.edu",
      lastActivity: "1 week ago",
      classes: 2,
      studentId: "STU-2023-005",
      course: "Chemistry",
      packageType: "Premium",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  // Stats data for the cards
  const stats = {
    activeUsers: activeUser.length,
    totalUsers: userData.length,
    totalBlogs: blogData.length,
    scoresCreated: 73,
    newAssignments: {
      total: 18,
      breakdown: [
        { name: "Compositions", value: 6, color: "bg-green-500" },
        { name: "Worksheets", value: 4, color: "bg-pink-500" },
        { name: "Performances", value: 8, color: "bg-blue-500" },
      ],
    },
    assignmentSuccess: 90,
    avgSession: {
      value: 26,
      unit: "min",
    },
    assignmentsSubmitted: {
      value: 62,
      change: "+2%",
    },
  }

  // Recent notifications
  const notifications = [
    { id: 1, text: "New user registered", time: "5 minutes ago", icon: <UserPlus className="h-4 w-4" /> },
    { id: 2, text: "License purchase completed", time: "1 hour ago", icon: <CreditCard className="h-4 w-4" /> },
    { id: 3, text: "System update scheduled", time: "2 hours ago", icon: <Clock className="h-4 w-4" /> },
    { id: 4, text: "New blog post published", time: "Yesterday", icon: <Newspaper className="h-4 w-4" /> },
    { id: 5, text: "User feedback received", time: "Yesterday", icon: <CheckCircle2 className="h-4 w-4" /> },
  ]

  // Key metrics for the summary section
  const keyMetrics = [
    {
      title: "Active Users",
      value: activeUser.length,
      change: "+12%",
      status: "increase",
      icon: <Activity className="h-5 w-5 text-blue-500" />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Total Users",
      value: userData.length,
      change: "+5%",
      status: "increase",
      icon: <Users className="h-5 w-5 text-indigo-500" />,
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      title: "Blog Posts",
      value: blogData.length,
      change: "+8%",
      status: "increase",
      icon: <BookOpen className="h-5 w-5 text-purple-500" />,
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Mock Tests",
      value: totalMockTests,
      change: "+2",
      status: "increase",
      icon: <FileCheck className="h-5 w-5 text-green-500" />,
      color: "bg-green-50 border-green-200",
    },
  ]

  // Action items that need attention
  const actionItems = [
    {
      title: "New User Registrations",
      value: 5,
      description: "Users awaiting approval",
      icon: <UserPlus className="h-5 w-5 text-blue-500" />,
      action: "Review",
      link: "/admin/users",
    },
    {
      title: "License Renewals",
      value: 3,
      description: "Licenses expiring soon",
      icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
      action: "Renew",
      link: "#",
    },
    {
      title: "System Updates",
      value: 1,
      description: "Update scheduled for tomorrow",
      icon: <Clock className="h-5 w-5 text-purple-500" />,
      action: "View",
      link: "#",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
     
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Dashboard Overview</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-[200px] pl-8 md:w-[300px]" />
            </div>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Notifications</span>
              <Badge className="ml-1 bg-red-500">3</Badge>
            </Button>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          {/* Summary section - Key metrics at a glance */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Key Metrics</h2>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Today
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyMetrics.map((metric, index) => (
                <div key={index} className={`${metric.color} border rounded-lg p-4 flex items-center`}>
                  <div className="mr-4 p-2 rounded-full bg-white">{metric.icon}</div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">{metric.title}</div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold mr-2">{metric.value}</span>
                      <span
                        className={`text-xs ${metric.status === "increase" ? "text-green-500" : "text-red-500"} flex items-center`}
                      >
                        {metric.status === "increase" ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingUp className="h-3 w-3 mr-1 transform rotate-180" />
                        )}
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action items section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Action Items</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {actionItems.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {item.icon}
                        <CardTitle className="text-base ml-2">{item.title}</CardTitle>
                      </div>
                      <Badge>{item.value}</Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-2">
                    <Button variant="secondary" size="sm" asChild className="w-full">
                      <Link href={item.link}>{item.action}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <Tabs defaultValue="today" className="space-y-6">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="today" onClick={() => setActiveTab("today")}>
                  Today
                </TabsTrigger>
                <TabsTrigger value="month" onClick={() => setActiveTab("month")}>
                  This Month
                </TabsTrigger>
                <TabsTrigger value="year" onClick={() => setActiveTab("year")}>
                  This Year
                </TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>

            <TabsContent value="today" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest user activities</CardDescription>
                  </CardHeader>
                  <CardContent className="max-h-[300px] overflow-auto">
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                          <div className="rounded-full bg-primary/10 p-2">
                            {notification.icon || <Bell className="h-4 w-4 text-primary" />}
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm">{notification.text}</p>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/admin/notification" className="text-sm text-primary flex items-center">
                      View all activities
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                {/* Success Rate */}
                <Card>
                  <CardHeader>
                    <CardTitle>Success Rate</CardTitle>
                    <CardDescription>Mock test completion rate</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-center">
                      <div className="relative w-40 h-40">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="hsl(var(--primary))"
                            strokeWidth="10"
                            strokeDasharray={2 * Math.PI * 40}
                            strokeDashoffset={2 * Math.PI * 40 * (1 - stats.assignmentSuccess / 100)}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold">{stats.assignmentSuccess}%</span>
                          <span className="text-sm text-muted-foreground">Completion</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-muted-foreground">Last 7 days</div>
                    <div className="text-sm font-medium text-primary">+5%</div>
                  </CardFooter>
                </Card>
              </div>

              {/* Licenses Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Licenses</CardTitle>
                      <CardDescription>Latest license acquisitions</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Student ID</TableHead>
                        <TableHead className="hidden md:table-cell">Course</TableHead>
                        <TableHead>Package</TableHead>
                        <TableHead className="hidden md:table-cell">Last Activity</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {teachers.slice(0, 3).map((teacher) => (
                        <TableRow key={teacher.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={teacher.avatar} alt={teacher.name} />
                                <AvatarFallback>{teacher.name.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div>{teacher.name}</div>
                                <div className="text-xs text-muted-foreground hidden md:block">{teacher.email}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{teacher.studentId}</TableCell>
                          <TableCell className="hidden md:table-cell">{teacher.course}</TableCell>
                          <TableCell>
                            <Badge variant={teacher.packageType === "Premium" ? "default" : "secondary"}>
                              {teacher.packageType}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">{teacher.lastActivity}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>View details</DropdownMenuItem>
                                <DropdownMenuItem>Edit license</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">Revoke license</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Showing 3 of {teachers.length} entries</div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#">View All Licenses</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="month">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Overview</CardTitle>
                  <CardDescription>Your dashboard data for this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Monthly statistics will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="year">
              <Card>
                <CardHeader>
                  <CardTitle>Yearly Overview</CardTitle>
                  <CardDescription>Your dashboard data for this year</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Yearly statistics will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard

