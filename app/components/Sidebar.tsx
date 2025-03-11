"use client";

// components/Sidebar.tsx

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Users, Bell, UserRoundPlus, Rss } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-white  w-64 min-h-screen p-5 fixed top-0 left-0 border-2 shadow-md transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:relative`}
      >
        <h2 className="text-xl font-bold mb-5">Admin Panel</h2>
        <nav className="mt-16">
          <ul className="space-y-4">
            <li>
              <Link
                href="/admin"
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
              >
                <Home size={20} /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
              >
                <Users size={20} /> Users
              </Link>
            </li>
            <li>
              <Link
                href="/admin/register"
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
              >
                <UserRoundPlus size={20} /> Register
              </Link>
            </li>
            <li>
              <Link
                href="/admin/notification"
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
              >
                <Bell size={20} /> Notification
              </Link>
            </li>
            <li>
              <Link
                href="/admin/blogs"
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
              >
                <Rss size={20} /> Blog Management
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
