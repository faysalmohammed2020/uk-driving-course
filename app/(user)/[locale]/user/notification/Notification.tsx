"use client";
import { useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaClock } from "react-icons/fa";

// Mock Data for Course Purchase Notifications
const notifications = [
  {
    id: 1,
    course: "SERU Assessment Course - 4",
    status: "Success",
    message: "Your SERU Assessment Course - 4 has been successfully purchased.",
  },
  {
    id: 2,
    course: "TfL SERU Online Course",
    status: "Pending",
    message: "Your TfL SERU Online Course purchase is pending confirmation.",
  },
  {
    id: 3,
    course: "SERU Online License Course",
    status: "Failed",
    message:
      "Your SERU Online License course purchase has failed due to payment issues.",
  },
];

const NotificationList = () => {
  const [showNotifications, setShowNotifications] = useState(true);

  // Check if there are no notifications or notifications are hidden
  const noNotifications = notifications.length === 0 || !showNotifications;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          Course Purchase Notifications
        </h3>
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="text-blue-500 hover:text-blue-700"
        >
          {showNotifications ? "Hide Notifications" : "Show Notifications"}
        </button>
      </div>

      {/* Show "No Notifications Found" if there are no notifications or the list is hidden */}
      {noNotifications ? (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mt-10">No notification Found.</h2>
          <img src="/images/noResultFound.png" alt="No exam results found" />
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-lg border-l-4 ${
                notification.status === "Success"
                  ? "border-green-500 bg-green-50"
                  : notification.status === "Pending"
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-red-500 bg-red-50"
              } flex items-start`}
            >
              {/* Status Icon */}
              <div className="text-3xl mr-4">
                {notification.status === "Success" && (
                  <FaCheckCircle className="text-green-500" />
                )}
                {notification.status === "Pending" && (
                  <FaClock className="text-yellow-500" />
                )}
                {notification.status === "Failed" && (
                  <FaExclamationCircle className="text-red-500" />
                )}
              </div>

              {/* Notification Message */}
              <div className="flex flex-col">
                <p className="font-semibold text-lg text-gray-800">
                  {notification.course}
                </p>
                <p className="text-sm text-gray-600">{notification.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationList;
