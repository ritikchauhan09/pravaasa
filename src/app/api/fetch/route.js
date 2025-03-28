import { getSheetData } from "../../../../backend/lib/googleSheets";

export async function GET() {
  try {
    const data = await getSheetData();
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST() {
  return Response.json({ error: "Method Not Allowed" }, { status: 405 });
}