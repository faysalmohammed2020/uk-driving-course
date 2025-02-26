import { FC } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

const CoursePage: FC = () => {
  return (
    <div className="bg-[#002b46] text-white min-h-screen">
      <main className="max-w-6xl mx-auto p-6">
        <section className="text-center my-12">
          <h2 className="text-4xl font-bold mb-4">SERU Assessment Online Course</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["24/7 Online Course Access", "All TfL SERU Handbook Sections Covered", "Repeat as Many Times as You Want", "Multichoice and Sentence Completion Questions", "Drag and Drop Sentence Completion", "Three Timed Mock Tests", "4 Weeks of Unlimited Access", "10 Hours of Interactive Learning"].map((feature, index) => (
              <Card key={index} className="p-4 bg-white text-black shadow-lg">
                <CardContent className="text-center font-semibold">{feature}</CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6">This course includes over 500 SERU assessment questions including MultiChoice, Drag & Drop, and reading & understanding exercises.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 px-6 py-3">Pay Now £39.99</Button>
            <Button variant="outline" className="px-6 py-3">Try Free</Button>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold text-center mb-6">WHAT'S INCLUDED?</h2>
          <ul className="list-disc text-lg space-y-2 pl-6">
            <li>Over 500 real exam questions</li>
            <li>Learning materials & Mock Tests</li>
            <li>All sections covered</li>
            <li>Available on all platforms - Mobile Phones, PCs, Tablets</li>
            <li>24/7 access</li>
            <li>Learn at your own pace</li>
            <li>Continue the course from where you left off</li>
            <li>Practice questions with interactive answer hints</li>
            <li>10+ Hours of comprehensive learning</li>
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold text-center mb-6">LEARN WHILE YOU WORK!</h2>
          <p className="text-center">Our platform is perfect for all drivers - no need to take days off or attend classes. Simply buy one of our courses and learn whenever you like!</p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold text-center mb-6">WHY CHOOSE US?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white text-black shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p>Courses created by ex-TfL assessors with 7+ years of experience.</p>
            </div>
            <div className="p-6 bg-white text-black shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
              <p>Study at your own pace with 24/7 access to our resources.</p>
            </div>
          </div>
        </section>

        <section className="my-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">WATCH OUR INTERACTIVE COURSE OVERVIEW VIDEO BELOW!</h2>
          <div className="relative w-full max-w-3xl mx-auto">
            <video className="w-full rounded-lg shadow-lg" controls>
              <source src="/course-overview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CoursePage;
