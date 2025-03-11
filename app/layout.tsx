import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "./components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  appleWebApp: {
    title: "Birds of Eden Licence & Training Center",
  },
  title: {
    default: "Birds of Eden Licence & Training Center",
    template: "%s | Birds of Eden: TFL Seru Certified Aviary Professionals",
  },
  description:
    "Birds of Eden Licence & Training Center provides comprehensive and professional avian care and handling education.",
  openGraph: {
    title: "Birds of Eden: TFL Seru Certified Aviary Professionals",
    description:
      "Birds of Eden Licence & Training Center provides comprehensive and professional avian care and handling education.",
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    siteName: "Birds of Eden Licence & Training Center",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
