// app/(main)/layout.tsx
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="grow shrink-0 overflow-y-auto">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
