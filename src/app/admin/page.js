"use client";

import { useRouter } from "next/navigation";
import AdminLoginForm from "../../components/AdminLoginForm";

export default function AdminLoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push("/admin"); // Redirect to admin dashboard after login
  };

  return <AdminLoginForm onLogin={handleLoginSuccess} />;
}
