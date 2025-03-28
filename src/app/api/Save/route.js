import { saveMobileNumber }  from "../backend/lib/googleSheets";
import { withCors } from "../backend/utils/cors"; // Import CORS middleware

// import { saveMobileNumber } from "@/backend/lib/googleSheets"; 
// import { withCors } from "@/backend/utils/cors"; // ✅ Correct Import

async function postHandler(req) {
  try {
    const { number } = await req.json();
    if (!number) {
      return Response.json({ error: "Mobile number is required" }, { status: 400 });
    }

    const result = await saveMobileNumber(number);
    return Response.json(result, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

async function getHandler() {
  return Response.json({ error: "Method Not Allowed" }, { status: 405 });
}

// ✅ Wrap handlers with CORS
export const POST = withCors(postHandler);
export const GET = withCors(getHandler);
