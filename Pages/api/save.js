import { google } from "googleapis";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { number } = req.body; // Only taking mobile number
  
  
  if (!number) {
    return res.status(400).json({ error: "Mobile number is required" });
  }

  try {
    // Load credentials
    const credentialsPath = path.join(process.cwd(), "credentials.json");
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const SPREADSHEET_ID = process.env.SPREADSHEET_ID; // Use environment variable
    const SHEET_NAME = "Sheet1"; // Change if needed

    // Step 1: Get the existing data to find the last serial number
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:A`, // Get only Serial Number column
    });

    const rows = response.data.values || [];
    const lastSerialNumber = rows.length + 1; // Auto-increment Serial No.
    console.log(lastSerialNumber,number)

    // Step 2: Append the new Serial Number & Mobile Number
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:B`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[lastSerialNumber, number]], // Auto-increment Serial No.
      },
    });

    return res.status(200).json({ message: "Mobile number saved successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
