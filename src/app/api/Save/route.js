import { saveMobileNumber }  from "../../../../backend/lib/googleSheets";
import { withCors } from "../../../../backend/utils/cors"; // Import CORS middleware

// import { saveMobileNumber } from "@/backend/lib/googleSheets"; 
// import { withCors } from "@/backend/utils/cors"; // ✅ Correct Import

async function postHandler(req) {
  try {
    const { number } = await req.json();
    if (!number) {
      return new Response(JSON.stringify({ error: "Mobile number is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await saveMobileNumber(number);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

async function getHandler() {
  return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}

// ✅ Wrap handlers with CORS
export const POST = withCors(postHandler);
export const GET = withCors(getHandler);
