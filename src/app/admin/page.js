"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminNavbar from "../../components/AdminNavbar";

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");

    if (!isLoggedIn) {
      router.push("/admin/login"); // Redirect if not logged in
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Welcome to Admin Dashboard</h1>
      </div>
    </div>
  );
}
