"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import AdminNavbar from "@/components/AdminNavbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    setIsAdminLoggedIn(localStorage.getItem("isAdminLoggedIn") === "true");
  }, []);

  const isAdminPage = pathname.startsWith("/admin") && isAdminLoggedIn;

  return (
    <>
      {isAdminPage ? <AdminNavbar /> : <Navbar />}
      <main>{children}</main>
      {!isAdminPage && <Footer />}
    </>
  );
}
