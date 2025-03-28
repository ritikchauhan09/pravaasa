import { getSheetData } from "../../../../backend/lib/googleSheets";

export async function GET() {
  try {
    const data = await getSheetData();
    if (!data) {
      return new Response(JSON.stringify({ error: "No data found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Fetch Error:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST() {
  return Response.json({ error: "Method Not Allowed" }, { status: 405 });
}