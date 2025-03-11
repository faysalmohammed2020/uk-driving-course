import UserTable from "./UsersTable";


const UserPage = async () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <UserTable />
    </div>
  );
};

export default UserPage;
