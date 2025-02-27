// app/(main)/layout.tsx
import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

// import "../i18n";
type Props = {
  children: ReactNode ;
  params:{locale:string}

}

export default async function MainLayout({ children ,params:{locale} }: Props) {
  const messages = await getMessages();
  return (
    <div lang={locale}>
      <NextIntlClientProvider messages = {messages}>
      <Navbar />
      <main className="grow shrink-0 overflow-y-auto">{children}</main>
      {/* Footer */}
      <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
