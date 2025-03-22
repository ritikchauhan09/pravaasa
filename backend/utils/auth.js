export function authenticateAdmin(username, password) {
  const ADMIN_USER = process.env.ADMIN_USER || "admin";
  const ADMIN_PASS = process.env.ADMIN_PASS || "password123";

  return username === ADMIN_USER && password === ADMIN_PASS;
}
