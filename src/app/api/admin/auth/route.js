export async function POST(req) {
  try {
    const { username, password } = await req.json();
console.log(username, password,env.ADMIN_USER,env.ADMIN_PASS)
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
