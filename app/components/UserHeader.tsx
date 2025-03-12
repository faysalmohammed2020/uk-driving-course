// components/UserHeader.tsx

"use client";

import { useState } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";

const UserHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-lg font-bold">Student Dashboard</h1>
      <div className="relative">
        <button
          className="flex items-center gap-2 p-2 border rounded-lg"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <User size={20} />
          <span>Student</span>
          <ChevronDown size={20} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 border shadow-lg rounded-lg bg-white">
            <button className="flex w-full px-4 py-2 hover:bg-gray-100">
              <User size={18} /> Profile
            </button>
            <button className="flex w-full px-4 py-2 hover:bg-gray-100">
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default UserHeader;