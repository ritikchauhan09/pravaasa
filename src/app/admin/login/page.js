"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Admin Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input className="border p-2 mb-2" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input className="border p-2 mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-blue-500 text-white px-4 py-2" type="submit">Login</button>
      </form>
    </div>
  );
}
