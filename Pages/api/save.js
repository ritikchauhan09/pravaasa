const express = require("express");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const credentials = JSON.parse(fs.readFileSync("credentials.json")); // Service account key

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = process.env.SPREADSHEET_ID; // Replace with your Sheet ID
const SHEET_NAME = "Sheet1"; // Change if needed

app.post("/save", async (req, res) => {
  const { mobile } = req.body; // Only taking mobile number

  if (!mobile) {
    return res.status(400).json({ error: "Mobile number is required" });
  }

  try {
    // Step 1: Get the existing data to find the last serial number
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:A`, // Get only Serial Number column
    });

    const rows = response.data.values || [];
    const lastSerialNumber = rows.length; // Serial Number based on row count

    // Step 2: Append the new Serial Number & Mobile Number
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:B`, // Serial Number & Mobile Number columns
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[lastSerialNumber, mobile]], // Auto-increment Serial No.
      },
    });

    res.status(200).json({ message: "Mobile number saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
