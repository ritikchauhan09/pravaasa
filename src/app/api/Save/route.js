import { saveMobileNumber }  from "../../../../backend/lib/googleSheets";
import allowCors from "../../../../backend/utils/cors"; // Import CORS middleware

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { number } = req.body;
    if (!number) {
      return res.status(400).json({ error: "Mobile number is required" });
    }

    const result = await saveMobileNumber(number);
    return res.status(200).json(result);
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: error.message });
  }
}

// // Wrap the handler with CORS middleware
export default allowCors(handler);