
export async function GET() {
  try {
    const { getSheetData } = await import("../backend/lib/googleSheets");

    if (!getSheetData) {
      throw new Error("Import failed");
    }
   
    // ✅ Fetch data correctly
    const data = await getSheetData(); // You forgot to call the function
    
    console.log("Fetched data:", data);
    
    if (!data || !Array.isArray(data.data)) {
      console.error("Error: data.data is not an array. Received:", typeof data, data);
    } else {
      const filteredData = data.data.filter((row) => row[3] === process.env.ENVIRONMENT);
      console.log("Filtered Data:", filteredData);
      return new Response(JSON.stringify(filteredData), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to fetch data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST() {
  return Response.json({ error: "Method Not Allowed" }, { status: 405 });
}