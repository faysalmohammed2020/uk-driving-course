import Header from "@/app/components/Header";
import UserSidebar from "@/app/components/UserSidebar";

const AdmindLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex fixed size-full ">
      <UserSidebar />
      <div className="w-full overflow-hidden">
        <Header />
        <main className="h-[calc(100vh-80px)] overflow-y-auto p-2 lg:p-6 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdmindLayout;
