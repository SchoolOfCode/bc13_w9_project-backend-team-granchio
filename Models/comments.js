import query from "../db/index.js";

async function createComment(post) {
  console.log(post);
  const { comment_content, post_id } = post;
  const result = await query(
    `INSERT INTO "posts" (comment_content, post_id)
        VALUES ($1, $2) RETURNING *;`,
    [comment_content, post_id]
  );
  return result.rows;
}

export default createComment;
