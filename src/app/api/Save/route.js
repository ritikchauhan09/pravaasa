import { withCors } from "../backend/utils/cors"; // Import CORS middleware

async function postHandler(req) {
  try {
    // ✅ Use dynamic import inside the function
    const { saveMobileNumber } = await import("../backend/lib/googleSheets");

    if (!saveMobileNumber) {
      throw new Error("Import failed");
    }

    const body = await req.json().catch(() => null);

    if (!body || !body.number) {
      return new Response(JSON.stringify({ error: "Mobile number is required" }), { status: 400 });
    }

    const result = await saveMobileNumber(body.number);
    
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: error.message || "Failed to process request" }), { status: 500 });
  }
}

async function getHandler() {
  return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405 });
}

// ✅ Wrap handlers with CORS
export const POST = withCors(postHandler);
export const GET = withCors(getHandler);

