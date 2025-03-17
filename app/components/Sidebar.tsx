"use client";

// components/Sidebar.tsx

import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Users,
  Bell,
  UserRoundPlus,
  Rss,
  BookOpenCheck,
} from "lucide-react";
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
    {
      href: "/admin/mocktest",
      label: t("mocktest"),
      icon: <BookOpenCheck size={20} />,
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

















// "use client";

// import { useState, useEffect } from "react";
// import {
//   Menu,
//   X,
//   Home,
//   Users,
//   Bell,
//   UserRoundPlus,
//   Rss,
//   BookOpenCheck,
//   ChevronRight,
//   LogOut,
//   Settings,
//   ChevronDown,
// } from "lucide-react";
// import { Link, usePathname } from "@/i18n/navigation";
// import { useTranslations } from "next-intl";
// import { useSession } from "@/lib/auth-client";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "./ui/tooltip";
// import { Badge } from "./ui/badge";
// import { cn } from "@/lib/utils";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const pathname = usePathname();
//   const t = useTranslations("sidebar");
//   const session = useSession();
//   const userRole = session.data?.user?.role;
//   const userName = session.data?.user?.name || "Admin User";

//   // Close sidebar when clicking outside on mobile
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const sidebar = document.getElementById("sidebar");
//       const toggleButton = document.getElementById("sidebar-toggle");

//       if (
//         isOpen &&
//         sidebar &&
//         !sidebar.contains(event.target as Node) &&
//         toggleButton &&
//         !toggleButton.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   // Close sidebar when route changes on mobile
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   const mainLinks = [
//     {
//       href: "/admin",
//       label: t("Dashboard"),
//       icon: <Home size={20} />,
//       notifications: 0,
//     },
//     {
//       href: "/admin/users",
//       label: t("Users"),
//       icon: <Users size={20} />,
//       notifications: 5,
//     },
//     {
//       href: "/admin/register",
//       label: t("Register"),
//       icon: <UserRoundPlus size={20} />,
//       notifications: 0,
//     },
//   ];

//   const contentLinks = [
//     {
//       href: "/admin/notification",
//       label: t("Notification"),
//       icon: <Bell size={20} />,
//       notifications: 3,
//     },
//     {
//       href: "/admin/blogs",
//       label: t("BlogManagement"),
//       icon: <Rss size={20} />,
//       notifications: 0,
//     },
//     {
//       href: "/admin/mocktest",
//       label: t("mocktest"),
//       icon: <BookOpenCheck size={20} />,
//       notifications: 0,
//     },
//   ];

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((part) => part[0])
//       .join("")
//       .toUpperCase()
//       .substring(0, 2);
//   };

//   const renderNavLink = (item: {
//     href: string;
//     label: string;
//     icon: JSX.Element;
//     notifications: number;
//   }) => {
//     const isActive = pathname === item.href;

//     return (
//       <li key={item.href}>
//         <TooltipProvider delayDuration={300}>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link
//                 href={item.href}
//                 className={cn(
//                   "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group relative",
//                   isActive
//                     ? "bg-primary text-primary-foreground font-medium"
//                     : "text-muted-foreground hover:bg-muted hover:text-foreground"
//                 )}
//               >
//                 <span
//                   className={cn(
//                     "transition-all duration-200",
//                     isActive
//                       ? "text-primary-foreground"
//                       : "text-muted-foreground group-hover:text-foreground"
//                   )}
//                 >
//                   {item.icon}
//                 </span>

//                 <span
//                   className={cn(
//                     "transition-opacity duration-200",
//                     isCollapsed
//                       ? "opacity-0 w-0 overflow-hidden"
//                       : "opacity-100"
//                   )}
//                 >
//                   {item.label}
//                 </span>

//                 {item.notifications > 0 && (
//                   <Badge
//                     className={cn(
//                       "ml-auto bg-destructive hover:bg-destructive text-destructive-foreground",
//                       isCollapsed ? "absolute right-2 top-1" : ""
//                     )}
//                     variant="destructive"
//                   >
//                     {item.notifications}
//                   </Badge>
//                 )}

//                 {isActive && !isCollapsed && (
//                   <ChevronRight className="ml-auto h-4 w-4 text-primary-foreground" />
//                 )}
//               </Link>
//             </TooltipTrigger>
//             {isCollapsed && (
//               <TooltipContent side="right">{item.label}</TooltipContent>
//             )}
//           </Tooltip>
//         </TooltipProvider>
//       </li>
//     );
//   };

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <Button
//         id="sidebar-toggle"
//         variant="ghost"
//         size="icon"
//         className="fixed top-4 left-4 z-50 md:hidden"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </Button>

//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         id="sidebar"
//         className={cn(
//           "bg-card border-r border-border flex flex-col h-screen z-50 transition-all duration-300 ease-in-out",
//           isCollapsed ? "w-[70px]" : "w-64",
//           isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
//           "fixed md:sticky top-0 left-0"
//         )}
//       >
//         <div
//           className={cn(
//             "flex items-center p-4 border-b border-border",
//             isCollapsed ? "justify-center" : "justify-between"
//           )}
//         >
//           {!isCollapsed && (
//             <div className="flex items-center gap-2">
//               <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
//                 A
//               </div>
//               <span className="font-semibold text-lg">Admin</span>
//             </div>
//           )}

//           {isCollapsed && (
//             <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
//               A
//             </div>
//           )}

//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             className="hidden md:flex"
//           >
//             <ChevronRight
//               className={cn(
//                 "h-4 w-4 transition-transform",
//                 isCollapsed ? "rotate-180" : ""
//               )}
//             />
//           </Button>
//         </div>

//         <div
//           className={cn(
//             "flex items-center gap-3 p-4 border-b border-border",
//             isCollapsed ? "justify-center" : "justify-between"
//           )}
//         >
//           <div className="flex items-center gap-3">
//             <Avatar>
//               <AvatarImage
//                 src="/placeholder.svg?height=40&width=40"
//                 alt={userName}
//               />
//               <AvatarFallback>{getInitials(userName)}</AvatarFallback>
//             </Avatar>

//             {!isCollapsed && (
//               <div className="flex flex-col">
//                 <span className="font-medium truncate max-w-[140px]">
//                   {userName}
//                 </span>
//                 <span className="text-xs text-muted-foreground">
//                   {userRole}
//                 </span>
//               </div>
//             )}
//           </div>

//           {!isCollapsed && (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <ChevronDown className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuItem>
//                   <Settings className="mr-2 h-4 w-4" />
//                   <span>Settings</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <LogOut className="mr-2 h-4 w-4" />
//                   <span>Logout</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           )}
//         </div>

//         <div className="flex-1 overflow-y-auto py-4 px-3">
//           <nav className="space-y-6">
//             <div>
//               {!isCollapsed && (
//                 <h3 className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
//                   Main
//                 </h3>
//               )}
//               <ul className="space-y-1">{mainLinks.map(renderNavLink)}</ul>
//             </div>

//             <div>
//               {!isCollapsed && (
//                 <h3 className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
//                   Content
//                 </h3>
//               )}
//               <ul className="space-y-1">{contentLinks.map(renderNavLink)}</ul>
//             </div>
//           </nav>
//         </div>

//         <div className="p-4 border-t border-border mt-auto">
//           {!isCollapsed ? (
//             <Button variant="outline" className="w-full" size="sm">
//               <LogOut className="mr-2 h-4 w-4" />
//               <span>Log out</span>
//             </Button>
//           ) : (
//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button variant="outline" size="icon">
//                     <LogOut className="h-4 w-4" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent side="right">Log out</TooltipContent>
//               </Tooltip>
//             </TooltipProvider>
//           )}
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;
