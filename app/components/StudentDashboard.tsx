import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { FaBook, FaChartLine } from "react-icons/fa";
import { Link } from "@/i18n/navigation";

export default function StudentDashboard() {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 flex items-center">
              <FaChartLine className="text-3xl text-blue-500 mr-4" />
              <div>
                <p className="text-gray-600">Running Course</p>
                <p className="text-xl font-bold">65/100</p>
                <Progress value={65} className="mt-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
              <FaBook className="text-3xl text-green-500 mr-4" />
              <div>
                <p className="text-gray-600">Completed</p>
                <p className="text-xl font-bold">75/75</p>
                <Progress value={100} className="mt-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        <section>
          <h3 className="text-lg font-semibold mb-3">My Courses</h3>
          <Card className="mb-4">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">Video Editing</p>
                <p className="text-sm text-gray-500">
                  Introduction to video editing
                </p>
              </div>
              <Button>View</Button>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">3D Rendering</p>
                <p className="text-sm text-gray-500">
                  Popular 3D Design course
                </p>
              </div>
              <Button>View</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
