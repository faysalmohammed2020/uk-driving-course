// app/(main)/layout.tsx

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Toaster } from "../../components/ui/sonner";

export default async function MainLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <div lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        <main className="grow shrink-0 overflow-y-auto">{children}</main>
        {/* Footer */}
        <Toaster />
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
