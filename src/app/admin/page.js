"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");

    if (!isLoggedIn) {
      router.push("/admin/login"); // Redirect if not logged in
    } else {
      fetchData();
      setIsLoading(false);
    }
  }, [router]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/fetch");
      const data = await res.json();

      if (data && Array.isArray(data)) {
        setTableData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      {tableData.length > 0 ? (
        <table className="border-collapse border border-gray-500 w-full h-full text-center">
          <thead className="bg-gray-200">
            <tr>
              {tableData[0].map((heading, index) => (
                <th key={index} className="border border-gray-500 px-4 py-2">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-500 px-4 py-2">
                    {cellIndex === 2 ? ( // is_contacted column (index 2)
                      cell === "TRUE" ? (
                        <span className="text-green-500 text-xl">✅</span>
                      ) : (
                        <span className="text-red-500 text-xl">❌</span>
                      )
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
