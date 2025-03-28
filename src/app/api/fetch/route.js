import { getSheetData } from "../backend/lib/googleSheets";

// export async function GET() {
//   try {
//     const data = await getSheetData();
//     if (!data) {
//       throw new Error("No data retrieved from Google Sheets");
//     }

//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return new Response(JSON.stringify({ error: error.message || "Failed to fetch data" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

export async function GET() {
  try {
    const response = { data: "Data fetched successfully" };
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to fetch data" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST() {
  return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}


// export async function POST() {
//   return Response.json({ error: "Method Not Allowed" }, { status: 405 });
// }