"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Import usePathname
import { Menu, X, Home, Users, Bell, UserRoundPlus, Rss } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get the current route

  return (
    <div className="flex">
      {/* Mobile Toggle Button */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-white w-64 min-h-screen p-5 fixed top-0 left-0 border-2 shadow-md transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:relative`}
      >
        <h2 className="text-xl font-bold mb-5">Admin Panel</h2>
        <nav className="mt-16">
          <ul className="space-y-4">
<<<<<<< HEAD
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
=======
            {[
              { href: "/admin", label: "Dashboard", icon: <Home size={20} /> },
              {
                href: "/admin/users",
                label: "Users",
                icon: <Users size={20} />,
              },
              {
                href: "/admin/register",
                label: "Register",
                icon: <UserRoundPlus size={20} />,
              },
              {
                href: "/admin/notification",
                label: "Notification",
                icon: <Bell size={20} />,
              },
              {
                href: "/admin/blog",
                label: "Blog Management",
                icon: <Rss size={20} />,
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 p-2 rounded transition duration-300 ${
                    pathname === item.href
                      ? "bg-[#6366F1] text-white font-semibold shadow-lg" // ✅ Active color
                      : "hover:bg-[#D1D3FE] text-gray-700"
                  }`}
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
>>>>>>> estiak
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
