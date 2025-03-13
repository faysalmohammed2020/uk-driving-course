// components/UserSidebar.tsx

"use client";

import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  BookDown,
  FileText,
  Users,
  MessageSquare,
} from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useSession } from "@/lib/auth-client";

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const session = useSession();

  const sidebarLinks = [
    { href: "/user", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { href: "/user/courses", label: "Courses", icon: <BookOpen size={20} /> },
    { href: "/user/exams", label: "Mock Test", icon: <FileText size={20} /> },
    { href: "/user/result", label: "Result", icon: <BookDown size={20} /> },
    {
      href: "/user/notification",
      label: "Notification",
      icon: <MessageSquare size={20} />,
    },
  ];

  return (
    <div className="flex">
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-[#0D1B2A] w-64 min-h-screen p-5 fixed top-0 left-0 shadow-md transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:relative`}
      >
        <h2 className="text-xl text-white font-bold">
          {session.data?.user?.name}
        </h2>
        <nav className="mt-16">
          <ul className="space-y-4">
            {sidebarLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 p-2 rounded transition duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white font-semibold shadow-lg"
                        : "hover:bg-blue-200 text-white"
                    }`}
                  >
                    {item.icon} {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default UserSidebar;
