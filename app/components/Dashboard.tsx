"use client";

import React, { useState } from "react";
import { FileText, HelpCircle, ArrowDown, MoreHorizontal } from "lucide-react";

const AdminDashboard = () => {
  // Demo data - you would replace this with dynamic data from your backend
  const [activeTab, setActiveTab] = useState("This quarter");
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
    <div className="flex-1 overflow-auto">
      {/* Tab navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex justify-between items-center px-4">
          <div className="flex">
            {["This quarter", "This year", "Last year"].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-4 font-medium text-sm ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="text-sm text-gray-700 font-medium flex items-center">
            <FileText className="w-4 h-4 mr-1" />
            Export as PDF
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Total Users</span>
            <button className="text-gray-400">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="text-3xl font-bold">1550</div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Active users</span>
            <button className="text-gray-400">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="text-3xl font-bold">{stats.activeUsers}</div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Muck Test</span>
            <button className="text-gray-400">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="text-3xl font-bold">{stats.scoresCreated}</div>
        </div>

        {/* <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">18 New assignments</span>
            <button className="text-gray-400">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="text-xs text-gray-500 mb-2">Last 7 days</div>
          <div className="space-y-2">
            {stats.newAssignments.breakdown.map((item) => (
              <div key={item.name} className="flex items-center">
                <div className="w-full h-2 rounded-full bg-gray-200 mr-2">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{
                      width: `${
                        (item.value / stats.newAssignments.total) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between w-full">
                  <span className="text-xs">{item.name}</span>
                  <span className="text-xs">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">
              Muck Test success Rate
            </span>
            <button className="text-gray-400">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="text-xs text-gray-500 mb-2">Last 7 days</div>
          <div className="flex justify-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
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
                  stroke="#10b981"
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
                <span className="text-2xl font-bold">
                  {stats.assignmentSuccess}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow h-52 overflow-hidden overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Notification</span>
            <button className="text-gray-400">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div>
            <ul>
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
              <li>Notification 4</li>
              <li>Notification 5</li>
              <li>Notification 5</li>
              <li>Notification 5</li>
              <li>Notification 5</li>
              <li>Notification 5</li>
              <li>Notification 5</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Licenses </span>
            <button className="text-gray-400">
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="text-3xl font-bold">{stats.scoresCreated}</div>
        </div>
      </div>

      {/* Licenses breakdown */}
      <div className="p-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Licenses breakdown</h2>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm w-64"
              />
            </div>
            <button className="text-sm text-gray-700 font-medium flex items-center px-3 py-2 border border-gray-300 rounded">
              <FileText className="w-4 h-4 mr-1" />
              Export as CSV
            </button>
          </div>
        </div>

        <div className="bg-white rounded shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
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
                  Students Id
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
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {teacher.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {teacher.classes}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {teacher.students}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {teacher.seatsTaken}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
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
