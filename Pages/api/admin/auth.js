export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
