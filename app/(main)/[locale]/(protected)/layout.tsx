

import { auth } from "@/lib/auth";
// import { setRequestLocale } from "next-intl/server";
import { headers } from "next/headers";
import { redirect } from 'next/navigation';


export default async function ProtectedLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;

}) {
    
    const { locale } = await params;
   

    const session = await auth.api.getSession({
        headers: await headers(),
      });
      
    if(!session){
        redirect(`/${locale}/sign-in`);
    }

    return (
       <div>
         { children }
       </div>
    );
}
