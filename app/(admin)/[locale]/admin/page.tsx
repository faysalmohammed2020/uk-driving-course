import AdminDashboard from "@/app/components/Dashboard";
import React from "react";

const getPost = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogfetch`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  const blogData = await response.json();
  return blogData;
};

const getUser = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  const userData = await response.json();
  return userData;
};

const getActiveUser = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  const activeUser = await response.json();
  return activeUser;
};

const Page = async () => {
  const [blogData, userData, activeUser] = await Promise.all([
    getPost(),
    getUser(),
    getActiveUser(),
  ]);

  return (
    <AdminDashboard
      blogData={blogData}
      userData={userData}
      activeUser={activeUser}
    />
  );
};

export default Page;
