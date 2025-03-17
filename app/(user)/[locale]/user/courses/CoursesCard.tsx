// "use client";

// const courses = [
//   { title: "SERU Assessment Course - 4 Weeks Unlimited Access ", description: "All TfL Seru handbook sections covered", completed: true },
//   { title: "TfL SERU Online Course", description: "1 Mock Test Included 400 Questions & Answers Updated March 2025", completed: true },
//   { title: "Topographical Course", description: "3 Mock Test Included 30 Route Planning Practice A-Z Book Question & Answers", completed: true },
//   { title: "Full TfL PCO Package", description: "SERU Online Course Full Topographical Package Mock Tests Included", completed: false },
//   { title: "TfL SERU Mock Test Pack", description: "3 x Mock Tests (1 2 3) | Real Assessment Questions 4 Attempts | 10 day Access", completed: false },
//   { title: "TfL SERU Mock Test Pack 2", description: "3 x Mock Tests (4 5 6) | Real Assessment Questions 4 Attempts | 10 day Access", completed: false },
// ];

// const CoursesCard = () => {
//   const handleUpgradeClick = async () => {
//     try {
//       const response = await fetch('/api/emails', {
//         method: "POST",
//         body: JSON.stringify({
//           email: "faysalmohammed.shah@gmail.com",
//           name: "User",
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         console.log("Course Buying Successfull.");
//       } else {
//         alert("Course Buying Successfull. Check Your Email");
//       }
//     } catch (error) {
//       console.error("Error buying Course:", error);
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {courses.map((course, index) => (
//         <div key={index} className="bg-white shadow-md rounded-lg p-4 border">
//           <h3 className="text-lg font-bold mb-2">{course.title}</h3>
//           <p className="text-sm text-gray-600 mb-4">{course.description}</p>
//           <button
//             onClick={course.completed ? undefined : handleUpgradeClick}
//             className={`w-full py-2 rounded-md text-white ${
//               course.completed ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {course.completed ? "Complete Course" : "Upgrade to Pro"}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CoursesCard;










































"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog"
import { Award, Badge, BookOpen, CheckCircle, Clock } from "lucide-react"
import { Progress } from "@/app/components/ui/progress"

// Enhanced courses data with more details
const courses = [
  {
    id: "seru-assessment",
    title: "SERU Assessment Course - 4 Weeks Unlimited Access",
    description: "All TfL Seru handbook sections covered",
    price: 49.99,
    duration: "4 weeks",
    lessons: 24,
    completed: true,
    progress: 100,
    features: ["Unlimited access for 4 weeks", "All handbook sections", "Practice tests", "Mobile access"],
    icon: Award,
  },
  {
    id: "tfl-seru-online",
    title: "TfL SERU Online Course",
    description: "1 Mock Test Included 400 Questions & Answers Updated March 2025",
    price: 39.99,
    duration: "3 weeks",
    lessons: 18,
    completed: true,
    progress: 100,
    features: ["1 Mock Test", "400 Q&A", "Updated March 2025", "Certificate on completion"],
    icon: BookOpen,
  },
  {
    id: "topographical",
    title: "Topographical Course",
    description: "3 Mock Test Included 30 Route Planning Practice A-Z Book Question & Answers",
    price: 44.99,
    duration: "3 weeks",
    lessons: 15,
    completed: true,
    progress: 100,
    features: ["3 Mock Tests", "30 Route Planning Practice", "A-Z Book Q&A", "Expert support"],
    icon: CheckCircle,
  },
  {
    id: "full-package",
    title: "Full TfL PCO Package",
    description: "SERU Online Course Full Topographical Package Mock Tests Included",
    price: 99.99,
    duration: "8 weeks",
    lessons: 42,
    completed: false,
    progress: 0,
    features: ["Complete SERU course", "Full Topographical package", "All mock tests", "Priority support"],
    icon: Award,
  },
  {
    id: "mock-test-pack-1",
    title: "TfL SERU Mock Test Pack",
    description: "3 x Mock Tests (1 2 3) | Real Assessment Questions 4 Attempts | 10 day Access",
    price: 29.99,
    duration: "10 days",
    lessons: 3,
    completed: false,
    progress: 0,
    features: ["3 Mock Tests", "Real Assessment Questions", "4 Attempts", "10-day Access"],
    icon: Clock,
  },
  {
    id: "mock-test-pack-2",
    title: "TfL SERU Mock Test Pack 2",
    description: "3 x Mock Tests (4 5 6) | Real Assessment Questions 4 Attempts | 10 day Access",
    price: 29.99,
    duration: "10 days",
    lessons: 3,
    completed: false,
    progress: 0,
    features: ["3 Mock Tests (4, 5, 6)", "Real Assessment Questions", "4 Attempts", "10-day Access"],
    icon: Clock,
  },
]

const CourseDetailsDialog = ({ course, isOpen, onClose, onEnroll, isProcessing }) => {
  const Icon = course.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge className={course.completed ? "bg-green-500" : "bg-blue-500"}>
              {course.completed ? "Completed" : "Available"}
            </Badge>
            <span className="text-lg font-semibold">£{course.price}</span>
          </div>
          <DialogTitle className="text-xl">{course.title}</DialogTitle>
          <DialogDescription>{course.description}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-muted-foreground" />
              <span>Certificate included</span>
            </div>
          </div>

          {course.completed && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Course Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-3" />
            </div>
          )}

          <div>
            <h4 className="font-medium mb-2">What's included:</h4>
            <ul className="grid gap-2">
              {course.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={() => onEnroll(course.id)}
            disabled={isProcessing || course.completed}
            className={course.completed ? "bg-green-500 hover:bg-green-600" : ""}
          >
            {isProcessing ? "Processing..." : course.completed ? "View Certificate" : "Upgrade to Pro"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const CoursesCard = () => {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")

  const handleCourseClick = (course) => {
    setSelectedCourse(course)
    setIsDialogOpen(true)
  }

  const handleUpgradeClick = async (courseId) => {
    setIsProcessing(true)

    try {
      // Get user email - in a real app this would come from authentication
      const userEmail = localStorage.getItem("userEmail") || "faysalmohammed.shah@gmail.com"
      const userName = localStorage.getItem("userName") || "User"

      const response = await fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify({
          email: userEmail,
          name: userName,
          courseId: courseId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        // Show success message
        alert("Course purchase successful! Check your email for details.")
        setIsDialogOpen(false)
      } else {
        const data = await response.json()
        alert(data.message || "Failed to purchase course. Please try again.")
      }
    } catch (error) {
      console.error("Error buying Course:", error)
      alert("An error occurred. Please try again later.")
    } finally {
      setIsProcessing(false)
    }
  }

  // Filter courses based on search term and filter
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())

    if (filter === "all") return matchesSearch
    if (filter === "completed") return matchesSearch && course.completed
    if (filter === "available") return matchesSearch && !course.completed

    return matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Search and filter */}
      <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
        <input
          type="text"
          placeholder="Search courses..."
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="flex h-10 w-full sm:w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Courses</option>
          <option value="completed">Completed</option>
          <option value="available">Available</option>
        </select>
      </div>

      {/* Course grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredCourses.map((course, index) => {
          const Icon = course.icon

          return (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge className={course.completed ? "bg-green-500" : "bg-blue-500"}>
                      {course.completed ? "Completed" : "Available"}
                    </Badge>
                  </div>
                  <div className="font-bold text-lg">£{course.price}</div>
                </div>
                <CardTitle className="mt-2 line-clamp-2">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>

                {course.completed && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleCourseClick(course)}
                  variant={course.completed ? "outline" : "default"}
                  className={`w-full ${course.completed ? "border-green-500 text-green-600 hover:bg-green-50" : ""}`}
                >
                  {course.completed ? "View Certificate" : "Upgrade to Pro"}
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Course details dialog */}
      {selectedCourse && (
        <CourseDetailsDialog
          course={selectedCourse}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onEnroll={handleUpgradeClick}
          isProcessing={isProcessing}
        />
      )}
    </div>
  )
}

export default CoursesCard

