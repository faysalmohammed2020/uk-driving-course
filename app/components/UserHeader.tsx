"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";

const UserHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const session = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    setDropdownOpen(false); // Close dropdown before signing out

    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.replace("/");
          router.refresh();
        },
      },
    });
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-lg font-bold">Student Dashboard</h1>
      <div className="relative">
        <button
          className="flex items-center gap-2 p-2 border rounded-lg"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <User size={20} />
          <span>{session.data?.user?.name || "User"}</span>
          <ChevronDown size={20} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 border shadow-lg rounded-lg bg-white">
            <button className="flex w-full px-4 py-2 hover:bg-gray-100">
              <User size={18} className="mr-2" /> Profile
            </button>
            <button
              className="flex w-full px-4 py-2 hover:bg-gray-100"
              onClick={handleSignOut}
            >
              <LogOut size={18} className="mr-2" /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default UserHeader;
