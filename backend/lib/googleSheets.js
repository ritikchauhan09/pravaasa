import { google } from "googleapis";

// Initialize authentication once
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CRED),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_NAME = "Sheet1";

export async function saveMobileNumber(number) {
  if (!number) {
    throw new Error("Mobile number is required");
  }

  try {
    // Get current row count to determine Serial Number
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:A`,
    });

    const rows = response.data.values || [];
    const lastSerialNumber = rows.length + 1; // Auto-increment Serial No.

    // Append new data
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:C`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[lastSerialNumber, number, false,  process.env.ENVIRONMENT]],
      },
    });

    return { message: "Mobile number saved successfully!", serial: lastSerialNumber };
  } catch (error) {
    console.error("Google Sheets Error:", error);
    throw new Error("Failed to save data. Please try again.");
  }
}

// Fetch Google Sheets Data Function
export async function getSheetData() {
  try {
    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`, // Adjust range as needed
    });

    if (!response.data.values || response.data.values.length === 0) {
      console.warn("Google Sheets returned empty data.");
      return { error: "No data available" }; // Ensure response is always valid JSON
    }

    return { success: true, data: response.data.values };
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return { error: "Failed to retrieve data." }; // Ensure a valid JSON response
  }
}