export async function POST(req) {
  try {
    const { username, password } = await req.json();

       // ✅ Debugging Logs
       console.log("Received:", username, password);
   
       // ✅ Check if environment variables exist
       if (!process.env.ADMIN_USER || !process.env.ADMIN_PASS) {
         throw new Error("Admin credentials not set in environment variables");
       }
       console.log("ENV:", process.env.ADMIN_USER, process.env.ADMIN_PASS);
       
    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
      return Response.json({ success: true }, { status: 200 });
    } else {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ error: "Method Not Allowed" }, { status: 405 });
}
