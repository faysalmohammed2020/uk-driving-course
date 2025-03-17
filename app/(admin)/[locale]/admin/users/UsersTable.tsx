// "use client";
// import React, { useState, useEffect } from "react";
// import { User } from "@/types";

// const UserTable: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filter, setFilter] = useState<"All" | "Admin" | "User" | "Moderator">(
//     "All"
//   );

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("/api/users");
//         const data = await response.json();

//         if (Array.isArray(data)) {
//           setUsers(data); // ✅ Only set users if it's an array
//         } else {
//           console.error("Invalid API response:", data);
//           setUsers([]); // Prevents breaking UI
//         }
//       } catch (error) {
//         console.error("Failed to fetch users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const filteredUsers = Array.isArray(users)
//     ? filter === "All"
//       ? users
//       : users.filter((user) => user.role === filter)
//     : [];
//   console.log("Filtered :", filteredUsers);

//   return (
//     <div className="max-w-7xl p-8 bg-white shadow-lg rounded-lg  mx-auto">
//       {/* Filter Dropdown */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">User List</h2>
//         <select
//           value={filter}
//           onChange={(e) =>
//             setFilter(e.target.value as "All" | "Admin" | "User" | "Moderator")
//           }
//           className="border border-gray-300 rounded-lg px-3 py-2"
//         >
//           <option value="All">All</option>
//           <option value="Admin">Admin</option>
//           <option value="Moderator">Moderator</option>
//           <option value="User">User</option>
//         </select>
//       </div>

//       {/* User Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-200 rounded-lg shadow-md">
//           <thead>
//             <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.length > 0 ? (
//               filteredUsers.map((user) => (
//                 <tr key={user.id} className="border-b hover:bg-gray-100">
//                   <td className="p-3">{user.name}</td>
//                   <td className="p-3">{user.email}</td>
//                   <td
//                     className={`p-3 font-semibold ${getRoleStyle(user.role)}`}
//                   >
//                     {user.role}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="p-4 text-center text-gray-500">
//                   No users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // Function to style roles
// const getRoleStyle = (role: string) => {
//   switch (role) {
//     case "admin":
//       return "text-red-500";
//     case "student":
//       return "text-green-500";
//     case "User":
//       return "text-green-500";
//     default:
//       return "text-gray-700";
//   }
// };

// export default UserTable;

"use client";
import React, { useState, useEffect } from "react";
import { User } from "@/types";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState<"All" | "Student" | "Admin">("All");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();

        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Invalid API response:", data);
          setUsers([]);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on the selected role
  const filteredUsers = users.filter((user) => {
    if (filter === "All") return true;
    return user.role.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="max-w-7xl p-8 bg-white shadow-lg rounded-lg mx-auto">
      {/* Filter Section */}
      <div className="flex flex-wrap items-center justify-between mb-4 gap-3">
        <h2 className="text-xl font-semibold text-gray-800">User List</h2>

        {/* Filter Buttons */}
        <div className="flex space-x-2">
          {["All", "Student", "Admin"].map((role) => (
            <button
              key={role}
              onClick={() => setFilter(role as "All" | "Student" | "Admin")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === role
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className={`p-3 font-semibold ${getRoleStyle(user.role)}`}>
                    {user.role}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Function to style roles
const getRoleStyle = (role: string) => {
  switch (role.toLowerCase()) {
    case "admin":
      return "text-red-500";
    case "student":
      return "text-green-500";
    default:
      return "text-gray-700";
  }
};

export default UserTable;
