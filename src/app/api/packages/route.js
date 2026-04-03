import pool from "@/utils/db/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM packages");
    return Response.json(result.rows);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch packages" }, { status: 500 });
  }
}