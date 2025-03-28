import { getSheetData } from "../../backend/lib/googleSheets";

export default async function handler(req, res) {
  try {
    const data = await getSheetData();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
