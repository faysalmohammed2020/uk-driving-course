import Header from "@/app/components/Header";
import UserSidebar from "@/app/components/UserSidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

const AdmindLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const locale = await getLocale();

  if (session?.user?.role === ("admin" as string)) {
    redirect({ href: "/admin", locale });
  }

  return (
    <div className="flex fixed size-full ">
      <UserSidebar />
      <div className="w-full overflow-hidden">
        {/* <Header /> */}
        <main className="h-[calc(100vh-80px)] overflow-y-auto p-2 lg:p-6 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdmindLayout;
