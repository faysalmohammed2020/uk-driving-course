// "use client";
// import React, { useEffect, useState } from "react";
// import { useSession } from "@/lib/auth-client";
// import { Link, useRouter } from "@/i18n/navigation";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Progress } from "../components/ui/progress"; // Ensure you have Progress component available
// import { FaBook, FaChalkboardTeacher, FaChartLine } from "react-icons/fa";

// const courses = [
//   {
//     title: "SERU Online License Course",
//     description: "Complete TfL SERU training",
//     progress: 80,
//   },
//   {
//     title: "Web Development",
//     description: "Master modern web dev",
//     progress: 60,
//   },
//   {
//     title: "AI & Machine Learning",
//     description: "Dive into AI concepts",
//     progress: 40,
//   },
// ];

// export default function StudentDashboard() {
//   const [examResults, setExamResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const { data: session } = useSession();
//   const userId = session?.user.id;
//   const router = useRouter(); // for redirecting to the retake page

//   useEffect(() => {
//     const fetchResults = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`/api/exam?userId=${userId}`);
//         if (!response.ok) throw new Error("Failed to fetch results");

//         const data = await response.json();
//         setExamResults(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchResults();
//     }
//   }, [userId]);

//   const passedResults = examResults.filter(
//     (result) => result.status === "Passed"
//   );

//   // Calculate average percentage
//   const totalExams = 30; // Total exams count

//   const averagePercentage = totalExams
//     ? passedResults.reduce(
//         (sum, result) => sum + (result.score / result.total) * 100,
//         0
//       ) / totalExams
//     : 0;

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="flex h-screen">
//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Dashboard Stats */}
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           <Card>
//             <CardContent className="p-4 flex items-center">
//               <FaChartLine className="text-3xl text-blue-500 mr-4" />
//               <div>
//                 <p className="text-gray-600">Running Course</p>
//                 <p className="text-xl font-bold">65/100</p>
//                 <Progress value={65} className="mt-2" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4 flex items-center">
//               <FaBook className="text-3xl text-green-500 mr-4" />
//               <div>
//                 <p className="text-gray-600">Completed</p>
//                 <p className="text-xl font-bold">75/75</p>
//                 <Progress value={100} className="mt-2" />
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4 flex items-center">
//               <FaChalkboardTeacher className="text-3xl text-blue-500 mr-4" />
//               <div>
//                 <p className="text-gray-600">Exam Progress</p>
//                 <p className="text-xl font-bold">
//                   {Math.round(averagePercentage)}%
//                 </p>
//                 <Progress value={averagePercentage} className="mt-2" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* My Courses Section */}
//         <section className="mt-8">
//           <h3 className="text-lg font-semibold mb-3">My Courses</h3>
//           <div className="grid grid-cols-3 gap-4">
//             {courses.map((course, index) => (
//               <Card key={index} className="mb-4">
//                 <CardContent className="p-4 flex flex-col">
//                   <p className="font-semibold text-lg">{course.title}</p>
//                   <p className="text-sm text-gray-500 mb-2">
//                     {course.description}
//                   </p>
//                   <Progress value={course.progress} className="mb-3" />
//                   <Button>
//                     {course.progress >= 100 ? "Completed" : "Continue"}
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>

//         {/* Exam Results Section */}
//         {passedResults.length > 0 ? (
//           <>
//             <h3 className="text-lg font-semibold mb-3">Passed Exams</h3>
//             <div className="overflow-x-auto shadow-lg rounded-lg bg-white border border-gray-300 p-6">
//               <table className="min-w-full table-auto text-gray-700">
//                 <thead className="bg-gradient-to-r from-green-400 to-green-600 text-white text-lg font-semibold">
//                   <tr>
//                     <th className="py-4 px-6 text-left">Exam Title</th>
//                     <th className="py-4 px-6 text-left">Score</th>
//                     <th className="py-4 px-6 text-left">Total</th>
//                     <th className="py-4 px-6 text-left">Percentage</th>
//                     <th className="py-4 px-6 text-left">Date</th>
//                     <th className="py-4 px-6 text-left">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {passedResults.map((result) => (
//                     <tr
//                       key={result.id}
//                       className="hover:bg-gradient-to-r from-green-50 to-green-100 transition duration-200"
//                     >
//                       <td className="py-4 px-6 border-b">{result.examTitle}</td>
//                       <td className="py-4 px-6 border-b">{result.score}</td>
//                       <td className="py-4 px-6 border-b">{result.total}</td>
//                       <td className="py-4 px-6 border-b">
//                         <div className="relative pt-1">
//                           <div className="flex mb-2 items-center justify-between">
//                             <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600">
//                               {Math.round((result.score / result.total) * 100)}%
//                             </span>
//                           </div>
//                           <div className="flex mb-2">
//                             <div className="w-full bg-gray-200 rounded-full h-2.5">
//                               <div
//                                 className="bg-green-500 h-2.5 rounded-full"
//                                 style={{
//                                   width: `${(result.score / result.total) * 100}%`,
//                                 }}
//                               ></div>
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-4 px-6 border-b">
//                         {new Date(result.createdAt).toLocaleDateString()}
//                       </td>
//                       <td className="py-4 px-6 border-b text-center">
//                         <span
//                           className={`inline-block p-2 rounded-full ${
//                             result.status === "Passed"
//                               ? "bg-green-500 text-white"
//                               : "bg-red-500 text-white"
//                           }`}
//                         >
//                           {result.status === "Passed" ? (
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-6 w-6"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="2"
//                                 d="M5 13l4 4L19 7"
//                               />
//                             </svg>
//                           ) : (
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-6 w-6"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="2"
//                                 d="M6 18L18 6M6 6l12 12"
//                               />
//                             </svg>
//                           )}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </>
//         ) : (
//           <div className="flex flex-col justify-center items-center">
//             <h2 className="text-xl font-bold mt-10">
//               No Pass Exam Results Found.
//             </h2>{" "}
//             <img src="/images/noResultFound.png" alt="No exam results found" />
//             <Link href="/user/exams">
//               <button className="bg-green-400 font-semibold mt-6 px-6 py-3 rounded-md hover:bg-green-500 hover:text-white">
//                 Take a Test
//               </button>
//             </Link>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// "use client"
// import type React from "react"
// import { useEffect, useState } from "react"
// import { useSession } from "@/lib/auth-client"
// import { Link, useRouter } from "@/i18n/navigation"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
// import { Button } from "./ui/button"
// import { Progress } from "./ui/progress"
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
// import {
//   AlertCircle,
//   Award,
//   BookOpen,
//   Calendar,
//   CheckCircle2,
//   ChevronRight,
//   Clock,
//   Download,
//   FileText,
//   GraduationCap,
//   LayoutDashboard,
//   LineChart,
//   MoreHorizontal,
//   RefreshCw,
//   Search,
//   Settings,
//   User,
//   XCircle,
//   Bell,
//   Badge,
// } from "lucide-react"
// import { Input } from "./ui/input"
// import allQuestions from "@/app/(main)/[locale]/data/allquestions.json";

// // Mock data for courses
// const courses = [
//   {
//     id: 1,
//     title: "SERU Online License Course",
//     description: "Complete TfL SERU training",
//     progress: 80,
//     image: "/placeholder.svg?height=100&width=200",
//     instructor: "Dr. Sarah Johnson",
//     duration: "8 weeks",
//     lastAccessed: "2 days ago",
//   },
//   {
//     id: 2,
//     title: "Web Development",
//     description: "Master modern web development",
//     progress: 60,
//     image: "/placeholder.svg?height=100&width=200",
//     instructor: "Prof. Michael Chen",
//     duration: "12 weeks",
//     lastAccessed: "Yesterday",
//   },
//   {
//     id: 3,
//     title: "AI & Machine Learning",
//     description: "Dive into AI concepts and applications",
//     progress: 40,
//     image: "/placeholder.svg?height=100&width=200",
//     instructor: "Dr. Emily Rodriguez",
//     duration: "10 weeks",
//     lastAccessed: "3 days ago",
//   },
// ]

// // Mock data for exams
// const mockExams = [
//   {
//     id: 1,
//     examTitle: "SERU Module 1 Assessment",
//     score: 85,
//     total: 100,
//     percentage: 85,
//     date: "2023-10-15",
//     status: "Passed",
//     createdAt: "2023-10-15T14:30:00Z",
//     attempts: 1,
//     maxAttempts: 3,
//     timeSpent: "45 minutes",
//     category: "SERU",
//   },
//   {
//     id: 2,
//     examTitle: "Web Development Fundamentals",
//     score: 72,
//     total: 100,
//     percentage: 72,
//     date: "2023-09-28",
//     status: "Passed",
//     createdAt: "2023-09-28T10:15:00Z",
//     attempts: 1,
//     maxAttempts: 2,
//     timeSpent: "60 minutes",
//     category: "Web Development",
//   },
//   {
//     id: 3,
//     examTitle: "JavaScript Advanced Concepts",
//     score: 65,
//     total: 100,
//     percentage: 65,
//     date: "2023-10-05",
//     status: "Failed",
//     createdAt: "2023-10-05T16:45:00Z",
//     attempts: 1,
//     maxAttempts: 3,
//     timeSpent: "55 minutes",
//     category: "Web Development",
//   },
//   {
//     id: 4,
//     examTitle: "AI Fundamentals Quiz",
//     score: 0,
//     total: 100,
//     percentage: 0,
//     date: "",
//     status: "Not Attempted",
//     createdAt: "",
//     attempts: 0,
//     maxAttempts: 2,
//     timeSpent: "0 minutes",
//     category: "AI & Machine Learning",
//   },
//   {
//     id: 5,
//     examTitle: "SERU Module 2 Assessment",
//     score: 90,
//     total: 100,
//     percentage: 90,
//     date: "2023-11-02",
//     status: "Passed",
//     createdAt: "2023-11-02T09:20:00Z",
//     attempts: 1,
//     maxAttempts: 3,
//     timeSpent: "40 minutes",
//     category: "SERU",
//   },
//   {
//     id: 6,
//     examTitle: "Machine Learning Algorithms",
//     score: 58,
//     total: 100,
//     percentage: 58,
//     date: "2023-10-20",
//     status: "Failed",
//     createdAt: "2023-10-20T13:10:00Z",
//     attempts: 2,
//     maxAttempts: 3,
//     timeSpent: "65 minutes",
//     category: "AI & Machine Learning",
//   },
// ]

// // Upcoming deadlines
// const upcomingDeadlines = [
//   {
//     id: 1,
//     title: "SERU Final Assessment",
//     dueDate: "2023-12-15",
//     course: "SERU Online License Course",
//     type: "Exam",
//     daysLeft: 5,
//   },
//   {
//     id: 2,
//     title: "Web Development Project",
//     dueDate: "2023-12-20",
//     course: "Web Development",
//     type: "Assignment",
//     daysLeft: 10,
//   },
//   {
//     id: 3,
//     title: "AI Research Paper",
//     dueDate: "2023-12-18",
//     course: "AI & Machine Learning",
//     type: "Assignment",
//     daysLeft: 8,
//   },
// ]

// export default function StudentDashboard() {
//   const [examResults, setExamResults] = useState<any[]>([])
//   const [loading, setLoading] = useState<boolean>(true)
//   const [error, setError] = useState<string | null>(null)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filterStatus, setFilterStatus] = useState("all")
//   const { data: session } = useSession()
//   const userId = session?.user?.id
//   const router = useRouter()

//   useEffect(() => {
//     const fetchResults = async () => {
//       try {
//         setLoading(true)

//         // Fetch exam results from the API
//         const response = await fetch(`/api/exam?userId=${userId}`)
//         if (!response.ok) throw new Error("Failed to fetch exam results")

//         const data = await response.json()
//         setExamResults(data)
//       } catch (err: any) {
//         console.error("Error fetching exam results:", err)
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (userId) {
//       fetchResults()
//     } else {
//       // If no userId, set loading to false
//       setLoading(false)
//     }
//   }, [userId])

//   // Filter exams based on search term and status filter
//   const filteredExams = examResults.filter((exam) => {
//     const matchesSearch =
//       exam.examTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       exam.category?.toLowerCase().includes(searchTerm.toLowerCase())

//     if (filterStatus === "all") return matchesSearch
//     return matchesSearch && exam.status?.toLowerCase() === filterStatus.toLowerCase()
//   })

//   // Calculate statistics
//   const totalExams = examResults.length
//   const passedExams = examResults.filter((exam) => exam.status === "Passed").length
//   const failedExams = examResults.filter((exam) => exam.status === "Failed").length
//   const notAttemptedExams = examResults.filter((exam) => exam.status === "Not Attempted").length

//   // Calculate average percentage for attempted exams
//   const attemptedExams = examResults.filter((exam) => exam.status !== "Not Attempted")
//   const averageScore =
//     attemptedExams.length > 0
//       ? attemptedExams.reduce((sum, exam) => sum + (exam.score / exam.total) * 100, 0) / attemptedExams.length
//       : 0

//   const handleRetake = (examId: string) => {
//     // Navigate to the retake page
//     router.push(`/user/exams/${examId}/retake`)
//   }

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "Passed":
//         return (
//           <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
//             <CheckCircle2 className="mr-1 h-3 w-3" />
//             Passed
//           </Badge>
//         )
//       case "Failed":
//         return (
//           <Badge fontVariant="destructive" className="bg-red-100 text-red-800 hover:bg-red-200">
//             <XCircle className="mr-1 h-3 w-3" />
//             Failed
//           </Badge>
//         )
//       case "Not Attempted":
//         return (
//           <Badge fontVariant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
//             <Clock className="mr-1 h-3 w-3" />
//             Not Attempted
//           </Badge>
//         )
//       default:
//         return <Badge>{status}</Badge>
//     }
//   }

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="flex flex-col items-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
//           <p className="mt-4 text-muted-foreground">Loading your dashboard...</p>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Card className="w-[400px]">
//           <CardHeader>
//             <CardTitle className="text-destructive flex items-center">
//               <AlertCircle className="mr-2 h-5 w-5" />
//               Error Loading Dashboard
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>{error}</p>
//           </CardContent>
//           <CardFooter>
//             <Button onClick={() => window.location.reload()}>Try Again</Button>
//           </CardFooter>
//         </Card>
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-background">
//       {/* Header */}
//       <header className="sticky top-0 z-10 bg-background border-b px-6 py-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <GraduationCap className="h-8 w-8 text-primary" />
//             <h1 className="text-xl font-bold">Student Dashboard</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input type="search" placeholder="Search..." className="w-[200px] pl-8 md:w-[300px]" />
//             </div>
//             <Button variant="outline" size="icon">
//               <Bell className="h-5 w-5" />
//             </Button>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="relative h-8 w-8 rounded-full">
//                   <Avatar className="h-8 w-8">
//                     <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Student" />
//                     <AvatarFallback>ST</AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuItem>
//                   <User className="mr-2 h-4 w-4" />
//                   <span>Profile</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Settings className="mr-2 h-4 w-4" />
//                   <span>Settings</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <LogOut className="mr-2 h-4 w-4" />
//                   <span>Logout</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 container mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Main Dashboard Content */}
//           <div className="md:col-span-3 space-y-6">
//             {/* Dashboard Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col items-center text-center">
//                     <div className="rounded-full bg-primary/10 p-3 mb-3">
//                       <BookOpen className="h-6 w-6 text-primary" />
//                     </div>
//                     <h3 className="text-2xl font-bold">{courses.length}</h3>
//                     <p className="text-sm text-muted-foreground">Active Courses</p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col items-center text-center">
//                     <div className="rounded-full bg-green-100 p-3 mb-3">
//                       <CheckCircle2 className="h-6 w-6 text-green-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold">{passedExams}</h3>
//                     <p className="text-sm text-muted-foreground">Passed Exams</p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col items-center text-center">
//                     <div className="rounded-full bg-amber-100 p-3 mb-3">
//                       <AlertCircle className="h-6 w-6 text-amber-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold">{notAttemptedExams}</h3>
//                     <p className="text-sm text-muted-foreground">Pending Exams</p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col items-center text-center">
//                     <div className="rounded-full bg-blue-100 p-3 mb-3">
//                       <LineChart className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold">{Math.round(averageScore)}%</h3>
//                     <p className="text-sm text-muted-foreground">Average Score</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Course Progress */}
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center justify-between">
//                   <CardTitle>My Courses</CardTitle>
//                   <Button variant="outline" size="sm">
//                     View All
//                   </Button>
//                 </div>
//                 <CardDescription>Your enrolled courses and progress</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {courses.map((course) => (
//                     <div
//                       key={course.id}
//                       className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
//                     >
//                       <div className="md:w-1/4">
//                         <img
//                           src={course.image || "/placeholder.svg"}
//                           alt={course.title}
//                           className="rounded-md w-full h-auto object-cover aspect-video"
//                         />
//                       </div>
//                       <div className="md:w-3/4 flex flex-col justify-between">
//                         <div>
//                           <h3 className="font-medium text-lg">{course.title}</h3>
//                           <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
//                           <div className="flex flex-wrap gap-2 mb-3">
//                             <Badge variant="outline" className="text-xs">
//                               <Clock className="mr-1 h-3 w-3" />
//                               {course.duration}
//                             </Badge>
//                             <Badge variant="outline" className="text-xs">
//                               <User className="mr-1 h-3 w-3" />
//                               {course.instructor}
//                             </Badge>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex items-center justify-between mb-1">
//                             <span className="text-sm font-medium">{course.progress}% Complete</span>
//                             <span className="text-xs text-muted-foreground">Last accessed: {course.lastAccessed}</span>
//                           </div>
//                           <Progress value={course.progress} className="h-2" />
//                           <div className="flex justify-end mt-3">
//                             <Button size="sm">
//                               Continue Learning
//                               <ChevronRight className="ml-1 h-4 w-4" />
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Exam Results */}
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center justify-between">
//                   <CardTitle>Exam Results</CardTitle>
//                   <Button variant="outline" size="sm">
//                     <Download className="mr-2 h-4 w-4" />
//                     Export
//                   </Button>
//                 </div>
//                 <CardDescription>View all your exam results and performance</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
//                   <div className="relative w-full md:w-auto">
//                     <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                     <Input
//                       type="search"
//                       placeholder="Search exams..."
//                       className="pl-8 w-full md:w-[300px]"
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                   </div>
//                   <div className="flex items-center gap-2 w-full md:w-auto">
//                     <Button
//                       variant={filterStatus === "all" ? "default" : "outline"}
//                       size="sm"
//                       onClick={() => setFilterStatus("all")}
//                     >
//                       All
//                     </Button>
//                     <Button
//                       variant={filterStatus === "passed" ? "default" : "outline"}
//                       size="sm"
//                       onClick={() => setFilterStatus("passed")}
//                       className="bg-green-600 hover:bg-green-700 text-white"
//                     >
//                       Passed
//                     </Button>
//                     <Button
//                       variant={filterStatus === "failed" ? "default" : "outline"}
//                       size="sm"
//                       onClick={() => setFilterStatus("failed")}
//                       className="bg-red-600 hover:bg-red-700 text-white"
//                     >
//                       Failed
//                     </Button>
//                     <Button
//                       variant={filterStatus === "not attempted" ? "default" : "outline"}
//                       size="sm"
//                       onClick={() => setFilterStatus("not attempted")}
//                     >
//                       Not Attempted
//                     </Button>
//                   </div>
//                 </div>

//                 <div className="rounded-md border">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Exam Title</TableHead>
//                         <TableHead className="hidden md:table-cell">Category</TableHead>
//                         <TableHead className="text-center">Status</TableHead>
//                         <TableHead className="text-right">Score</TableHead>
//                         <TableHead className="text-right hidden md:table-cell">Total</TableHead>
//                         <TableHead className="text-right">Percentage</TableHead>
//                         <TableHead className="hidden md:table-cell">Date</TableHead>
//                         <TableHead className="text-center">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {filteredExams.length > 0 ? (
//                         filteredExams.map((exam) => (
//                           <TableRow key={exam.id}>
//                             <TableCell className="font-medium">{exam.examTitle}</TableCell>
//                             <TableCell className="hidden md:table-cell">{exam.category}</TableCell>
//                             <TableCell className="text-center">{getStatusBadge(exam.status)}</TableCell>
//                             <TableCell className="text-right">
//                               {exam.status === "Not Attempted" ? "-" : exam.score}
//                             </TableCell>
//                             <TableCell className="text-right hidden md:table-cell">{exam.total}</TableCell>
//                             <TableCell className="text-right">
//                               {exam.status === "Not Attempted" ? (
//                                 "-"
//                               ) : (
//                                 <div className="flex items-center justify-end">
//                                   <span
//                                     className={`font-medium ${
//                                       exam.percentage >= 70
//                                         ? "text-green-600"
//                                         : exam.percentage >= 50
//                                           ? "text-amber-600"
//                                           : "text-red-600"
//                                     }`}
//                                   >
//                                     {Math.round((exam.score)/(exam.total)*100)}%
//                                   </span>
//                                   <div className="w-16 ml-2">
//                                     <Progress
//                                       value={(exam.score)/(exam.total)*100}
//                                       className="h-2"
//                                       indicatorClassName={
//                                         exam.percentage >= 70
//                                           ? "bg-green-600"
//                                           : exam.percentage >= 50
//                                             ? "bg-amber-600"
//                                             : "bg-red-600"
//                                       }
//                                     />
//                                   </div>
//                                 </div>
//                               )}
//                             </TableCell>
//                             <TableCell className="hidden md:table-cell">
//                               {exam.status === "Not Attempted" ? "-" : new Date(exam.createdAt).toLocaleDateString()}
//                             </TableCell>
//                             <TableCell>
//                               <div className="flex justify-center">
//                                 {exam.status === "Not Attempted" ? (
//                                   <Button size="sm" variant="default">
//                                     Take Exam
//                                   </Button>
//                                 ) : exam.status === "Failed" && exam.attempts < exam.maxAttempts ? (
//                                   <Button
//                                     size="sm"
//                                     variant="outline"
//                                     onClick={() => handleRetake(exam.id)}
//                                     className="text-red-600 border-red-200 hover:bg-red-50"
//                                   >
//                                     <RefreshCw className="mr-1 h-3 w-3" />
//                                     Retake
//                                   </Button>
//                                 ) : (
//                                   <DropdownMenu>
//                                     <DropdownMenuTrigger asChild>
//                                       <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                                         <MoreHorizontal className="h-4 w-4" />
//                                       </Button>
//                                     </DropdownMenuTrigger>
//                                     <DropdownMenuContent align="end">
//                                       <DropdownMenuItem>View Details</DropdownMenuItem>
//                                       <DropdownMenuItem>Download Certificate</DropdownMenuItem>
//                                     </DropdownMenuContent>
//                                   </DropdownMenu>
//                                 )}
//                               </div>
//                             </TableCell>
//                           </TableRow>
//                         ))
//                       ) : (
//                         <TableRow>
//                           <TableCell colSpan={8} className="text-center py-6">
//                             <div className="flex flex-col items-center justify-center">
//                               <AlertCircle className="h-8 w-8 text-muted-foreground mb-2" />
//                               <p className="text-muted-foreground">No exam results found</p>
//                               <Button variant="outline" className="mt-4">
//                                 Take an Exam
//                               </Button>
//                             </div>
//                           </TableCell>
//                         </TableRow>
//                       )}
//                     </TableBody>
//                   </Table>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="border-t py-4 px-6">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <GraduationCap className="h-5 w-5 text-primary" />
//             <span className="text-sm font-medium">Student Learning Portal</span>
//           </div>
//           <div className="flex items-center space-x-4 mt-4 md:mt-0">
//             <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
//               Help Center
//             </Link>
//             <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
//               Privacy Policy
//             </Link>
//             <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
//               Terms of Service
//             </Link>
//           </div>
//           <div className="text-sm text-muted-foreground mt-4 md:mt-0">
//             © {new Date().getFullYear()} Learning Portal. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// function LogOut(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//       <polyline points="16 17 21 12 16 7" />
//       <line x1="21" x2="9" y1="12" y2="12" />
//     </svg>
//   )
// }

"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

import { useSession } from "@/lib/auth-client";
import { Link, useRouter } from "@/i18n/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  AlertCircle,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  Filter,
  GraduationCap,
  LineChart,
  MoreHorizontal,
  RefreshCw,
  Search,
  Settings,
  User,
  XCircle,
  Bell,
  FileQuestion,
  Badge,
} from "lucide-react";
import { Input } from "./ui/input";
import allQuestions from "@/app/(main)/[locale]/data/allquestions.json";

// Mock data for courses
const courses = [
  {
    id: 1,
    title: "SERU Online License Course",
    description: "Complete TfL SERU training",
    progress: 80,
    image: "/images/blog1.webp",
    instructor: "Dr. Sarah Johnson",
    duration: "8 weeks",
    lastAccessed: "2 days ago",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Master modern web development",
    progress: 60,
    image: "/images/blog5.jpg",
    instructor: "Prof. Michael Chen",
    duration: "12 weeks",
    lastAccessed: "Yesterday",
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Dive into AI concepts and applications",
    progress: 40,
    image: "/images/blog4.webp",
    instructor: "Dr. Emily Rodriguez",
    duration: "10 weeks",
    lastAccessed: "3 days ago",
  },
];

// Upcoming deadlines
const upcomingDeadlines = [
  {
    id: 1,
    title: "SERU Final Assessment",
    dueDate: "2023-12-15",
    course: "SERU Online License Course",
    type: "Exam",
    daysLeft: 5,
  },
  {
    id: 2,
    title: "Web Development Project",
    dueDate: "2023-12-20",
    course: "Web Development",
    type: "Assignment",
    daysLeft: 10,
  },
  {
    id: 3,
    title: "AI Research Paper",
    dueDate: "2023-12-18",
    course: "AI & Machine Learning",
    type: "Assignment",
    daysLeft: 8,
  },
];

// Define the type for question sets
interface QuestionSet {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  questions: any[];
}

// Define the type for exam results
interface ExamResult {
  id: string;
  examTitle: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
  status: "Passed" | "Failed" | "Not Attempted";
  createdAt: string;
  attempts: number;
  maxAttempts: number;
  timeSpent: string;
  category: string;
  questionSetId?: string;
}

export default function StudentDashboard() {
  const [examResults, setExamResults] = useState<ExamResult[]>([]);
  const [questionSets, setQuestionSets] = useState<QuestionSet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [activeTab, setActiveTab] = useState("exams");
  const [filterCategory, setFilterCategory] = useState("all");
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const router = useRouter();

  // Mock data loading function
  const useMockData = () => {
    setLoading(true);

    // Mock exam results
    const mockResults = [
      {
        id: "1",
        examTitle: "SERU Module 1 Assessment",
        score: 85,
        total: 100,
        percentage: 85,
        date: "2023-10-15",
        status: "Passed" as const,
        createdAt: "2023-10-15T14:30:00Z",
        attempts: 1,
        maxAttempts: 3,
        timeSpent: "45 minutes",
        category: "SERU",
        questionSetId: "set1",
      },
      {
        id: "2",
        examTitle: "Web Development Fundamentals",
        score: 72,
        total: 100,
        percentage: 72,
        date: "2023-09-28",
        status: "Passed" as const,
        createdAt: "2023-09-28T10:15:00Z",
        attempts: 1,
        maxAttempts: 2,
        timeSpent: "60 minutes",
        category: "Web Development",
        questionSetId: "set2",
      },
      {
        id: "3",
        examTitle: "JavaScript Advanced Concepts",
        score: 65,
        total: 100,
        percentage: 65,
        date: "2023-10-05",
        status: "Failed" as const,
        createdAt: "2023-10-05T16:45:00Z",
        attempts: 1,
        maxAttempts: 3,
        timeSpent: "55 minutes",
        category: "Web Development",
        questionSetId: "set3",
      },
    ];

    setExamResults(mockResults);

    // Process allQuestions data
    const processedQuestionSets = processQuestionSets(
      allQuestions,
      mockResults
    );
    setQuestionSets(processedQuestionSets);

    setLoading(false);
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);

        // Fetch exam results from the API
        const response = await fetch(`/api/exam?userId=${userId}`);
        if (!response.ok) throw new Error("Failed to fetch exam results");

        const data = await response.json();
        setExamResults(data);

        // Process allQuestions data
        const processedQuestionSets = processQuestionSets(allQuestions, data);
        setQuestionSets(processedQuestionSets);
      } catch (err: any) {
        console.error("Error fetching exam results:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchResults();
    } else {
      // Use mock data for demonstration
      useMockData();
    }
  }, [userId]);

  // Process question sets and match with exam results
  const processQuestionSets = (allSets: any, examResults: ExamResult[]) => {
    // Extract question sets from allQuestions
    const sets = Array.isArray(allSets)
      ? allSets
      : Object.values(allSets || {});

    return sets.map((set: any) => {
      // Find matching exam result
      const matchingResult = examResults.find(
        (result) =>
          result.questionSetId === set.id ||
          result.examTitle.toLowerCase() === set.title.toLowerCase()
      );

      // Add status to the set
      return {
        ...set,
        status: matchingResult ? matchingResult.status : "Not Attempted",
        score: matchingResult ? matchingResult.score : 0,
        total: matchingResult
          ? matchingResult.total
          : set.questions?.length || 0,
        attempts: matchingResult ? matchingResult.attempts : 0,
        maxAttempts: matchingResult ? matchingResult.maxAttempts : 3,
        examId: matchingResult ? matchingResult.id : null,
        category: set.category || "General",
      };
    });
  };

  // Filter exams based on search term and status filter
  const filteredExams = examResults.filter((exam) => {
    const matchesSearch =
      exam.examTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.category?.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterStatus === "all") return matchesSearch;
    return (
      matchesSearch && exam.status?.toLowerCase() === filterStatus.toLowerCase()
    );
  });

  // Filter question sets based on search term, status filter, and category
  const filteredQuestionSets = questionSets.filter((set) => {
    const matchesSearch =
      set.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      set.category?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" ||
      set.status?.toLowerCase() === filterStatus.toLowerCase();
    const matchesCategory =
      filterCategory === "all" ||
      set.category?.toLowerCase() === filterCategory.toLowerCase();

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Get unique categories from question sets
  const categories = [
    ...new Set(questionSets.map((set) => set.category)),
  ].sort();

  // Calculate statistics
  const totalExams = examResults.length;
  const passedExams = examResults.filter(
    (exam) => exam.status === "Passed"
  ).length;
  const failedExams = examResults.filter(
    (exam) => exam.status === "Failed"
  ).length;
  const notAttemptedExams = examResults.filter(
    (exam) => exam.status === "Not Attempted"
  ).length;

  // Calculate total question sets statistics
  const totalQuestionSets = questionSets.length;
  const completedSets = questionSets.filter(
    (set) => set.status === "Passed"
  ).length;
  const inProgressSets = questionSets.filter(
    (set) => set.status === "Failed"
  ).length;
  const notStartedSets = questionSets.filter(
    (set) => set.status === "Not Attempted"
  ).length;

  // Calculate average percentage for attempted exams
  const attemptedExams = examResults.filter(
    (exam) => exam.status !== "Not Attempted"
  );
  const averageScore =
    attemptedExams.length > 0
      ? attemptedExams.reduce(
          (sum, exam) => sum + (exam.score / exam.total) * 100,
          0
        ) / attemptedExams.length
      : 0;

  const handleRetake = (examId: string) => {
    // Navigate to the retake page
    router.push(`/user/exams/${examId}/retake`);
  };

  const handleTakeExam = (setId: string) => {
    // Navigate to the exam page
    router.push(`/user/exams/take/${setId}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Passed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Passed
          </Badge>
        );
      case "Failed":
        return (
          <Badge
            fontVariant="destructive"
            className="bg-red-100 text-red-800 hover:bg-red-200"
          >
            <XCircle className="mr-1 h-3 w-3" />
            Failed
          </Badge>
        );
      case "Not Attempted":
        return (
          <Badge
            fontVariant="outline"
            className="bg-gray-100 text-gray-800 hover:bg-gray-200"
          >
            <Clock className="mr-1 h-3 w-3" />
            Not Attempted
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return <Badge className="bg-green-100 text-green-800">Easy</Badge>;
      case "medium":
        return <Badge className="bg-amber-100 text-amber-800">Medium</Badge>;
      case "hard":
        return <Badge className="bg-red-100 text-red-800">Hard</Badge>;
      default:
        return <Badge fontVariant="outline">Unknown</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              Error Loading Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold">Student Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 md:w-[250px] border-slate-500"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600 shadow-md hover:ring-2 hover:ring-gray-400 dark:hover:ring-gray-500 transition"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src="/images/boy.png"
                      alt="Student"
                    />
                    <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-semibold">
                      ST
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-48 mt-2 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Student Account
                  </p>
                </div>

                <DropdownMenuItem className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer">
                  <User className="mr-2 h-5 w-5 text-gray-700 dark:text-gray-300" />
                  <span>Profile</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer">
                  <Settings className="mr-2 h-5 w-5 text-gray-700 dark:text-gray-300" />
                  <span>Settings</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center px-4 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-700 dark:hover:text-white transition cursor-pointer">
                  <LogOut className="mr-2 h-5 w-5" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-blue-100 p-3 mb-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">{totalQuestionSets}</h3>
                  <p className="text-sm text-muted-foreground">
                    Total Question Sets
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-green-100 p-3 mb-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold">{completedSets}</h3>
                  <p className="text-sm text-muted-foreground">
                    Completed Sets
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-amber-100 p-3 mb-3">
                    <AlertCircle className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold">{notStartedSets}</h3>
                  <p className="text-sm text-muted-foreground">
                    Not Started Sets
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-purple-100 p-3 mb-3">
                    <LineChart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {Math.round(averageScore)}%
                  </h3>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Progress */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>My Learning Progress</CardTitle>
                <Button variant="outline" size="sm">
                  View All Courses
                </Button>
              </div>
              <CardDescription>
                Track your progress across all courses and exams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="md:w-1/4">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="rounded-md w-full h-auto object-cover aspect-video"
                      />
                    </div>
                    <div className="md:w-3/4 flex flex-col justify-between">
                      <div>
                        <h3 className="font-medium text-lg">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {course.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge fontVariant="outline" className="text-xs">
                            <Clock className="mr-1 h-3 w-3" />
                            {course.duration}
                          </Badge>
                          <Badge fontVariant="outline" className="text-xs">
                            <User className="mr-1 h-3 w-3" />
                            {course.instructor}
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">
                            {course.progress}% Complete
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Last accessed: {course.lastAccessed}
                          </span>
                        </div>
                        <Progress
                          value={course.progress}
                          className="h-2"
                          indicatorClassName={
                            course.progress >= 70
                              ? "bg-green-600"
                              : course.progress >= 40
                                ? "bg-amber-600"
                                : "bg-blue-600"
                          }
                        />
                        <div className="flex justify-end mt-3">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                          >
                            Continue Learning
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Question Sets and Exam Results */}
          <Tabs
            defaultValue="question-sets"
            className="space-y-4"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-between items-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger
                  value="question-sets"
                  className="flex items-center gap-2"
                >
                  <FileQuestion className="h-4 w-4" />
                  <span>Question Sets</span>
                </TabsTrigger>
                <TabsTrigger
                  value="exam-results"
                  className="flex items-center gap-2"
                >
                  <Award className="h-4 w-4" />
                  <span>Exam Results</span>
                </TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>

            {/* Question Sets Tab */}
            <TabsContent value="question-sets" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Available Question Sets</CardTitle>
                    <div className="flex items-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2"
                          >
                            <Filter className="h-4 w-4" />
                            <span>
                              Category:{" "}
                              {filterCategory === "all"
                                ? "All"
                                : filterCategory}
                            </span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => setFilterCategory("all")}
                          >
                            All Categories
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {categories.map((category) => (
                            <DropdownMenuItem
                              key={category}
                              onClick={() => setFilterCategory(category)}
                            >
                              {category}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <CardDescription>
                    Browse and take exams from our question sets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                    <div className="relative w-full md:w-auto">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search question sets..."
                        className="pl-8 w-full md:w-[300px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <Button
                        variant={filterStatus === "all" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterStatus("all")}
                      >
                        All
                      </Button>
                      <Button
                        variant={
                          filterStatus === "passed" ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setFilterStatus("passed")}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Completed
                      </Button>
                      <Button
                        variant={
                          filterStatus === "failed" ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setFilterStatus("failed")}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        Failed
                      </Button>
                      <Button
                        variant={
                          filterStatus === "not attempted"
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => setFilterStatus("not attempted")}
                      >
                        Not Started
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Question Set</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Category
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Difficulty
                          </TableHead>
                          <TableHead className="text-center">Status</TableHead>
                          <TableHead className="text-right">
                            Questions
                          </TableHead>
                          <TableHead className="text-right hidden md:table-cell">
                            Score
                          </TableHead>
                          <TableHead className="text-center">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredQuestionSets.length > 0 ? (
                          filteredQuestionSets.map((set) => (
                            <TableRow key={set.id} className="group">
                              <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                  <FileQuestion className="h-4 w-4 text-primary" />
                                  <span>{set.title}</span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {set.category}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {getDifficultyBadge(set.difficulty)}
                              </TableCell>
                              <TableCell className="text-center">
                                {getStatusBadge(set.status)}
                              </TableCell>
                              <TableCell className="text-right">
                                {set.questions?.length || 0}
                              </TableCell>
                              <TableCell className="text-right hidden md:table-cell">
                                {set.status === "Not Attempted" ? (
                                  "-"
                                ) : (
                                  <div className="flex items-center justify-end">
                                    <span
                                      className={`font-medium ${
                                        (set.score / set.total) * 100 >= 70
                                          ? "text-green-600"
                                          : (set.score / set.total) * 100 >= 50
                                            ? "text-amber-600"
                                            : "text-red-600"
                                      }`}
                                    >
                                      {Math.round(
                                        (set.score / set.total) * 100
                                      )}
                                      %
                                    </span>
                                    <div className="w-16 ml-2">
                                      <Progress
                                        value={(set.score / set.total) * 100}
                                        className="h-2"
                                        indicatorClassName={
                                          (set.score / set.total) * 100 >= 70
                                            ? "bg-green-600"
                                            : (set.score / set.total) * 100 >=
                                                50
                                              ? "bg-amber-600"
                                              : "bg-red-600"
                                        }
                                      />
                                    </div>
                                  </div>
                                )}
                              </TableCell>
                              <TableCell>
                                <div className="flex justify-center">
                                  {set.status === "Not Attempted" ? (
                                    <Button
                                      size="sm"
                                      variant="default"
                                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                                      onClick={() => handleTakeExam(set.id)}
                                    >
                                      Take Exam
                                    </Button>
                                  ) : set.status === "Failed" &&
                                    set.attempts < set.maxAttempts ? (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleRetake(set.examId)}
                                      className="text-red-600 border-red-200 hover:bg-red-50"
                                    >
                                      <RefreshCw className="mr-1 h-3 w-3" />
                                      Retake
                                    </Button>
                                  ) : (
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="h-8 w-8 p-0"
                                        >
                                          <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end">
                                        <DropdownMenuItem
                                          onClick={() =>
                                            router.push(
                                              `/user/exams/${set.id}/details`
                                            )
                                          }
                                        >
                                          View Details
                                        </DropdownMenuItem>
                                        {set.status === "Passed" && (
                                          <DropdownMenuItem
                                            onClick={() =>
                                              router.push(
                                                `/user/exams/${set.id}/certificate`
                                              )
                                            }
                                          >
                                            Download Certificate
                                          </DropdownMenuItem>
                                        )}
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center py-6">
                              <div className="flex flex-col items-center justify-center">
                                <AlertCircle className="h-8 w-8 text-muted-foreground mb-2" />
                                <p className="text-muted-foreground">
                                  No question sets found
                                </p>
                                <Button variant="outline" className="mt-4">
                                  Browse All Question Sets
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Exam Results Tab */}
            <TabsContent value="exam-results" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Exam Results History</CardTitle>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export Results
                    </Button>
                  </div>
                  <CardDescription>
                    View all your exam results and performance history
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                    <div className="relative w-full md:w-auto">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search exams..."
                        className="pl-8 w-full md:w-[300px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <Button
                        variant={filterStatus === "all" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterStatus("all")}
                      >
                        All
                      </Button>
                      <Button
                        variant={
                          filterStatus === "passed" ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setFilterStatus("passed")}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Passed
                      </Button>
                      <Button
                        variant={
                          filterStatus === "failed" ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setFilterStatus("failed")}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        Failed
                      </Button>
                      
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Exam Title</TableHead>
                          <TableHead className="text-center">Status</TableHead>
                          <TableHead className="text-right">Score</TableHead>
                          <TableHead className="text-right hidden md:table-cell">
                            Total
                          </TableHead>
                          <TableHead className="text-right">
                            Percentage
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-center">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredExams.length > 0 ? (
                          filteredExams.map((exam) => (
                            <TableRow key={exam.id} className="group">
                              <TableCell className="font-medium">
                                {exam.examTitle}
                              </TableCell>
                            
                              <TableCell className="text-center">
                                {getStatusBadge(exam.status)}
                              </TableCell>
                              <TableCell className="text-right">
                                {exam.status === "Not Attempted"
                                  ? "-"
                                  : exam.score}
                              </TableCell>
                              <TableCell className="text-right hidden md:table-cell">
                                {exam.total}
                              </TableCell>
                              <TableCell className="text-right">
                                {exam.status === "Not Attempted" ? (
                                  "-"
                                ) : (
                                  <div className="flex items-center justify-end">
                                    <span
                                      className={`font-medium ${
                                        (exam.score / exam.total) * 100 >= 70
                                          ? "text-green-600"
                                          : (exam.score / exam.total) * 100 >=
                                              50
                                            ? "text-amber-600"
                                            : "text-red-600"
                                      }`}
                                    >
                                      {Math.round(
                                        (exam.score / exam.total) * 100
                                      )}
                                      %
                                    </span>
                                    <div className="w-16 ml-2">
                                      <Progress
                                        value={(exam.score / exam.total) * 100}
                                        className="h-2"
                                        indicatorClassName={
                                          (exam.score / exam.total) * 100 >= 70
                                            ? "bg-green-600"
                                            : (exam.score / exam.total) * 100 >=
                                                50
                                              ? "bg-amber-600"
                                              : "bg-red-600"
                                        }
                                      />
                                    </div>
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {exam.status === "Not Attempted"
                                  ? "-"
                                  : new Date(
                                      exam.createdAt
                                    ).toLocaleDateString()}
                              </TableCell>
                              <TableCell>
                                <div className="flex justify-center">
                                  {exam.status === "Not Attempted" ? (
                                    <Button
                                      size="sm"
                                      variant="default"
                                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                                      onClick={() =>
                                        handleTakeExam(exam.questionSetId || "")
                                      }
                                    >
                                      Take Exam
                                    </Button>
                                  ) : exam.status === "Failed" &&
                                    exam.attempts < exam.maxAttempts ? (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleRetake(exam.id)}
                                      className="text-red-600 border-red-200 hover:bg-red-50"
                                    >
                                      <RefreshCw className="mr-1 h-3 w-3" />
                                      Retake
                                    </Button>
                                  ) : (
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="h-8 w-8 p-0"
                                        >
                                          <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end">
                                        <DropdownMenuItem
                                          onClick={() =>
                                            router.push(
                                              `/user/exams/${exam.id}/details`
                                            )
                                          }
                                        >
                                          View Details
                                        </DropdownMenuItem>
                                        {exam.status === "Passed" && (
                                          <DropdownMenuItem
                                            onClick={() =>
                                              router.push(
                                                `/user/exams/${exam.id}/certificate`
                                              )
                                            }
                                          >
                                            Download Certificate
                                          </DropdownMenuItem>
                                        )}
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={8} className="text-center py-6">
                              <div className="flex flex-col items-center justify-center">
                                <AlertCircle className="h-8 w-8 text-muted-foreground mb-2" />
                                <p className="text-muted-foreground">
                                  No exam results found
                                </p>
                                <Button
                                  variant="outline"
                                  className="mt-4"
                                  onClick={() => setActiveTab("question-sets")}
                                >
                                  Take an Exam
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-4 px-6 bg-gradient-to-r from-gray-50 to-slate-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Student Learning Portal</span>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {new Date().getFullYear()} Learning Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function LogOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
