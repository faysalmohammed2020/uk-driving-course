"use client";

// components/Sidebar.tsx

import { useState } from "react";
import { Menu, X, Home, Users, Bell, UserRoundPlus, Rss } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useSession } from "@/lib/auth-client";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("sidebar");
  const session = useSession();
  const userRole = session.data?.user?.role;

  const sidebarLinks = [
    { href: "/admin", label: t("Dashboard"), icon: <Home size={20} /> },
    { href: "/admin/users", label: t("Users"), icon: <Users size={20} /> },
    {
      href: "/admin/register",
      label: t("Register"),
      icon: <UserRoundPlus size={20} />,
    },
    {
      href: "/admin/notification",
      label: t("Notification"),
      icon: <Bell size={20} />,
    },
    {
      href: "/admin/blogs",
      label: t("BlogManagement"),
      icon: <Rss size={20} />,
    },
  ];

  return (
    <div className="flex">
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-[#0d1b2a] w-64 min-h-screen p-5 fixed top-0 left-0 shadow-md transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:relative`}
      >
        <div>
          <h2 className="text-xl text-white font-bold">
            {session.data?.user?.name}
          </h2>
          <p className="text-xl text-white mb-5">{session.data?.user?.role}</p>
        </div>

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
                        ? "bg-[#4F46E5] text-white font-semibold shadow-lg"
                        : "hover:bg-[#86a2fc] text-white"
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

export default Sidebar;
