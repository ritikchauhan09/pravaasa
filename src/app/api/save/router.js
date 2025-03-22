import { appendToSheet } from "@/lib/googleSheets";
import { corsHeaders } from "@/utils/cors";

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

export async function POST(req) {
  try {
    const { number } = await req.json();

    if (!number) {
      return new Response(JSON.stringify({ error: "Mobile number is required" }), {
        status: 400,
        headers: corsHeaders(),
      });
    }

    const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
    const result = await appendToSheet(SPREADSHEET_ID, [number]);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: corsHeaders(),
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: corsHeaders(),
    });
  }
}
