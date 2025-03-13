"use client";

const courses = [
  { title: "SERU Assessment Course - 4 Weeks Unlimited Access ", description: "All TfL Seru handbook sections covered", completed: true },
  { title: "TfL SERU Online Course", description: "1 Mock Test Included 400 Questions & Answers Updated March 2025", completed: true },
  { title: "Topographical Course", description: "3 Mock Test Included 30 Route Planning Practice A-Z Book Question & Answers", completed: true },
  { title: "Full TfL PCO Package", description: "SERU Online Course Full Topographical Package Mock Tests Included", completed: false },
  { title: "TfL SERU Mock Test Pack", description: "3 x Mock Tests (1 2 3) | Real Assessment Questions 4 Attempts | 10 day Access", completed: false },
  { title: "TfL SERU Mock Test Pack 2", description: "3 x Mock Tests (4 5 6) | Real Assessment Questions 4 Attempts | 10 day Access", completed: false },
];

const CoursesCard = () => {
  const handleUpgradeClick = async () => {
    try {
      const response = await fetch('/api/emails', {
        method: "POST",
        body: JSON.stringify({
          email: "faysalmohammed.shah@gmail.com",
          name: "User",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Course Buying Successfull.");
      } else {
        alert("Course Buying Successfull. Check Your Email");
      }
    } catch (error) {
      console.error("Error buying Course:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {courses.map((course, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 border">
          <h3 className="text-lg font-bold mb-2">{course.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{course.description}</p>
          <button
            onClick={course.completed ? undefined : handleUpgradeClick}
            className={`w-full py-2 rounded-md text-white ${
              course.completed ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {course.completed ? "Complete Course" : "Upgrade to Pro"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CoursesCard;
