
export async function GET() {
  try {
    const { getSheetData } = await import("../backend/lib/googleSheets");

    if (!getSheetData) {
      throw new Error("Import failed");
    }
   
    // ✅ Fetch data correctly
    const data = await getSheetData(); // You forgot to call the function
    
    if (!data) {
      throw new Error("No data retrieved from Google Sheets");
    }
    console.log(data);
    const filteredData = data.filter((row) => row[3] === process.env.ENVIRONMENT); // Column D is index 3 (0-based index)
    console.log(filteredData);

    return new Response(JSON.stringify(filteredData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
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