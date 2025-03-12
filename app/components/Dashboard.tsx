"use client";

import React, { useState } from "react";
import { FileText, HelpCircle, ArrowDown, MoreHorizontal } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface userData {
  id: string;
  email: string;
  name?: string;
  role?: string;
  password?: string;
  phone?: string;
  image?: string;
  emailVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface blogData {
  id: number;
  post_author?: number;
  tags?: string;
  name?: string;
  category?: string;
  post_date?: Date;
  post_date_gmt?: Date;
  post_content?: any;
  post_title: string;
  post_excerpt?: string;
  post_status?: string;
  comment_status?: string;
  ping_status?: string;
  post_password?: string;
  post_name: string;
  to_ping?: string;
  pinged?: string;
  post_modified?: Date;
  post_modified_gmt?: Date;
  post_content_filtered?: string;
  post_parent?: number;
  guid?: string;
  menu_order?: number;
  post_type?: string;
  post_mime_type?: string;
  comment_count?: number;
  createdAt?: Date;
}

interface activeUser {
  id: string;
  expiresAt: Date;
  token: string;
  role?: string;
  createdAt: Date;
  updatedAt: Date;
  ipAddress?: string;
  userAgent?: string;
  userId: string;
}

interface ComponentProps {
  blogData: blogData[];
  userData: userData[];
  activeUser: activeUser[];
}

const AdminDashboard = ({ blogData, userData, activeUser }: ComponentProps) => {
  const [activeTab, setActiveTab] = useState("Today");

  const [teachers] = useState([
    {
      id: 1,
      name: "Beyona Miles",
      email: "beyona-miles@esm-school.edu",
      lastActivity: "Today",
      classes: 2,
      students: 40,
      seatsTaken: 40,
    },
    {
      id: 2,
      name: "Bessie Cooper",
      email: "bessie-cooper@esm-school.edu",
      lastActivity: "Today",
      classes: 3,
      students: 60,
      seatsTaken: 60,
    },
    {
      id: 3,
      name: "Darrell Steward",
      email: "darrell-steward@esm-school.edu",
      lastActivity: "Today",
      classes: 2,
      students: 40,
      seatsTaken: 40,
    },
    {
      id: 4,
      name: "Wade Warren",
      email: "wade-warren@esm-school.edu",
      lastActivity: "Today",
      classes: 2,
      students: 40,
      seatsTaken: 40,
    },
    {
      id: 5,
      name: "Jenny Wilson",
      email: "jenny-wilson@esm-school.edu",
      lastActivity: "Today",
      classes: 2,
      students: 40,
      seatsTaken: 40,
    },
  ]);

  // Stats data for the cards
  const stats = {
    activeUsers: 34,
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
  };

  return (
    <div className="flex-1 overflow-auto ">
      {/* Tab navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex justify-between items-center px-4">
          <div className="flex">
            {["Today", "This Month", "This year"].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-4 font-medium text-sm ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50"
                    : "text-gray-500 hover:bg-blue-50"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="text-sm text-gray-700 font-medium flex items-center hover:bg-gray-50 px-3 py-2 rounded-md transition duration-200">
            <FileText className="w-4 h-4 mr-1" />
            Export as PDF
          </button>
        </div>
      </div>

      {/* Stats cards */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        <Link href="/admin/users">
          <div className="h-52 bg-gradient-to-br from-[#ddf8fa] to-[#5bf5fd] p-5 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">
                Total Users
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
            <div className="text-3xl font-bold text-gray-800">
              {userData.length}
            </div>
          </div>
        </Link>

        <div className="bg-gradient-to-br from-[#FCF3FB] to-[#fa93ee] p-5 rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600 font-medium">
              Active users
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="text-3xl font-bold text-gray-800">
            {activeUser.length}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F0FDF8] to-[#8dffd3] p-5 rounded-lg shadow-sm border border-green-100 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600 font-medium">Muck Test</span>
            <button className="text-gray-400 hover:text-gray-600">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="text-3xl font-bold text-gray-800">
            {stats.scoresCreated}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#e4e1ff] to-[#73c4fa] p-5 rounded-lg shadow-sm border border-amber-100 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600 font-medium">
              Muck Test Success Rate
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="text-xs text-gray-500 mb-2">Last 7 days</div>
          <div className="flex justify-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <linearGradient
                    id="successGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#successGradient)"
                  strokeWidth="10"
                  strokeDasharray={2 * Math.PI * 40}
                  strokeDashoffset={
                    2 * Math.PI * 40 * (1 - stats.assignmentSuccess / 100)
                  }
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">
                  {stats.assignmentSuccess}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <Link href="/admin/notification">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-700 p-5 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition duration-300 h-52 overflow-hidden overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">
                Notification
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
                  Notification 1
                </li>
                <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
                  Notification 2
                </li>
                <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
                  Notification 3
                </li>
                <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
                  Notification 4
                </li>
                <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
                  Notification 5
                </li>
                <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
                  Notification 6
                </li>
                <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
                  Notification 7
                </li>
                <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
                  Notification 8
                </li>
                <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
                  Notification 9
                </li>
                <li className="py-1 px-2 rounded hover:bg-white hover:shadow-sm transition duration-200">
                  Notification 10
                </li>
              </ul>
            </div>
          </div>
        </Link>

        <div className="bg-gradient-to-br from-rose-50 to-red-500 p-5 rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600 font-medium">Licenses</span>
            <button className="text-gray-400 hover:text-gray-600">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="text-3xl font-bold text-gray-800">
            {stats.scoresCreated}
          </div>
        </div>

        <Link href="/admin/blogs">
          <div className="h-52 bg-gradient-to-br from-[#c2e6ff] to-[#29daa5] p-5 rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition duration-300 cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">
                Total Blog
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
            <div className="text-3xl font-bold text-gray-800">
              {blogData.length}
            </div>
          </div>
        </Link>
      </div>

      {/* Licenses breakdown */}
      <div className="p-6">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">
            Licenses Collected
          </h2>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="pl-4 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-200"
              />
            </div>
            <button className="text-sm text-gray-700 font-medium flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 shadow-sm transition duration-200">
              <FileText className="w-4 h-4 mr-1" />
              Export as CSV
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center"
                >
                  Name
                  <ArrowDown className="w-3 h-3 ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Student ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Course
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Package Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Activity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teachers.map((teacher, index) => (
                <tr
                  key={teacher.id}
                  className={
                    index % 2 === 0
                      ? "bg-gradient-to-r from-white to-blue-50"
                      : "bg-white hover:bg-gray-50"
                  }
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {teacher.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {teacher.classes}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {teacher.students}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {teacher.seatsTaken}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {teacher.lastActivity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
