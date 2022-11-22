import query from "../db/index.js";

export async function getAllPosts() {
  const result = await query("SELECT * FROM posts;");
  return result.rows;
}
