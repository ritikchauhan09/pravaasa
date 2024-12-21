import connectToDatabase from '../../utils/database';
import User from '../../backend/models/Number';
import cors, { runMiddleware } from '../../utils/cors';
export default async function handler(req, res) {
    if (req.method === "GET") {
      try {
        await connectToDatabase();
        res.status(200).json({ message: "Connected to MongoDB successfully!" });
      } catch (error) {
        res.status(500).json({ error: "Database connection failed!" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }