import query from "../db/index.js";
import getDuckName from "./middleware.js";

async function createComment(post) {
  console.log(post);
  const { post_id, comment_content } = post;
  let duck_name = getDuckName();
  const result = await query(
    `INSERT INTO "comments" (post_id, duck_name, comment_content)
        VALUES ($1, $2, $3) RETURNING *;`,
    [post_id, duck_name, comment_content]
  );
  return result.rows;
}

export default createComment;
