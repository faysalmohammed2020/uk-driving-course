// "use client";

// import { useState } from "react";
// import { ChevronDown, LogOut, User } from "lucide-react";
// import { useSession, signOut } from "@/lib/auth-client";
// import { Link } from "@/i18n/navigation"; // Import Link from the appropriate module

// const Header = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const session = useSession();

//   const handleLogout = () => {
//     signOut({
//       fetchOptions: {
//         onSuccess: () => {
//           window.location.href = "/"; // Redirect to home page on logout
//         },
//       },
//     });
//   };

//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center z-50">
//       <h1 className="text-lg font-bold">
//         {session.data?.user?.role === "student"
//           ? "Student Dashboard"
//           : "Admin Dashboard"}
//       </h1>
//       <div className="relative">
//         <button
//           className="flex items-center gap-2 p-2 border rounded-lg"
//           onClick={() => setDropdownOpen(!dropdownOpen)}
//         >
//           <User size={20} />
//           <span className="font-bold">{session.data?.user?.name}</span>
//           <span>({session.data?.user?.role})</span>
//           <ChevronDown size={20} />
//         </button>

//         {dropdownOpen && (
//           <div className="absolute right-0 mt-2 w-48  border shadow-lg rounded-lg">
//             {/* Use Link to navigate to the profile page */}
//             <Link href="/user/profile">
//               <button className="flex w-full px-4 py-2 hover:bg-gray-100">
//                 <User size={18} /> Profile
//               </button>
//             </Link>
//             <button
//               className="flex w-full px-4 py-2 hover:bg-gray-100"
//               onClick={handleLogout}
//             >
//               <LogOut size={18} /> Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;








"use client";

import { useState } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";
import { Link } from "@/i18n/navigation";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const session = useSession();

  const handleLogout = () => {
    signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  return (
    <header className="bg-gradient-to-r from-[#344d68] to-[#0b2f55] shadow-md px-4 py-5 flex justify-between items-center z-50 border-b">
      <h1 className="text-xl font-semibold text-white drop-shadow-md">
        {session.data?.user?.role === "student" ? "Student Dashboard" : "Admin Dashboard"}
      </h1>
      <div className="relative">
        <button
          className="flex items-center gap-2 px-4 py-2 border border-transparent rounded-lg bg-white text-gray-800 shadow-md hover:bg-gray-100 transition-all"
          onClick={() => setDropdownOpen((prev) => !prev)}
          aria-expanded={dropdownOpen}
        >
          <User size={20} className="text-blue-600" />
          <span className="font-medium text-gray-800">{session.data?.user?.name}</span>
          <span className="text-gray-500">({session.data?.user?.role})</span>
          <ChevronDown size={20} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-fade-in">
            <Link href="/user/profile">
              <button className="flex w-full items-center gap-2 px-4 py-3 text-gray-700 hover:bg-blue-100 transition">
                <User size={18} className="text-blue-600" /> Profile
              </button>
            </Link>
            <button
              className="flex w-full items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-100 transition"
              onClick={handleLogout}
            >
              <LogOut size={18} className="text-red-600" /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;