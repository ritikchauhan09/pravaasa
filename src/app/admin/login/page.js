"use client";

import { useRouter } from "next/navigation";
import AdminLoginForm from "../../../components/AdminLoginForm"; // Correct path

export default function AdminLoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    console.log("✅ Login successful! Redirecting to /admin");
    router.push("/admin"); // Redirect to admin dashboard
  };

  return <AdminLoginForm onLogin={handleLoginSuccess} />;
}
