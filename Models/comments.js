import query from "../db/index.js";
import generateRandomDuckName from "./middleware.js";

async function createComment(comment) {
  const { post_id, comment_content } = comment;
  const duck_name = generateRandomDuckName();
  const result = await query(
    `INSERT INTO "comments" (post_id, duck_name, comment_content)
        VALUES ($1, $2, $3) RETURNING *;`,
    [post_id, duck_name, comment_content]
  );
  return result.rows;
}

export default createComment;
