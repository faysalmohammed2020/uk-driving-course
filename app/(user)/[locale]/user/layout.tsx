
import UserSidebar from "@/app/components/UserSidebar";
import UserHeader from "@/app/components/UserHeader";

const AdmindLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex fixed size-full ">
      <UserSidebar/>
      <div className="w-full overflow-hidden">
        <UserHeader />
        <main className="h-[calc(100vh-80px)] overflow-y-auto p-2 lg:p-6 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdmindLayout;
