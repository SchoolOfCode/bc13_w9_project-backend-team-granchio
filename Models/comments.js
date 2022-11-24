import query from "../db/index.js";

async function createComment(post) {
  console.log(post);
  const { post_id, comment_content } = post;
  const result = await query(
    `INSERT INTO "comments" (post_id, comment_content)
        VALUES ($1, $2) RETURNING *;`,
    [comment_content, post_id]
  );
  return result.rows;
}

export default createComment;
