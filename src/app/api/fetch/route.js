
export async function GET() {
  try {
    const { getSheetData } = await import("../backend/lib/googleSheets");

    if (!getSheetData) {
      throw new Error("Import failed");
    }

    console.log("Debug: Importing getSheetData...");
    console.log("getSheetData:", getSheetData);
    
    // ✅ Fetch data correctly
    const data = await getSheetData(); // You forgot to call the function
    
    if (!data) {
      throw new Error("No data retrieved from Google Sheets");
    }

    return new Response(JSON.stringify(data), {
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