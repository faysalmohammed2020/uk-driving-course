"use client";

import { useState } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";
import { Link } from "@/i18n/navigation"; // Import Link from the appropriate module

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const session = useSession();

  const handleLogout = () => {
    signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/"; // Redirect to home page on logout
        },
      },
    });
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-lg font-bold">
        {session.data?.user?.role === "student"
          ? "Student Dashboard"
          : "Admin Dashboard"}
      </h1>
      <div className="relative">
        <button
          className="flex items-center gap-2 p-2 border rounded-lg"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <User size={20} />
          <span className="font-bold">{session.data?.user?.name}</span>
          <span>({session.data?.user?.role})</span>
          <ChevronDown size={20} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48  border shadow-lg rounded-lg">
            {/* Use Link to navigate to the profile page */}
            <Link href="/user/profile">
              <button className="flex w-full px-4 py-2 hover:bg-gray-100">
                <User size={18} /> Profile
              </button>
            </Link>
            <button
              className="flex w-full px-4 py-2 hover:bg-gray-100"
              onClick={handleLogout}
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
